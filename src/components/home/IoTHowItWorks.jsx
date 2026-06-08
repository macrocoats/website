import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useIoTAnimations from '../../hooks/useIoTAnimations.js';

export default function IoTHowItWorks() {
  const sectionRef = useRef(null);
  useIoTAnimations(sectionRef);

  return (
    <section className="iot-howitworks" id="iot-howitworks" ref={sectionRef}>
      <div className="hiw-head iot-panel-entry">
        <div className="hiw-eyebrow">How It Works</div>
        <h2 className="hiw-title">Real infrastructure, <em>not vaporware.</em></h2>
        <p className="hiw-subtitle">From sensor to screen in under 2 seconds. Our IoT stack plugs into your existing equipment — no rip-and-replace, no proprietary lock-in.</p>
      </div>

      <div className="setup-diagram iot-panel-entry">
        <div className="setup-node">
          <div className="setup-icon-wrap">
            <div className="setup-num">1</div>
            <div className="setup-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
              </svg>
            </div>
          </div>
          <h3 className="setup-title">Field Sensor</h3>
          <p className="setup-desc">In-bath probes measuring pH, temperature, TDS &amp; liquid level</p>
          <div className="setup-tags">
            <span className="setup-tag">pH probe</span>
            <span className="setup-tag">Temp NTC</span>
            <span className="setup-tag">TDS sensor</span>
            <span className="setup-tag">Level float</span>
          </div>
        </div>

        <div className="setup-connector">
          <div className="setup-connector-line"><div className="flow-dot"></div></div>
          <div className="setup-connector-label">RS485 · 4-20mA</div>
        </div>

        <div className="setup-node">
          <div className="setup-icon-wrap">
            <div className="setup-halo"></div>
            <div className="setup-num">2</div>
            <div className="setup-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="6" width="12" height="12" rx="1.5" />
                <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
                <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
              </svg>
            </div>
          </div>
          <h3 className="setup-title">Edge Controller</h3>
          <p className="setup-desc">On-site unit handles dosing logic, alarms &amp; local failsafe</p>
          <div className="setup-tags">
            <span className="setup-tag">Modbus RTU</span>
            <span className="setup-tag">Modbus TCP</span>
            <span className="setup-tag">RS485</span>
            <span className="setup-tag">PLC-ready</span>
            <span className="setup-tag">SCADA</span>
          </div>
        </div>

        <div className="setup-connector">
          <div className="setup-connector-line accent"><div className="flow-dot"></div></div>
          <div className="setup-connector-label">4G · WiFi · LAN</div>
        </div>

        <div className="setup-node">
          <div className="setup-icon-wrap">
            <div className="setup-num">3</div>
            <div className="setup-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19a4.5 4.5 0 1 0-1.43-8.77 6 6 0 0 0-11.49 2A3.5 3.5 0 0 0 5 19h12.5z" />
              </svg>
            </div>
          </div>
          <h3 className="setup-title">Cloud Platform</h3>
          <p className="setup-desc">Secure data ingestion, storage, analytics &amp; alert engine</p>
          <div className="setup-tags">
            <span className="setup-tag">MQTT</span>
            <span className="setup-tag">HTTPS/TLS</span>
            <span className="setup-tag">REST API</span>
            <span className="setup-tag">AWS hosted</span>
          </div>
        </div>

        <div className="setup-connector">
          <div className="setup-connector-line"><div className="flow-dot"></div></div>
          <div className="setup-connector-label">HTTPS · WebSocket</div>
        </div>

        <div className="setup-node">
          <div className="setup-icon-wrap">
            <div className="setup-num">4</div>
            <div className="setup-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="4" width="19" height="13" rx="1.5" />
                <path d="M8 21h8M12 17v4" />
                <path d="M6 13l3-3 2 2 4-5" />
              </svg>
            </div>
          </div>
          <h3 className="setup-title">Dashboard</h3>
          <p className="setup-desc">Web &amp; mobile interface — accessible anywhere, any device</p>
          <div className="setup-tags">
            <span className="setup-tag">Web app</span>
            <span className="setup-tag">Mobile</span>
            <span className="setup-tag">WhatsApp alerts</span>
            <span className="setup-tag">Email reports</span>
          </div>
        </div>
      </div>

      <div className="hiw-head iot-panel-entry" style={{ marginTop: '48px', textAlign: 'center' }}>
        <Link
          to="/blog/iot-bath-monitoring-phosphating-lines"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--accent-gold)', fontFamily: 'var(--mono)', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}
        >
          Read: IoT Bath Monitoring in Practice — 90-day results from a Tier-1 phosphating line
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </section>
  );
}
