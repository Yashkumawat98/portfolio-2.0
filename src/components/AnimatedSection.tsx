import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 800,
  className = ''
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getTransformClasses = () => {
    const baseClasses = 'transition-all ease-out';
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
    }

    switch (direction) {
      case 'left':
        return `${baseClasses} opacity-0 -translate-x-16`;
      case 'right':
        return `${baseClasses} opacity-0 translate-x-16`;
      case 'up':
        return `${baseClasses} opacity-0 translate-y-16`;
      case 'down':
        return `${baseClasses} opacity-0 -translate-y-16`;
      default:
        return `${baseClasses} opacity-0 -translate-x-16`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;