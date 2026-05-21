export type PosterPreset = {
  id: string;
  label: string;
  image: string;
  rotate?: number;
};

const POSTER_DIR = "/posters";

function poster(filename: string, label: string, id: string): PosterPreset {
  return {
    id,
    label,
    image: `${POSTER_DIR}/${filename}`,
  };
}

export const posterPresets: PosterPreset[] = [
  poster(
    "birmingham-museums-trust-5ruS8plfbvM-unsplash.jpg",
    "Birmingham Museums",
    "01"
  ),
  poster(
    "birmingham-museums-trust-9pOXS0ZGPDM-unsplash.jpg",
    "Classic Collection",
    "02"
  ),
  poster("chris-lee-70l1tDAI6rM-unsplash.jpg", "Street Style", "03"),
  poster("europeana-5TK1F5VfdIk-unsplash.jpg", "European Archive", "04"),
  poster(
    "fons-heijnsbroek--MeMw1Q_ZTs-unsplash.jpg",
    "Campus Pick",
    "05"
  ),
  poster(
    "fons-heijnsbroek-AddxUGgVonQ-unsplash.jpg",
    "Wall Favorite",
    "06"
  ),
  poster(
    "fons-heijnsbroek-e_95AkA4A4A-unsplash.jpg",
    "Popup Bestseller",
    "07"
  ),
  poster(
    "fons-heijnsbroek-Hvo5qqStZFI-unsplash.jpg",
    "Dorm Room Classic",
    "08"
  ),
  poster(
    "fons-heijnsbroek-WwZOHg6NCQ0-unsplash.jpg",
    "Statement Print",
    "09"
  ),
  poster(
    "library-of-congress-ULl31hxiehE-unsplash.jpg",
    "Library of Congress",
    "10"
  ),
  poster("tamara-menzi-n-vnWQmmVoY-unsplash.jpg", "Graphic Print", "11"),
];

export const heroStackPresets: PosterPreset[] = [
  { ...posterPresets[0], rotate: -8 },
  { ...posterPresets[2], rotate: 6 },
  { ...posterPresets[6], rotate: -4 },
  { ...posterPresets[9], rotate: 10 },
];

export const CONTACT_EMAIL = "hello@posterized.com";
