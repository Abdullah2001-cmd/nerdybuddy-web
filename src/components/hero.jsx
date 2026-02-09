// import React, { useState, useEffect } from 'react';
// import { Play, Pause, ArrowRight, Sparkles, Zap, Shield, Rocket } from 'lucide-react';

// const HeroSection = () => {
//     const [isVideoPlaying, setIsVideoPlaying] = useState(true);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     const handlePlayVideo = () => {
//         const video = document.getElementById('hero-video');
//         if (video) {
//             if (video.paused) {
//                 video.play();
//                 setIsVideoPlaying(true);
//             } else {
//                 video.pause();
//                 setIsVideoPlaying(false);
//             }
//         }
//     };

//     const features = [
//         { icon: <Zap className="w-4 h-4" />, text: "Instant Answers" },
//         { icon: <Shield className="w-4 h-4" />, text: "Enterprise Security" },
//         { icon: <Rocket className="w-4 h-4" />, text: "10x Productivity" }
//     ];

//     return (
//         <section className="relative bg-gradient-to-br from-white via-gray-50 to-white">
//             {/* Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Geometric Pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                     <div className="absolute inset-0" style={{
//                         backgroundImage: `radial-gradient(circle at 25px 25px, #B03982 2%, transparent 0%), 
//                             radial-gradient(circle at 75px 75px, #733C86 2%, transparent 0%)`,
//                         backgroundSize: '100px 100px'
//                     }}></div>
//                 </div>

//                 {/* Gradient Orbs */}
//                 <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>

//                 {/* Floating Shapes */}
//                 <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-[#B03982]/10 rounded-3xl transform rotate-12 opacity-30 animate-float-slow"></div>
//                 <div className="absolute bottom-1/4 right-10 w-40 h-40 border-2 border-[#733C86]/10 rounded-full opacity-20 animate-float-slower"></div>
//             </div>

//             <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//                     {/* Left Column - Content */}
//                     <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                         {/* Badge */}
//                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
//                             <Sparkles className="w-4 h-4 text-[#B03982]" />
//                             <span className="text-sm font-medium text-gray-700">AI-Powered Knowledge Management</span>
//                         </div>

//                         {/* Main Heading */}
//                         <div className="space-y-4">
//                             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading">
//                                 <span className="block text-gray-900">Transform Your</span>
//                                 <span className="block mt-2 relative">
//                                     <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
//                                         Workplace Intelligence
//                                     </span>
//                                     <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 blur-xl -z-10"></span>
//                                 </span>
//                             </h1>

//                             <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
//                                 Nerdy Buddy is your AI-powered digital colleague that makes organizational knowledge instantly accessible, secure, and actionable.
//                             </p>
//                         </div>

//                         {/* Features */}
//                         <div className="flex flex-wrap gap-4">
//                             {features.map((feature, index) => (
//                                 <div
//                                     key={index}
//                                     className="group flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-[#B03982]/30 transition-all duration-300 hover:shadow-md"
//                                 >
//                                     <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-md">
//                                         <div className="text-gray-600 group-hover:text-[#B03982] transition-colors duration-300">
//                                             {feature.icon}
//                                         </div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-700">{feature.text}</span>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* CTA Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                             {/* Primary CTA */}
//                             <button
//                                 onClick={() => window.location.href = '/contact'}
//                                 className="group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#B03982]/20"
//                             >
//                                 <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                                 <div className="relative flex items-center justify-center gap-3">
//                                     <span className="font-semibold text-lg text-white">Request Free Demo</span>
//                                     <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
//                                 </div>
//                             </button>

//                             {/* Secondary CTA */}
//                             <button
//                                 onClick={handlePlayVideo}
//                                 className="group relative px-8 py-4 bg-white rounded-xl border border-gray-200 hover:border-[#B03982]/50 transition-all duration-300 hover:shadow-lg"
//                             >
//                                 <div className="flex items-center justify-center gap-3">
//                                     <div className="relative">
//                                         <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-lg group-hover:from-[#B03982]/10 group-hover:to-[#733C86]/10 transition-all duration-300">
//                                             {isVideoPlaying ? (
//                                                 <Pause className="w-5 h-5 text-gray-600 group-hover:text-[#B03982] transition-colors" />
//                                             ) : (
//                                                 <Play className="w-5 h-5 text-gray-600 group-hover:text-[#B03982] transition-colors" />
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="text-left">
//                                         <span className="block text-sm font-medium text-gray-900">Watch Preview</span>
//                                         <span className="block text-xs text-gray-500">2 min overview</span>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>

