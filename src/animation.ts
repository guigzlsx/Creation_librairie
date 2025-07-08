/**
 * @param element 
 * @param property 
 * @param from 
 * @param to 
 * @param duration 
 * @param easing 
 * @returns
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

/**
 * @param element
 * @param angle
 * @param 
 */
export function animateRotate(
  element: HTMLElement,
  angle: number = 360,
  duration: number = 800
): Promise<void> {
  return new Promise(resolve => {
    const start = performance.now();
    function frame(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const currentAngle = angle * t;
      element.style.transform = `translateY(-50%) rotate(${currentAngle}deg)`;
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        element.style.transform = `translateY(-50%) rotate(0deg)`;
        resolve();
      }
    }
    requestAnimationFrame(frame);
  });
} 