import { useEffect } from 'react';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import ProductsHero from '../components/products/ProductsHero.jsx';
import ProductsCatalogue from '../components/products/ProductsCatalogue.jsx';
import CtaBand from '../components/home/CtaBand.jsx';

export default function ProductsPage() {
  useEffect(() => {
    document.title = 'Products — MacroCoats Process-Engineered Chemistry';
    return () => {
      document.title = 'MacroCoats — Process-Engineered Chemical Solutions';
    };
  }, []);

  return (
    <>
      <Nav />
      <ProductsHero />
      <ProductsCatalogue />
      <CtaBand />
      <Footer />
    </>
  );
}
