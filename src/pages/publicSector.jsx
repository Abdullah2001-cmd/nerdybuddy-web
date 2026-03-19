import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Shield,
  Users,
  Globe,
  Clock,
  FileCheck,
  CheckCircle,
  Sparkles,
  Zap,
  Landmark,
  ScrollText,
  Languages,
  Headset,
  TrendingUp,
  Target,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Nerdy Buddy – Public Sector Suite
 * ---------------------------------
 * Premium conversion of the Public Sector HTML sections.
 * Faithful to the original content structure:
 *   – Block 1: Hero (Public Sector headline + description + publick.mp4)
 *   – Block 2: Feature (image left + heading/description + TWO feature columns – 6 items)
 *   – Block 3: KPI counters (88% Community Engagement Boost / 60% 24/7 Availability)
 *
 * Designed with the exact reference UI language:
 *   – Geometric grid background + gradient blobs
 *   – Floating pill badges, split gradient headlines
 *   – Hover animations, frosted glass cards, premium shadows
 *   – Fully responsive, mobile-optimized stacking
 */
const PublicSectorSection = () => {

  const sectionRef = useRef(null);
  const counterRef = useRef(null);
  const navigate = useNavigate();

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [progress, setProgress] = useState(0);
  const buttonRef = useRef(null);
  const hasScrolledToTop = useRef(false);

  // Smooth scroll to top when component mounts
  useEffect(() => {
    if (window.scrollY > 0 && !hasScrolledToTop.current) {
      hasScrolledToTop.current = true;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);

  // Scroll progress and button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / maxScroll) * 100;
      setProgress(scrollPercent);
      setShowScrollButton(scrolled > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (isScrolling) return;
    setIsScrolling(true);

    // Add ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full opacity-30 animate-ripple';
    buttonRef.current?.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => setIsScrolling(false), 1000);
  };


  // ---------- Intersection Observer for fade-in animation ----------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp", "visible");
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // ---------- Counter animation (triggered when counters come into view) ----------
  useEffect(() => {
    const counterElements = document.querySelectorAll(".counter-value");
    const speed = 200;

    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      let current = 0;
      const increment = target / speed;
      const update = () => {
        if (current < target) {
          current += increment;
          el.textContent = Math.ceil(current).toString();
          requestAnimationFrame(update);
        } else {
          el.textContent = target.toString();
        }
      };
      update();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll(".counter-value");
            counters.forEach((counter) => {
              if (counter.textContent === "1") {
                animateCounter(counter);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5, triggerOnce: true }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ---------- Data for feature lists (two columns, 6 items total) ----------
  const featureListLeft = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-public)"
          />
          <defs>
            <linearGradient id="gradient-public" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Real-Time Policy Access",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-public2)"
          />
          <defs>
            <linearGradient id="gradient-public2" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Full Compliance Support",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-public3)"
          />
          <defs>
            <linearGradient id="gradient-public3" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Version Control & Traceability",
    },
  ];

  const featureListRight = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-public4)"
          />
          <defs>
            <linearGradient id="gradient-public4" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Multilingual Interface",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-public5)"
          />
          <defs>
            <linearGradient id="gradient-public5" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "24/7 Availability",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-public6)"
          />
          <defs>
            <linearGradient id="gradient-public6" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Reduced Staff Load",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-[150px]  overflow-hidden opacity-0 translate-y-8 transition-all duration-900 ease-out"
      aria-label="Nerdy Buddy – Public Sector"
    >
      {/* ========== PREMIUM BACKGROUND – GEOMETRIC GRID + GRADIENT BLOBS ========== */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/90 to-white">
        {/* Signature geometric pattern – purple grid */}
        <div className="absolute inset-0 opacity-[0.1]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="public-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B03982" strokeWidth="1" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#public-grid)" />
          </svg>
        </div>
        {/* Soft glowing blobs – depth */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#B03982]/10 via-[#a32c8d]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#733C86]/10 via-[#a32c8d]/10 to-[#B03982]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========== BLOCK 1 – PUBLIC SECTOR HERO (LEFT TEXT / RIGHT VIDEO) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* LEFT COLUMN – HEADLINE + DESCRIPTION (exact copy) */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Floating badge – Public Sector */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/80 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Public Sector</span>
            </div>

            {/* Main heading – split gradient */}
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading">
              <span className="block text-gray-900">Public Sector</span>
              <span className="block mt-2 relative">
                <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                  Transparent Access with Compliance
                </span>
                <span className="absolute -bottom-2 left-0 lg:left-1/4 w-32 lg:w-1/2 h-3 bg-gradient-to-r from-[#B03982]/30 to-[#733C86]/30 blur-xl -z-10"></span>
              </span>
            </h2>

            {/* Description – verbatim from HTML */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Facilitate transparent access to government policies, public programs, and operational guidelines through
              kiosks that support full compliance, version control, and traceability—ideal for municipalities,
              regulatory agencies, and community outreach centers.
            </p>

            {/* subtle stat badges – public sector flavour */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                <Landmark className="w-4 h-4 text-[#B03982]" /> 88% engagement boost
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                <Shield className="w-4 h-4 text-[#733C86]" /> FedRAMP-aligned
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN – VIDEO (publick.mp4) */}
          <div className="relative group">
            <div className="absolute -top-4 -right-4 z-20">
              <span className="px-4 py-2 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white text-xs font-bold rounded-full shadow-xl flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> AI Kiosk in Action
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-white/80 border border-gray-200/80 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <video
                className="w-full h-auto object-cover aspect-video transform group-hover:scale-[1.02] transition-transform duration-700"
                src="https://nerdybuddy.com/wp-content/uploads/2025/07/publick.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                controlsList="nodownload"
              >
                <track kind="captions" label="No captions" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* ========== SPACER (replaces spacer section) ========== */}
        <div className="py-6 lg:py-8"></div>

        {/* ========== BLOCK 2 – PUBLIC SECTOR FEATURE (IMAGE LEFT / TEXT + TWO FEATURE COLUMNS RIGHT) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* LEFT – IMAGE (istockphoto-1795167728) */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-white/80 border border-gray-200/80 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img
                src="https://nerdybuddy.com/wp-content/uploads/2025/06/istockphoto-1795167728-612x612-1.jpg"
                alt="Public sector team with AI"
                className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* RIGHT COLUMN – HEADING, DESCRIPTION, TWO FEATURE COLUMNS (6 items) */}
          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            {/* subtle badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/80 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></div>
              <span className="text-xs font-semibold text-gray-600">GOVERNMENT AI</span>
            </div>

            {/* Heading – exact copy with gradient */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-xl mx-auto lg:mx-0">
              <span className="block">Public Sector –</span>
              <span className="block bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent mt-1">
                Transparent Access with Compliance
              </span>
            </h2>

            {/* Description – verbatim (extended) */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Facilitate clear, accessible communication of government policies, public programs, and operational
              guidelines through AI-powered kiosks. Designed for municipalities, regulatory agencies, and outreach
              centers, these kiosks ensure full compliance, version control, and traceability—empowering citizens with
              accurate, up-to-date information while reducing manual administrative burden.
            </p>

            {/* Two column feature lists – 6 items total */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-6">
              {/* Left column features (3 items) */}
              <div className="flex flex-col items-center lg:items-start space-y-4">
                {featureListLeft.map((feature, idx) => (
                  <div key={`left-${idx}`} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              {/* Right column features (3 items) */}
              <div className="flex flex-col items-center lg:items-start space-y-4">
                {featureListRight.map((feature, idx) => (
                  <div key={`right-${idx}`} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="pt-4">
              <span className="text-sm text-gray-500 flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Deployed in 30+ municipalities
              </span>
            </div>
          </div>
        </div>

        {/* ========== BLOCK 3 – KPI COUNTERS (88% Community Engagement / 60% 24/7 Availability) ========== */}
        <div
          ref={counterRef}
          className="relative max-w-5xl mx-auto mt-16 md:mt-20 lg:mt-24 bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200/80 p-8 md:p-12 shadow-2xl"
        >
          {/* subtle background pattern inside card */}
          <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
            <svg className="w-full h-full">
              <pattern id="public-card-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#B03982" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#public-card-grid)" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Counter 1: 88% Community Engagement Boost */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10">
                  <TrendingUp className="w-8 h-8 text-[#B03982]" />
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="counter-value text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent"
                  data-target="88"
                >
                  1
                </span>
                <span className="text-5xl md:text-6xl font-bold text-gray-900">%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Community Engagement Boost</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Increased citizen participation through better awareness.
              </p>
            </div>

            {/* Counter 2: 60% 24/7 Availability */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10">
                  <Clock className="w-8 h-8 text-[#733C86]" />
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="counter-value text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent"
                  data-target="60"
                >
                  1
                </span>
                <span className="text-5xl md:text-6xl font-bold text-gray-900">%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24/7 Availability</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Information accessible anytime, without staff intervention.
              </p>
            </div>
          </div>

          {/* decorative line */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#B03982]/50 to-[#733C86]/50 rounded-full"></div>
        </div>

        {/* ========== TRUST BAR ========== */}
        <div className="mt-20 text-center text-xs text-gray-400 border-t border-gray-200/60 pt-8">
          <span>© Nerdy Buddy – AI for government, public services & civic engagement</span>
        </div>
      </div>

      <footer className="relative bg-gray-900 text-white py-16 mt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="https://nerdybuddy.com/wp-content/uploads/2024/08/Nerdy-Buddy-scaled.png"
                  alt="Nerdy Buddy"
                  className="h-8 w-auto transition-all duration-300"
                />
              </div>
              <p className="text-gray-400 mb-6">
                Empowering businesses with cutting-edge AI solutions for knowledge management and automation.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/nerdy-buddy/" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@NerdyBuddy-AI" className="text-gray-400 hover:text-white transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* <div>
                                      <h4 className="font-bold text-lg mb-4">Product</h4>
                                      <ul className="space-y-3">
                                          <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                                          <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                                          <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
                                          <li><a href="#" className="text-gray-400 hover:text-white transition">Enterprise</a></li>
                                          <li><a href="#" className="text-gray-400 hover:text-white transition">Roadmap</a></li>
                                      </ul>
                                  </div> */}

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Problem Statement</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Use Cases</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Implementation</a></li>
                            </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                                <li onClick={() => navigate('/about')}><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li onClick={() => navigate('/contact-us')}><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                            </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 AI Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
            </div>
          </div>
        </div>

      </footer>

      {/* ========== ANIMATION STYLES ========== */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp.visible {
          animation: fadeInUp 0.9s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default PublicSectorSection;