//                         {/* Trust Indicators */}
//                         <div className="pt-8 border-t border-gray-100">
//                             <div className="flex items-center gap-6">
//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-gray-900">500+</div>
//                                     <div className="text-sm text-gray-600">Organizations</div>
//                                 </div>
//                                 <div className="h-8 w-0.5 bg-gray-200"></div>
//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-gray-900">24/7</div>
//                                     <div className="text-sm text-gray-600">AI Support</div>
//                                 </div>
//                                 <div className="h-8 w-0.5 bg-gray-200"></div>
//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-gray-900">99%</div>
//                                     <div className="text-sm text-gray-600">Accuracy</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Video Showcase */}
//                     <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                         {/* Video Card */}
//                         <div className="relative group">
//                             {/* Decorative Elements */}
//                             <div className="absolute -top-6 -right-6 z-10">
//                                 <div className="relative">
//                                     <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20 animate-ping-slow"></div>
//                                     <div className="relative bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
//                                         <span className="text-sm font-medium text-gray-700">Live Demo</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Main Video Container */}
//                             <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[#B03982]/10">
//                                 {/* Gradient Border Effect */}
//                                 <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-transparent to-[#733C86] rounded-2xl opacity-10 blur group-hover:opacity-20 transition-opacity duration-500"></div>

//                                 {/* Video */}
//                                 <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
//                                     <video
//                                         id="hero-video"
//                                         className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
//                                         autoPlay
//                                         loop
//                                         muted
//                                         playsInline
//                                         poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200"
//                                     >
//                                         <source
//                                             src="https://nerdybuddy.com/wp-content/uploads/2025/07/989.mp4"
//                                             type="video/mp4"
//                                         />
//                                     </video>

//                                     {/* Overlay Controls */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                                         <div className="absolute bottom-6 left-6 right-6">
//                                             <div className="flex items-center justify-between">
//                                                 <div className="text-white">
//                                                     <div className="text-sm font-medium">AI Assistant in Action</div>
//                                                     <div className="text-xs text-gray-300">Real-time knowledge processing</div>
//                                                 </div>
//                                                 <button
//                                                     onClick={handlePlayVideo}
//                                                     className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
//                                                 >
//                                                     {isVideoPlaying ? (
//                                                         <Pause className="w-5 h-5 text-white" />
//                                                     ) : (
//                                                         <Play className="w-5 h-5 text-white" />
//                                                     )}
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Bottom Info Card */}
//                             <div className="mt-6 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <div className="text-sm font-medium text-gray-900">See Nerdy Buddy in Action</div>
//                                         <div className="text-xs text-gray-500">Interactive AI demonstrations</div>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <div className="flex space-x-1">
//                                             {[...Array(3)].map((_, i) => (
//                                                 <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#B03982] to-[#733C86] opacity-30"></div>
//                                             ))}
//                                         </div>
//                                         <ArrowRight className="w-4 h-4 text-gray-400" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Floating Card */}
//                         <div className="absolute -bottom-6 -left-6 bg-white rounded-xl border border-gray-200 p-4 shadow-lg animate-float">
//                             <div className="flex items-center gap-3">
//                                 <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg">
//                                     <div className="text-emerald-600">✓</div>
//                                 </div>
//                                 <div>
//                                     <div className="text-sm font-medium text-gray-900">No Setup Required</div>
//                                     <div className="text-xs text-gray-500">Get started instantly</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Scroll Indicator */}
//                 {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//                     <div className="animate-bounce">
//                         <div className="flex flex-col items-center gap-2">
//                             <span className="text-xs text-gray-500">Scroll to explore</span>
//                             <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
//                                 <div className="w-1 h-3 bg-gradient-to-b from-[#B03982] to-[#733C86] rounded-full mt-2 animate-pulse"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}
//             </div>

//             <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes float-slow {
//           0%, 100% {
//             transform: translateY(0) rotate(12deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(12deg);
//           }
//         }

//         @keyframes float-slower {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes ping-slow {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 0.2;
//           }
//           50% {
//             transform: scale(1.1);
//             opacity: 0;
//           }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-float-slow {
//           animation: float-slow 6s ease-in-out infinite;
//         }

