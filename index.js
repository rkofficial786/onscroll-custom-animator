import { useState, useEffect, useRef } from "react";

const useOnScrollDetector = () => {
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isAnimationTriggered) {
          setIsAnimationTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isAnimationTriggered]);

  return { ref, isAnimationTriggered };
};

export default useOnScrollDetector;
