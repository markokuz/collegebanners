import type { PosterPreset } from "@/lib/posters";
import Image from "next/image";

type PosterMediaProps = {
  poster: PosterPreset;
  priority?: boolean;
  sizes?: string;
};

export function PosterMedia({
  poster,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: PosterMediaProps) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-bg">
      <Image
        src={poster.image}
        alt={poster.label}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
