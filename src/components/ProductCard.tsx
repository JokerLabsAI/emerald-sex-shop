"use client";

import Image from "next/image";
import { useStore } from "@/context/StoreContext";
import type { Product } from "@/data/products";
import { formatPrice, stars } from "@/lib/format";
import { CartIcon, HeartIcon } from "./Icons";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart, favs, toggleFav, openProduct } = useStore();
  const fav = favs.includes(product.id);

  return (
    <article className="card" style={{ animationDelay: `${index * 40}ms` }}>
      <div className="card__media" onClick={() => openProduct(product.id)}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 280px" />
        <button
          className={fav ? "card__fav is-on" : "card__fav"}
          aria-label={fav ? "Quitar de favoritos" : "Añadir a favoritos"}
          aria-pressed={fav}
          onClick={(e) => {
            e.stopPropagation();
            toggleFav(product.id);
          }}
        >
          <HeartIcon />
        </button>
        {product.tag && <span className={product.tag.kind ? `tag tag--${product.tag.kind}` : "tag"}>{product.tag.label}</span>}
      </div>

      <div className="card__body">
        <span className="card__brand">{product.brand}</span>
        <h3 className="card__title" onClick={() => openProduct(product.id)}>
          {product.name}
        </h3>
        <div className="stars">
          <span className="stars__icons" aria-label={`${product.rating} de 5`}>
            {stars(product.rating)}
          </span>
          ({product.reviews})
        </div>
        <div className="price">
          <strong>{formatPrice(product.price)}</strong>
          {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
        </div>
        <button className="btn btn--primary" onClick={() => addToCart(product.id)}>
          <CartIcon /> Añadir al carrito
        </button>
      </div>
    </article>
  );
}
