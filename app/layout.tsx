import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/components/StoreProvider';

export const metadata: Metadata = {
  title: 'RouterSale — Refurbished Cisco, HP, Juniper & Fortinet Hardware | Up to 90% Off MSRP',
  description:
    "Canada's premier reseller of refurbished networking & computing hardware — Cisco routers, switches, ASA firewalls, modules, IP phones, plus HP/Dell laptops & printers. Pre-tested, full warranty, free shipping across US & Canada. We buy, sell, trade & repair. Toronto since 2002.",
  keywords: [
    'refurbished Cisco', 'used Cisco switches', 'Cisco routers', 'ASA firewall',
    'Catalyst switch', 'CCIE rack rental', 'network hardware Toronto',
  ],
  openGraph: {
    title: 'RouterSale — Refurbished Cisco Hardware, Tested & Up to 90% Off List',
    description: 'Pre-tested Cisco routers, switches & firewalls with a 6-month warranty. Buy, sell & trade. Toronto since 2002.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
