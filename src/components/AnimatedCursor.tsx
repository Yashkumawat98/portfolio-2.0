import React, { useEffect, useState } from 'react';

interface AnimatedCursorProps {
  isDark: boolean;
}

const AnimatedCursor: React.FC<AnimatedCursorProps> = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', updateMousePosition);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out ${
          isDark ? 'bg-cyan-400' : 'bg-blue-500'
        } ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
          mixBlendMode: 'difference'
        }}
      />
      
      {/* Cursor trail */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out border-2 ${
          isDark ? 'border-cyan-400/50' : 'border-blue-500/50'
        } ${isHovering ? 'scale-200 border-opacity-100' : 'scale-100 border-opacity-50'}`}
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      />
    </>
  );
};

export default AnimatedCursor;