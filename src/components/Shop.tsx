"use client";

import { useMemo, useState } from "react";
import { useStore } from "@/context/StoreContext";
import { CATEGORIES, FILTER_TITLES, PRODUCTS, type Filter } from "@/data/products";
import { CATEGORY_INFO } from "@/data/categories";
import { CategoryBanner } from "./CategoryBanner";
import { ProductCard } from "./ProductCard";

type Sort = "destacados" | "precio-asc" | "precio-desc" | "rating";

const CHIPS: { id: Filter; label: string }[] = [{ id: "todos", label: "Todos" }, ...CATEGORIES];

const normalize = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export function Shop() {
  const { filter, setFilter, query, favs } = useStore();
  const [sort, setSort] = useState<Sort>("destacados");

  const products = useMemo(() => {
    const q = normalize(query.trim());
    const list = PRODUCTS.filter((p) => {
      if (filter === "ofertas" && !p.oldPrice) return false;
      if (filter === "favoritos" && !favs.includes(p.id)) return false;
      if (filter !== "todos" && filter !== "ofertas" && filter !== "favoritos" && p.category !== filter) return false;
      return !q || normalize(`${p.name} ${p.brand} ${p.category}`).includes(q);
    });
    if (sort === "precio-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "precio-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [filter, query, sort, favs]);

  const title = query.trim() ? `Resultados para “${query.trim()}”` : FILTER_TITLES[filter];

  return (
    <section className="section" id="tienda">
      <div className="container">
        <div className="section__head section__head--row">
          <div>
            <p className="eyebrow">Tienda</p>
            <h2>{title}</h2>
          </div>
          <div className="shop-tools">
            <div className="chips" role="group" aria-label="Filtrar por categoría">
              {CHIPS.map((c) => (
                <button
                  key={c.id}
                  className={filter === c.id ? "chip is-active" : "chip"}
                  aria-pressed={filter === c.id}
                  onClick={() => setFilter(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <label className="select">
              <span className="sr-only">Ordenar</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                <option value="destacados">Destacados</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
                <option value="rating">Mejor valorados</option>
              </select>
            </label>
          </div>
        </div>

        {filter in CATEGORY_INFO && !query.trim() && <CategoryBanner category={filter as keyof typeof CATEGORY_INFO} />}

        {products.length > 0 ? (
          <div className="grid" aria-live="polite" key={`${filter}-${sort}`}>
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <p className="empty">
            {filter === "favoritos"
              ? "Aún no tienes favoritos. Toca el corazón de un producto para guardarlo."
              : "No encontramos productos con ese criterio. Prueba otra búsqueda."}
          </p>
        )}
      </div>
    </section>
  );
}
