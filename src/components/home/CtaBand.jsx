export default function CtaBand() {
  return (
    <section className="cta-band" id="contact">
      <div className="cta-inner">
        <div>
          <div className="section-eyebrow" style={{ color: 'var(--accent-bright)' }}>
            <span style={{ background: 'var(--accent-bright)' }}></span>Get in Touch
          </div>
          <h2>Let's optimise your <em>surface treatment process.</em></h2>
          <p>Whether you're scaling a phosphating line, addressing inconsistency across plants, or moving to chromium-free systems — our team is ready to engineer chemistry around your process.</p>
        </div>

        <div className="cta-contact">
          <a href="tel:9444961815" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div className="contact-text">
              <small>Call us</small>
              <strong>+91 9444961815</strong>
            </div>
          </a>

          <a href="mailto:info@macrocoats.in" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>
            <div className="contact-text">
              <small>Email us</small>
              <strong>info@macrocoats.in</strong>
            </div>
          </a>

          <a href="#process-audit" className="btn-primary" style={{ justifyContent: 'center' }}>
            Request a Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
