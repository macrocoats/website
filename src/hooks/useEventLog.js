import { useState, useEffect } from 'react';

const rotatingMessages = [
  'pH drift detected — auto-dosing triggered',
  'Phosphating Tank 1 back in spec',
  'Batch completed — 98.2% yield',
  'Rinse Stage 3 TDS normal — 85 ppm',
  'Degreaser temp spike — alert sent',
  'Auto-dose: Zn phosphate concentrate +2.1%',
  'Predictive alert — TDS trending high',
];

function formatTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  return `[${h}:${m}]`;
}

export default function useEventLog(initial) {
  const [events, setEvents] = useState(initial.map((ev, i) => ({ ...ev, show: true, id: i })));
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const id = setInterval(() => {
      const msg = rotatingMessages[msgIdx % rotatingMessages.length];
      const newEvent = { time: formatTime(), msg, show: false, id: Date.now() };
      setEvents((prev) => [newEvent, ...prev].slice(0, 10));
      setMsgIdx((i) => i + 1);
      // trigger show class on next tick
      setTimeout(() => {
        setEvents((prev) => prev.map((ev, i) => (i === 0 ? { ...ev, show: true } : ev)));
      }, 16);
    }, 3000);

    return () => clearInterval(id);
  }, [msgIdx]);

  return events;
}
