import React, { useEffect, useRef } from "react";
import {
  TrendingUp,
  Shield,
  FileText,
  Search,
  Lock,
  BarChart3,
  PieChart,
  CheckCircle,
  Sparkles,
  Zap,
  Clock,
  Award,
  DollarSign,
  Target,
  Linkedin,
  Youtube,
} from "lucide-react";

/**
 * Nerdy Buddy – Finance Teams Suite
 * ---------------------------------
 * Premium conversion of the Finance Teams HTML sections.
 * Faithful to the original content structure:
 *   – Block 1: Hero (Finance Teams headline + description + video)
 *   – Block 2: Feature (image left + heading/description/feature lists)
 *   – Block 3: KPI counters (40% Time Saved / 60% Drop in Compliance Errors)
 *
 * Designed with the exact reference UI language:
 *   – Geometric grid background + gradient blobs
 *   – Floating pill badges, split gradient headlines
 *   – Hover animations, frosted glass cards, premium shadows
 *   – Fully responsive, mobile-optimized stacking
 */
const FinanceTeamsSection = () => {
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

  // ---------- Data for feature lists (exact from HTML, premium phrasing) ----------
  const featureListLeft = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-finance)"
          />
          <defs>
            <linearGradient id="gradient-finance" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Search Budgets Instantly",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-finance2)"
          />
          <defs>
            <linearGradient id="gradient-finance2" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Understand Policies Fast",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-finance3)"
          />
          <defs>
            <linearGradient id="gradient-finance3" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Smart Report Summaries",
    },
  ];

  const featureListRight = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-finance4)"
          />
          <defs>
            <linearGradient id="gradient-finance4" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Access Control for Teams",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-finance5)"
          />
          <defs>
            <linearGradient id="gradient-finance5" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Simplify Audit Preparation",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00008 15.3121C7.87786 15.3121 7.75897 15.2722 7.66141 15.1986C7.56384 15.125 7.4929 15.0216 7.45933 14.9041L6.87508 12.8588C6.62393 11.969 6.14875 11.1585 5.49497 10.5047C4.84119 9.85092 4.03065 9.37575 3.14083 9.12459L1.09558 8.54034C0.978137 8.5067 0.874836 8.43573 0.8013 8.33817C0.727763 8.24061 0.687988 8.12176 0.687988 7.99959C0.687988 7.87742 0.727763 7.75858 0.8013 7.66102C0.874836 7.56346 0.978137 7.49249 1.09558 7.45884L3.14083 6.87459C4.03065 6.62344 4.84119 6.14826 5.49497 5.49448C6.14875 4.8407 6.62393 4.03017 6.87508 3.14034L7.45933 1.09509C7.49298 0.977648 7.56394 0.874348 7.6615 0.800812C7.75906 0.727275 7.87791 0.6875 8.00008 0.6875C8.12225 0.6875 8.2411 0.727275 8.33866 0.800812C8.43622 0.874348 8.50719 0.977648 8.54083 1.09509L9.12508 3.14034C9.37624 4.03017 9.85141 4.8407 10.5052 5.49448C11.159 6.14826 11.9695 6.62344 12.8593 6.87459L14.9046 7.45884C15.022 7.49249 15.1253 7.56346 15.1989 7.66102C15.2724 7.75858 15.3122 7.87742 15.3122 7.99959C15.3122 8.12176 15.2724 8.24061 15.1989 8.33817C15.1253 8.43573 15.022 8.5067 14.9046 8.54034L12.8593 9.12459C11.9695 9.37575 11.159 9.85092 10.5052 10.5047C9.85141 11.1585 9.37624 11.969 9.12508 12.8588L8.54083 14.9041C8.50726 15.0216 8.43633 15.125 8.33876 15.1986C8.24119 15.2722 8.12231 15.3121 8.00008 15.3121Z"
            fill="url(#gradient-finance6)"
          />
          <defs>
            <linearGradient id="gradient-finance6" x1="0.687988" y1="7.97043" x2="15.3122" y2="7.97043">
              <stop stopColor="#7512A2" />
              <stop offset="0.485331" stopColor="#FF31AB" />
              <stop offset="1" stopColor="#FF6F05" />
            </linearGradient>
          </defs>
        </svg>
      ),
      text: "Align Finance Across Units",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-[150px] overflow-hidden opacity-0 translate-y-8 transition-all duration-900 ease-out"
      aria-label="Nerdy Buddy – Finance Teams"
    >
      {/* ========== PREMIUM BACKGROUND – GEOMETRIC GRID + GRADIENT BLOBS ========== */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/90 to-white">
        {/* Signature geometric pattern – purple grid */}
        <div className="absolute inset-0 opacity-[0.1]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="finance-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B03982" strokeWidth="1" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#finance-grid)" />
          </svg>
        </div>
        {/* Soft glowing blobs – depth */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#B03982]/10 via-[#a32c8d]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#733C86]/10 via-[#a32c8d]/10 to-[#B03982]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========== BLOCK 1 – FINANCE TEAMS HERO (LEFT TEXT / RIGHT VIDEO) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* LEFT COLUMN – HEADLINE + DESCRIPTION (exact copy) */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Floating badge – Finance Teams */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/80 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Finance Teams</span>
            </div>

            {/* Main heading – split gradient */}
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading">
              <span className="block text-gray-900">Finance Teams</span>
              <span className="block mt-2 relative">
                <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                  Secure, Role-Based Access
                </span>
                <span className="absolute -bottom-2 left-0 lg:left-1/4 w-32 lg:w-1/2 h-3 bg-gradient-to-r from-[#B03982]/30 to-[#733C86]/30 blur-xl -z-10"></span>
              </span>
            </h2>

            {/* Description – verbatim from HTML */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Provide employees with secure, role-based access to sensitive policy documents, compliance protocols, and
              regulatory updates, helping maintain audit readiness and internal governance standards.
            </p>

            {/* subtle stat badges – finance flavour */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                <Shield className="w-4 h-4 text-[#B03982]" /> SOC2 Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                <Clock className="w-4 h-4 text-[#733C86]" /> 40% faster access
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN – VIDEO (41.mp4) */}
          <div className="relative group">
            <div className="absolute -top-4 -right-4 z-20">
              <span className="px-4 py-2 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white text-xs font-bold rounded-full shadow-xl flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> AI in Action
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-white/80 border border-gray-200/80 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <video
                className="w-full h-auto object-cover aspect-video transform group-hover:scale-[1.02] transition-transform duration-700"
                src="https://nerdybuddy.com/wp-content/uploads/2025/07/41.mp4"
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

        {/* ========== BLOCK 2 – MAKE FINANCIAL OPS SMARTER (IMAGE LEFT / TEXT + FEATURE LISTS RIGHT) ========== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* LEFT – IMAGE (istock) */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-white/80 border border-gray-200/80 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img
                src="https://nerdybuddy.com/wp-content/uploads/2025/06/istockphoto-1795167728-612x612-1.jpg"
                alt="Finance team collaborating"
                className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* RIGHT COLUMN – HEADING, DESCRIPTION, TWO FEATURE COLUMNS */}
          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            {/* subtle badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/80 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></div>
              <span className="text-xs font-semibold text-gray-600">FINANCE AI</span>
            </div>

            {/* Heading – exact copy with gradient */}
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading">
              <span className="block">Make Financial Ops</span>
              <span className="block bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent mt-1">
                Smarter, Faster & More Transparent
              </span>
            </h2>

            {/* Description – verbatim */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Whether it’s budgets, tax documents, audit reports, or compliance policies — Nerdy Buddy turns them into
              interactive knowledge. Just ask and get clear, reference-backed answers.
            </p>

            {/* Two column feature lists – using original star icons with gradient */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-6">
              {/* Left column features */}
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
              {/* Right column features */}
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
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Used by finance teams at 50+ enterprises
              </span>
            </div>
          </div>
        </div>

        {/* ========== BLOCK 3 – KPI COUNTERS (40% Time Saved / 60% Drop in Compliance Errors) ========== */}
        <div
          ref={counterRef}
          className="relative max-w-5xl mx-auto mt-16 md:mt-20 lg:mt-24 bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200/80 p-8 md:p-12 shadow-2xl"
        >
          {/* subtle background pattern inside card */}
          <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
            <svg className="w-full h-full">
              <pattern id="finance-card-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#B03982" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#finance-card-grid)" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Counter 1: 40% Time Saved on Report Access */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10">
                  <TrendingUp className="w-8 h-8 text-[#B03982]" />
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="counter-value text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent" data-target="40">
                  1
                </span>
                <span className="text-5xl md:text-6xl font-bold text-gray-900">%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Time Saved on Report Access</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Instant answers reduce search time across documents.
              </p>
            </div>

            {/* Counter 2: 60% Drop in Compliance Errors */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10">
                  <Shield className="w-8 h-8 text-[#733C86]" />
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="counter-value text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent" data-target="60">
                  1
                </span>
                <span className="text-5xl md:text-6xl font-bold text-gray-900">%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Drop in Compliance Errors</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Teams stay aligned with updated policies and guidelines.
              </p>
            </div>
          </div>

          {/* decorative line */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#B03982]/50 to-[#733C86]/50 rounded-full"></div>
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
                <li><a href="#" className="text-gray-400 hover:text-white transition">Implementation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Use Cases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Problem Statement</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
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

export default FinanceTeamsSection;