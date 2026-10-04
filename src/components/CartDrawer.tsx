"use client";

import Image from "next/image";
import { useEffect } from "react";
import { productById, useStore } from "@/context/StoreContext";
import { FREE_SHIPPING_FROM } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { whatsappOrderUrl } from "@/lib/whatsapp";
import { CartIcon, CloseIcon, LockIcon, WhatsAppIcon } from "./Icons";

export function CartDrawer() {
  const { cart, cartTotal, cartOpen, setCartOpen, setQty, removeFromCart } = useStore();

  useEffect(() => {
    if (!cartOpen) return;
    document.body.classList.add("locked");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setCartOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [cartOpen, setCartOpen]);

  const missing = FREE_SHIPPING_FROM - cartTotal;

  return (
    <>
      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)} />}
      <aside className={cartOpen ? "drawer is-open" : "drawer"} aria-label="Carrito de compras" aria-hidden={!cartOpen} inert={!cartOpen}>
        <div className="drawer__head">
          <h3>Tu carrito</h3>
          <button className="icon-btn" aria-label="Cerrar" onClick={() => setCartOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className="drawer__body">
          {cart.length === 0 ? (
            <div className="drawer__empty">
              <CartIcon />
              <p>Tu carrito está vacío.</p>
              <a href="#tienda" className="btn btn--outline" onClick={() => setCartOpen(false)}>
                Ver productos
              </a>
            </div>
          ) : (
            cart.map(({ id, qty }) => {
              const p = productById(id);
              if (!p) return null;
              return (
                <div className="line" key={id}>
                  <Image src={p.image} alt={p.name} width={72} height={72} />
                  <div>
                    <div className="line__name">{p.name}</div>
                    <div className="line__price">{formatPrice(p.price * qty)}</div>
                    <div className="qty">
                      <button aria-label="Restar" onClick={() => setQty(id, qty - 1)}>−</button>
                      <span>{qty}</span>
                      <button aria-label="Sumar" onClick={() => setQty(id, qty + 1)}>+</button>
                    </div>
                  </div>
                  <button className="line__remove" aria-label={`Eliminar ${p.name}`} onClick={() => removeFromCart(id)}>
                    <CloseIcon />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="drawer__foot">
            <div className="ship-progress">
              {missing > 0 ? (
                <>
                  Te faltan <strong>{formatPrice(missing)}</strong> para el envío discreto gratis
                </>
              ) : (
                <strong>¡Tienes envío discreto gratis! 💖</strong>
              )}
              <div className="bar">
                <i style={{ width: `${Math.min(100, (cartTotal / FREE_SHIPPING_FROM) * 100)}%` }} />
              </div>
            </div>
            <div className="drawer__total">
              <span>Subtotal</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>
            <a
              className="btn btn--primary btn--block"
              href={whatsappOrderUrl(
                cart.flatMap(({ id, qty }) => {
                  const product = productById(id);
                  return product ? [{ product, qty }] : [];
                }),
                cartTotal,
                missing <= 0,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Finalizar compra por WhatsApp
            </a>
            <p className="drawer__note">
              <LockIcon /> Empaque discreto · Pago seguro
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
