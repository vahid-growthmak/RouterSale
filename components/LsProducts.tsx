'use client';

import { useEffect, useState } from 'react';
import { PRODUCTS } from '@/lib/products';
import LsCard from './LsCard';
import Reveal from './Reveal';
import { IconArrow, IconBolt, IconClock } from './Icons';

function pad(n: number) { return String(n).padStart(2, '0'); }

export function LsDeals() {
  const deals = PRODUCTS.slice(0, 5);
  const [t, setT] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    function tick() {
      const now = new Date(); const end = new Date(now); end.setHours(23, 59, 59, 999);
      const d = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
      setT({ h: Math.floor(d / 3600), m: Math.floor((d % 3600) / 60), s: d % 60 });
    }
    tick(); const id = window.setInterval(tick, 1000); return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section container" id="deals" aria-labelledby="deals-h">
      <div className="ldeals__head">
        <h2 id="deals-h"><IconBolt /> Today&apos;s Cisco Deals</h2>
        <div className="lcount" aria-label="Ends in">
          <span className="lbl"><IconClock style={{ width: 13, verticalAlign: '-2px' }} /> Ends in</span>
          <span className="seg">{pad(t.h)}</span><span className="colon">:</span>
          <span className="seg">{pad(t.m)}</span><span className="colon">:</span>
          <span className="seg">{pad(t.s)}</span>
        </div>
        <a href="#" className="shead__link">View all <IconArrow /></a>
      </div>
      <div className="pgrid">
        {deals.map((p) => <LsCard key={p.id} product={p} deal />)}
      </div>
    </section>
  );
}

export function LsBestSelling() {
  const items = PRODUCTS.slice(0, 10);
  return (
    <section className="section container" id="best" aria-labelledby="best-h">
      <div className="shead">
        <div><h2 id="best-h">Best selling <span className="ac">products</span></h2><p>The gear our IT buyers and MSPs reach for most.</p></div>
        <a href="#" className="shead__link">View all <IconArrow /></a>
      </div>
      <div className="pgrid">
        {items.map((p, i) => <Reveal key={p.id} delay={(i % 5) * 50}><LsCard product={p} /></Reveal>)}
      </div>
    </section>
  );
}

export function LsNewArrivals() {
  const items = [...PRODUCTS].slice(6).concat(PRODUCTS.slice(0, 4)).slice(0, 5);
  return (
    <section className="section container" aria-labelledby="new-h">
      <div className="shead">
        <div><h2 id="new-h">New <span className="ac">arrivals</span></h2><p>Fresh stock, just bench-tested and added.</p></div>
        <a href="#" className="shead__link">View all <IconArrow /></a>
      </div>
      <div className="pgrid">
        {items.map((p) => <LsCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
