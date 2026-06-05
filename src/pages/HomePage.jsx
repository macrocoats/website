import { useEffect } from 'react';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import Hero from '../components/home/Hero.jsx';
import TrustedBy from '../components/home/TrustedBy.jsx';
import Challenge from '../components/home/Challenge.jsx';
import Solutions from '../components/home/Solutions.jsx';
import Industries from '../components/home/Industries.jsx';
import Products from '../components/home/Products.jsx';
import IoTCommandCenter from '../components/home/IoTCommandCenter.jsx';
import IoTHowItWorks from '../components/home/IoTHowItWorks.jsx';
import ProcessServices from '../components/home/ProcessServices.jsx';
import CoreBelief from '../components/home/CoreBelief.jsx';
import ClientValue from '../components/home/ClientValue.jsx';
import Leadership from '../components/home/Leadership.jsx';
import ProcessAudit from '../components/home/ProcessAudit.jsx';
import CtaBand from '../components/home/CtaBand.jsx';

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
      <IoTCommandCenter />
      <IoTHowItWorks />
      <ProcessServices />
      <CoreBelief />
      <ClientValue />
      <Leadership />
      <ProcessAudit />
      <CtaBand />
      <Footer />
    </>
  );
}
