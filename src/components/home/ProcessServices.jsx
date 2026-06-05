export default function ProcessServices() {
  return (
    <section className="process" id="services">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Beyond Chemicals</div>
          <h2 className="section-title">End-to-end process solutions, <em>not just supply.</em></h2>
        </div>

        <div className="flow-diagram">
          <div className="flow-step">
            <div className="flow-step-circle">
              <svg viewBox="0 0 24 24"><path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9" /><path d="M3 12l3-3M3 12l3 3" /></svg>
            </div>
            <div className="flow-step-num">/ 01</div>
            <div className="flow-step-label">Degrease</div>
            <div className="flow-step-desc">Remove oils, soils, and contaminants</div>
          </div>
          <div className="flow-arrow"></div>
          <div className="flow-step">
            <div className="flow-step-circle">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M8 12c2-2 6-2 8 0" /></svg>
            </div>
            <div className="flow-step-num">/ 02</div>
            <div className="flow-step-label">De-rust</div>
            <div className="flow-step-desc">Eliminate oxides and corrosion</div>
          </div>
          <div className="flow-arrow"></div>
          <div className="flow-step">
            <div className="flow-step-circle">
              <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M10 4v16" /></svg>
            </div>
            <div className="flow-step-num">/ 03</div>
            <div className="flow-step-label">Phosphate</div>
            <div className="flow-step-desc">Form protective conversion layer</div>
          </div>
          <div className="flow-arrow"></div>
          <div className="flow-step">
            <div className="flow-step-circle">
              <svg viewBox="0 0 24 24"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /></svg>
            </div>
            <div className="flow-step-num">/ 04</div>
            <div className="flow-step-label">Seal</div>
            <div className="flow-step-desc">Final protection and finishing</div>
          </div>
        </div>

        <div className="service-grid">
          <div className="svc-card">
            <div className="sol-icon">
              <svg viewBox="0 0 24 24"><path d="M14 7l3 3-3 3M10 17l-3-3 3-3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h4>Turnkey Treatment</h4>
            <p>End-to-end chemical treatment executed on a turnkey basis — consistent quality from initial preparation through final protective coatings.</p>
            <ul className="svc-list">
              <li>Reinforcement rod treatment</li>
              <li>Structural steel processing</li>
              <li>Fabricated component finishing</li>
            </ul>
          </div>

          <div className="svc-card">
            <div className="sol-icon">
              <svg viewBox="0 0 24 24"><path d="M12 14a4 4 0 100-8 4 4 0 000 8zM6 21v-1a4 4 0 014-4h4a4 4 0 014 4v1" /></svg>
            </div>
            <h4>Process Consulting</h4>
            <p>Hands-on advisory to optimise formulations, processes, and operational efficiency — from re-engineering to new development.</p>
            <ul className="svc-list">
              <li>Process re-engineering</li>
              <li>Formulation optimisation</li>
              <li>New development support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
