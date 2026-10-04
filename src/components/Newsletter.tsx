"use client";

import { useState } from "react";

export function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <form
          className="newsletter"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            e.currentTarget.reset();
          }}
        >
          <div>
            <h2>
              Únete al <em>club Esmerad</em>
            </h2>
            <p>Recibe lanzamientos, guías de bienestar y ofertas privadas. 10% en tu primera compra.</p>
          </div>
          <div className="newsletter__field">
            <label className="sr-only" htmlFor="nlEmail">
              Correo electrónico
            </label>
            <input id="nlEmail" type="email" required placeholder="tu@correo.com" />
            <button className="btn btn--primary" type="submit">
              Suscribirme
            </button>
          </div>
          {sent && <p className="newsletter__ok">¡Listo! Revisa tu correo para tu código de bienvenida.</p>}
        </form>
      </div>
    </section>
  );
}
