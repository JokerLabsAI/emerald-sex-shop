"use client";

import { useStore } from "@/context/StoreContext";

export function Toast() {
  const { toast } = useStore();
  return (
    <div className={toast ? "toast is-show" : "toast"} role="status" aria-live="polite">
      {toast}
    </div>
  );
}
