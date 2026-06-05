import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY = { from_name: '', company: '', phone: '', challenge: '' };

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Call or WhatsApp',
    value: '+91 9444961815',
    href: 'tel:9444961815',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
      </svg>
    ),
    label: 'Email us',
    value: 'info@macrocoats.in',
    href: 'mailto:info@macrocoats.in',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    label: 'Response time',
    value: 'Within 24 hours on working days',
    href: null,
  },
];

function SuccessState({ onReset }) {
  return (
    <div className="audit-success">
      <div className="audit-success-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
      <h3>Message Sent</h3>
      <p>Thank you for reaching out — we'll get back to you within 24 hours on working days.</p>
      <div className="audit-success-contact">
        <a href="tel:9444961815">+91 9444961815</a>
        <span>·</span>
        <a href="mailto:info@macrocoats.in">info@macrocoats.in</a>
      </div>
      <button className="audit-reset-btn" onClick={onReset}>Send another message</button>
    </div>
  );
}

export default function ProcessAudit() {
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, fields, { publicKey: PUBLIC_KEY });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="audit-section" id="process-audit">
      <div className="container">
        <div className="audit-inner">
          {/* Left: intro */}
          <div className="audit-intro">
            <div className="section-eyebrow">Get In Touch</div>
            <h2 className="section-title">Reach out to us — <em>we're here to help.</em></h2>
            <p>Whether you need chemistry engineered for your process, have a quality problem to solve, or want to explore IoT monitoring — drop us a message and we'll get back to you.</p>
            <ul className="audit-benefits">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <div className="audit-benefit-icon">{item.icon}</div>
                  <div>
                    <div className="contact-detail-label">{item.label}</div>
                    {item.href ? (
                      <a className="contact-detail-value" href={item.href}>{item.value}</a>
                    ) : (
                      <span className="contact-detail-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form card */}
          <div className="audit-form-card">
            <div className="audit-form-head">
              <h3>Reach Out to Us</h3>
              <p>We respond within 24 hours on working days.</p>
            </div>

            {status === 'success' ? (
              <SuccessState onReset={() => { setFields(EMPTY); setStatus('idle'); }} />
            ) : (
              <form className="audit-form" onSubmit={handleSubmit} noValidate>
                <div className="audit-form-row">
                  <div className="audit-field">
                    <label htmlFor="audit-name">Your Name *</label>
                    <input
                      type="text"
                      id="audit-name"
                      name="from_name"
                      value={fields.from_name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="audit-field">
                    <label htmlFor="audit-company">Company</label>
                    <input
                      type="text"
                      id="audit-company"
                      name="company"
                      value={fields.company}
                      onChange={handleChange}
                      placeholder="Company"
                    />
                  </div>
                </div>

                <div className="audit-field">
                  <label htmlFor="audit-phone">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    id="audit-phone"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="audit-field">
                  <label htmlFor="audit-message">Message *</label>
                  <textarea
                    id="audit-message"
                    name="challenge"
                    value={fields.challenge}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your process, challenge, or what you'd like to discuss..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="audit-error">
                    Something went wrong — please try again or reach us directly at{' '}
                    <a href="mailto:info@macrocoats.in">info@macrocoats.in</a>.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="audit-spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
