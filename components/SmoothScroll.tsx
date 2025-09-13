"use client";

import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const velocityRef = useRef(0);
  const isScrollingRef = useRef(false);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    
    // Inertia settings
    const friction = 0.92; // Higher = more slippery (0.95 = very icy, 0.85 = less icy)
    const minVelocity = 0.5;
    const velocityMultiplier = 0.3; // How much of the initial velocity to keep
    
    const applyInertia = () => {
      if (Math.abs(velocityRef.current) > minVelocity) {
        velocityRef.current *= friction;
        
        const currentScroll = window.scrollY;
        const newScroll = currentScroll + velocityRef.current;
        
        // Check boundaries
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (newScroll >= 0 && newScroll <= maxScroll) {
          window.scrollTo({
            top: newScroll,
            behavior: 'auto' // Use auto for immediate positioning
          });
        } else {
          velocityRef.current = 0;
        }
        
        animationFrameRef.current = requestAnimationFrame(applyInertia);
      } else {
        velocityRef.current = 0;
        isScrollingRef.current = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      
      // Calculate velocity based on scroll delta
      const instantVelocity = e.deltaY * velocityMultiplier;
      
      // Add to existing velocity for cumulative effect
      if (isScrollingRef.current) {
        velocityRef.current += instantVelocity;
      } else {
        velocityRef.current = instantVelocity;
      }
      
      // Apply immediate scroll
      const immediateScroll = window.scrollY + e.deltaY * 0.8;
      window.scrollTo({
        top: immediateScroll,
        behavior: 'auto'
      });
      
      // Cancel previous animation and start new inertia
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        animationFrameRef.current = requestAnimationFrame(applyInertia);
      }
    };

    // Add smooth scrolling CSS
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-behavior: auto !important; /* We handle smoothness manually */
        scroll-padding-top: 80px;
      }
      
      body {
        -webkit-overflow-scrolling: touch;
        overscroll-behavior-y: contain;
      }
    `;
    document.head.appendChild(style);

    // Use passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;