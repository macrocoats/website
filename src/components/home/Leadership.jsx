export default function Leadership() {
  return (
    <section className="leadership">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Leadership</div>
          <h2 className="section-title">Decades of <em>process-critical expertise.</em></h2>
        </div>

        <div className="lead-grid">
          <div className="lead-card">
            <div className="lead-portrait">S</div>
            <div className="lead-info">
              <h4>Mr. Santhanam</h4>
              <div className="lead-role">Technical Director</div>
              <ul>
                <li>40+ years in chemical formulation &amp; surface treatment</li>
                <li>Deep expertise in R&amp;D, process chemistry, and application engineering</li>
                <li>Provides technical leadership across product development and client solutions</li>
              </ul>
            </div>
          </div>

          <div className="lead-card">
            <div className="lead-portrait">A</div>
            <div className="lead-info">
              <h4>Mr. Aswin Kumar</h4>
              <div className="lead-role">Automation &amp; Business Operations</div>
              <ul>
                <li>15+ years in industrial automation &amp; control systems</li>
                <li>Expertise in IoT-driven process monitoring and system integration</li>
                <li>Leads operational excellence, digitalisation, and scalable deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
