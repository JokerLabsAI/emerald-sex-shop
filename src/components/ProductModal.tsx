"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useStore } from "@/context/StoreContext";
import { formatPrice, stars } from "@/lib/format";
import { CartIcon, CloseIcon, HeartIcon } from "./Icons";

export function ProductModal() {
  const { activeProduct: p, openProduct, addToCart, favs, toggleFav, setCartOpen } = useStore();

  useEffect(() => {
    if (!p) return;
    document.body.classList.add("locked");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && openProduct(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [p, openProduct]);

  if (!p) return null;
  const fav = favs.includes(p.id);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={p.name} onClick={() => openProduct(null)}>
      <div className="modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn" aria-label="Cerrar" onClick={() => openProduct(null)}>
          <CloseIcon />
        </button>
        <div className="modal__img">
          <Image src={p.image} alt={p.name} width={420} height={420} />
        </div>
        <div className="modal__info">
          <span className="card__brand">{p.brand}</span>
          <h3>{p.name}</h3>
          <div className="stars">
            <span className="stars__icons">{stars(p.rating)}</span> {p.rating} · {p.reviews} reseñas
          </div>
          <div className="price">
            <strong>{formatPrice(p.price)}</strong>
            {p.oldPrice && <s>{formatPrice(p.oldPrice)}</s>}
          </div>
          <p>{p.description}</p>
          <ul>
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="modal__actions">
            <button className="btn btn--primary" onClick={() => addToCart(p.id)}>
              <CartIcon /> Añadir al carrito
            </button>
            <button
              className="btn btn--champagne"
              onClick={() => {
                addToCart(p.id);
                openProduct(null);
                setCartOpen(true);
              }}
            >
              Comprar ahora
            </button>
            <button className="btn btn--outline" onClick={() => toggleFav(p.id)}>
              <HeartIcon /> {fav ? "En favoritos" : "Guardar en favoritos"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
