import { useState, useEffect, useRef } from "react";

/**
 * useCountUp — chạy số từ 0 → target khi element vào viewport
 * @param {number} target  — số đích
 * @param {number} duration — thời gian (ms)
 * @param {boolean} enabled — bật/tắt
 */
export default function useCountUp(target, duration = 1800, enabled = true) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [enabled]);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * (target - startValue) + startValue));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return { count, ref };
}
