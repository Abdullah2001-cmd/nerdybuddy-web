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

function Home() {

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [progress, setProgress] = useState(0);
  const buttonRef = useRef(null);

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
    <div className="min-h-screen relative">
      
      <Navbar />
      <HeroSection />
      <ProductOverview />
      <DigitalColleague />
      <ProblemStatement />
      <WhyChooseNow />
      <UnifiedExperience />
      <UseCases />
      <ImplementationServices />
      <ContactFormSection />
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
          bottom: '6rem',
          right: '2rem',
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

// import { useState, useEffect, useRef } from 'react';
// import { ChevronUp, ArrowUp, Sparkles, Zap, Target, Users, Lightbulb, Rocket } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
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

// function Home() {
//   const [showScrollButton, setShowScrollButton] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [activeSection, setActiveSection] = useState('hero');
//   const [characterVisible, setCharacterVisible] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const buttonRef = useRef(null);

//   // Section order for navigation
//   const sections = [
//     'hero', 'product', 'digital', 'problem', 'why-choose',
//     'unified', 'use-cases', 'implementation', 'contact'
//   ];

//   // Character expressions based on section
//   const characterExpressions = {
//     hero: { emoji: '👋', message: "Hi! I'm your Nerdy Buddy! Let's explore smarter workplaces!" },
//     product: { emoji: '🤔', message: "This is how I work! Discover my features and capabilities." },
//     digital: { emoji: '🚀', message: "Meet your new digital colleague! I'm always here to help." },
//     problem: { emoji: '🎯', message: "These are the problems we solve together. Let's fix them!" },
//     'why-choose': { emoji: '⚡', message: "Why choose now? Because AI can't wait!" },
//     unified: { emoji: '✨', message: "Experience unified knowledge access across your organization." },
//     'use-cases': { emoji: '💼', message: "See how different industries benefit from my assistance." },
//     implementation: { emoji: '🔧', message: "Easy implementation and support for your team." },
//     contact: { emoji: '📞', message: "Ready to get started? Let's connect!" }
//   };

//   useEffect(() => {
//     // Simulate loading
//     const timer = setTimeout(() => setIsLoading(false), 1000);

//     // Scroll progress
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercent = (scrolled / maxScroll) * 100;
//       setProgress(scrollPercent);
//       setShowScrollButton(scrolled > 400);

//       // Hide character at top/bottom extremes
//       if (scrolled < 100 || scrolled > maxScroll - 100) {
//         setCharacterVisible(false);
//       } else {
//         setCharacterVisible(true);
//       }

//       // Detect active section
//       const sectionElements = sections.map(id => document.getElementById(id));
//       const currentSection = sectionElements.find((el, index) => {
//         if (!el) return false;
//         const rect = el.getBoundingClientRect();
//         return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
//       });

//       if (currentSection) {
//         const sectionId = currentSection.id;
//         if (sectionId !== activeSection) {
//           setActiveSection(sectionId);
//         }
//       }
//     };

//     // Initialize scroll progress
//     handleScroll();

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(timer);
//     };
//   }, [activeSection]);

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

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Loading animation
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="w-16 h-16 border-4 border-gray-200 border-t-[#B03982] rounded-full"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative overflow-x-hidden">

//       <img
//         src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
//         alt="Nerdy Buddy AI Assistant in Action"
//         className="w-52 right-0 top absolute z-[1000]"
//       />

//       {/* Animated Background */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="fixed inset-0 -z-10"
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(to right, #B03982 1px, transparent 1px),
//                             linear-gradient(to bottom, #733C86 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}></div>
//         </div>
//       </motion.div>
//       {/* Character Animation */}
//       <AnimatePresence>
//         {characterVisible && (
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 100 }}
//             transition={{ duration: 0.5 }}
//             className="fixed bottom-8 right-8 z-50"
//           >
//             <div className="relative">
//               {/* Speech Bubble */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20, scale: 0.8 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ duration: 0.3, delay: 0.2 }}
//                 className="absolute bottom-full right-0 mb-3"
//                 style={{ minWidth: 200, maxWidth: 250 }}
//               >
//                 <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200">
//                   <p className="text-sm text-gray-800 font-medium">
//                     {characterExpressions[activeSection]?.message || characterExpressions.hero.message}
//                   </p>
//                   {/* Triangle pointer */}
//                   <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
//                 </div>
//               </motion.div>

//               {/* Character */}
//               <motion.div
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   rotate: activeSection === 'hero' ? [0, 10, -10, 0] : 0
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: 'reverse'
//                 }}
//                 className="relative cursor-pointer group"
//                 onClick={() => scrollToSection(activeSection)}
//               >
//                 {/* Outer glow */}
//                 <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

