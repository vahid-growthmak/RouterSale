// Real Cisco part numbers + imagery from routersale.com.
// price = RouterSale refurbished price (USD); list = approx Cisco MSRP (for savings).

export type Condition = 'New' | 'Refurbished' | 'Used';

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;     // matches a tab key
  image: string;
  price: number;
  list: number;
  condition: Condition;
  rating: number;       // 0-5
  reviews: number;
  sold: number;
  total: number;        // for deal "available" bar
  warrantyMonths: number;
}

const IMG = {
  asa: '/products/asa5520.jpg',
  c3750x: '/products/c3750x-48pf.jpg',
  c3560g: '/products/c3560g-48ps.jpg',
  c3750v2: '/products/c3750v2-48ts.jpg',
  c3560v2: '/products/c3560v2-24ps.jpg',
  c3550: '/products/c3550-24pwr.jpg',
  c2960: '/products/c2960-8tc.jpg',
};

export const PRODUCTS: Product[] = [
  { id: 'asa5520', sku: 'ASA5520-BUN-K9', name: 'Cisco ASA 5520 Adaptive Security Appliance Firewall', category: 'firewalls', image: IMG.asa, price: 744, list: 6995, condition: 'Refurbished', rating: 5, reviews: 42, sold: 38, total: 50, warrantyMonths: 6 },
  { id: 'c3750x', sku: 'WS-C3750X-48PF-L', name: 'Cisco Catalyst 3750-X 48-Port PoE+ Stackable Switch', category: 'switches', image: IMG.c3750x, price: 995, list: 9995, condition: 'Refurbished', rating: 5, reviews: 67, sold: 28, total: 40, warrantyMonths: 6 },
  { id: 'c3560g48', sku: 'WS-C3560G-48PS-S', name: 'Cisco Catalyst 3560G 48-Port Gigabit PoE Switch', category: 'switches', image: IMG.c3560g, price: 137, list: 4495, condition: 'Refurbished', rating: 4.5, reviews: 31, sold: 77, total: 100, warrantyMonths: 6 },
  { id: 'c3750v2', sku: 'WS-C3750V2-48TS-E', name: 'Cisco Catalyst 3750V2 48-Port Stackable Switch', category: 'switches', image: IMG.c3750v2, price: 140, list: 3995, condition: 'Used', rating: 4.5, reviews: 19, sold: 52, total: 70, warrantyMonths: 6 },
  { id: 'c3560v2', sku: 'WS-C3560V2-24PS-S', name: 'Cisco Catalyst 3560V2 24-Port PoE Switch', category: 'switches', image: IMG.c3560v2, price: 130, list: 3495, condition: 'Refurbished', rating: 4, reviews: 24, sold: 64, total: 90, warrantyMonths: 6 },
  { id: 'c3550', sku: 'WS-C3550-24PWR-SMI', name: 'Cisco Catalyst 3550 24-Port Inline-Power Switch', category: 'switches', image: IMG.c3550, price: 115, list: 2995, condition: 'Used', rating: 4, reviews: 12, sold: 21, total: 30, warrantyMonths: 6 },
  { id: 'c2960', sku: 'WS-C2960-8TC-L', name: 'Cisco Catalyst 2960 8-Port Compact Switch', category: 'switches', image: IMG.c2960, price: 85, list: 695, condition: 'New', rating: 5, reviews: 88, sold: 120, total: 160, warrantyMonths: 12 },
  { id: 'asa5510', sku: 'ASA5510-BUN-K9', name: 'Cisco ASA 5510 Firewall Security Appliance', category: 'firewalls', image: IMG.asa, price: 199, list: 2995, condition: 'Refurbished', rating: 4.5, reviews: 36, sold: 44, total: 60, warrantyMonths: 6 },
  { id: 'asa5505', sku: 'ASA5505-BUN-K9', name: 'Cisco ASA 5505 Small-Business Firewall', category: 'firewalls', image: IMG.asa, price: 96, list: 745, condition: 'Refurbished', rating: 4, reviews: 51, sold: 90, total: 120, warrantyMonths: 6 },
  { id: 'isr2911', sku: 'CISCO2911/K9', name: 'Cisco 2911 Integrated Services Router (ISR G2)', category: 'routers', image: IMG.c3750v2, price: 189, list: 3500, condition: 'Refurbished', rating: 4.5, reviews: 29, sold: 33, total: 45, warrantyMonths: 6 },
  { id: 'isr1921', sku: 'CISCO1921/K9', name: 'Cisco 1921 Integrated Services Router', category: 'routers', image: IMG.c3550, price: 74, list: 1295, condition: 'Refurbished', rating: 4, reviews: 22, sold: 58, total: 80, warrantyMonths: 6 },
  { id: 'asr1001', sku: 'ASR1001-X', name: 'Cisco ASR 1001-X Aggregation Services Router', category: 'routers', image: IMG.asa, price: 995, list: 12000, condition: 'Refurbished', rating: 5, reviews: 14, sold: 9, total: 15, warrantyMonths: 6 },
  { id: 'air1830', sku: 'AIR-AP1832I-B-K9', name: 'Cisco Aironet 1830 Series Wireless Access Point', category: 'wireless', image: IMG.c2960, price: 89, list: 845, condition: 'Refurbished', rating: 4.5, reviews: 40, sold: 71, total: 100, warrantyMonths: 6 },
  { id: 'wlc5508', sku: 'AIR-CT5508-25-K9', name: 'Cisco 5508 Series Wireless LAN Controller', category: 'wireless', image: IMG.c3560v2, price: 240, list: 4995, condition: 'Refurbished', rating: 4, reviews: 17, sold: 26, total: 35, warrantyMonths: 6 },
  { id: 'cp7945', sku: 'CP-7945G', name: 'Cisco 7945G Unified IP Phone (Voice)', category: 'phones', image: IMG.c2960, price: 51, list: 395, condition: 'Refurbished', rating: 4.5, reviews: 63, sold: 142, total: 200, warrantyMonths: 6 },
  { id: 'cp7965', sku: 'CP-7965G', name: 'Cisco 7965G Unified IP Phone (Voice)', category: 'phones', image: IMG.c2960, price: 64, list: 450, condition: 'Refurbished', rating: 4, reviews: 38, sold: 96, total: 140, warrantyMonths: 6 },
];

