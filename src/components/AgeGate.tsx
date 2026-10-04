"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const KEY = "esmerad:adult";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let confirmed = false;
    try {
      confirmed = localStorage.getItem(KEY) === "1";
    } catch {}
    setOpen(!confirmed);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("locked", open);
  }, [open]);

  if (!open) return null;

  const confirm = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    setOpen(false);
  };

  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="ageTitle">
      <div className="age-card">
        <Logo size="lg" />
        <h2 id="ageTitle">Este sitio es solo para mayores de 18 años</h2>
        <p>Contiene productos para adultos. Al ingresar confirmas que eres mayor de edad según la ley de tu país.</p>
        <div className="age-actions">
          <button className="btn btn--primary" onClick={confirm} autoFocus>
            Soy mayor de 18
          </button>
          <a className="btn btn--outline" href="https://www.google.com">
            Salir
          </a>
        </div>
      </div>
    </div>
  );
}
