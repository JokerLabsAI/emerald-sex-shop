"use client";

import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { CATEGORIES } from "@/data/products";
import { FilterLink } from "./FilterLink";
import { CartIcon, HeartIcon, MenuIcon, SearchIcon } from "./Icons";
import { Logo } from "./Logo";

const NAV = CATEGORIES.filter((c) => c.id !== "accesorios");

export function Header() {
  const { cartCount, favs, setCartOpen, query, setQuery, setFilter } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <p>
          Envío <strong>discreto</strong> gratis en compras desde $150.000 · Empaque sin marcas
        </p>
      </div>

      <header className="header" id="top">
        <div className="container header__inner">
          <button
            className="icon-btn menu-toggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon />
          </button>

          <a href="#top" aria-label="Esmerad Sex Shop — inicio">
            <Logo />
          </a>

          <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Principal">
            <a href="#top" onClick={() => setMenuOpen(false)}>Inicio</a>
            {NAV.map((c) => (
              <FilterLink key={c.id} filter={c.id} onNavigate={() => setMenuOpen(false)}>
                {c.label}
              </FilterLink>
            ))}
          </nav>

          <div className="header__actions">
            <button className="icon-btn" aria-label="Buscar" aria-expanded={searchOpen} onClick={() => setSearchOpen((o) => !o)}>
              <SearchIcon />
            </button>
            <a href="#tienda" className="icon-btn" aria-label="Favoritos" onClick={() => setFilter("favoritos")}>
              <HeartIcon />
              {favs.length > 0 && <span className="badge-count">{favs.length}</span>}
            </a>
            <button className="icon-btn" aria-label="Carrito" onClick={() => setCartOpen(true)}>
              <CartIcon />
              {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="searchbar">
            <div className="container">
              <input
                type="search"
                autoFocus
                value={query}
                placeholder="Busca vibradores, lubricantes, juegos…"
                aria-label="Buscar productos"
                onChange={(e) => {
                  setQuery(e.target.value);
                  setFilter("todos");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") document.getElementById("tienda")?.scrollIntoView();
                }}
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
