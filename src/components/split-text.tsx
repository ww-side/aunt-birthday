import { useEffect, useRef, useState } from 'react';
import { animated, easings, useSprings } from '@react-spring/web';

const AnimatedSpan = animated('span');

export function SplitText({
  text = '',
  delay = 150,
  animationFrom = { opacity: 0, transform: 'translate3d(0,50px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  threshold = 0.2,
  rootMargin = '-50px',
}: {
  text: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
}) {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView ? animationTo : animationFrom,
      delay: i * delay,
      config: { easing: easings.easeOutCubic },
    })),
  );

  return (
    <p
      ref={ref}
      className="split-parent inline overflow-hidden text-center text-5xl max-[1240px]:text-3xl font-semibold break-words whitespace-nowrap"
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block text-center whitespace-nowrap"
        >
          {word.map((letter, letterIndex) => {
            const index =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              letterIndex;

            return (
              <AnimatedSpan
                key={index}
                style={springs[index]}
                className="inline-block transform transition-opacity will-change-transform"
              >
                {letter}
              </AnimatedSpan>
            );
          })}
          <span className="inline-block w-[0.3em]">&nbsp;</span>
        </span>
      ))}
    </p>
  );
}
