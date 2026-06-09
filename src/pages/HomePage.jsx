import { lazy, Suspense, useEffect } from 'react';
import Nav from '../components/layout/Nav.jsx';
import Hero from '../components/home/Hero.jsx';
import TrustedBy from '../components/home/TrustedBy.jsx';
import Challenge from '../components/home/Challenge.jsx';
import Solutions from '../components/home/Solutions.jsx';
import Industries from '../components/home/Industries.jsx';
import Products from '../components/home/Products.jsx';

const ProductComparison = lazy(() => import('../components/home/ProductComparison.jsx'));
const IoTCommandCenter  = lazy(() => import('../components/home/IoTCommandCenter.jsx'));
const IoTHowItWorks     = lazy(() => import('../components/home/IoTHowItWorks.jsx'));
const ProcessServices   = lazy(() => import('../components/home/ProcessServices.jsx'));
const CoreBelief        = lazy(() => import('../components/home/CoreBelief.jsx'));
const ClientValue       = lazy(() => import('../components/home/ClientValue.jsx'));
const CaseStudies       = lazy(() => import('../components/home/CaseStudies.jsx'));
const Leadership        = lazy(() => import('../components/home/Leadership.jsx'));
const ProcessAudit      = lazy(() => import('../components/home/ProcessAudit.jsx'));
const CtaBand           = lazy(() => import('../components/home/CtaBand.jsx'));
const Footer            = lazy(() => import('../components/layout/Footer.jsx'));

export default function HomePage() {
  useEffect(() => {
    document.title = 'MacroCoats — Process-Engineered Chemical Solutions';
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <TrustedBy />
      <Challenge />
      <Solutions />
      <Industries />
      <Products />
      <Suspense fallback={null}>
        <ProductComparison />
        <IoTCommandCenter />
        <IoTHowItWorks />
        <ProcessServices />
        <CoreBelief />
        <ClientValue />
        <CaseStudies />
        <Leadership />
        <ProcessAudit />
        <CtaBand />
        <Footer />
      </Suspense>
    </>
  );
}
