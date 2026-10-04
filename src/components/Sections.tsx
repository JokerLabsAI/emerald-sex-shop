import Image from "next/image";
import { CATEGORIES } from "@/data/products";
import { FilterLink } from "./FilterLink";
import { DiamondIcon, FlameIcon, HeartIcon, MaskIcon } from "./Icons";
import { Logo } from "./Logo";

export function Promo() {
  return (
    <section className="section">
      <div className="container">
        <div className="promo">
          <div className="promo__copy">
            <p className="eyebrow">Para dos</p>
            <h2>
              Noches <em>inolvidables</em>, juntos
            </h2>
            <p>
              Arma tu kit para parejas con lubricante, un juego y un juguete y obtén <strong>15% de descuento</strong> con
              el código <span className="code">ESMERAD15</span>.
            </p>
            <FilterLink filter="ofertas" className="btn btn--champagne">
              Comprar ahora
            </FilterLink>
          </div>
          <div className="promo__imgs" aria-hidden="true">
            {["dados-penitencia", "elixir-multi-o", "anillo-doku"].map((file) => (
              <Image key={file} src={`/products/${file}.webp`} alt="" width={260} height={260} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  { Icon: HeartIcon, title: "Sensual", text: "Productos pensados para despertar los sentidos." },
  { Icon: DiamondIcon, title: "Premium", text: "Marcas originales y materiales seguros para el cuerpo." },
  { Icon: MaskIcon, title: "Discreto", text: "Empaque neutro y facturación con nombre genérico." },
  { Icon: FlameIcon, title: "Atrevido", text: "Explora a tu ritmo, con información clara y honesta." },
];

export function Values() {
  return (
    <section className="section values">
      <div className="container">
        <div className="section__head section__head--center">
          <p className="eyebrow">Nuestra esencia</p>
          <h2>
            Un espacio para ti, <em>sin tabúes</em>
          </h2>
        </div>
        <div className="values__grid">
          {VALUES.map(({ Icon, title, text }) => (
            <div className="value" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#top" className="footer__logo">
            <Logo />
          </a>
          <p className="footer__tag">Placer · Bienestar · Libertad · Sin tabúes</p>
        </div>
        <div>
          <h4>Tienda</h4>
          {CATEGORIES.filter((c) => c.id !== "ofertas").map((c) => (
            <FilterLink key={c.id} filter={c.id}>
              {c.label}
            </FilterLink>
          ))}
        </div>
        <div>
          <h4>Ayuda</h4>
          <a href="#">Envíos y entregas</a>
          <a href="#">Cambios y garantías</a>
          <a href="#">Guía de cuidado</a>
          <a href="#">Preguntas frecuentes</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Venta solo a mayores de 18</a>
        </div>
      </div>
      <p className="container footer__legal">
        © {new Date().getFullYear()} Esmerad Sex Shop. Todos los derechos reservados. · Fotografías de categorías:{" "}
        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>
      </p>
    </footer>
  );
}
