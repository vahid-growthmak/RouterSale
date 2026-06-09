'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { USD_TO_CAD } from '@/lib/products';

export type Currency = 'USD' | 'CAD';

export interface CartLine {
  id: string;
  sku: string;
  name: string;
  image: string;
  price: number; // USD base
  qty: number;
}

interface StoreState {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  fmt: (usd: number) => string;
  lines: CartLine[];
  count: number;
  subtotal: number; // USD
  add: (item: Omit<CartLine, 'qty'>) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  lastAdded: string | null;
}

const StoreContext = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('USD');
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  // hydrate
  useEffect(() => {
    try {
      const c = localStorage.getItem('rs_currency') as Currency | null;
      if (c) setCurrencyState(c);
      const raw = localStorage.getItem('rs_cart');
      if (raw) setLines(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem('rs_cart', JSON.stringify(lines)); } catch {}
  }, [lines]);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
    try { localStorage.setItem('rs_currency', c); } catch {}
  }, []);

  const fmt = useCallback((usd: number) => {
    const v = currency === 'CAD' ? usd * USD_TO_CAD : usd;
    const s = v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return currency === 'CAD' ? `CA$${s}` : `$${s}`;
  }, [currency]);

  const add: StoreState['add'] = useCallback((item) => {
    setLines((prev) => {
      const found = prev.find((l) => l.id === item.id);
      if (found) return prev.map((l) => (l.id === item.id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { ...item, qty: 1 }];
    });
    setLastAdded(item.id);
    setOpen(true);
    window.setTimeout(() => setLastAdded(null), 1400);
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      prev.flatMap((l) => (l.id === id ? (qty <= 0 ? [] : [{ ...l, qty }]) : [l]))
    );
  }, []);

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((n, l) => n + l.price * l.qty, 0);

  return (
    <StoreContext.Provider
      value={{ currency, setCurrency, fmt, lines, count, subtotal, add, remove, setQty, open, setOpen, lastAdded }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
