import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import logoImage from '../assets/logo2.png'

const LoadingScreen = ({ onFinish }) => {

  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);
  const characterRef = useRef(null);
  const imageRef = useRef(null);
  const shutterContentRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  const bgOrbsRef = useRef([]);
  const connectionGridRef = useRef(null);
  const floatingDotsRef = useRef([]);

  bgOrbsRef.current = [];
  floatingDotsRef.current = [];

  const addBgOrbRef = (el) => {
    if (el) bgOrbsRef.current.push(el);
  };
  const addFloatingDotRef = (el) => {
    if (el) floatingDotsRef.current.push(el);
  };

  useEffect(() => {
    // prevent body scroll while loader visible
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // ---------- 1. INITIAL STATES (main content) ----------
    // Hide all content refs only if they exist
    if (shutterContentRef.current) gsap.set(shutterContentRef.current, { opacity: 0, display: 'none' });
    if (leftContentRef.current) gsap.set(leftContentRef.current, { opacity: 0, display: 'none' });
    if (rightContentRef.current) gsap.set(rightContentRef.current, { opacity: 0, display: 'none' });

    // Character starts with w-full class
    if (imageRef.current) {
      imageRef.current.className = 'w-full h-auto object-contain';
    }
    gsap.set(characterRef.current, {
      y: 0,
      x: 0,
      scale: 1.8
    });

    // ---------- 2. BACKGROUND ANIMATIONS (continuous) ----------
    // Floating auroras – very slow drift
    bgOrbsRef.current.forEach((orb, i) => {
      gsap.to(orb, {
        x: `random(-20, 20)`,
        y: `random(-20, 20)`,
        scale: 1.1,
        duration: `random(10, 15)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 1,
        force3D: true,
      });
    });

    // Animated connection grid – subtle horizontal & vertical movement
    if (connectionGridRef.current) {
      gsap.to(connectionGridRef.current, {
        backgroundPosition: '40px 40px',
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'none',
        force3D: true,
      });
    }

    // Tiny floating particles – even slower
    floatingDotsRef.current.forEach((dot, i) => {
      gsap.to(dot, {
        x: `random(-30, 30)`,
        y: `random(-30, 30)`,
        opacity: 0.15,
        duration: `random(12, 20)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5,
        force3D: true,
      });
    });

    // ---------- 3. MAIN TIMELINE ----------
    const moveCharacterToCorner = () => {
      const appRoot = document.getElementById('app-root');
      const charEl = characterRef.current;
      if (!charEl) {
        gsap.to(sectionRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsVisible(false);
            if (onFinish) onFinish();
          },
        });
        return;
      }

      const rect = charEl.getBoundingClientRect();

      // Remove any CSS transform (Tailwind translate) so left/top are accurate
      try {
        charEl.style.transform = 'none';
      } catch (e) {
        // ignore
      }

      // Lock explicit size to avoid layout shift / overflow when moving to body
      charEl.style.width = rect.width + 'px';
      charEl.style.height = rect.height + 'px';
      charEl.style.boxSizing = 'border-box';

      // Move the character container to body so fixed positioning works reliably
      gsap.set(charEl, {
        position: 'fixed',
        left: rect.left + 'px',
        top: rect.top + 'px',
        x: 0,
        y: 0,
        margin: 0,
        zIndex: 9999,
      });
      document.body.appendChild(charEl);

      // Prefer aligning to the hero target if it exists for pixel-perfect placement
      const heroTarget = document.getElementById('hero-character-target');
      let finalLeft;
      let finalTop;
      const finalScale = 0.65;

      if (heroTarget) {
        const targetRect = heroTarget.getBoundingClientRect();
        // center character inside the target area
        finalLeft = targetRect.left + (targetRect.width / 2) - (rect.width * finalScale) / 2;
        finalTop = targetRect.top + (targetRect.height / 2) - (rect.height * finalScale) / 2;
      } else {
        // fallback to top-right corner with safe padding
        finalLeft = Math.max(window.innerWidth - 88, 12); // keep visible
        finalTop = 12;
      }

      // clamp to viewport
      finalLeft = Math.min(Math.max(finalLeft, 8), window.innerWidth - 8);
      finalTop = Math.min(Math.max(finalTop, 8), window.innerHeight - 8);

      gsap.to(charEl, {
        left: finalLeft + 'px',
        top: finalTop + 'px',
        scale: finalScale,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          // Fade in the app behind the loader
          if (appRoot) {
            gsap.to(appRoot, { opacity: 1, duration: 0.6, ease: 'power1.out' });
          }

          // Fade out the loading overlay after a short delay
          gsap.to(sectionRef.current, {
            opacity: 0,
            duration: 0.35,
            delay: 0.25,
            onComplete: () => {
              setIsVisible(false);
              if (onFinish) onFinish();
            },
          });
        },
      });
    };

    const tl = gsap.timeline({
      onStart: () => {
        // When animation starts, change to w-64 class and show other content
        if (imageRef.current) {
          imageRef.current.className = 'w-64 h-auto object-contain';
        }
        // Show other content
        gsap.set(shutterContentRef.current, { display: 'block', opacity: 0, y: '-100%' });
        gsap.set(leftContentRef.current, { display: 'block', opacity: 0, x: '-50%' });
        gsap.set(rightContentRef.current, { display: 'block', opacity: 0, x: '50%' });
      }
    });

    tl.to(characterRef.current, {
      scale: 2,
      duration: 3,
      ease: 'power2.out'
    })
      // .to(characterRef.current, { 
      //   y: 80, 
      //   duration: 1, 
      //   ease: 'power1.inOut' 
      // })
      // .to(characterRef.current, { 
      //   x: -60, 
      //   scale: 0.9,
      //   ease: 'power2.inOut', 
      //   duration: 0.8 
      // })
      // .to(characterRef.current, { 
      //   x: 0, 
      //   y: 0, 
      //   scale: 1.2,
      //   duration: 0.3, 
      //   ease: 'back.out(1.2)' 
      // })
      .to(characterRef.current, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });

    // When main timeline finishes, move character to the corner and reveal app
    tl.call(() => moveCharacterToCorner());

    return () => {
      // restore body overflow
      document.body.style.overflow = previousOverflow || '';
      tl.kill();
      gsap.killTweensOf([bgOrbsRef.current, connectionGridRef.current, floatingDotsRef.current]);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-white overflow-hidden w-full h-full"
      aria-hidden={!isVisible}
    >
      <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center">
        <img
          src={logoImage}
          alt="AI Chat Interface Background"
          className="w-[1200px] opacity-5"
        />
      </div>
      <div
        ref={characterRef}
        className="z-30 flex items-center justify-center"
      >
        <img
          ref={imageRef}
          src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
          alt="Nerdy Buddy"
          className="w-40 h-40 md:w-56 md:h-56 object-contain"
        />
      </div>
    </section>
  );
};

export default LoadingScreen;