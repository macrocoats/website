import { useRef } from 'react';
import useIoTAnimations from '../../hooks/useIoTAnimations.js';
import useRingGauge from '../../hooks/useRingGauge.js';
import useEventLog from '../../hooks/useEventLog.js';
import useMetricOscillator from '../../hooks/useMetricOscillator.js';
import useDosingFlash from '../../hooks/useDosingFlash.js';

const initialEvents = [
  { time: '[14:23]', msg: 'pH drift detected — auto-dosing triggered' },
  { time: '[14:19]', msg: 'Phosphating Tank 1 back in spec' },
  { time: '[14:12]', msg: 'Batch #MC-0041 completed — 98.2% yield' },
  { time: '[14:08]', msg: 'Rinse Stage 3 TDS normal — 85 ppm' },
  { time: '[14:01]', msg: 'Degreaser temp spike — alert sent' },
  { time: '[13:54]', msg: 'Auto-dose: Zn phosphate concentrate +2.1%' },
];

const bathCards = [
  {
    name: 'Phosphating Tank 1',
    status: 'ok',
    ph: 3.2, temp: 48, tds: 1240,
    spark: 'M0,24 C10,22 20,18 30,16 C40,14 45,20 55,18 C65,16 70,10 80,12 C90,14 100,8 120,6',
    fill: '72%',
  },
  {
    name: 'Degreaser Bath',
    status: 'warn',
    ph: 8.1, temp: 55, tds: 420,
    spark: 'M0,16 C8,14 16,18 24,16 C32,14 40,22 50,20 C60,18 70,12 80,14 C90,16 105,10 120,8',
    fill: '58%',
  },
  {
    name: 'Rinse Stage 3',
    status: 'ok',
    ph: 6.9, temp: 22, tds: 85,
    spark: 'M0,20 C15,18 25,22 35,20 C45,18 55,16 65,14 C75,12 90,16 105,12 C110,11 115,10 120,9',
    fill: '41%',
  },
];

function BathCard({ card }) {
  const { ph, temp, tds } = useMetricOscillator(card.ph, card.temp, card.tds);
  return (
    <div className="bath-card" data-ph={card.ph} data-temp={card.temp} data-tds={card.tds} data-status={card.status}>
      <div className="bath-header">
        <span className="bath-name">{card.name}</span>
        <span className={`bath-dot status-${card.status}`}></span>
      </div>
      <div className="bath-metrics">
        <div className="bath-metric"><span className="bm-label">pH</span><span className="bm-val">{ph}</span></div>
        <div className="bath-metric"><span className="bm-label">Temp °C</span><span className="bm-val">{temp}</span></div>
        <div className="bath-metric"><span className="bm-label">TDS ppm</span><span className="bm-val">{tds}</span></div>
      </div>
      <svg className="bath-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none">
        <path className="spark-path" d={card.spark} />
      </svg>
      <div className="bath-dosing-wrap">
        <span className="bath-dosing-label">Pump utilisation</span>
        <div className="bath-dosing-bar">
          <div className="bath-dosing-fill" style={{ '--fill': card.fill }}></div>
        </div>
      </div>
    </div>
  );
}

