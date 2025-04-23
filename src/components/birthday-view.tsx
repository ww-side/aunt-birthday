import { useEffect, useState } from 'react';
import { SplitText } from './split-text.tsx';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { useSpring, animated } from '@react-spring/web';
import { Button } from './button.tsx';
import { GiftDialog } from './gift-dialog.tsx';

const AnimatedP = animated('p');
const AnimatedSpan = animated('span');

export const BirthdayView = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [openGift, setOpenGift] = useState(false);

  const animationProps1 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 170, friction: 20 },
    delay: 300,
  });

  const animationProps2 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 170, friction: 20 },
    delay: 600,
  });

  const animationProps3 = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 170, friction: 20 },
    delay: 900,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center gap-6">
      <SplitText text="Happy birthday, dear aunt!" />
      <AnimatedP style={animationProps1}>
        Happy Birthday to the most amazing aunt! 🎉💐
      </AnimatedP>
      <AnimatedP style={animationProps2}>
        Remain that powerful and strong woman in your personal and professional
        life. Always be yourself and do only what makes you feel good and
        comfortable. Your grace, confidence, and kindness inspire everyone
        around you. May this year bring you even more joy, success, and moments
        that make your heart smile. Keep shining and living life on your terms —
        you deserve nothing less.
      </AnimatedP>
      <AnimatedSpan style={animationProps3}>
        <Button onClick={() => setOpenGift(true)}>Get a gift</Button>
      </AnimatedSpan>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={showConfetti ? 200 : 0}
      />
      <GiftDialog open={openGift} setOpen={setOpenGift} />
    </section>
  );
};
