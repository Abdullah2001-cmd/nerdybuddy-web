import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UseCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef(null);
  
  const useCases = [
    {
      id: 1,
      title: "Corporate Teams",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-1-1.webp",
      link: "/corpTeam",
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
      link: "/retailChain",
      description: "Consistent information across all store locations"
    },
    {
      id: 4,
      title: "Healthcare",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-5-1.webp",
      link: "/healthCare",
      description: "Quick access to medical protocols and patient information"
    },
    {
      id: 5,
      title: "Telecom & Service",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-2-1.webp",
      link: "/telecom",
      description: "Efficient customer service and technical documentation"
    },
    {
      id: 6,
      title: "Public Sector",
      icon: "https://nerdybuddy.com/wp-content/uploads/2025/05/Icon-6-1.webp",
      link: "/publicSector",
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

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900">Use Cases</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Nerdy Buddy transforms knowledge management across industries
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#B03982] transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#B03982] transition-colors" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow.xl)}%)` }}
            >
              {useCases.map((useCase, index) => (
                <div 
                  key={useCase.id}
                  className={`flex-shrink-0 px-3 transition-all duration-300 ${
                    currentSlide === index ? 'opacity-100 scale-100' : 'opacity-90 scale-95'
                  }`}
                  style={{ width: `${100 / slidesToShow.xl}%` }}
                >
                  <a 
                    href={useCase.link}
                    className="group block h-full"
                    aria-label={`Learn more about ${useCase.title}`}
                  >
                    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-[#B03982]/50 hover:shadow-xl hover:shadow-[#B03982]/10 hover:scale-[1.02]">
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-xl border border-gray-300 group-hover:border-transparent transition-all duration-300">
                          <img
                            src={useCase.icon}
                            alt={useCase.title}
                            className="w-16 h-16 md:w-20 md:h-20 object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] group-hover:bg-clip-text transition-all duration-300">
                        {useCase.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">
                        {useCase.description}
                      </p>

                      {/* Indicator */}
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="flex items-center gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                i === 0 
                                  ? 'bg-gradient-to-r from-[#B03982] to-[#733C86]'
                                  : 'bg-gray-300 group-hover:bg-gray-400'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></div>
                      </div>

                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-white to-gray-100 rounded-full border border-gray-300 text-xs font-bold text-gray-600 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] transition-all duration-300">
                        {index + 1}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 bg-gradient-to-r from-[#B03982] to-[#733C86]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Indicator */}
          {/* <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#B03982] to-[#733C86] animate-pulse"></div>
            <span className="text-sm text-gray-600">
              {autoplay ? 'Auto-scrolling' : 'Paused'}
            </span>
          </div> */}
        </div>

        {/* Responsive indicators */}
        {/* <div className="hidden lg:flex justify-center items-center gap-4 mt-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#B03982] to-[#733C86]"></div>
            <span>Drag to scroll</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <span>Click to select</span>
          </div>
        </div> */}

        {/* CTA */}
        {/* <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-6">
            Ready to see how Nerdy Buddy can transform your organization?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-[#B03982]/20 transition-all duration-300 hover:scale-105"
          >
            <span>Get Started Now</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 1280px) {
          .pxl-swiper-wrapper > div {
            width: ${100 / slidesToShow.lg}% !important;
          }
        }
        
        @media (max-width: 1024px) {
          .pxl-swiper-wrapper > div {
            width: ${100 / slidesToShow.md}% !important;
          }
        }
        
        @media (max-width: 768px) {
          .pxl-swiper-wrapper > div {
            width: ${100 / slidesToShow.sm}% !important;
          }
        }
        
        @media (max-width: 640px) {
          .pxl-swiper-wrapper > div {
            width: ${100 / slidesToShow.xs}% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default UseCases;