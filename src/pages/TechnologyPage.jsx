import { useEffect } from 'react';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import TechHero from '../components/technology/TechHero.jsx';
import CapCompany from '../components/technology/CapCompany.jsx';
import TechProcess from '../components/technology/TechProcess.jsx';
import TechIoT from '../components/technology/TechIoT.jsx';
import CapProducts from '../components/technology/CapProducts.jsx';
import CapPassivation from '../components/technology/CapPassivation.jsx';
import CapOils from '../components/technology/CapOils.jsx';
import TechCertifications from '../components/technology/TechCertifications.jsx';
import CapWhy from '../components/technology/CapWhy.jsx';
import CtaBand from '../components/home/CtaBand.jsx';

export default function TechnologyPage() {
  useEffect(() => {
    document.title = 'Capabilities Brochure 2026 — MacroCoats Process-Engineered Chemistry';
    return () => { document.title = 'MacroCoats Pvt Ltd — Process-Engineered Chemistry'; };
  }, []);

  return (
    <>
      <Nav />
      <TechHero />
      <CapCompany />
      <TechProcess />
      <TechIoT />
      <CapProducts />
      <CapPassivation />
      <CapOils />
      <TechCertifications />
      <CapWhy />
      <CtaBand />
      <Footer />
    </>
  );
}
