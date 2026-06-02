# Imaginus image downloader

Downloads poster images from the [Imaginus "New" collection](https://imaginus.ca/collections/new-1) using Shopify's public `products.json` API.

## Setup

```bash
cd download
pip install -r requirements.txt
```

## Run

Download all 183 product images (featured image per product):

```bash
python download_imaginus.py
```

Test with 5 products:

```bash
python download_imaginus.py --limit 5
```

Download every image variant per product:

```bash
python download_imaginus.py --all-images
```

Files are saved in this `download/` folder using each product's URL handle as the filename.

**Note:** Only download images you have the right to use. These are Imaginus's product photos.
