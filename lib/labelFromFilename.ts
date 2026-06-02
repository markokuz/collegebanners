export function labelFromFilename(filename: string): string {
  const stem = filename.replace(/\.(jpe?g|png|webp)$/i, "");
  const parts = stem.split("-").filter(Boolean).slice(0, 2);

  return parts
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
