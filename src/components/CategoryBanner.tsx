import Image from "next/image";
import { CATEGORY_INFO, type CategoryId } from "@/data/categories";

/** Galería editorial que se muestra sobre la grilla al filtrar una categoría. */
export function CategoryBanner({ category }: { category: CategoryId }) {
  const { tagline, description, photos } = CATEGORY_INFO[category];
  const backdrop = photos[photos.length - 1];
  const rest = photos.slice(0, -1);

  return (
    <div className="cat-banner" key={category}>
      <Image className="cat-banner__bg" src={backdrop.src} alt="" fill sizes="100vw" aria-hidden="true" />
      <div className="cat-banner__copy">
        <p className="eyebrow">{tagline}</p>
        <p>{description}</p>
      </div>
      <div className="cat-banner__mosaic">
        {rest.map((photo) => (
          <figure key={photo.src}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 860px) 50vw, 300px" />
          </figure>
        ))}
      </div>
    </div>
  );
}
