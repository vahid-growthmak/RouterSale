'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { byId } from '@/lib/products';
import { IconArrow, IconBolt } from './Icons';

const SLIDES = [
  { badge: 'Up to 90% off list', h: "Canada's refurbished Cisco superstore", p: 'Routers, switches, firewalls & IP phones — tested, warrantied, all in one place.', product: byId('asa5520') },
  { badge: 'Catalyst switching', h: 'Compact & stackable switches', p: 'Catalyst 2960 / 3560 / 3750 gigabit switching, refurbished and bench-tested.', product: byId('c2960') },
  { badge: 'Network security', h: 'ASA firewalls for the edge', p: 'Adaptive Security Appliances, pre-tested and ready to protect your network.', product: byId('asa5510') },
];

export default function LsHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => window.clearInterval(t);
  }, []);
  const s = SLIDES[i];

  return (
    <section className="lhero" aria-label="Featured">
      <div className="container lhero__grid">
        <div className="lbanner">
          <div className="lbanner__c" key={i}>
            <span className="lbanner__badge"><IconBolt style={{ width: 14 }} /> {s.badge}</span>
            <h1>{s.h}</h1>
            <p>{s.p}</p>
            <div className="lbanner__cta">
              <a href="#best" className="btn btn--orange btn--lg">Shop now <IconArrow /></a>
              <a href="#deals" className="btn btn--ghost btn--lg">View deals</a>
            </div>
          </div>
          <div className="lbanner__tile" key={`t-${i}`}>
            <Image src={s.product.image} alt={s.product.name} width={420} height={336} priority sizes="(max-width:980px) 90vw, 420px" />
          </div>
          <div className="lbanner__dots">
            {SLIDES.map((_, n) => <button key={n} data-active={n === i} aria-label={`Slide ${n + 1}`} onClick={() => setI(n)} />)}
          </div>
        </div>

        <div className="lpromos">
          <div className="lpromo a">
            <Image className="lpromo__img" src={byId('c2960').image} alt="" width={180} height={140} />
            <small>Daily essentials</small>
            <h3>Modules &amp; cables</h3>
            <span>WIC · HWIC · NIM from $20</span>
            <a href="#best">Shop parts <IconArrow /></a>
          </div>
          <div className="lpromo b">
            <Image className="lpromo__img" src={byId('cp7945').image} alt="" width={180} height={140} />
            <small>Voice</small>
            <h3>Cisco IP phones</h3>
            <span>7900 &amp; 6900 series from $51</span>
            <a href="#best">Shop voice <IconArrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
