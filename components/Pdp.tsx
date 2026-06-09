'use client';

import { useState } from 'react';
import Image from 'next/image';
import { byId } from '@/lib/products';
import { useStore } from './StoreProvider';
import {
  IconStar, IconCart, IconCheck, IconBolt, IconChevronDown, IconTruck, IconShield,
  IconRepeat, IconArrow,
} from './Icons';

const product = byId('asa5520');
const off = Math.round(((product.list - product.price) / product.list) * 100);

const VIEWS = [
  { src: product.image, label: 'Front' },
  { src: '/products/c2960-warehouse.jpg', label: 'In our facility', facility: true },
  { src: '/products/c3550-24pwr.jpg', label: 'Ports' },
  { src: '/products/c2960-8tc.jpg', label: 'Angle' },
];

const CONDITIONS = [
  { key: 'refurb', label: 'Refurbished · Tested', delta: 0 },
  { key: 'used', label: 'Used · Tested', delta: -120 },
];
const WARRANTIES = [
  { key: '6', label: '6 months', sub: 'Included', delta: 0 },
  { key: '12', label: '12 months', sub: '+ $49', delta: 49 },
];

const SPECS: [string, string][] = [
  ['Part number', 'ASA5520-BUN-K9'],
  ['Series', 'Cisco ASA 5500'],
  ['Form factor', '1U rack-mount'],
  ['Interfaces', '4 × 10/100/1000 GE'],
  ['Firewall throughput', 'Up to 450 Mbps'],
  ['VPN peers', '750 IPsec / 2 SSL'],
  ['Condition', 'Refurbished · Bench-tested'],
  ['Warranty', '6-month RouterSale warranty'],
];

function Acc({ title, open, onClick, children }: { title: string; open: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <div className="paccitem" data-open={open}>
      <button className="paccitem__head" onClick={onClick} aria-expanded={open}>{title} <IconChevronDown /></button>
      <div className="paccitem__body"><div className="paccitem__inner">{children}</div></div>
    </div>
  );
}

