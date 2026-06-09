import { SVGProps, JSX } from 'react';

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const, ...p,
});

export const IconRouter = (p: P) => (
  <svg {...base(p)}><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 17h.01M11 17h.01" /><path d="M12 9V4m0 0 2.5 2M12 4 9.5 6" /><path d="M16 9V5m0 0 2 1.5M16 5l-2 1.5" /></svg>
);
export const IconSwitch = (p: P) => (
  <svg {...base(p)}><rect x="2.5" y="8" width="19" height="8" rx="1.5" /><path d="M6 12h.01M9 12h.01M12 12h.01M15 12h.01M18 12h.01" /></svg>
);
export const IconShield = (p: P) => (
  <svg {...base(p)}><path d="M12 3 5 6v5c0 4.2 2.8 7.4 7 9 4.2-1.6 7-4.8 7-9V6l-7-3Z" /><path d="m9.5 12 1.8 1.8 3.2-3.4" /></svg>
);
export const IconWifi = (p: P) => (
  <svg {...base(p)}><path d="M2.5 9a14 14 0 0 1 19 0" /><path d="M5.5 12.5a9.5 9.5 0 0 1 13 0" /><path d="M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19.2" r="1" fill="currentColor" stroke="none" /></svg>
);
export const IconModule = (p: P) => (
  <svg {...base(p)}><rect x="3" y="7" width="18" height="10" rx="1.5" /><path d="M7 7V5M11 7V5M15 7V5M7 19v-2M11 19v-2M15 19v-2" /></svg>
);
export const IconPhone = (p: P) => (
  <svg {...base(p)}><rect x="6" y="2.5" width="12" height="19" rx="2" /><path d="M9 6h6M9 9h2M13 9h2M9 12h2M13 12h2" /><path d="M10.5 18.5h3" /></svg>
);
export const IconPower = (p: P) => (
  <svg {...base(p)}><path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" /></svg>
);
export const IconLaptop = (p: P) => (
  <svg {...base(p)}><rect x="4" y="5" width="16" height="10" rx="1.5" /><path d="M2.5 19h19" /></svg>
);
export const IconPrinter = (p: P) => (
  <svg {...base(p)}><path d="M7 8V3h10v5" /><rect x="4" y="8" width="16" height="8" rx="1.5" /><path d="M7 14h10v6H7z" /><path d="M17.5 11h.01" /></svg>
);

export const ICONS: Record<string, (p: P) => JSX.Element> = {
  router: IconRouter, switch: IconSwitch, shield: IconShield, wifi: IconWifi,
  module: IconModule, phone: IconPhone, power: IconPower, laptop: IconLaptop,
  printer: IconPrinter,
};

export const IconSearch = (p: P) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
);
export const IconCart = (p: P) => (
  <svg {...base(p)}><path d="M3 4h2l2.2 11.4a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.2L21 8H6.2" /><circle cx="9.5" cy="20" r="1.3" fill="currentColor" stroke="none" /><circle cx="18" cy="20" r="1.3" fill="currentColor" stroke="none" /></svg>
);
export const IconArrow = (p: P) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconCheck = (p: P) => (
  <svg {...base(p)}><path d="m5 12 4.5 4.5L19 7" /></svg>
);
export const IconBolt = (p: P) => (
  <svg {...base(p)}><path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" /></svg>
);
export const IconTruck = (p: P) => (
  <svg {...base(p)}><rect x="2" y="6" width="12" height="9" rx="1" /><path d="M14 9h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg>
);
export const IconClose = (p: P) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconStar = (p: P) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" /></svg>
);
export const IconRepeat = (p: P) => (
  <svg {...base(p)}><path d="M3 8a6 6 0 0 1 10-2l2 2" /><path d="M15 4v4h-4" /><path d="M21 16a6 6 0 0 1-10 2l-2-2" /><path d="M9 20v-4h4" /></svg>
);
export const IconWrench = (p: P) => (
  <svg {...base(p)}><path d="M15 7a4 4 0 0 1-5 5L5 17l2 2 5-5a4 4 0 0 0 5-5l-2 2-2-2 2-2Z" /></svg>
);
export const IconRack = (p: P) => (
  <svg {...base(p)}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M4 8h16M4 13h16M4 18h16" /><path d="M7 5.5h.01M7 10.5h.01M7 15.5h.01" /></svg>
);
export const IconPin = (p: P) => (
  <svg {...base(p)}><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const IconMail = (p: P) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
);
export const IconUser = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" /></svg>
);
export const IconHeart = (p: P) => (
  <svg {...base(p)}><path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" /></svg>
);
export const IconBars = (p: P) => (
  <svg {...base(p)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const IconChevronDown = (p: P) => (
  <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
);
export const IconHeadset = (p: P) => (
  <svg {...base(p)}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="2.5" y="13" width="4" height="6" rx="1.5" /><rect x="17.5" y="13" width="4" height="6" rx="1.5" /><path d="M20 19a4 4 0 0 1-4 3h-2" /></svg>
);
export const IconClock = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const IconPlus = (p: P) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
);
export const IconGift = (p: P) => (
  <svg {...base(p)}><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v8h14v-8" /><path d="M12 8v12" /><path d="M12 8S10 3 7.5 4.5 9 8 12 8Zm0 0s2-5 4.5-3.5S15 8 12 8Z" /></svg>
);
