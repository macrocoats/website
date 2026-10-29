import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import ProductsHero from '../components/products/ProductsHero.jsx';
import ProductsCatalogue from '../components/products/ProductsCatalogue.jsx';
import CtaBand from '../components/home/CtaBand.jsx';
import Seo, { SITE } from '../components/Seo.jsx';

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Industrial Surface Treatment Chemicals | MacroCoats"
        description="Explore MacroCoats phosphating, degreasing, aluminium and ferrous passivation, rust-preventive and process-control chemicals for industrial metal finishing."
        path="/products"
        image={`${SITE}/images/products-phosphating-parts.webp`}
      />
      <Nav />
      <ProductsHero />
      <ProductsCatalogue />
      <CtaBand />
      <Footer />
    </>
  );
}
