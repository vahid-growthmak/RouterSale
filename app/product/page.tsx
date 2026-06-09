import LsHeader from '@/components/LsHeader';
import Pdp from '@/components/Pdp';
import LsCard from '@/components/LsCard';
import MiniCart from '@/components/MiniCart';
import Reveal from '@/components/Reveal';
import { LsFooter } from '@/components/LsSections';
import { PRODUCTS } from '@/lib/products';
import { IconArrow } from '@/components/Icons';

export default function ProductPage() {
  const related = PRODUCTS.filter((p) => p.id !== 'asa5520').slice(0, 5);
  return (
    <>
      <LsHeader />
      <main id="main">
        <Pdp />
        <Reveal>
          <section className="section container" id="reviews" aria-labelledby="rel-h">
            <div className="shead">
              <div><h2 id="rel-h">Related <span className="ac">products</span></h2><p>More refurbished Cisco gear our buyers pair with this.</p></div>
              <a href="/#best" className="shead__link">View all <IconArrow /></a>
            </div>
            <div className="pgrid">
              {related.map((p) => <LsCard key={p.id} product={p} />)}
            </div>
          </section>
        </Reveal>
      </main>
      <LsFooter />
      <MiniCart />
    </>
  );
}
