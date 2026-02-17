import React, { useEffect, useRef } from "react";
import {
  Headset,
  Shield,
  Clock,
  CheckCircle,
  Sparkles,
  Zap,
  FileText,
  TrendingDown,
  Users,
  Wifi,
  Building2,
  PhoneCall,
  Globe,
  Bot,
  Search,
} from "lucide-react";

/**
 * Nerdy Buddy – Telecom & Service Centers Suite
 * ----------------------------------------------
 * Premium conversion of the Telecom & Service Centers HTML sections.
 * Faithful to the original content structure:
 *   – Block 1: Hero (Telecom & Service Centers headline + description + telecom_usecase.mp4)
 *   – Block 2: Feature (image left + heading/description + TWO feature columns – 6 items)
 *   – Block 3: KPI counters (93% Reduced Downtime / 100% Faster Issue Resolution)
 *
 * Designed with the exact reference UI language:
 *   – Geometric grid background + gradient blobs
 *   – Floating pill badges, split gradient headlines
 *   – Hover animations, frosted glass cards, premium shadows
 *   – Fully responsive, mobile-optimized stacking
 */
const TelecomSection = () => {

  const sectionRef = useRef(null);
  const counterRef = useRef(null);

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
            fill="url(#gradient-telecom)"
          />
          <defs>
            <linearGradient id="gradient-telecom" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Ask for SOPs Instantly",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-telecom2)"
          />
          <defs>
            <linearGradient id="gradient-telecom2" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Search All Docs at Once",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-telecom3)"
          />
          <defs>
            <linearGradient id="gradient-telecom3" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Smart, Contextual Answers",
    },
  ];

  const featureListRight = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-telecom4)"
          />
          <defs>
            <linearGradient id="gradient-telecom4" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Secure, Role-Based Access",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-telecom5)"
          />
          <defs>
            <linearGradient id="gradient-telecom5" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Cut Training & Support Time",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-telecom6)"
          />
          <defs>
            <linearGradient id="gradient-telecom6" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Stay Synced with Live Docs",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-[150px] pb-20 md:pb-28 lg:pb-32 overflow-hidden opacity-0 translate-y-8 transition-all duration-900 ease-out"
      aria-label="Nerdy Buddy – Telecom & Service Centers"
    >
      {/* ========== PREMIUM BACKGROUND – GEOMETRIC GRID + GRADIENT BLOBS ========== */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/90 to-white">
        {/* Signature geometric pattern – purple grid */}
        <div className="absolute inset-0 opacity-[0.1]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="telecom-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B03982" strokeWidth="1" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#telecom-grid)" />
          </svg>
        </div>
        {/* Soft glowing blobs – depth */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#B03982]/10 via-[#a32c8d]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#733C86]/10 via-[#a32c8d]/10 to-[#B03982]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========== BLOCK 1 – TELECOM & SERVICE CENTERS HERO (LEFT TEXT / RIGHT VIDEO) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* LEFT COLUMN – HEADLINE + DESCRIPTION (exact copy) */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Floating badge – Telecom & Service Centers */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/80 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Telecom & Service Centers</span>
            </div>

            {/* Main heading – split gradient */}
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading">
              <span className="block text-gray-900">Telecom & Service Centers</span>
              <span className="block mt-2 relative">
                <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                  Instant Answers, Zero Wait
                </span>
                <span className="absolute -bottom-2 left-0 lg:left-1/4 w-32 lg:w-1/2 h-3 bg-gradient-to-r from-[#B03982]/30 to-[#733C86]/30 blur-xl -z-10"></span>
              </span>
            </h2>

            {/* Description – verbatim from HTML */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Elevate your telecom and service centers with interactive kiosks that deliver instant answers to customer
              questions—right from service policies to troubleshooting steps. With built-in chatbot support, reduce wait
              times, free up staff, and ensure every customer gets fast, accurate, and consistent information—anytime,
              on-site.
            </p>

            {/* subtle stat badges – telecom flavour */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                <Clock className="w-4 h-4 text-[#B03982]" /> 93% less downtime
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                <Headset className="w-4 h-4 text-[#733C86]" /> 100% faster resolution
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN – VIDEO (telecom_usecase.mp4) */}
          <div className="relative group">
            <div className="absolute -top-4 -right-4 z-20">
              <span className="px-4 py-2 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white text-xs font-bold rounded-full shadow-xl flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> AI Kiosk + Chatbot
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-white/80 border border-gray-200/80 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <video
                className="w-full h-auto object-cover aspect-video transform group-hover:scale-[1.02] transition-transform duration-700"
                src="https://nerdybuddy.com/wp-content/uploads/2025/07/telecom_usecase.mp4"
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

        {/* ========== BLOCK 2 – AI-POWERED KIOSKS FOR EVERY INDUSTRY (IMAGE LEFT / TEXT + TWO FEATURE COLUMNS RIGHT) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* LEFT – IMAGE (kisok.png) */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-white/80 border border-gray-200/80 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img
                src="https://nerdybuddy.com/wp-content/uploads/2025/06/kisok.png"
                alt="AI-powered kiosk for service centers"
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
              <span className="text-xs font-semibold text-gray-600">UNIVERSAL AI KIOSK</span>
            </div>

            {/* Heading – exact copy with gradient */}
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading">
              <span className="block">AI-Powered Kiosks</span>
              <span className="block bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent mt-1">
                for Every Industry
              </span>
            </h2>

            {/* Description – verbatim */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Nerdy Buddy brings intelligent, self-service support to telecom, healthcare, banking, education, retail,
              airports, and even public offices. Whether it's patient info, banking policies, student support, or
              customer service, Nerdy Buddy ensures fast, accurate, and secure information—anytime, anywhere.
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
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Deployed in 50+ service centers
              </span>
            </div>
          </div>
        </div>

        {/* ========== BLOCK 3 – KPI COUNTERS (93% Reduced Downtime / 100% Faster Issue Resolution) ========== */}
        <div
          ref={counterRef}
          className="relative max-w-5xl mx-auto mt-16 md:mt-20 lg:mt-24 bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200/80 p-8 md:p-12 shadow-2xl"
        >
          {/* subtle background pattern inside card */}
          <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
            <svg className="w-full h-full">
              <pattern id="telecom-card-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#B03982" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#telecom-card-grid)" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Counter 1: 93% Reduced Downtime */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10">
                  <TrendingDown className="w-8 h-8 text-[#B03982]" />
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="counter-value text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent"
                  data-target="93"
                >
                  1
                </span>
                <span className="text-5xl md:text-6xl font-bold text-gray-900">%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Reduced Downtime</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Quick answers to operational queries mean less back-and-forth.
              </p>
            </div>

            {/* Counter 2: 100% Faster Issue Resolution */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10">
                  <Zap className="w-8 h-8 text-[#733C86]" />
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span
                  className="counter-value text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent"
                  data-target="100"
                >
                  1
                </span>
                <span className="text-5xl md:text-6xl font-bold text-gray-900">%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Faster Issue Resolution</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Teams solve customer problems faster with instant SOP insights.
              </p>
            </div>
          </div>

          {/* decorative line */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#B03982]/50 to-[#733C86]/50 rounded-full"></div>
        </div>

        {/* ========== TRUST BAR ========== */}
        <div className="mt-20 text-center text-xs text-gray-400 border-t border-gray-200/60 pt-8">
          <span>© Nerdy Buddy – AI for telecom, service centers & customer support</span>
        </div>
      </div>

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

export default TelecomSection;