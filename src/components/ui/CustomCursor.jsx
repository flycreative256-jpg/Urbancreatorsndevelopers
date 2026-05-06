import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth the mouse movement for the outer ring
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, textarea, select {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Central Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Outer Animated Ring */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-[9998] hidden md:flex items-center justify-center transition-all duration-300"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 50 : isClicking ? 30 : 40,
          height: isHovering ? 50 : isClicking ? 30 : 40,
          borderColor: isHovering ? 'rgba(194,149,69,0.8)' : 'rgba(194,149,69,0.4)',
          backgroundColor: isHovering ? 'rgba(194,149,69,0.1)' : 'transparent',
        }}
      />
    </>
  );
}
