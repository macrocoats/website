import { useState, useEffect } from 'react';

function oscillate(base, pct) {
  const delta = base * pct;
  return base + (Math.random() * 2 - 1) * delta;
}

export default function useMetricOscillator(basePh, baseTemp, baseTds) {
  const [metrics, setMetrics] = useState({
    ph: basePh.toFixed(1),
    temp: baseTemp,
    tds: baseTds,
  });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const id = setInterval(() => {
      setMetrics({
        ph: oscillate(basePh, 0.02).toFixed(1),
        temp: Math.round(oscillate(baseTemp, 0.02)),
        tds: Math.round(oscillate(baseTds, 0.02)),
      });
    }, 2500);

    return () => clearInterval(id);
  }, [basePh, baseTemp, baseTds]);

  return metrics;
}
