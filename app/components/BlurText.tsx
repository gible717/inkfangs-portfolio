'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  delay?: number;
  stepDuration?: number;
  blur?: string;
  yOffset?: number;
  startDelay?: number;
  onAnimationComplete?: () => void;
}

export default function BlurText({
  text,
  className = '',
  animateBy = 'words',
  direction = 'top',
  delay = 100,
  stepDuration = 0.4,
  blur = '8px',
  yOffset = 20,
  startDelay = 0,
  onAnimationComplete,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle startDelay
  useEffect(() => {
    if (isInView) {
      if (startDelay > 0) {
        const timer = setTimeout(() => {
          setShouldStart(true);
        }, startDelay * 1000);
        return () => clearTimeout(timer);
      } else {
        setShouldStart(true);
      }
    }
  }, [isInView, startDelay]);

  // Split text into words or letters
  const elements = animateBy === 'words'
    ? text.split(' ')
    : text.split('');

  // Calculate initial y position based on direction
  const initialY = direction === 'top' ? -yOffset : yOffset;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: initialY,
      filter: `blur(${blur})`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: stepDuration,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={shouldStart ? 'visible' : 'hidden'}
      onAnimationComplete={() => {
        if (shouldStart && onAnimationComplete) {
          onAnimationComplete();
        }
      }}
      style={{ willChange: 'transform, filter, opacity' }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{
            marginRight: animateBy === 'words' ? '0.25em' : undefined,
            whiteSpace: element === ' ' ? 'pre' : undefined,
          }}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </motion.span>
  );
}
