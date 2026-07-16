import { labelFromFilename } from "@/lib/labelFromFilename";

export type PosterPreset = {
  id: string;
  label: string;
  image: string;
  rotate?: number;
};

const POSTER_DIR = "/posters";

/** Filenames in public/posters/. Labels derived via labelFromFilename(). */
const POSTER_FILES = [
  "billie-eilish-hit-me-hard-and-soft-music-poster-24-x-36-inches.jpg",
  "chappell-roan-kiss-music-poster-24-x-36-inches.jpg",
  "deadpool-pool-fiction-movie-poster-24-x-36-inches.jpg",
  "ernst-haeckel-mosses-fine-art-poster-24-x-36-inches.jpg",
  "euphoria-fine-art-poster-24-x-36-inches.jpg",
  "formula-1-monaco-sports-poster-24-x-36-inches.jpg",
  "frank-ocean-blond-be-quiet-music-poster-24-x-36-inches.jpg",
  "future-metro-boomin-we-still-dont-trust-you-music-poster-24-x-36-inches.jpg",
  "kuniyoshi-waterfall-japanese-fine-art-print-60-x-80-cm.jpg",
  "one-piece-luffy-gear-5-wanted-poster-13-5-x-20-inches.jpg",
  "pink-floyd-wish-you-were-here-music-poster-24-x-36-inches.jpg",
  "rhodes-magical-garden-poster-30-x-40-cm.png",
  "soccer-legends-soccer-poster-24-x-36-inches.jpg",
  "stranger-things-tv-poster-30-x-40-cm-1.png",
  "studio-ghibli-spirited-away-flight-anime-poster-24-x-36-inches.jpg",
  "studio-ghibli-spirited-away-lamp-post-anime-poster-24-x-36-inches.jpg",
  "the-batman-movie-poster-30-x-40-cm.png",
  "the-batman-red-haze-movie-poster-30-x-40-cm.png",
  "travis-scott-utopia-music-poster-24-x-36-inches.jpg",
  "tyler-the-creator-chromakopia-music-poster-24-x-36-inches.jpg",
] as const;

function posterFromFile(filename: string, id: string): PosterPreset {
  return {
    id,
    label: labelFromFilename(filename),
    image: `${POSTER_DIR}/${filename}`,
  };
}

export const posterPresets: PosterPreset[] = POSTER_FILES.map((file, index) =>
  posterFromFile(file, String(index + 1).padStart(2, "0"))
);

export const heroStackPresets: PosterPreset[] = [
  { ...posterPresets[0], rotate: -8 },
  { ...posterPresets[9], rotate: 6 },
  { ...posterPresets[14], rotate: -4 },
  { ...posterPresets[16], rotate: 10 },
];

export const CONTACT_EMAIL = "collegebanners@gmail.com";
