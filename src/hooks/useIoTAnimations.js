import { useEffect } from 'react';

export default function useIoTAnimations(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      container.querySelectorAll('.iot-panel-entry').forEach((el) => {
        el.classList.add('visible');
        el.querySelectorAll('.sat-chip').forEach((c) => c.classList.add('visible'));
        el.querySelectorAll('.spark-path').forEach((p) => p.classList.add('drawn'));
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('visible');
            el.querySelectorAll('.sat-chip').forEach((c) => c.classList.add('visible'));
            el.querySelectorAll('.spark-path').forEach((p) => p.classList.add('drawn'));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    container.querySelectorAll('.iot-panel-entry').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}