//                 {/* Character circle */}
//                 <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#B03982] to-[#733C86] flex items-center justify-center shadow-xl border-4 border-white">
//                   <motion.span
//                     key={activeSection}
//                     initial={{ scale: 0, rotate: 180 }}
//                     animate={{ scale: 1, rotate: 0 }}
//                     transition={{ type: 'spring', stiffness: 200, damping: 10 }}
//                     className="text-2xl"
//                   >
//                     {characterExpressions[activeSection]?.emoji || characterExpressions.hero.emoji}
//                   </motion.span>

//                   {/* Pulsing effect */}
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.2, 1],
//                       opacity: [0.5, 0.8, 0.5]
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                     className="absolute inset-0 rounded-full border-2 border-white/30"
//                   />
//                 </div>

//                 {/* Section indicator */}
//                 <div className="absolute -top-2 -right-2 px-2 py-1 bg-white text-xs font-bold text-gray-900 rounded-full border border-gray-200 shadow-sm">
//                   {sections.indexOf(activeSection) + 1}/{sections.length}
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Navigation Dots */}
//       <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 hidden md:block">
//         {sections.map((section, index) => (
//           <motion.button
//             key={section}
//             onClick={() => scrollToSection(section)}
//             className="block mb-3 relative group"
//             whileHover={{ scale: 1.3 }}
//             whileTap={{ scale: 0.9 }}
//             aria-label={`Go to ${section} section`}
//           >
//             <motion.div
//               animate={{
//                 backgroundColor: activeSection === section ? '#B03982' : '#E5E7EB',
//                 scale: activeSection === section ? 1.2 : 1
//               }}
//               transition={{ duration: 0.3 }}
//               className="w-3 h-3 rounded-full cursor-pointer relative"
//             >
//               {/* Tooltip */}
//               <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                 <div className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
//                   {section.replace('-', ' ')}
//                 </div>
//                 <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-1.5 h-1.5 bg-gray-900"></div>
//               </div>
//             </motion.div>

//             {/* Connection line */}
//             {index < sections.length - 1 && (
//               <motion.div
//                 animate={{
//                   height: activeSection === section ? '1.5rem' : '1rem',
//                   backgroundColor: activeSection === section ? '#B03982' : '#D1D5DB'
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="w-0.5 mx-auto"
//               />
//             )}
//           </motion.button>
//         ))}
//       </div>

//       {/* Scroll Progress Indicator */}
//       <div className="fixed top-0 left-0 w-full h-1 z-50">
//         <motion.div
//           className="h-full bg-gradient-to-r from-[#B03982] to-[#733C86]"
//           initial={{ width: 0 }}
//           animate={{ width: `${progress}%` }}
//           transition={{ duration: 0.1 }}
//         />
//       </div>

//       {/* Smooth scroll wrapper */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Navbar />

//         {/* Wrap each section with motion.div for staggered animations */}
//         <motion.section
//           id="hero"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//         >
//           <HeroSection />
//         </motion.section>

//         <motion.section
//           id="product"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           <ProductOverview />
//         </motion.section>

//         <motion.section
//           id="digital"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <DigitalColleague />
//         </motion.section>

//         <motion.section
//           id="problem"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           <ProblemStatement />
//         </motion.section>

//         <motion.section
//           id="why-choose"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <WhyChooseNow />
//         </motion.section>

//         <motion.section
//           id="unified"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <UnifiedExperience />
//         </motion.section>

//         <motion.section
//           id="use-cases"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <UseCases />
//         </motion.section>

//         <motion.section
//           id="implementation"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.7 }}
//         >
//           <ImplementationServices />
//         </motion.section>

//         <motion.section
//           id="contact"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <ContactFormSection />
//         </motion.section>

//         <Footer />
//       </motion.div>

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
//           <svg className="absolute -inset-1 w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
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
//           <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-full border border-gray-200 group-hover:border-transparent transition-all duration-300 shadow-xl group-hover:shadow-[#B03982]/20 overflow-hidden">
//             {/* Animated background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

//             {/* Loading animation */}
//             {isScrolling && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-6 h-6 border-2 border-[#B03982]/30 border-t-[#B03982] rounded-full animate-spin"></div>
//               </div>
//             )}

//             {/* Icon */}
//             <div className={`relative transition-transform duration-300 ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
//               <ArrowUp className="w-5 h-5 text-gray-700 group-hover:text-[#B03982] transition-colors duration-300" />
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
//           <div className="relative bg-white text-gray-900 text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap border border-gray-200 shadow-lg">
//             <div className="flex items-center gap-2">
//               <span>Back to top</span>
//               <ArrowUp className="w-3 h-3" />
//             </div>
//             <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
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

//         /* Smooth scroll behavior */
//         html {
//           scroll-behavior: smooth;
//         }

//         /* Custom scrollbar */
//         ::-webkit-scrollbar {
//           width: 8px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #B03982, #733C86);
//           border-radius: 4px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(to bottom, #c94594, #8a48a3);
//         }
//       `}</style>

//     </div>
//   );
// }

// export default Home;