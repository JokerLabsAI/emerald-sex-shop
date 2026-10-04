"use client";

import type { ReactNode } from "react";
import { useStore } from "@/context/StoreContext";
import type { Filter } from "@/data/products";

/** Enlace que aplica un filtro de categoría y lleva a la tienda. */
export function FilterLink({
  filter,
  className,
  onNavigate,
  children,
}: {
  filter: Filter;
  className?: string;
  onNavigate?: () => void;
  children: ReactNode;
}) {
  const { setFilter, setQuery } = useStore();
  return (
    <a
      href="#tienda"
      className={className}
      onClick={() => {
        setFilter(filter);
        setQuery("");
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}
