import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Looser spring for a much more liquid, fluid feel
  const springConfig = { damping: 20, stiffness: 150, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.classList.add('hide-default-cursor');

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const tagName = target.tagName ? target.tagName.toLowerCase() : '';
      
      const isClickable = 
        tagName === 'a' || 
        tagName === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      const isTextElement = 
        ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'li'].includes(tagName) && !isClickable;

      setIsHovering(isClickable);
      setIsText(isTextElement);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('hide-default-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer fluid ring with mix-blend-difference */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[10000] hidden md:block mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isClicking ? 0.7 : (isHovering ? 1.6 : (isText ? 1.2 : 1)),
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : (isText ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0)'),
          borderColor: isHovering ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10001] hidden md:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isClicking ? 0 : (isHovering ? 0 : (isText ? 0 : 1)),
          opacity: isHovering || isText || isClicking ? 0 : (isVisible ? 1 : 0)
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
    </>
  );
}