export default function IoTCommandCenter() {
  const sectionRef = useRef(null);
  const arcRef = useRef(null);
  const scoreRef = useRef(null);
  const dosingRef = useRef(null);

  useIoTAnimations(sectionRef);
  useRingGauge(arcRef, scoreRef);
  const events = useEventLog(initialEvents);
  useDosingFlash(dosingRef);

  return (
    <section className="iot-command" id="iot-dashboard" ref={sectionRef}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <div className="section-head iot-section-head">
          <div className="section-eyebrow">Real-Time · IoT</div>
          <h2 className="section-title">Live Process <em>Intelligence.</em></h2>
        </div>

        <div className="iot-grid">
          {/* LEFT: Bath Monitor Cards */}
          <div className="bath-panel iot-panel-entry">
            {bathCards.map((card) => (
              <BathCard key={card.name} card={card} />
            ))}
          </div>

          {/* CENTER: Ring Gauge + Satellite Chips + Event Log */}
          <div className="gauge-panel iot-panel-entry">
            <div className="health-ring-wrap">
              <svg className="health-ring" viewBox="0 0 200 200">
                <circle className="ring-bg" cx="100" cy="100" r="80" />
                <circle className="ring-arc" cx="100" cy="100" r="80" ref={arcRef} />
              </svg>
              <div className="ring-overlay">
                <span className="ring-num" ref={scoreRef}>0</span><span className="ring-pct">%</span>
                <span className="ring-sublabel">Health Score</span>
              </div>
            </div>
            <div className="ring-title">Overall Process Health</div>

            <div className="satellite-chips">
              <div className="sat-chip">
                <span className="sat-val" data-target="99.4" data-suffix="%">0%</span>
                <span className="sat-label">Uptime</span>
              </div>
              <div className="sat-chip">
                <span className="sat-val" data-target="2" data-suffix="">0</span>
                <span className="sat-label">Active Alerts</span>
              </div>
              <div className="sat-chip">
                <span className="sat-val" data-target="18" data-suffix="">0</span>
                <span className="sat-label">Batches Today</span>
              </div>
              <div className="sat-chip">
                <span className="sat-val" data-target="96.7" data-suffix="%">0%</span>
                <span className="sat-label">Efficiency</span>
              </div>
            </div>

            <div className="event-log-wrap">
              <div className="event-log-head">
                <span className="live-pill">● LIVE</span>
                Event Log
              </div>
              <div className="event-log">
                <div className="event-log-inner">
                  {events.map((ev, i) => (
                    <div className={`event-row${ev.show ? ' show' : ''}`} key={i}>
                      <span className="event-time">{ev.time}</span>
                      <span>{ev.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dosing Timeline */}
          <div className="dosing-panel iot-panel-entry" ref={dosingRef}>
            <div className="dosing-head">Dosing Timeline</div>
            <div className="dosing-feed">
              <div className="dosing-row">
                <div className="dosing-bar-col"><div className="dosing-bar blue"></div></div>
                <div className="dosing-info">
                  <div className="dosing-time">14:23:08</div>
                  <div className="dosing-event">Auto-dose triggered<br />pH correction +0.3 units</div>
                  <span className="dosing-badge live-badge">● LIVE</span>
                </div>
              </div>
              <div className="dosing-row">
                <div className="dosing-bar-col"><div className="dosing-bar green"></div></div>
                <div className="dosing-info">
                  <div className="dosing-time">14:19:44</div>
                  <div className="dosing-event">Bath restored to spec<br />Phosphating Tank 1</div>
                  <span className="dosing-badge auto-badge">✓ Auto-corrected</span>
                </div>
              </div>
              <div className="dosing-row">
                <div className="dosing-bar-col"><div className="dosing-bar amber"></div></div>
                <div className="dosing-info">
                  <div className="dosing-time">14:01:22</div>
                  <div className="dosing-event">Temp spike detected<br />Degreaser Bath — 57°C</div>
                  <span className="dosing-badge warn-badge">⚠ Alert sent</span>
                </div>
              </div>
              <div className="dosing-row">
                <div className="dosing-bar-col"><div className="dosing-bar blue"></div></div>
                <div className="dosing-info">
                  <div className="dosing-time">13:54:11</div>
                  <div className="dosing-event">Scheduled dose cycle<br />Zn concentrate +2.1%</div>
                  <span className="dosing-badge auto-badge">✓ Completed</span>
                </div>
              </div>
              <div className="dosing-row">
                <div className="dosing-bar-col"><div className="dosing-bar purple"></div></div>
                <div className="dosing-info">
                  <div className="dosing-time">13:40:05</div>
                  <div className="dosing-event">Predictive alert<br />TDS trending high — Rinse 3</div>
                  <span className="dosing-badge warn-badge">⚠ Pre-emptive</span>
                </div>
              </div>
              <div className="dosing-row">
                <div className="dosing-bar-col"><div className="dosing-bar green"></div></div>
                <div className="dosing-info">
                  <div className="dosing-time">13:30:00</div>
                  <div className="dosing-event">Shift start — all systems nominal<br />Batch #MC-0041 initiated</div>
                  <span className="dosing-badge auto-badge">✓ System ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
