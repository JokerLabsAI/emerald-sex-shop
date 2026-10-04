import type { Product } from "@/data/products";
import { formatPrice } from "./format";

export const WHATSAPP_NUMBER = "573219951491";

type OrderLine = { product: Product; qty: number };

/** Enlace de WhatsApp con el resumen del pedido ya escrito. */
export function whatsappOrderUrl(lines: OrderLine[], total: number, shippingFree: boolean) {
  const items = lines.map(({ product, qty }) => `• ${qty} x ${product.name} — ${formatPrice(product.price * qty)}`);
  const message = [
    "¡Hola Esmerad! 💖 Quiero finalizar mi compra:",
    "",
    ...items,
    "",
    `Subtotal: ${formatPrice(total)}`,
    shippingFree ? "Envío discreto: gratis" : "Envío discreto: por confirmar",
    "",
    "¿Me ayudan con el pago y el envío?",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
