#!/usr/bin/env python3
"""
Download product images from Imaginus "New" collection.

Uses Shopify's public products.json API (same data as the collection page):
https://imaginus.ca/collections/new-1
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

import requests

COLLECTION_PAGE = "https://imaginus.ca/collections/new-1"
PRODUCTS_API = "https://imaginus.ca/collections/new-1/products.json"
OUTPUT_DIR = Path(__file__).resolve().parent
PAGE_LIMIT = 250

SESSION = requests.Session()
SESSION.headers.update(
    {
        "User-Agent": "PosterizedImageDownloader/1.0 (local; educational)",
        "Accept": "application/json",
    }
)


def fetch_all_products() -> list[dict]:
    products: list[dict] = []
    page = 1

    while True:
        response = SESSION.get(
            PRODUCTS_API,
            params={"limit": PAGE_LIMIT, "page": page},
            timeout=60,
        )
        response.raise_for_status()
        batch = response.json().get("products", [])
        if not batch:
            break
        products.extend(batch)
        if len(batch) < PAGE_LIMIT:
            break
        page += 1

    return products


def extension_from_url(url: str) -> str:
    path = urlparse(url).path
    suffix = Path(path).suffix.lower()
    if suffix in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        return suffix
    return ".jpg"


def safe_filename(handle: str, product_id: int, ext: str) -> str:
    base = re.sub(r"[^\w\-]+", "-", handle).strip("-").lower()
    if not base:
        base = f"product-{product_id}"
    return f"{base}{ext}"


def pick_images(product: dict, all_images: bool) -> list[dict]:
    images = product.get("images") or []
    if not images:
        return []
    ordered = sorted(images, key=lambda img: img.get("position", 0))
    return ordered if all_images else [ordered[0]]


def download_file(url: str, dest: Path) -> None:
    response = SESSION.get(url, stream=True, timeout=120)
    response.raise_for_status()
    dest.write_bytes(response.content)


def main() -> int:
    parser = argparse.ArgumentParser(
        description=f"Download poster images from {COLLECTION_PAGE}"
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=OUTPUT_DIR,
        help="Output directory (default: download/)",
    )
    parser.add_argument(
        "--all-images",
        action="store_true",
        help="Download every image per product, not only the featured one",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Max products to process (0 = all)",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=0.25,
        help="Seconds between downloads (be polite to the server)",
    )
    args = parser.parse_args()

    out_dir = args.output.resolve()
    out_dir.mkdir(parents=True, exist_ok=True)

    print(f"Fetching product list from {PRODUCTS_API} ...")
    products = fetch_all_products()
    if args.limit > 0:
        products = products[: args.limit]
    print(f"Found {len(products)} products.")

    ok = 0
    skipped = 0
    failed = 0

    for i, product in enumerate(products, start=1):
        title = product.get("title", "Unknown")
        handle = product.get("handle", "")
        product_id = product.get("id", 0)
        images = pick_images(product, args.all_images)

        if not images:
            print(f"[{i}/{len(products)}] SKIP (no image): {title}")
            skipped += 1
            continue

        for img_index, image in enumerate(images):
            url = image.get("src")
            if not url:
                skipped += 1
                continue

            ext = extension_from_url(url)
            if args.all_images and len(images) > 1:
                stem = safe_filename(handle, product_id, "").rstrip(".")
                filename = f"{stem}-{img_index + 1}{ext}"
            else:
                filename = safe_filename(handle, product_id, ext)

            dest = out_dir / filename
            if dest.exists():
                print(f"[{i}/{len(products)}] EXISTS: {filename}")
                ok += 1
                continue

            try:
                print(f"[{i}/{len(products)}] GET {filename}")
                download_file(url, dest)
                ok += 1
                if args.delay > 0:
                    time.sleep(args.delay)
            except requests.RequestException as exc:
                print(f"[{i}/{len(products)}] FAIL {filename}: {exc}", file=sys.stderr)
                failed += 1

    print(f"\nDone. Downloaded/skipped existing: {ok}, no image: {skipped}, failed: {failed}")
    print(f"Files saved to: {out_dir}")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
