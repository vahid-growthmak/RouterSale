import LsHeader from '@/components/LsHeader';
import LsHero from '@/components/LsHero';
import MiniCart from '@/components/MiniCart';
import Reveal from '@/components/Reveal';
import { LsDeals, LsBestSelling, LsNewArrivals } from '@/components/LsProducts';
import {
  TrustStrip, CategoryTiles, ShopBySeries, CtaBanner, BrandRow, Testimonials, WhyShop, LsFooter,
} from '@/components/LsSections';

export default function Home() {
  return (
    <>
      <LsHeader />
      <main id="main">
        <LsHero />
        <TrustStrip />
        <LsDeals />
        <Reveal><BrandRow /></Reveal>
        <Reveal><CategoryTiles /></Reveal>
        <LsBestSelling />
        <Reveal><ShopBySeries /></Reveal>
        <Reveal><CtaBanner /></Reveal>
        <LsNewArrivals />
        <Reveal><Testimonials /></Reveal>
        <Reveal><WhyShop /></Reveal>
      </main>
      <LsFooter />
      <MiniCart />
    </>
  );
}
