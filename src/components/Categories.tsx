import { CATEGORIES } from "@/data/products";
import { FilterLink } from "./FilterLink";
import { CuffsIcon, GiftIcon, HeartIcon, LingerieIcon, LotusIcon } from "./Icons";

const ICONS = {
  juguetes: HeartIcon,
  lenceria: LingerieIcon,
  bienestar: LotusIcon,
  accesorios: CuffsIcon,
  ofertas: GiftIcon,
};

export function Categories() {
  return (
    <section className="section" id="categorias">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Explora</p>
          <h2>Categorías</h2>
        </div>
        <div className="cats">
          {CATEGORIES.map(({ id, label }) => {
            const Icon = ICONS[id];
            return (
              <FilterLink key={id} filter={id} className="cat">
                <span className="cat__ring">
                  <Icon />
                </span>
                {label}
              </FilterLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