//         .animate-float-slower {
//           animation: float-slower 8s ease-in-out infinite;
//         }

//         .animate-ping-slow {
//           animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
//       `}</style>
//         </section>
//     );
// };

// export default HeroSection;

// import React, { useState, useEffect } from 'react';
// import { Play, Pause, ArrowRight, Sparkles, Zap, Shield, Rocket, ChevronDown, Star, Users, CheckCircle } from 'lucide-react';

// const HeroSection = () => {

//     const [isVideoPlaying, setIsVideoPlaying] = useState(true);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     const handlePlayVideo = () => {
//         const video = document.getElementById('hero-video');
//         if (video) {
//             if (video.paused) {
//                 video.play();
//                 setIsVideoPlaying(true);
//             } else {
//                 video.pause();
//                 setIsVideoPlaying(false);
//             }
//         }
//     };

//     const features = [
//         { icon: <Zap className="w-5 h-5" />, text: "Instant Answers", desc: "Get responses in seconds" },
//         { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security", desc: "SOC2 compliant" },
//         { icon: <Rocket className="w-5 h-5" />, text: "10x Productivity", desc: "Proven results" },
//         { icon: <Users className="w-5 h-5" />, text: "Team Collaboration", desc: "Shared knowledge base" }
//     ];

//     return (
//         <section className="relative flex items-center justify-center overflow-hidden pt-40 pb-10">
//             {/* Multi-layered Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white">
//                 {/* Base Grid Pattern */}
//                 {/* <div className="absolute inset-0 opacity-[0.10]">
//                     <div className="absolute inset-0" style={{
//                         backgroundImage: `
//                             linear-gradient(to right, #B03982 1px, transparent 1px),
//                             linear-gradient(to bottom, #B03982 1px, transparent 1px)
//                         `,
//                         backgroundSize: '50px 50px'
//                     }}></div>
//                 </div> */}

