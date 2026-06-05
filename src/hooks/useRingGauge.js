import { useEffect } from 'react';

const TARGET_SCORE = 94;
const CIRCUMFERENCE = 2 * Math.PI * 80; // r=80

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateNumber(el, target, duration, suffix = '') {
  const start = performance.now();
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.round(easeOut(progress) * target * 10) / 10;
    el.textContent = Number.isInteger(target) ? Math.round(value) : value.toFixed(1);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

export default function useRingGauge(arcRef, scoreRef) {
  useEffect(() => {
    const arc = arcRef.current;
    const score = scoreRef.current;
    if (!arc || !score) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            observer.disconnect();

            if (reduced) {
              arc.style.strokeDashoffset = CIRCUMFERENCE * (1 - TARGET_SCORE / 100);
              score.textContent = TARGET_SCORE;
              // animate satellite chip counters
              document.querySelectorAll('.sat-chip .sat-val[data-target]').forEach((el) => {
                const t = parseFloat(el.dataset.target);
                el.textContent = t + (el.dataset.suffix || '');
              });
              return;
            }

            // Animate ring
            arc.style.strokeDasharray = CIRCUMFERENCE;
            arc.style.strokeDashoffset = CIRCUMFERENCE;
            const startTime = performance.now();
            const duration = 1800;
            function animateRing(now) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = easeOut(progress);
              const offset = CIRCUMFERENCE * (1 - (eased * TARGET_SCORE) / 100);
              arc.style.strokeDashoffset = offset;
              const currentScore = Math.round(eased * TARGET_SCORE);
              score.textContent = currentScore;
              if (progress < 1) requestAnimationFrame(animateRing);
              else score.textContent = TARGET_SCORE;
            }
            requestAnimationFrame(animateRing);

            // Animate satellite chip counters
            document.querySelectorAll('.sat-chip .sat-val[data-target]').forEach((el) => {
              const target = parseFloat(el.dataset.target);
              const suffix = el.dataset.suffix || '';
              animateNumber(el, target, 1200, suffix);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const gaugePanels = document.querySelectorAll('.gauge-panel');
    if (gaugePanels.length) observer.observe(gaugePanels[0]);
    return () => observer.disconnect();
  }, [arcRef, scoreRef]);
}
