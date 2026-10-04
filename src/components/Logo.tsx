export function Logo({ size }: { size?: "lg" }) {
  return (
    <span className={size === "lg" ? "logo logo--lg" : "logo"}>
      <span className="logo__word">Esmerad</span>
      <span className="logo__sub">Sex Shop</span>
    </span>
  );
}
