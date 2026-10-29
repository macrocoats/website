import BlogNav from '../components/blog/BlogNav.jsx';
import BlogFooter from '../components/blog/BlogFooter.jsx';
import ProcessAudit from '../components/home/ProcessAudit.jsx';
import Seo, { SITE } from '../components/Seo.jsx';

export const PROCESS_AUDIT_TITLE = 'Free Process Chemistry Audit — MacroCoats';

export default function ProcessAuditPage() {
  return (
    <>
      <Seo
        title={PROCESS_AUDIT_TITLE}
        description="Book a free process chemistry audit with a plant review, bath-log analysis and written recommendations for your phosphating or metal surface treatment line."
        path="/process-audit"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Industrial Surface Treatment Process Chemistry Audit',
          description: 'Plant visit, bath-log review and written process recommendations for industrial phosphating and metal surface treatment lines.',
          provider: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'MacroCoats Pvt. Ltd.' },
          areaServed: { '@type': 'Country', name: 'India' },
          url: `${SITE}/process-audit`,
        }}
      />
      <BlogNav />
      <ProcessAudit headingLevel="h1" />
      <BlogFooter />
    </>
  );
}
