// import { useState, useEffect, useRef } from 'react';
// import { ChevronUp, ArrowUp, Sparkles } from 'lucide-react';
// import HeroSection from "../components/hero";
// import Navbar from "../components/navbar";
// import ProductOverview from '../components/productOverview';
// import DigitalColleague from '../components/digitalCollegue';
// import ProblemStatement from '../components/problemStatment';
// import WhyChooseNow from '../components/whyChooseNow';
// import UnifiedExperience from '../components/unifiedExperience';
// import UseCases from '../components/useCases';
// import ImplementationServices from '../components/implementationServices';
// import ContactFormSection from '../components/contactUs';
// import Footer from '../components/footer';
// import Reveal from '../components/reveal';

// function Home({ isLoading }) {

//   const [showScrollButton, setShowScrollButton] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercent = (scrolled / maxScroll) * 100;
//       setProgress(scrollPercent);
//       setShowScrollButton(scrolled > 400);
//     };
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     if (isScrolling) return;
//     setIsScrolling(true);
//     const ripple = document.createElement('div');
//     ripple.className = 'absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full opacity-30 animate-ripple';
//     buttonRef.current?.appendChild(ripple);
//     setTimeout(() => {
//       ripple.remove();
//     }, 600);
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//     setTimeout(() => setIsScrolling(false), 1000);
//   };

//   return (
//     <div className="min-h-screen relative overflow-x-hidden">

//       <Navbar />
//       <HeroSection reveal={isLoading} />

//       <Reveal side="left">
//         <ProductOverview />
//       </Reveal>

//       <Reveal side="right">
//         <DigitalColleague />
//       </Reveal>

//       <Reveal side="left">
//         <ProblemStatement />
//       </Reveal>

//       <Reveal side="right">
//         <WhyChooseNow />
//       </Reveal>

//       <Reveal side="left">
//         <UnifiedExperience />
//       </Reveal>

//       <Reveal side="right">
//         <UseCases />
//       </Reveal>

//       {/* <Reveal side="left">
//         <ImplementationServices />
//       </Reveal> */}

//       <Reveal side="right">
//         <ContactFormSection />
//       </Reveal>

//       <Footer />

//       {/* Scroll Progress Indicator */}
//       <div className="fixed top-0 left-0 w-full h-2 z-50">
//         <div
//           className="h-full bg-gradient-to-r from-[#B03982] to-[#733C86] transition-all duration-300 ease-out"
//           style={{ width: `${progress}%` }}
//         />
//       </div>

//       {/* Animated Scroll to Top Button */}
//       <button
//         ref={buttonRef}
//         onClick={scrollToTop}
//         className={`fixed z-40 transition-all duration-700 ease-out-expo ${showScrollButton
//           ? 'opacity-100 translate-y-0 pointer-events-auto'
//           : 'opacity-0 translate-y-20 pointer-events-none'
//           } ${isScrolling ? 'scale-95' : 'scale-100 hover:scale-110'}`}
//         style={{
//           bottom: '6rem',
//           right: '2rem',
//         }}
//         aria-label="Scroll to top"
//       >
//         {/* Floating animation container */}
//         <div className="relative animate-float">
//           {/* Outer glow */}
//           <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

//           {/* Progress ring */}
//           <svg className="absolute -ins-1 w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
//             <path
//               d="M18 2.0845
//                 a 15.9155 15.9155 0 0 1 0 31.831
//                 a 15.9155 15.9155 0 0 1 0 -31.831"
//               fill="none"
//               stroke="url(#progress-gradient)"
//               strokeWidth="1"
//               strokeDasharray="100"
//               strokeDashoffset={100 - progress}
//               className="transition-all duration-300"
//             />
//             <defs>
//               <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#B03982" />
//                 <stop offset="100%" stopColor="#733C86" />
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* Main Button */}
//           <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-full border border-gray-700/50 group-hover:border-transparent transition-all duration-300 shadow-2xl group-hover:shadow-[#B03982]/30 overflow-hidden">
//             {/* Animated background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

//             {/* Loading animation */}
//             {isScrolling && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//               </div>
//             )}

//             {/* Icon */}
//             <div className={`relative transition-transform duration-300 ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
//               <ArrowUp className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
//               {!isScrolling && (
//                 <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-[#B03982] animate-ping" />
//               )}
//             </div>
//           </div>

//           {/* Particle effects */}
//           {showScrollButton && !isScrolling && (
//             <>
//               <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0s' }} />
//               <div className="absolute -top-2 right-2 w-1.5 h-1.5 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0.3s' }} />
//               <div className="absolute bottom-2 -left-2 w-1 h-1 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0.6s' }} />
//             </>
//           )}
//         </div>

//         {/* Pulse effect */}
//         {showScrollButton && !isScrolling && (
//           <div className="absolute inset-0 border-2 border-[#B03982]/30 rounded-full animate-ping opacity-0"></div>
//         )}

