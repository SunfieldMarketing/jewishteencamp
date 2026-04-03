'use client';
import { useEffect, useRef, useState } from 'react';

export default function BlurFade({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  blur = '8px',
  inView = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(inView);

  useEffect(() => {
    if (inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0px)' : `blur(${blur})`,
        transform: visible ? 'translateY(0)' : `translateY(${yOffset}px)`,
        transition: `opacity ${duration}s ease ${delay}s, filter ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
