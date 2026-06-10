'use client';

import Image from 'next/image';
import { DEPARTMENTS, BRAND_LOGOS } from '@/lib/products';
import { ICONS } from './Icons';
import {
  IconTruck, IconShield, IconRepeat, IconHeadset, IconArrow, IconStar, IconCheck,
  IconBolt, IconWrench, IconMail, IconPin, IconPhone,
} from './Icons';

/* ---------------------------------------------------------------- TRUST STRIP */
export function TrustStrip() {
  const items = [
    { i: <IconTruck />, t: 'Free shipping', s: 'Across the US & Canada' },
    { i: <IconBolt />, t: 'Lowest price', s: 'Guaranteed worldwide' },
    { i: <IconShield />, t: 'Full warranty', s: 'Genuine, tested gear' },
    { i: <IconHeadset />, t: '24/7 support', s: 'Cisco-certified techs' },
  ];
  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div className="ltrust">
        {items.map((x) => <div className="ltrust__i" key={x.t}>{x.i}<div><b>{x.t}</b><span>{x.s}</span></div></div>)}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- CATEGORY TILES */
export function CategoryTiles() {
  return (
    <section className="section container" aria-labelledby="cats-h">
      <div className="shead">
        <div><h2 id="cats-h">Shop by <span className="ac">category</span></h2></div>
        <a href="#best" className="shead__link">All categories <IconArrow /></a>
      </div>
      <div className="lcats">
        {DEPARTMENTS.slice(0, 6).map((d) => {
          const Icon = ICONS[d.icon];
          return (
            <a className="lcat" href="#best" key={d.name}>
              <span className="lcat__ic"><Icon /></span>
              <b>{d.name}</b><span>{d.blurb}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- SHOP BY SERIES */
export function ShopBySeries() {
  const cards = [
    { s: 'Routing', h: 'Routers & WAN', img: '/products/c3750v2-48ts.jpg' },
    { s: 'Switching', h: 'Catalyst switches', img: '/products/c3560g-48ps.jpg' },
    { s: 'Security', h: 'ASA firewalls', img: '/products/asa5520.jpg' },
    { s: 'Voice', h: 'IP phones', img: '/products/c2960-8tc.jpg' },
  ];
  return (
    <section className="section container" aria-labelledby="space-h">
      <div className="shead">
        <div><h2 id="space-h">Shop by <span className="ac">series</span></h2><p>Jump straight to the Cisco family you need.</p></div>
      </div>
      <div className="lspaces">
        {cards.map((c) => (
          <div className="lspace" key={c.h}>
            <Image className="lspace__bg" src={c.img} alt="" width={320} height={240} />
            <small>{c.s}</small>
            <h3>{c.h}</h3>
            <a href="#best">Shop now <IconArrow /></a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- CTA BANNER */
export function CtaBanner() {
  return (
    <div className="section container" id="trade">
      <div className="lcta">
        <Image className="lcta__img" src="/products/c3750x-48pf.jpg" alt="" width={360} height={260} />
        <div className="lcta__in">
          <small>Buy · Sell · Trade</small>
          <h2>Got decommissioned Cisco gear? Get paid.</h2>
          <p>Refreshing a client site or clearing the closet? We buy surplus and end-of-life hardware — and trade it against your next order.</p>
          <a href="#" className="btn btn--orange btn--lg">Get a buy-back quote <IconArrow /></a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- BRAND ROW */
export function BrandRow() {
  return (
    <div className="section container" style={{ paddingBlock: 0 }}>
      <div className="lbrands">
        <span className="lbrands__lbl">Brands we buy &amp; sell</span>
        <div className="lbrands__logos">
          {BRAND_LOGOS.map((b) => (
            <img key={b.slug} src={`/brands/${b.slug}.svg`} alt={b.name} title={b.name} className="lbrands__logo" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- TESTIMONIALS */
export function Testimonials() {
  const reviews = [
    { q: <>Ordered four <b>3750-X switches</b> for a client refresh — tested, clean configs, half the price of new. Our go-to for EOL Cisco now.</>, n: 'Marcus D.', r: 'Network Engineer, MSP · Ontario', a: 'MD' },
    { q: <>The <b>buy-back</b> made a closet of old ASAs disappear and funded our new order. Fair quote, fast payment.</>, n: 'Priya S.', r: 'IT Manager · Healthcare clinic', a: 'PS' },
    { q: <>Twenty years in and I still call them first. <b>Genuine gear, real warranty</b>, and they actually pick up the phone.</>, n: 'Daniel K.', r: 'IT Director · Education', a: 'DK' },
  ];
  return (
    <section className="section container" aria-labelledby="test-h">
      <div className="shead">
        <div><h2 id="test-h">Trusted by <span className="ac">IT buyers</span></h2><p>4.8 average across Amazon.ca &amp; direct.</p></div>
      </div>
      <div className="ltest">
        {reviews.map((rv) => (
          <figure className="ltcard" key={rv.n} style={{ margin: 0 }}>
            <div className="ltcard__stars">{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}</div>
            <p>{rv.q}</p>
            <figcaption className="ltcard__by">
              <span className="ltcard__av">{rv.a}</span>
              <div><div className="ltcard__name">{rv.n}</div><div className="ltcard__role">{rv.r}</div></div>
              <span className="ltcard__verified"><IconCheck /> Verified</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- WHY SHOP */
export function WhyShop() {
  const items = [
    { i: <IconShield />, t: 'Pre-tested gear', p: 'Every unit bench-tested and wiped before it ships.' },
    { i: <IconBolt />, t: 'Up to 90% off list', p: 'Refurbished Cisco at a fraction of new pricing.' },
    { i: <IconWrench />, t: 'In-house repair', p: 'Cisco, computer & laptop repair by our techs.' },
    { i: <IconRepeat />, t: 'Two-way trade', p: 'We buy your surplus and trade it against orders.' },
  ];
  return (
    <section className="lwhy section">
      <div className="container">
        <div className="shead" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div><h2>Why shop with <span className="ac">RouterSale</span></h2><p style={{ marginInline: 'auto' }}>Toronto&apos;s Cisco specialist since 2002.</p></div>
        </div>
        <div className="lwhy__grid">
          {items.map((x) => (
            <div className="lwhy__i" key={x.t}><span className="lwhy__ic">{x.i}</span><b>{x.t}</b><p>{x.p}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- FOOTER */
export function LsFooter() {
  return (
    <footer className="lfooter">
      <div className="container lfooter__top">
        <div className="lfooter__brand">
          <Image src="/brand/logo.png" alt="RouterSale.com" width={174} height={81} />
          <p>Canada&apos;s premier reseller of refurbished networking &amp; computing hardware — Cisco, HP, Juniper, Fortinet. Buy, sell, trade &amp; repair, since 2002.</p>
          <div className="lfooter__contact">
            <div className="row"><IconPin /> <span>2200 Markham Road, Unit 7, <b>Scarborough, ON M1B 2W4</b>, Canada</span></div>
            <div className="row"><IconPhone /> <span>Toll-free <b>1-866-409-7253</b> · GTA (416) 916-8062</span></div>
            <div className="row"><IconMail /> <span><b>cisco@routersale.com</b></span></div>
          </div>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#best">Routers</a></li><li><a href="#best">Switches</a></li>
            <li><a href="#best">Firewalls</a></li><li><a href="#best">Wireless</a></li>
            <li><a href="#best">IP Phones</a></li><li><a href="#best">Refurb PCs</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#trade">Sell / Trade-in</a></li><li><a href="#">Cisco Device Repair</a></li>
            <li><a href="#">Computer &amp; Laptop Repair</a></li><li><a href="#">Refurbishment &amp; Testing</a></li>
            <li><a href="#">Cisco Study Kits</a></li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li><a href="#">Warranty &amp; Returns</a></li><li><a href="#">Shipping Info</a></li>
            <li><a href="#">Track Order</a></li><li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="container lfooter__bottom">
        <span>© 2002–2026 RouterSale.com · Toronto, Canada</span>
        <div className="lpay"><span>VISA</span><span>MC</span><span>AMEX</span><span>PAYPAL</span><span>USD/CAD</span></div>
      </div>
    </footer>
  );
}
