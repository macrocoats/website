import { useEffect } from 'react';

export default function useDosingFlash(containerRef) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const id = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;
      const firstRow = container.querySelector('.dosing-row');
      if (!firstRow) return;
      firstRow.classList.add('flash-alert');
      setTimeout(() => firstRow.classList.remove('flash-alert'), 800);
    }, 8000);

    return () => clearInterval(id);
  }, [containerRef]);
}