export default function Pdp() {
  const { fmt, add, setOpen } = useStore();
  const [view, setView] = useState(0);
  const [cond, setCond] = useState('refurb');
  const [warr, setWarr] = useState('6');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [acc, setAcc] = useState('desc');

  const price = product.price + (CONDITIONS.find((c) => c.key === cond)?.delta || 0) + (WARRANTIES.find((w) => w.key === warr)?.delta || 0);

  function handleAdd(buy = false) {
    for (let n = 0; n < qty; n++) add({ id: product.id, sku: product.sku, name: product.name, image: product.image, price });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
    if (buy) setOpen(true);
  }

  return (
    <div className="container pdpwrap">
      <nav className="crumb" aria-label="Breadcrumb">
        <a href="/">Home</a><span className="sep">/</span>
        <a href="/#best">Firewalls</a><span className="sep">/</span>
        <span className="cur">Cisco ASA 5520</span>
      </nav>

      <div className="pdp">
        {/* Gallery */}
        <div className="pgal">
          <div className="pgal__main">
            <span className="pgal__tag">-{off}%</span>
            <span className="pgal__cond">{CONDITIONS.find((c) => c.key === cond)?.label}</span>
            <Image src={VIEWS[view].src} alt={`${product.sku} — ${VIEWS[view].label}`} width={520} height={520} priority />
          </div>
          <div className="pgal__thumbs">
            {VIEWS.map((v, i) => (
              <button key={i} className={`pgal__thumb ${v.facility ? 'facility' : ''}`} data-active={i === view} onClick={() => setView(i)} aria-label={v.label}>
                <Image src={v.src} alt={v.label} width={86} height={86} />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="pinfo">
          <div className="pinfo__ey">Refurbished · Bench-tested in Toronto</div>
          <h1 className="pinfo__title">Cisco ASA 5520 Adaptive Security Appliance Firewall</h1>
          <div className="pinfo__sku">{product.sku}</div>
          <div className="pinfo__rating">
            <span className="stars">{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}</span>
            <a href="#reviews">({product.reviews} reviews)</a>
          </div>
          <div className="pinfo__price">
            <span className="pinfo__now">{fmt(price)}</span>
            <span className="pinfo__old">{fmt(product.list)}</span>
            <span className="pinfo__save">Save {off}%</span>
          </div>
          <p className="pinfo__desc">
            Enterprise-grade VPN firewall, professionally refurbished and bench-tested to factory spec.
            Stateful inspection, IPsec/SSL VPN and intrusion prevention — at a fraction of new pricing.
          </p>

          <div className="popt">
            <div className="popt__lbl">Condition: <span>{CONDITIONS.find((c) => c.key === cond)?.label}</span></div>
            <div className="popt__pills">
              {CONDITIONS.map((c) => (
                <button key={c.key} className="popt__pill" data-active={cond === c.key} onClick={() => setCond(c.key)}>{c.label}</button>
              ))}
            </div>
          </div>
          <div className="popt">
            <div className="popt__lbl">Warranty</div>
            <div className="popt__pills">
              {WARRANTIES.map((w) => (
                <button key={w.key} className="popt__pill" data-active={warr === w.key} onClick={() => setWarr(w.key)}>{w.label}<small>{w.sub}</small></button>
              ))}
            </div>
          </div>

          <div className="pqty">
            <div className="pqty__box" aria-label="Quantity">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
            </div>
            <span className="pqty__stock">{product.stock} in stock · ships from Toronto</span>
          </div>

          <div className="pacts">
            <button className="pact pact--cart" data-added={added} onClick={() => handleAdd(false)}>
              {added ? <IconCheck /> : <IconCart />}{added ? 'Added to cart' : 'Add to cart'}
            </button>
            <button className="pact pact--buy" onClick={() => handleAdd(true)}><IconBolt /> Buy it now</button>
          </div>

          <div className="pmeta">
            <div className="row"><IconTruck /> <span>Free shipping across US &amp; Canada on orders over <b>$500</b></span></div>
            <div className="row"><IconShield /> <span>Backed by a <b>6-month RouterSale warranty</b></span></div>
            <div className="row"><IconRepeat /> <span>Got similar gear? <b>We buy &amp; trade</b> — get a quote</span></div>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="pacc">
        <Acc title="Description" open={acc === 'desc'} onClick={() => setAcc(acc === 'desc' ? '' : 'desc')}>
          The Cisco ASA 5520 delivers proven enterprise firewall, VPN and intrusion-prevention services for
          mid-size networks. Every unit we ship is wiped to factory default, powered up, and port-by-port
          verified on the bench before it leaves Toronto.
          <ul>
            <li><IconCheck /> Stateful inspection firewall with application-layer security</li>
            <li><IconCheck /> Site-to-site &amp; remote-access IPsec / SSL VPN</li>
            <li><IconCheck /> 4 × Gigabit Ethernet interfaces, 1U rack-mount</li>
            <li><IconCheck /> Wiped, tested &amp; refurbished — backed by warranty</li>
          </ul>
        </Acc>
        <Acc title="Specifications" open={acc === 'spec'} onClick={() => setAcc(acc === 'spec' ? '' : 'spec')}>
          <table className="spectable"><tbody>
            {SPECS.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
          </tbody></table>
        </Acc>
        <Acc title="Shipping &amp; Returns" open={acc === 'ship'} onClick={() => setAcc(acc === 'ship' ? '' : 'ship')}>
          Ships from our Toronto facility within 1–2 business days. Free shipping on orders over $500 across
          Canada &amp; the USA. Pay in USD or CAD at checkout. Every unit carries a 6-month warranty — if it
          doesn&apos;t work as described, we&apos;ll repair, replace or refund it.
        </Acc>
      </div>

      {/* Trust badges */}
      <div className="ptrust">
        <div className="ptrust__i"><IconTruck /> Fast shipping</div>
        <div className="ptrust__i"><IconShield /> 6-month warranty</div>
        <div className="ptrust__i"><IconCheck /> Bench-tested</div>
        <div className="ptrust__i"><IconRepeat /> Buy · Sell · Trade</div>
      </div>
    </div>
  );
}
