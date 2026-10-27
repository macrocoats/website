import { useEffect } from 'react';
import BlogNav from '../components/blog/BlogNav.jsx';
import BlogFooter from '../components/blog/BlogFooter.jsx';
import ProcessAudit from '../components/home/ProcessAudit.jsx';

export const PROCESS_AUDIT_TITLE = 'Free Process Chemistry Audit — MacroCoats';

export default function ProcessAuditPage() {
  useEffect(() => {
    document.title = PROCESS_AUDIT_TITLE;
    return () => { document.title = 'MacroCoats — Process-Engineered Chemical Solutions'; };
  }, []);

  return (
    <>
      <BlogNav />
      <ProcessAudit />
      <BlogFooter />
    </>
  );
}
