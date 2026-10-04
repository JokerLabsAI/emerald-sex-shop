const cop = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });

/** $49.990 */
export const formatPrice = (value: number) => `$${cop.format(value)}`;

export const stars = (rating: number) => {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
};
