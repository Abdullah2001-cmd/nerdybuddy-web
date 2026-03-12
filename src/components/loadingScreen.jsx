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
  const chatBubblesRef = useRef([]);
  const chatBoxRef = useRef(null);
  const typingRef = useRef(null);
  const messagesRef = useRef([]);

  bgOrbsRef.current = [];
  floatingDotsRef.current = [];
  chatBubblesRef.current = [];

  const addBgOrbRef = (el) => {
    if (el) bgOrbsRef.current.push(el);
  };
  const addFloatingDotRef = (el) => {
    if (el) floatingDotsRef.current.push(el);
  };
  const addChatBubbleRef = (el) => {
    if (el) chatBubblesRef.current.push(el);
  };
  const addMessageRef = (el) => {
    if (el) messagesRef.current.push(el);
  };

  useEffect(() => {
    // prevent body scroll while loader visible
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    let reposition; // will hold resize handler if created

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

    // Chat/mind bubbles – subtle float & fade to simulate thinking/chatting
    chatBubblesRef.current.forEach((bubble, i) => {
      gsap.fromTo(
        bubble,
        { opacity: 0, y: 6, scale: 0.6 },
        {
          opacity: 1,
          y: -10,
          scale: 1,
          duration: 0.9 + i * 0.15,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.25,
          force3D: true,
        }
      );
    });

    // chat messages timeline (typing -> reveal) inside the character container
    let messagesTl;
    const messages = ['Hi there 👋', "I'm Nerdy Buddy.", 'Preparing your experience...'];
    if (messagesRef.current && messagesRef.current.length) {
      // ensure message elements start hidden
      gsap.set(messagesRef.current, { opacity: 0, scale: 0.95 });
      if (typingRef.current) gsap.set(typingRef.current, { opacity: 0 });

      messagesTl = gsap.timeline({ repeat: -1 });
      messages.forEach((_, i) => {
        const msgEl = messagesRef.current[i];
        messagesTl.to(typingRef.current, { opacity: 1, duration: 0.10 })
          .to(typingRef.current, { opacity: 0, duration: 0.2, delay: 0.6 })
          .to(msgEl, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
          .to({}, { duration: 0.2 });
      });
    }

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

      // Move the character container to body so fixed positioning works reliably during animation
      gsap.set(charEl, {
        position: 'fixed',
        left: rect.left + 'px',
        top: rect.top + 'px',
        x: 0,
        y: 0,
        margin: 0,
        zIndex: 99999,        // ensure above all site content
        pointerEvents: 'none' // don't block taps/clicks
      });
      document.body.appendChild(charEl);

      // Always move to the bottom-right corner
      let finalLeft;
      let finalTop;
      const finalScale = 0.75 // scale up after moving, initial size unchanged
      const paddingY = 24;      // vertical offset only (move up from bottom)
      // calculate position so the scaled character is fully inside viewport
      const scaledWidth = rect.width * finalScale;
      const scaledHeight = rect.height * finalScale;
      // flush right edge (no horizontal padding)
      finalLeft = window.innerWidth - scaledWidth;
      finalTop = window.innerHeight - scaledHeight - paddingY;
      // vertical clamp only
      finalTop = Math.min(Math.max(finalTop, paddingY), window.innerHeight - scaledHeight - paddingY);
      // horizontal clamp in case of rounding errors
      finalLeft = Math.max(finalLeft, 0); // allow zero exactly

      // reposition function for resize events
      const reposition = () => {
        if (!charEl) return;
        const w = rect.width * finalScale;
        const h = rect.height * finalScale;
        let l = window.innerWidth - w;
        let t = window.innerHeight - h - paddingY;
        t = Math.min(Math.max(t, paddingY), window.innerHeight - h - paddingY);
        l = Math.max(l, 0);
        gsap.set(charEl, { left: l + 'px', top: t + 'px' });
      };
      window.addEventListener('resize', reposition);

      // messages handled outside so they run while loader is visible

      gsap.to(charEl, {
        left: finalLeft + 'px',
        top: finalTop + 'px',
        scale: finalScale,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
            // keep fixed at bottom-right (no hero-target transfer)

          // Fade in the app behind the loader
          if (appRoot) {
            gsap.to(appRoot, { opacity: 1, duration: 0.6, ease: 'power1.out' });
          }

          // Fade out the chat box then the loading overlay after a short delay
          if (chatBoxRef.current) {
            gsap.to(chatBoxRef.current, { opacity: 0, duration: 0.2 });
          }
          gsap.to(sectionRef.current, {
            opacity: 0,
            duration: 0.35,
            delay: 0.25,
            onComplete: () => {
              setIsVisible(false);
              if (messagesTl) messagesTl.kill();
              if (onFinish) onFinish();
            },
          });
        },
      });
    };

    const tl = gsap.timeline({
      onStart: () => {
        // When animation starts, change to a larger class and show other content
        if (imageRef.current) {
          imageRef.current.className = 'w-80 h-auto object-contain';
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
      if (typeof messagesTl !== 'undefined' && messagesTl) messagesTl.kill();
      gsap.killTweensOf([bgOrbsRef.current, connectionGridRef.current, floatingDotsRef.current, chatBubblesRef.current]);
      if (reposition) window.removeEventListener('resize', reposition);
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
        <div className="relative">
          <img
            ref={imageRef}
            src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
            alt="Nerdy Buddy"
            className="w-56 h-56 md:w-72 md:h-72 object-contain"
          />

          {/* Chat/mind bubbles (visual only) */}
          {/* <div className="absolute -top-6 right-20 flex flex-col items-end space-y-1 pointer-events-none" aria-hidden="true">
            <span ref={(el) => addChatBubbleRef(el)} className="w-2 h-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full shadow-md opacity-0 transform-gpu" />
            <span ref={(el) => addChatBubbleRef(el)} className="w-3 h-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full shadow-md opacity-0 transform-gpu" />
            <span ref={(el) => addChatBubbleRef(el)} className="w-4 h-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full shadow-md opacity-0 transform-gpu" />
          </div> */}

          {/* Chat box with typing/messages */}
          <div ref={chatBoxRef} className="absolute left-60 top-10 transform w-40 z-22 bg-white/95 dark:bg-gray-800/90 rounded-lg p-2 shadow-lg text-sm text-gray-900 pointer-events-none" aria-hidden="true">
            <div ref={typingRef} className="mb-1 flex items-center justify-end opacity-0">
              <span className="inline-block w-1.5 h-1.5 bg-[#B03982] rounded-full mr-0.5 animate-pulse" />
              <span className="inline-block w-1.5 h-1.5 bg-[#B03982] rounded-full mr-0.5 animate-pulse" />
              <span className="inline-block w-1.5 h-1.5 bg-[#B03982] rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col items-end space-y-1">
              <div ref={(el) => addMessageRef(el)} className="bg-gradient-to-br from-[#F0E7F4] to-white rounded-md px-3 text-xs opacity-0">Hello!</div>
              <div ref={(el) => addMessageRef(el)} className="bg-gradient-to-br from-[#F0E7F4] to-white rounded-md px-3 text-xs opacity-0">I'm Nerdy Buddy.</div>
              <div ref={(el) => addMessageRef(el)} className="bg-gradient-to-br from-[#F0E7F4] to-white rounded-md px-3 text-xs opacity-0">Preparing your experience...</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoadingScreen;