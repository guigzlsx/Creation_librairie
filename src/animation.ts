/**
 * Anime une propriété CSS numérique d'un élément HTML.
 * @param element L'élément à animer
 * @param property La propriété CSS à animer (ex: 'left', 'top', 'opacity', etc.)
 * @param from Valeur de départ
 * @param to Valeur d'arrivée
 * @param duration Durée de l'animation en ms
 * @param easing Fonction d'interpolation (optionnelle)
 * @returns Une promesse résolue à la fin de l'animation
 */
export function animate(
  element: HTMLElement,
  property: string,
  from: number,
  to: number,
  duration: number,
  easing: (t: number) => number = t => t
): Promise<void> {
  return new Promise(resolve => {
    const start = performance.now();
    function frame(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = from + (to - from) * easing(progress);
      (element.style as any)[property] = value + (property === 'opacity' ? '' : 'px');
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        resolve();
      }
    }
    (element.style as any)[property] = from + (property === 'opacity' ? '' : 'px');
    requestAnimationFrame(frame);
  });
} 