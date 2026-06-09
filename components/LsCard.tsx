'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { useStore } from './StoreProvider';
import { IconCart, IconCheck, IconHeart, IconStar } from './Icons';

export default function LsCard({ product, deal = false }: { product: Product; deal?: boolean }) {
  const { fmt, add } = useStore();
  const [added, setAdded] = useState(false);
  const off = Math.round(((product.list - product.price) / product.list) * 100);
  const availPct = Math.round(((product.total - product.sold) / product.total) * 100);

  function handleAdd() {
    add({ id: product.id, sku: product.sku, name: product.name, image: product.image, price: product.price });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article className="lcard">
      <div className="lcard__badges">
        {product.condition === 'New' ? <span className="ltag new">New</span> : <span className="ltag sale">-{off}%</span>}
        <span className="ltag cond">{product.condition}</span>
      </div>
      <button className="lcard__wish" aria-label="Add to wishlist"><IconHeart /></button>

      <a href="/product" className="lcard__media">
        <Image src={product.image} alt={`${product.sku} — ${product.name}`} width={220} height={220} sizes="220px" />
      </a>

      <div className="lcard__cat">{product.category}</div>
      <a href="/product" className="lcard__title">{product.name}</a>
      <div className="lcard__sku">{product.sku}</div>

      <div className="lcard__rating" aria-label={`${product.rating} of 5`}>
        {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} style={{ opacity: i < Math.round(product.rating) ? 1 : 0.28 }} />)}
        <span>({product.reviews})</span>
      </div>

      <div className="lcard__price">
        <span className="lcard__now">{fmt(product.price)}</span>
        <span className="lcard__old">{fmt(product.list)}</span>
      </div>

      {deal && (
        <div className="lcard__deal">
          <div className="lcard__deal-row"><span>Available <b>{product.total - product.sold}</b></span><span>Sold <b>{product.sold}</b></span></div>
          <div className="lcard__bar"><i style={{ width: `${availPct}%` }} /></div>
        </div>
      )}

      <button className="lcard__add" data-added={added} onClick={handleAdd} aria-label={`Add ${product.sku} to cart`}>
        {added ? <IconCheck /> : <IconCart />}{added ? 'Added' : 'Add to cart'}
      </button>
    </article>
  );
}
