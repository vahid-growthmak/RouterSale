'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { useStore } from './StoreProvider';
import { IconCart, IconCheck, IconHeart, IconStar } from './Icons';

export default function LsCard({ product, deal = false }: { product: Product; deal?: boolean }) {
  const { fmt, add } = useStore();
  const [added, setAdded] = useState(false);
  const save = product.list - product.price;
  const avail = product.total - product.sold;
  const low = avail <= 12;

  function handleAdd() {
    add({ id: product.id, sku: product.sku, name: product.name, image: product.image, price: product.price });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article className="lcard">
      <span className="lcard__save">Save {fmt(save)}</span>
      <button className="lcard__wish" aria-label="Add to wishlist"><IconHeart /></button>

      <a href="/product" className="lcard__media">
        <Image src={product.image} alt={`${product.sku} — ${product.name}`} width={220} height={220} sizes="220px" />
      </a>

      <div className="lcard__vendor">Cisco</div>
      <a href="/product" className="lcard__title">{product.name}</a>

      <div className="lcard__rating" aria-label={`${product.rating} of 5`}>
        {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} style={{ opacity: i < Math.round(product.rating) ? 1 : 0.28 }} />)}
        <span>({product.reviews} reviews)</span>
      </div>

      <div className="lcard__price">
        <span className="lcard__sale-lbl">Sale price</span>
        <div className="lcard__price-row">
          <span className="lcard__now">{fmt(product.price)}</span>
          <span className="lcard__old">{fmt(product.list)}</span>
        </div>
      </div>

      {deal ? (
        <div className="lcard__deal">
          <div className="lcard__deal-row"><span>Available <b>{avail}</b></span><span>Sold <b>{product.sold}</b></span></div>
          <div className="lcard__bar"><i style={{ width: `${Math.round((avail / product.total) * 100)}%` }} /></div>
        </div>
      ) : (
        <div className={`lcard__stock ${low ? 'low' : ''}`}>{low ? `Only ${avail} units left` : `In stock, ${avail} units`}</div>
      )}

      <button className="lcard__add" data-added={added} onClick={handleAdd} aria-label={`Add ${product.sku} to cart`}>
        {added ? <IconCheck /> : <IconCart />}{added ? 'Added' : 'Add to cart'}
      </button>
    </article>
  );
}
