'use client';

import Image from 'next/image';
import { useStore } from './StoreProvider';
import { IconCart, IconClose, IconTruck, IconCheck, IconShield } from './Icons';

export default function MiniCart() {
  const { open, setOpen, lines, count, subtotal, fmt, setQty, remove, lastAdded } = useStore();

  return (
    <>
      <div className="cart-scrim" data-open={open} onClick={() => setOpen(false)} aria-hidden={!open} />
      <aside className="cart" data-open={open} aria-label="Shopping cart" aria-hidden={!open}>
        <div className="cart__head">
          <h3><IconCart /> Cart <span className="count">{count} item{count === 1 ? '' : 's'}</span></h3>
          <button className="cart__close" onClick={() => setOpen(false)} aria-label="Close cart"><IconClose /></button>
        </div>

        <div className="cart__body">
          {lines.length === 0 && (
            <div className="cart__empty">
              <IconCart />
              <p>Your cart is empty.<br />Search a part number to get started.</p>
            </div>
          )}
          {lines.map((l) => (
            <div className="cline" key={l.id} style={lastAdded === l.id ? { animation: 'floaty .5s var(--ease)' } : undefined}>
              <Image className="cline__img" src={l.image} alt={l.sku} width={64} height={64} />
              <div>
                <div className="cline__sku">{l.sku}</div>
                <div className="cline__name">{l.name}</div>
                <div className="qty" aria-label="Quantity">
                  <button onClick={() => setQty(l.id, l.qty - 1)} aria-label="Decrease quantity">−</button>
                  <span>{l.qty}</span>
                  <button onClick={() => setQty(l.id, l.qty + 1)} aria-label="Increase quantity">+</button>
                </div>
              </div>
              <div>
                <div className="cline__price">{fmt(l.price * l.qty)}</div>
                <button className="cline__rm" onClick={() => remove(l.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        {lines.length > 0 && (
          <div className="cart__foot">
            <div className="cart__ship">
              <IconCheck />
              <span><b>Free shipping included</b> — ships from Toronto across US &amp; Canada</span>
            </div>
            <div className="cart__sub">
              <span className="l">Subtotal</span>
              <span className="v">{fmt(subtotal)}</span>
            </div>
            <button className="btn btn--blue btn--block">Checkout securely</button>
            <p className="cart__note"><IconShield style={{ width: 13, display: 'inline', verticalAlign: '-2px' }} /> Full warranty · USD/CAD at checkout · Tested before it ships</p>
          </div>
        )}
      </aside>
    </>
  );
}
