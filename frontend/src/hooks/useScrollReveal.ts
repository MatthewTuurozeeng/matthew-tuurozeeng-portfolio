import { useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fades in every element with the `reveal` class the first time it scrolls into view.
 * Elements that enter together are staggered slightly. A MutationObserver picks up
 * elements added later (route changes, filters), so pages only need to add the class.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const root = document.documentElement;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

    root.classList.add('reveal-ready');

    const intersection = new IntersectionObserver(
      (entries) => {
        let batchIndex = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(batchIndex, 5) * 80}ms`;
          el.classList.add('is-visible');
          intersection.unobserve(el);
          batchIndex += 1;
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => intersection.observe(el));
    };

    observeAll();
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersection.disconnect();
      mutations.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);
};

export default useScrollReveal;
