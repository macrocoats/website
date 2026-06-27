import { useEffect } from 'react';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import TechHero from '../components/technology/TechHero.jsx';
import TechApproach from '../components/technology/TechApproach.jsx';
import TechProcess from '../components/technology/TechProcess.jsx';
import TechIoT from '../components/technology/TechIoT.jsx';
import TechCertifications from '../components/technology/TechCertifications.jsx';
import CtaBand from '../components/home/CtaBand.jsx';

export default function TechnologyPage() {
  useEffect(() => {
    document.title = 'Technology — MacroCoats Process-Engineered Chemistry';
    return () => { document.title = 'MacroCoats Pvt Ltd — Process-Engineered Chemistry'; };
  }, []);

  return (
    <>
      <Nav />
      <TechHero />
      <TechApproach />
      <TechProcess />
      <TechIoT />
      <TechCertifications />
      <CtaBand />
      <Footer />
    </>
  );
}
