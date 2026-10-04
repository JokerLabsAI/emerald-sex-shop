"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { PRODUCTS, type Filter, type Product } from "@/data/products";

type CartLine = { id: string; qty: number };

type StoreValue = {
  cart: CartLine[];
  cartCount: number;
  cartTotal: number;
  addToCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  favs: string[];
  toggleFav: (id: string) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  query: string;
  setQuery: (query: string) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  activeProduct: Product | null;
  openProduct: (id: string | null) => void;
  toast: string;
  showToast: (message: string) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

const STORAGE_KEY = "esmerad:store";

export const productById = (id: string) => PRODUCTS.find((p) => p.id === id);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [favs, setFavs] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [filter, setFilter] = useState<Filter>("todos");
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Carrito y favoritos persisten en el navegador del visitante.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
      if (saved) {
        setCart(saved.cart ?? []);
        setFavs(saved.favs ?? []);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, favs }));
    } catch {}
  }, [cart, favs, hydrated]);

  const showToast = useCallback((message: string) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2400);
  }, []);

  const addToCart = useCallback(
    (id: string) => {
      setCart((lines) => {
        const line = lines.find((l) => l.id === id);
        return line ? lines.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)) : [...lines, { id, qty: 1 }];
      });
      showToast(`Añadido al carrito: ${productById(id)?.name}`);
    },
    [showToast],
  );

  const setQty = useCallback((id: string, qty: number) => {
    setCart((lines) => (qty <= 0 ? lines.filter((l) => l.id !== id) : lines.map((l) => (l.id === id ? { ...l, qty } : l))));
  }, []);

  const removeFromCart = useCallback((id: string) => setCart((lines) => lines.filter((l) => l.id !== id)), []);

  const toggleFav = useCallback(
    (id: string) => {
      const on = !favs.includes(id);
      setFavs((list) => (on ? [...list, id] : list.filter((f) => f !== id)));
      showToast(on ? "Guardado en favoritos" : "Eliminado de favoritos");
    },
    [favs, showToast],
  );

  const value = useMemo<StoreValue>(() => {
    const cartCount = cart.reduce((n, l) => n + l.qty, 0);
    const cartTotal = cart.reduce((sum, l) => sum + (productById(l.id)?.price ?? 0) * l.qty, 0);
    return {
      cart,
      cartCount,
      cartTotal,
      addToCart,
      setQty,
      removeFromCart,
      favs,
      toggleFav,
      filter,
      setFilter,
      query,
      setQuery,
      cartOpen,
      setCartOpen,
      activeProduct: activeId ? productById(activeId) ?? null : null,
      openProduct: setActiveId,
      toast,
      showToast,
    };
  }, [cart, favs, filter, query, cartOpen, activeId, toast, addToCart, setQty, removeFromCart, toggleFav, showToast]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore debe usarse dentro de <StoreProvider>");
  return ctx;
}