//         {/* Tooltip */}
//         <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
//           <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap border border-gray-700 shadow-xl">
//             <div className="flex items-center gap-2">
//               <span>Back to top</span>
//               <ArrowUp className="w-3 h-3" />
//             </div>
//             <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 border-r border-b border-gray-700"></div>
//           </div>
//         </div>
//       </button>

//       {/* Add CSS animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-5px); }
//         }

//         @keyframes float-particles {
//           0% { transform: translateY(0) scale(1); opacity: 0.7; }
//           100% { transform: translateY(-10px) scale(0.5); opacity: 0; }
//         }

//         @keyframes ripple {
//           0% { transform: scale(0); opacity: 0.5; }
//           100% { transform: scale(4); opacity: 0; }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-float-particles {
//           animation: float-particles 1.5s ease-out infinite;
//         }

//         .animate-ripple {
//           animation: ripple 0.6s linear;
//         }

//         .ease-out-expo {
//           transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect, useRef } from 'react';
import { ChevronUp, ArrowUp, Sparkles } from 'lucide-react';
import HeroSection from "../components/hero";
import Navbar from "../components/navbar";
import ProductOverview from '../components/productOverview';
import DigitalColleague from '../components/digitalCollegue';
import ProblemStatement from '../components/problemStatment';
import WhyChooseNow from '../components/whyChooseNow';
import UnifiedExperience from '../components/unifiedExperience';
import UseCases from '../components/useCases';
import ImplementationServices from '../components/implementationServices';
import ContactFormSection from '../components/contactUs';
import Footer from '../components/footer';
import Reveal from '../components/reveal';

function Home({ isLoading }) {

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [progress, setProgress] = useState(0);
  const buttonRef = useRef(null);
  const hasScrolledToTop = useRef(false); // Track if we've already scrolled to top

  // Smooth scroll to top when component mounts (page loads/navigation)
  useEffect(() => {
    // Check if we need to scroll to top
    // Only scroll if we're not already at the top and haven't scrolled yet
    if (window.scrollY > 0 && !hasScrolledToTop.current) {
      hasScrolledToTop.current = true;
      
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Optional: Force scroll to top immediately (less smooth but ensures position)
    // window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once on mount

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

  return (
    <div className="min-h-screen relative overflow-x-hidden">

      <Navbar />
      <HeroSection reveal={isLoading} />

      <Reveal side="left">
        <ProductOverview />
      </Reveal>

      <Reveal side="right">
        <DigitalColleague />
      </Reveal>

      <Reveal side="left">
        <ProblemStatement />
      </Reveal>

      <Reveal side="right">
        <WhyChooseNow />
      </Reveal>

      <Reveal side="left">
        <UnifiedExperience />
      </Reveal>

      <Reveal side="right">
        <UseCases />
      </Reveal>

      <Reveal side="left">
        <ImplementationServices />
      </Reveal>

      <Reveal side="right">
        <ContactFormSection />
      </Reveal>

      <Footer />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-2 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#B03982] to-[#733C86] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Animated Scroll to Top Button */}
      <button
        ref={buttonRef}
        onClick={scrollToTop}
        className={`fixed z-40 transition-all duration-700 ease-out-expo ${showScrollButton
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-20 pointer-events-none'
          } ${isScrolling ? 'scale-95' : 'scale-100 hover:scale-110'}`}
        style={{
          bottom: '1rem',
          right: '1rem',
        }}
        aria-label="Scroll to top"
      >
        {/* Floating animation container */}
        <div className="relative animate-float">
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          {/* Progress ring */}
          <svg className="absolute -ins-1 w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth="1"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B03982" />
                <stop offset="100%" stopColor="#733C86" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main Button */}
          <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-full border border-gray-700/50 group-hover:border-transparent transition-all duration-300 shadow-2xl group-hover:shadow-[#B03982]/30 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            {/* Loading animation */}
            {isScrolling && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}

            {/* Icon */}
            <div className={`relative transition-transform duration-300 ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
              <ArrowUp className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
              {!isScrolling && (
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-[#B03982] animate-ping" />
              )}
            </div>
          </div>

          {/* Particle effects */}
          {showScrollButton && !isScrolling && (
            <>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0s' }} />
              <div className="absolute -top-2 right-2 w-1.5 h-1.5 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0.3s' }} />
              <div className="absolute bottom-2 -left-2 w-1 h-1 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0.6s' }} />
            </>
          )}
        </div>

        {/* Pulse effect */}
        {showScrollButton && !isScrolling && (
          <div className="absolute inset-0 border-2 border-[#B03982]/30 rounded-full animate-ping opacity-0"></div>
        )}

        {/* Tooltip */}
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap border border-gray-700 shadow-xl">
            <div className="flex items-center gap-2">
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 border-r border-b border-gray-700"></div>
          </div>
        </div>
      </button>

      {/* Add CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes float-particles {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-10px) scale(0.5); opacity: 0; }
        }

        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(4); opacity: 0; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-particles {
          animation: float-particles 1.5s ease-out infinite;
        }

        .animate-ripple {
          animation: ripple 0.6s linear;
        }

        .ease-out-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
      `}</style>
    </div>
  );
}

export default Home;