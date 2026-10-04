import Image from "next/image";
import { CATEGORY_INFO } from "@/data/categories";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { FilterLink } from "./FilterLink";
import { ArrowIcon, CuffsIcon, GiftIcon, HeartIcon, LingerieIcon, LotusIcon } from "./Icons";

const ICONS = {
  juguetes: HeartIcon,
  lenceria: LingerieIcon,
  bienestar: LotusIcon,
  accesorios: CuffsIcon,
  ofertas: GiftIcon,
};

const countFor = (id: (typeof CATEGORIES)[number]["id"]) =>
  PRODUCTS.filter((p) => (id === "ofertas" ? p.oldPrice : p.category === id)).length;

export function Categories() {
  return (
    <section className="section" id="categorias">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Explora</p>
          <h2>Categorías</h2>
        </div>
        <div className="cats">
          {CATEGORIES.map(({ id, label }, i) => {
            const Icon = ICONS[id];
            const info = CATEGORY_INFO[id];
            const count = countFor(id);
            return (
              <FilterLink key={id} filter={id} className={`cat cat--${id}`}>
                <span className="cat__slides" aria-hidden="true">
                  {info.photos.map((photo, n) => (
                    <Image
                      key={photo.src}
                      src={photo.src}
                      alt=""
                      fill
                      sizes={i === 0 ? "(max-width: 860px) 100vw, 480px" : "(max-width: 860px) 50vw, 360px"}
                      style={{ animationDelay: `${n * 4 + i * 0.8}s` }}
                    />
                  ))}
                </span>
                <span className="cat__content">
                  <span className="cat__ring">
                    <Icon />
                  </span>
                  <span className="cat__label">{label}</span>
                  <span className="cat__tagline">{info.tagline}</span>
                  <span className="cat__meta">
                    {count} {count === 1 ? "producto" : "productos"} <ArrowIcon />
                  </span>
                </span>
              </FilterLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