//                 {/* Concentric Circles */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="relative w-[200vw] h-[200vh]">
//                         {[...Array(6)].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#B03982]/5 rounded-full"
//                                 style={{
//                                     width: `${(i + 1) * 20}%`,
//                                     height: `${(i + 1) * 20}%`,
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Gradient Orbs with Depth */}
//                 <div className="absolute top-1/4 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br from-[#B03982]/5 via-transparent to-[#733C86]/5 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-1/4 -right-40 w-[40rem] h-[40rem] bg-gradient-to-br from-[#733C86]/5 via-transparent to-[#B03982]/5 rounded-full blur-3xl"></div>
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-r from-[#B03982]/3 via-transparent to-[#733C86]/3 rounded-full blur-3xl"></div>

//                 {/* Floating Particles */}
//                 {[...Array(20)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="absolute w-1 h-1 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full opacity-20"
//                         style={{
//                             top: `${Math.random() * 100}%`,
//                             left: `${Math.random() * 100}%`,
//                             animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
//                             animationDelay: `${Math.random() * 2}s`
//                         }}
//                     />
//                 ))}
//             </div>
//             {/* Content Container */}
//             <div className="relative container mx-auto px-4 md:px-6 lg:px-8 text-center">
//                 <div className={`max-w-6xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

//                     {/* Badge */}
//                     <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-full border border-white/40 shadow-lg shadow-[#B03982]/5">
//                         <Sparkles className="w-5 h-5 text-[#B03982]" />
//                         <span className="text-base font-semibold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                             AI-Powered Knowledge Platform
//                         </span>
//                         <div className="ml-2 px-2 py-1 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full">
//                             <span className="text-xs font-medium text-[#733C86]">New</span>
//                         </div>
//                     </div>

//                     {/* Main Heading with Layered Effect */}
//                     <div className="relative">
//                         {/* Glow Effect */}
//                         <img
//                 src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
//                 alt="Nerdy Buddy AI Assistant in Action"
//                 className="w-52 right-16 top-[-90px] absolute z-[1000]"
//             />
//                         <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-[#B03982]/10 via-transparent to-[#733C86]/10 blur-3xl opacity-50"></div>

//                         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight relative">
//                             <span className="block text-gray-900/95">
//                                 <span className="relative z-10">Transform Your</span>
//                                 <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#B03982] to-transparent opacity-50 blur-sm"></span>
//                             </span>
//                             <span className="block relative">
//                                 {/* Shadow Text Layer */}
//                                 <span className="absolute inset-0 text-transparent bg-gradient-to-r from-[#B03982]/20 via-[#a32c8d]/20 to-[#733C86]/20 bg-clip-text blur-xl">
//                                     Workplace Intelligence
//                                 </span>
//                                 {/* Main Gradient Text */}
//                                 <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
//                                     Workplace Intelligence
//                                 </span>
//                                 {/* Bottom Glow */}
//                                 <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-8 bg-gradient-to-r from-[#B03982]/10 via-[#a32c8d]/10 to-[#733C86]/10 blur-2xl -z-10"></span>
//                             </span>
//                         </h1>
//                     </div>

//                     {/* Subtitle */}
//                     <div className="max-w-3xl mx-auto relative">
//                         <p className="text-xl md:text-2xl text-gray-600/90 leading-relaxed font-medium">
//                             Nerdy Buddy is your AI-powered digital colleague that makes organizational knowledge
//                             <span className="relative mx-2">
//                                 <span className="relative z-10 bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent font-semibold">
//                                     instantly accessible
//                                 </span>
//                                 <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 blur-md -z-10"></span>
//                             </span>
//                             , secure, and actionable.
//                         </p>
//                     </div>

//                     {/* Feature Cards Grid */}


//                     {/* CTA Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//                         {/* Primary CTA */}
//                         <button
//                             onClick={() => window.location.href = '/contact'}
//                             className="group relative px-10 py-5 bg-gradient-to-br from-[#B03982] via-[#a32c8d] to-[#733C86] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#B03982]/30"
//                         >
//                             {/* Hover Glow */}
//                             <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-[#a32c8d] to-[#733C86] rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                             <div className="relative flex items-center justify-center gap-3">
//                                 <span className="font-semibold text-lg text-white tracking-wide">Start Free Trial</span>
//                                 <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
//                             </div>

//                             {/* Pulsing Ring */}
//                             <div className="absolute -inset-4 border-2 border-white/20 rounded-3xl animate-ping-slow"></div>
//                         </button>

//                         {/* Secondary CTA */}
//                         <button
//                             onClick={handlePlayVideo}
//                             className="group relative px-10 py-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg shadow-[#B03982]/5 hover:shadow-xl hover:shadow-[#733C86]/10 transition-all duration-500 hover:scale-105"
//                         >
//                             <div className="flex items-center justify-center gap-3">
//                                 <div className="relative">
//                                     <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm group-hover:from-[#B03982]/10 group-hover:to-[#733C86]/10 transition-all duration-300">
//                                         {isVideoPlaying ? (
//                                             <Pause className="w-6 h-6 text-gray-600 group-hover:text-[#B03982] transition-colors" />
//                                         ) : (
//                                             <Play className="w-6 h-6 text-gray-600 group-hover:text-[#B03982] transition-colors" />
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="text-left">
//                                     <span className="block text-base font-semibold text-gray-900">Watch Demo</span>
//                                     <span className="block text-sm text-gray-500">See AI in action</span>
//                                 </div>
//                             </div>
//                         </button>
//                     </div>


//                 </div>

//             </div>
//             <style jsx>{`
//                 @keyframes float {
//                     0%, 100% {
//                         transform: translateY(0) rotate(0deg);
//                     }
//                     50% {
//                         transform: translateY(-20px) rotate(180deg);
//                     }
//                 }

//                 @keyframes ping-slow {
//                     0%, 100% {
//                         transform: scale(1);
//                         opacity: 0.5;
//                     }
//                     50% {
//                         transform: scale(1.1);
//                         opacity: 0;
//                     }
//                 }

//                 .animate-ping-slow {
//                     animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Check, Zap, MessageSquare, Globe, Smartphone } from 'lucide-react';
import logoImage from '../assets/logo2.png'
import Chat from './chat';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const slide = {
        title: "Smarter Workplaces Start with",
        highlightedWords: [" Nerdy", "Buddy"],
        description: "Nerdy Buddy is your AI-powered digital colleague that makes organizational knowledgeinstantly accessible, secure, and actionable.",
        features: [
            "Automation up to 42%",
            "Turn visitor into playing customers",
            "Supercharge your customer service team"
        ]
    };

    return (
        <>
            <Chat />
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-30">

                <div className="absolute inset-0">
                    {/* Just the background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>

                    {/* Main Image Only */}
                    <div className="absolute bottom-0 top-0 left-4 transform translate-y-1/6">
                        <img
                            src={logoImage}
                            alt="AI Chat Interface Background"
                            className="w-[900px] opacity-5"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative mx-10 px-4 md:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column - Content */}
                        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="relative">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-full border border-white/40 shadow-lg shadow-[#B03982]/5 mb-8">
                                    <Sparkles className="w-5 h-5 text-[#B03982]" />
                                    <span className="text-base font-semibold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                        AI-Powered Solutions
                                    </span>
                                    <div className="ml-2 px-2 py-1 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full">
                                        <span className="text-xs font-medium text-[#733C86]">New</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-6 relative">
                                    {/* Title */}
                                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading">
                                        <span className="text-gray-900">{slide.title}</span>
                                        <span className="relative">
                                            <span className="bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                                                {slide.highlightedWords.join(' ')}
                                            </span>
                                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B03982]/30 to-[#733C86]/30 blur-sm"></span>
                                        </span>
                                    </h2>

                                    {/* Description */}
                                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                        {slide.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3">
                                        {slide.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <div className="pt-6">
                                        <button
                                            onClick={() => window.location.href = '/pricing'}
                                            className="group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#B03982]/30"
                                        >
                                            <div className="relative flex items-center justify-center gap-3">
                                                <span className="font-semibold text-lg text-white">Get Started</span>
                                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">500+</div>
                                        <div className="text-sm text-gray-600">Organizations</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                                        <div className="text-sm text-gray-600">AI Support</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">99.9%</div>
                                        <div className="text-sm text-gray-600">Accuracy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column - Image Showcase */}
                        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="relative flex justify-end">
                                {/* Main Image Container */}

                                <img
                                    src="https://aiglobe.wpengine.com/wp-content/uploads/2023/12/chat-mob.png"
                                    alt="AI Chat Interface"
                                    className="w-full max-w-md mx-auto drop-shadow-2xl"
                                />

                                {/* Floating Icons */}
                                <div className="absolute top-10 left-10 z-20 animate-float-slow">
                                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg">
                                        <MessageSquare className="w-6 h-6 text-[#B03982]" />
                                    </div>
                                </div>

                                <div className="absolute top-0 left-32 z-20 animate-float-slow">
                                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg">
                                        <Globe className="w-8 h-8 text-[#733C86]" />
                                    </div>
                                </div>

                                <div className="absolute bottom-20 left-10 z-20 animate-float-slower">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg">
                                        <Smartphone className="w-5 h-5 text-[#B03982]" />
                                    </div>
                                </div>

                                {/* Animated Dots Pattern */}
                                <div className="absolute -top-10 -right-10 opacity-20">
                                    <img
                                        src="https://aiglobe.wpengine.com/wp-content/uploads/2023/12/right-dots.png"
                                        alt="Pattern"
                                        className="w-48 animate-pulse-slow"
                                    />
                                </div>

                                <div className="absolute -bottom-10 -left-10 opacity-20">
                                    <img
                                        src="https://aiglobe.wpengine.com/wp-content/uploads/2023/12/left-dots.png"
                                        alt="Pattern"
                                        className="w-48 animate-pulse-slower"
                                    />
                                </div>

                                {/* Floating Chat Bubble */}
                                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl border border-gray-200 p-4 shadow-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Live Chat AI</div>
                                            <div className="text-xs text-gray-500">Instant responses</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Robot Character */}
                                <div className="absolute -top-20 right-0 hidden lg:block">
                                    <div className="relative group">
                                        {/* <img
                                        src="https://aiglobe.wpengine.com/wp-content/uploads/2023/12/faq-robot.png"
                                        alt="AI Robot"
                                        className="w-48 transform group-hover:scale-105 transition-transform duration-500"
                                    /> */}
                                        <img
                                            src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
                                            alt="Nerdy Buddy AI Assistant in Action"
                                            className="w-48 transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* <div className="absolute -top-4 -right-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full shadow-lg">
                                            <span className="text-white text-sm font-bold">AI</span>
                                        </div>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes float-slower {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                }
                
                @keyframes pulse-slower {
                    0%, 100% { opacity: 0.15; }
                    50% { opacity: 0.3; }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                }
                
                .animate-float-slower {
                    animation: float-slower 5s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
                
                .animate-pulse-slower {
                    animation: pulse-slower 4s ease-in-out infinite;
                }
            `}</style>
            </section>
        </>
    );
};

export default HeroSection;