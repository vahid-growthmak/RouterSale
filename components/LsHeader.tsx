'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useStore } from './StoreProvider';
import { IconSearch, IconUser, IconHeart, IconCart, IconBars, IconRepeat } from './Icons';

const NAV = ['Routers', 'Switches', 'Firewalls', 'Wireless', 'IP Phones', 'Refurb PCs', 'Printers'];

export default function LsHeader() {
  const { currency, setCurrency, count, subtotal, fmt, setOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="lbar">
        <div className="container lbar__in">
          <span className="lbar__msg">Free shipping across <b>US &amp; Canada</b> on orders over $500</span>
          <div className="lbar__right">
            <a className="hide-sm" href="#">Track order</a>
            <a className="hide-sm" href="#">Help</a>
            <span className="lbar__sel" aria-label="Currency">
              <button data-active={currency === 'USD'} onClick={() => setCurrency('USD')}>USD</button>
              <span style={{ opacity: .4 }}>|</span>
              <button data-active={currency === 'CAD'} onClick={() => setCurrency('CAD')}>CAD</button>
            </span>
          </div>
        </div>
      </div>

      <header className="lheader" data-scrolled={scrolled}>
        <div className="container lheader__in">
          <a href="#" className="lbrand" aria-label="RouterSale home">
            <Image src="/brand/logo.png" alt="RouterSale.com" width={174} height={81} priority />
          </a>
          <form className="lsearch" role="search" onSubmit={(e) => e.preventDefault()}>
            <span className="lsearch__cat">All Categories</span>
            <input type="search" placeholder="Search by part number — WS-C3750X-48PF-L, ASA5505…" aria-label="Search products" />
            <button type="submit" className="lsearch__btn" aria-label="Search"><IconSearch /></button>
          </form>
          <div className="lactions">
            <button className="laction"><span className="laction__ic"><IconUser /></span><span className="laction__lbl"><small>Account</small><b>Sign in</b></span></button>
            <button className="laction"><span className="laction__ic"><IconHeart /></span><span className="laction__lbl"><small>Wishlist</small><b>Saved</b></span></button>
            <button className="laction" onClick={() => setOpen(true)} aria-label={`Cart, ${count} items`}>
              <span className="laction__ic"><IconCart />{count > 0 && <span className="lbadge">{count}</span>}</span>
              <span className="laction__lbl"><small>Cart</small><b>{fmt(subtotal)}</b></span>
            </button>
          </div>
        </div>
      </header>

      <nav className="lnav" aria-label="Categories">
        <div className="container lnav__in">
          <span className="lnav__dept"><IconBars /> All Departments</span>
          {NAV.map((n, i) => <a key={n} href="#best" className={i === 1 ? 'active' : ''}>{n}</a>)}
          <a className="lnav__r" href="#trade"><IconRepeat /> Sell your gear</a>
        </div>
      </nav>
    </>
  );
}
