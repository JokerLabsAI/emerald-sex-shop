import Image from "next/image";
import { ArrowIcon, LockIcon, ShieldIcon, StarIcon, TruckIcon } from "./Icons";

const TRUST = [
  { Icon: TruckIcon, title: "Envíos discretos", text: "Empaque neutro, sin logos" },
  { Icon: ShieldIcon, title: "Compra segura", text: "Pagos cifrados" },
  { Icon: LockIcon, title: "Tu privacidad primero", text: "Facturación discreta" },
  { Icon: StarIcon, title: "Marcas originales", text: "Garantía oficial" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__silk" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Placer · Bienestar · Libertad · Sin tabúes</p>
          <h1>
            Descubre tu
            <br />
            lado <em>más libre</em>
          </h1>
          <p className="hero__lead">
            Explora un mundo de placer, bienestar y conexión íntima. Productos seleccionados, asesoría sin juicios y
            entregas totalmente discretas.
          </p>
          <div className="hero__ctas">
            <a href="#tienda" className="btn btn--primary">
              Explorar ahora <ArrowIcon />
            </a>
            <a href="#categorias" className="btn btn--outline">
              Ver categorías
            </a>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <svg className="neon-heart" viewBox="0 0 200 180">
            <path d="M100 165 C 40 120, 10 90, 10 55 A 45 45 0 0 1 100 35 A 45 45 0 0 1 190 55 C 190 90, 160 120, 100 165 Z" />
          </svg>
          <div className="hero__product">
            <Image src="/products/mini-wand-camtoyz.webp" alt="" fill priority sizes="(max-width: 860px) 200px, 270px" />
          </div>
          <span className="hero__script">
            Placer
            <br />
            Bienestar
            <br />
            Sin Tabúes
          </span>
          <span className="sparkle s1" />
          <span className="sparkle s2" />
          <span className="sparkle s3" />
        </div>
      </div>

      <ul className="container trust">
        {TRUST.map(({ Icon, title, text }) => (
          <li key={title}>
            <Icon />
            <span>
              <strong>{title}</strong>
              {text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
