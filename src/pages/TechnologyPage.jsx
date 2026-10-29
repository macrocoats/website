import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import TechHero from '../components/technology/TechHero.jsx';
import CapCompany from '../components/technology/CapCompany.jsx';
import TechProcess from '../components/technology/TechProcess.jsx';
import TechIoT from '../components/technology/TechIoT.jsx';
import CapProducts from '../components/technology/CapProducts.jsx';
import CapPassivation from '../components/technology/CapPassivation.jsx';
import CapOils from '../components/technology/CapOils.jsx';
import CapWhy from '../components/technology/CapWhy.jsx';
import CtaBand from '../components/home/CtaBand.jsx';
import Seo, { SITE } from '../components/Seo.jsx';

export default function TechnologyPage() {
  return (
    <>
      <Seo
        title="Surface Treatment Technology & Process Capabilities | MacroCoats"
        description="See MacroCoats capabilities in metal pretreatment chemistry, phosphating, passivation, corrosion protection, line audits and IoT bath monitoring."
        path="/technology"
        image={`${SITE}/images/hero-surface-treatment-plant.webp`}
      />
      <Nav />
      <TechHero />
      <CapCompany />
      <TechProcess />
      <TechIoT />
      <CapProducts />
      <CapPassivation />
      <CapOils />
      <CapWhy />
      <CtaBand />
      <Footer />
    </>
  );
}
