import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const UseCases = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef(null);

  const useCases = [
    {
      id: 1,
      title: "Corporate Teams",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-1-1.webp",
      link: "/corporate-teams",
      description: "Streamline internal knowledge sharing and collaboration"
    },
    {
      id: 2,
      title: "Finance",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-4-1.webp",
      link: "/finance",
      description: "Secure access to financial policies and compliance documents"
    },
    {
      id: 3,
      title: "Retail Chains",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-3-1.webp",
      link: "/health-care",
      description: "Consistent information across all store locations"
    },
    {
      id: 4,
      title: "Healthcare",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-5-1.webp",
      link: "/public-sector",
      description: "Quick access to medical protocols and patient information"
    },
    {
      id: 5,
      title: "Telecom & Service",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-2-1.webp",
      link: "/retail-chain",
      description: "Efficient customer service and technical documentation"
    },
    {
      id: 6,
      title: "Public Sector",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-6-1.webp",
      link: "/telecom",
      description: "Government documentation and public information access"
    }
  ];

  const slidesToShow = {
    xl: 5,
    lg: 3,
    md: 2,
    sm: 2,
    xs: 1
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentSlide]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  // Helper function to determine number of slides to show
  const getSlidesToShow = () => {
    if (typeof window === 'undefined') return 1; // Default for SSR

    if (window.innerWidth >= 1280) return 3; // xl
    if (window.innerWidth >= 1024) return 2; // lg
    if (window.innerWidth >= 640) return 2;  // sm
    return 1; // xs (mobile)
  };

  // Add this inside your component
  useEffect(() => {
    const handleResize = () => {
      // Force re-render to update slidesToShow
      setCurrentSlide(prev => Math.min(prev, useCases.length - getSlidesToShow()));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="block text-gray-900">Use Cases</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Discover how Nerdy Buddy transforms knowledge management across industries
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-8 sm:px-10 md:px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hidden sm:flex"
            aria-label="Previous slide"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#B03982] transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hidden sm:flex"
            aria-label="Next slide"
            disabled={currentSlide >= useCases.length - getSlidesToShow()}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#B03982] transition-colors" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: '12px',
                transform: `translateX(calc(-${currentSlide * (100 / getSlidesToShow())}% - ${currentSlide * 12}px))`,
              }}
            >
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.id}
                  className={`flex-shrink-0 transition-all duration-300 opacity-80 sm:opacity-90 scale-95`}
                  style={{ width: `calc(${100 / getSlidesToShow()}% - ${(12 * (getSlidesToShow() - 1)) / getSlidesToShow()}px)` }}
                >
                  <NavLink
                    to={useCase.link}
                    className="group block h-full"
                    aria-label={`Learn more about ${useCase.title}`}
                  >
                    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-[#B03982]/50 hover:shadow-xl hover:shadow-[#B03982]/10 hover:scale-[1.02]">
                      <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                        <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] rounded-lg sm:rounded-xl border border-gray-300 group-hover:border-transparent transition-all duration-300">
                          <img
                            src={useCase.icon}
                            alt={useCase.title}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                        {useCase.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-4">
                        {useCase.description}
                      </p>
                      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons - Visible only on mobile */}
          <div className="flex justify-center items-center gap-4 mt-4 sm:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 disabled:opacity-50"
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 disabled:opacity-50"
              disabled={currentSlide >= useCases.length - getSlidesToShow()}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Pagination Dots */}
          {/* <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${currentSlide === index
                  ? 'w-4 sm:w-6 md:w-8 h-1.5 sm:h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>

      <style jsx>{`
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  `}</style>
    </section>
  );
};

export default UseCases;