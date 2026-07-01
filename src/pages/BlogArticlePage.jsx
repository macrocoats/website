import { lazy, Suspense, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogNav from '../components/blog/BlogNav.jsx';
import BlogFooter from '../components/blog/BlogFooter.jsx';

const ARTICLE_MAP = {
  'inconsistent-salt-spray-test-results-phosphating-bath': {
    component: lazy(() => import('../components/blog/articles/SaltSprayArticle.jsx')),
    title: 'Why Your Salt-Spray Test Results Are Inconsistent — MacroCoats',
  },
  'zinc-phosphate-vs-iron-phosphate-vs-manganese-phosphate': {
    component: lazy(() => import('../components/blog/articles/PhosphateSelectionArticle.jsx')),
    title: 'Zinc Phosphate vs Iron Phosphate vs Manganese Phosphate: The Selection Guide — MacroCoats',
  },
  'iot-bath-monitoring-phosphating-lines': {
    component: lazy(() => import('../components/blog/articles/IoTMonitoringArticle.jsx')),
    title: 'IoT Bath Monitoring for Phosphating Lines — MacroCoats',
  },
  'chromium-free-phosphating-india-tier1-automotive': {
    component: lazy(() => import('../components/blog/articles/ChromiumFreeArticle.jsx')),
    title: 'Chromium-Free Phosphating in India: Technical and Regulatory Guide — MacroCoats',
  },
  'pre-treatment-chemistry-phosphating-lines': {
    component: lazy(() => import('../components/blog/articles/PreTreatmentArticle.jsx')),
    title: 'Pre-Treatment Chemistry for Phosphating Lines — MacroCoats',
  },
  'reading-phosphating-sludge-bath-process-chemistry': {
    component: lazy(() => import('../components/blog/articles/PhosphatingSludgeArticle.jsx')),
    title: 'Reading Your Phosphating Sludge: What Your Bath Waste Tells You — MacroCoats',
  },
  'post-treatment-sealer-passivation-salt-spray': {
    component: lazy(() => import('../components/blog/articles/SealerPassivationArticle.jsx')),
    title: 'After the Phosphate Bath: Why the Sealer Stage Determines Your Salt-Spray Hours — MacroCoats',
  },
  'water-quality-hard-water-phosphating-bath': {
    component: lazy(() => import('../components/blog/articles/WaterQualityArticle.jsx')),
    title: 'The Water Quality Problem in Phosphating — MacroCoats',
  },
  'real-cost-phosphating-bath-failures': {
    component: lazy(() => import('../components/blog/articles/BathFailureCostArticle.jsx')),
    title: "The Real Cost of Phosphating Bath Failures: A Plant Manager's Calculation Guide — MacroCoats",
  },
  'coating-adhesion-failure-root-cause-analysis': {
    component: lazy(() => import('../components/blog/articles/AdhesionFailureArticle.jsx')),
    title: 'Coating Adhesion Failures: A Root Cause Analysis Framework — MacroCoats',
  },
  'accelerator-chemistry-nitrite-nitrate-sludge': {
    component: lazy(() => import('../components/blog/articles/AcceleratorChemistryArticle.jsx')),
    title: 'Accelerator Chemistry in Phosphating Baths: Nitrite, Nitrate, and Why the Wrong Choice Costs You Sludge — MacroCoats',
  },
  'iatf-16949-surface-treatment-audit-checklist': {
    component: lazy(() => import('../components/blog/articles/IATF16949AuditArticle.jsx')),
    title: 'The IATF 16949 Surface Treatment Audit: What Your Phosphating Line Needs to Pass — MacroCoats',
  },
  'water-break-test-phosphating-surface-preparation': {
    component: lazy(() => import('../components/blog/articles/WaterBreakTestArticle.jsx')),
    title: 'The Water-Break Test: The 10-Second Check That Predicts Your Phosphating Coating Quality — MacroCoats',
  },
  'digital-twin-phosphating-lines-partial-automation': {
    component: lazy(() => import('../components/blog/articles/DigitalTwinArticle.jsx')),
    title: 'Digital Twin for Phosphating Lines: What It Means for a Plant That Isn\'t Fully Automated Yet — MacroCoats',
  },
  'surface-treatment-indian-railways-corrosion': {
    component: lazy(() => import('../components/blog/articles/RailwaysCorrosionArticle.jsx')),
    title: 'Surface Treatment for Indian Railways: Materials, Standards, and Corrosion Protection Requirements — MacroCoats',
  },
  'auto-dosing-systems-closed-loop-chemical-baths': {
    component: lazy(() => import('../components/blog/articles/AutoDosingArticle.jsx')),
    title: 'Auto-Dosing Systems for Chemical Baths: How Closed-Loop Control Eliminates Human Error — MacroCoats',
  },
  'free-acid-vs-total-acid-phosphating': {
    component: lazy(() => import('../components/blog/articles/FreeAcidTotalAcidArticle.jsx')),
    title: 'Free Acid vs Total Acid: The Two Numbers Every Phosphating Operator Must Understand — MacroCoats',
  },
  'oee-chemistry-bath-downtime-plant-efficiency': {
    component: lazy(() => import('../components/blog/articles/OEEChemistryArticle.jsx')),
    title: "OEE and Chemistry: Why Bath Downtime Is an Invisible Line Item on Your Plant's Efficiency Report — MacroCoats",
  },
  'degreasing-chemistry-alkaline-cleaners-oil-carryover': {
    component: lazy(() => import('../components/blog/articles/DegreasingChemistryArticle.jsx')),
    title: 'Degreasing Chemistry Explained: Alkaline Cleaners, Temperature, and the Oil Carry-Over Problem — MacroCoats',
  },
  'multi-plant-chemical-standardization-india': {
    component: lazy(() => import('../components/blog/articles/MultiPlantStandardizationArticle.jsx')),
    title: 'Multi-Plant Chemical Standardization: Why Indian Manufacturers Are Moving to Single-Supplier Process Chemistry — MacroCoats',
  },
  'coating-weight-measurement-strip-weigh-xrf-gravimetric': {
    component: lazy(() => import('../components/blog/articles/CoatingWeightMeasurementArticle.jsx')),
    title: 'Coating Weight Measurement Methods: Strip-and-Weigh vs XRF vs Gravimetric — MacroCoats',
  },
  'cpcb-effluent-norms-surface-treatment-etp': {
    component: lazy(() => import('../components/blog/articles/CPCBEffluentNormsArticle.jsx')),
    title: 'CPCB Effluent Norms for Surface Treatment Plants: What Changed and What It Means for Your ETP — MacroCoats',
  },
  'astm-b117-salt-spray-testing-standard-explained': {
    component: lazy(() => import('../components/blog/articles/AstmB117SaltSprayArticle.jsx')),
    title: 'ASTM B117 Salt Spray Testing: What the Standard Actually Requires and Where Plants Get It Wrong — MacroCoats',
  },
  'reach-export-compliance-tier1-eu-customers': {
    component: lazy(() => import('../components/blog/articles/ReachExportComplianceArticle.jsx')),
    title: 'REACH and Export Compliance: What Indian Tier-1 Suppliers Need to Document for EU Customers — MacroCoats',
  },
  'vci-rust-preventive-oils-transit-storage-protection': {
    component: lazy(() => import('../components/blog/articles/VciRustPreventiveOilsArticle.jsx')),
    title: 'VCI and Rust Preventive Oils: Choosing the Right Transit and Storage Protection — MacroCoats',
  },
  'two-wheeler-manufacturing-surface-treatment-requirements': {
    component: lazy(() => import('../components/blog/articles/TwoWheelerSurfaceTreatmentArticle.jsx')),
    title: 'Two-Wheeler Manufacturing and Surface Treatment: Coating Requirements for High-Volume Lines — MacroCoats',
  },
  'heavy-engineering-corrosion-protection-large-components': {
    component: lazy(() => import('../components/blog/articles/HeavyEngineeringCorrosionArticle.jsx')),
    title: 'Heavy Engineering Corrosion Protection: Coating Strategies for Large, Slow-Cycle Components — MacroCoats',
  },
};

const ArticleFallback = () => (
  <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--slate)', fontFamily: 'var(--sans)', fontSize: '15px' }}>
    Loading article…
  </div>
);

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = ARTICLE_MAP[slug];

  useEffect(() => {
    if (article) document.title = article.title;
    return () => { document.title = 'MacroCoats — Process-Engineered Chemical Solutions'; };
  }, [article]);

  if (!article) {
    return (
      <>
        <BlogNav />
        <div style={{ padding: '120px 48px', textAlign: 'center', fontFamily: 'var(--sans)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--mist)', marginBottom: '20px' }}>404 — Not Found</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 500, color: 'var(--ink)', marginBottom: '16px' }}>Article not found</h2>
          <p style={{ color: 'var(--slate)', marginBottom: '32px' }}>This article doesn't exist or may have moved.</p>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: 500, textDecoration: 'none', fontSize: '14px' }}>
            ← Back to all articles
          </Link>
        </div>
        <BlogFooter />
      </>
    );
  }

  const ArticleComponent = article.component;
  return (
    <>
      <BlogNav />
      <Suspense fallback={<ArticleFallback />}>
        <ArticleComponent />
      </Suspense>
      <BlogFooter />
    </>
  );
}
