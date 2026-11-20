import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${show ? "show" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}