export const byId = (id: string) => PRODUCTS.find((p) => p.id === id)!;

export interface Dept { name: string; blurb: string; icon: string; }
export const DEPARTMENTS: Dept[] = [
  { name: 'Routers', blurb: 'ISR · ASR · 7200 · RV', icon: 'router' },
  { name: 'Switches', blurb: 'Catalyst · Nexus · SG', icon: 'switch' },
  { name: 'Firewalls / Security', blurb: 'ASA · PIX · Firepower', icon: 'shield' },
  { name: 'Wireless', blurb: 'Aironet · AIR-CAP · WLC', icon: 'wifi' },
  { name: 'Modules & Cards', blurb: 'WIC · HWIC · NIM · RSP', icon: 'module' },
  { name: 'IP Phones / Voice', blurb: '7900 · 6900 · ATA', icon: 'phone' },
  { name: 'Memory & Power', blurb: 'DRAM · PSU · Optics', icon: 'power' },
  { name: 'Refurb Computing', blurb: 'Laptops · Desktops · POS', icon: 'laptop' },
  { name: 'Printers', blurb: 'Epson · Star', icon: 'printer' },
];

export const TABS = [
  { key: 'all', label: 'All Products' },
  { key: 'switches', label: 'Switches' },
  { key: 'routers', label: 'Routers' },
  { key: 'firewalls', label: 'Firewalls' },
  { key: 'wireless', label: 'Wireless' },
  { key: 'phones', label: 'IP Phones' },
];

export const BRANDS = ['Cisco', 'Juniper', 'Fortinet', 'HP', 'Dell', 'Netgear', 'Avaya'];
export const USD_TO_CAD = 1.37;
