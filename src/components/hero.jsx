// import React, { useState } from 'react';
// import { Play, ChevronRight, Menu } from 'lucide-react';
// import bgImage from '../assets/bg.png';

// const HeroSection = () => {

//     const [isVideoPlaying, setIsVideoPlaying] = useState(true);

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

//     const handleVideoEnded = () => {
//         setIsVideoPlaying(false);
//     };

//     return (
//         <section className="relative min-h-screen mt-32">
//             <img src={bgImage} alt="" srcset="" className='absolute opacity-5 w-full top-[-120px]' />
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div> */}
//                 <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
//             </div>

//             <div className="relative container mx-auto max-w-7xl">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left Column - Content */}
//                     <div className="space-y-8 animate-fadeInUp">
//                         {/* Subtitle with icon */}
//                         <div className="flex items-center gap-3 mb-2 animate-fadeInUp animation-delay-400">
//                             <div className="relative">
//                                 <Menu className="w-5 h-5 bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text animate-bounce" />
//                                 <Menu className="absolute top-0 left-0 w-5 h-5 bg-gradient-to-t from-purple-500 to-pink-600 bg-clip-text animate-ping" />
//                             </div>
//                             <span className="text-lg font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent animate-gradient">
//                                 Creativity, Unleashed.
//                             </span>
//                         </div>

//                         {/* Main Heading */}
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-16 mb-4 mt-4">
//                             <span className="block text-gray-500 m-0">
//                                 Smarter Workplaces
//                             </span>
//                             <span className="block bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent m-0">
//                                 Start with Nerdy Buddy
//                             </span>
//                         </h1>

//                         {/* Description */}
//                         <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-fadeInUp animation-delay-600">
//                             Your AI-Powered Knowledge Upgrader
//                         </p>

//                         {/* CTA Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp animation-delay-800">
//                             {/* Request Demo Button */}
//                             <button
//                                 onClick={() => window.location.href = '/contact'}
//                                 className="cursor-pointer group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B03982]/30"
//                             >
//                                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                 <div className="relative flex items-center justify-center gap-2">
//                                     <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                                     <span className="font-semibold text-lg tracking-wide text-amber-50">
//                                         Request A Demo
//                                     </span>
//                                 </div>
//                             </button>

//                             {/* Watch Preview Button */}
//                             <button
//                                 onClick={handlePlayVideo}
//                                 className="cursor-pointer group px-8 py-4 border-2 border-[#B03982] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20"
//                             >
//                                 <div className="flex items-center justify-center gap-2">
//                                     <div className="relative">
//                                         <div className={`w-5 h-5 ${isVideoPlaying ? 'bg-red-500' : 'bg-green-500'} rounded-full`}></div>
//                                         {!isVideoPlaying && (
//                                             <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white" />
//                                         )}
//                                     </div>
//                                     <span className="font-semibold text-lg text-gray-600 bg-clip-text group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
//                                         Watch Quick Preview
//                                     </span>
//                                 </div>
//                             </button>
//                         </div>

//                         {/* Stats or Features */}
//                         {/* <div className="grid grid-cols-3 gap-6 pt-8">
//                             {[
//                                 { value: '24/7', label: 'AI Support' },
//                                 { value: '99%', label: 'Accuracy' },
//                                 { value: '10x', label: 'Productivity' }
//                             ].map((stat, index) => (
//                                 <div
//                                     key={index}
//                                     className="text-center p-4 bg-gradient-to-b from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-colors"
//                                 >
//                                     <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                                         {stat.value}
//                                     </div>
//                                     <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
//                                 </div>
//                             ))}
//                         </div> */}
//                     </div>

//                     {/* Right Column - Video */}
//                     <div className="relative animate-fadeIn animation-delay-1000 border-4 border-[#B03982] rounded-2xl">
//                         <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 group">
//                             {/* Video Container */}
//                             <div className="relative aspect-video">
//                                 <video
//                                     id="hero-video"
//                                     className="w-full h-full object-cover"
//                                     autoPlay
//                                     loop
//                                     muted
//                                     playsInline
//                                     onEnded={handleVideoEnded}
//                                     poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200"
//                                 >
//                                     <source
//                                         src="https://nerdybuddy.com/wp-content/uploads/2025/07/989.mp4"
//                                         type="video/mp4"
//                                     />
//                                 </video>

//                                 {/* Video Overlay */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                                 {/* Play/Pause Button */}
//                                 <button
//                                     onClick={handlePlayVideo}
//                                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-cyan-500/50"
//                                 >
//                                     {isVideoPlaying ? (
//                                         <div className="flex gap-1">
//                                             <div className="w-1.5 h-5 bg-white rounded-full"></div>
//                                             <div className="w-1.5 h-5 bg-white rounded-full"></div>
//                                         </div>
//                                     ) : (
//                                         <Play className="w-6 h-6 text-white ml-1" />
//                                     )}
//                                 </button>
//                             </div>


//                         </div>

//                         {/* Floating Elements */}
//                         <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-2xl opacity-20"></div>
//                         <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-2xl opacity-20"></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Scroll Indicator */}
//             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//                 <div className="animate-bounce">
//                     <div className="w-6 h-10 bg-gradient-to-br from-[#B03982] to-[#733C86] border-2 border-[#B03982] rounded-full flex justify-center">
//                         <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }

//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }

//         .animation-delay-400 {
//           animation-delay: 400ms;
//         }

//         .animation-delay-600 {
//           animation-delay: 600ms;
//         }

//         .animation-delay-800 {
//           animation-delay: 800ms;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1000ms;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2000ms;
//         }
//       `}</style>
//         </section>
//     );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
import { Play, Pause, ArrowRight, Sparkles, Zap, Shield, Rocket } from 'lucide-react';

const HeroSection = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handlePlayVideo = () => {
        const video = document.getElementById('hero-video');
        if (video) {
            if (video.paused) {
                video.play();
                setIsVideoPlaying(true);
            } else {
                video.pause();
                setIsVideoPlaying(false);
            }
        }
    };

    const features = [
        { icon: <Zap className="w-4 h-4" />, text: "Instant Answers" },
        { icon: <Shield className="w-4 h-4" />, text: "Enterprise Security" },
        { icon: <Rocket className="w-4 h-4" />, text: "10x Productivity" }
    ];

    return (
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, #B03982 2%, transparent 0%), 
                            radial-gradient(circle at 75px 75px, #733C86 2%, transparent 0%)`,
                        backgroundSize: '100px 100px'
                    }}></div>
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>

                {/* Floating Shapes */}
                <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-[#B03982]/10 rounded-3xl transform rotate-12 opacity-30 animate-float-slow"></div>
                <div className="absolute bottom-1/4 right-10 w-40 h-40 border-2 border-[#733C86]/10 rounded-full opacity-20 animate-float-slower"></div>
            </div>

            <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-[#B03982]" />
                            <span className="text-sm font-medium text-gray-700">AI-Powered Knowledge Management</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading">
                                <span className="block text-gray-900">Transform Your</span>
                                <span className="block mt-2 relative">
                                    <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                                        Workplace Intelligence
                                    </span>
                                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 blur-xl -z-10"></span>
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                Nerdy Buddy is your AI-powered digital colleague that makes organizational knowledge instantly accessible, secure, and actionable.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-[#B03982]/30 transition-all duration-300 hover:shadow-md"
                                >
                                    <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-md">
                                        <div className="text-gray-600 group-hover:text-[#B03982] transition-colors duration-300">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            {/* Primary CTA */}
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#B03982]/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative flex items-center justify-center gap-3">
                                    <span className="font-semibold text-lg text-white">Request Free Demo</span>
                                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>

                            {/* Secondary CTA */}
                            <button
                                onClick={handlePlayVideo}
                                className="group relative px-8 py-4 bg-white rounded-xl border border-gray-200 hover:border-[#B03982]/50 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-lg group-hover:from-[#B03982]/10 group-hover:to-[#733C86]/10 transition-all duration-300">
                                            {isVideoPlaying ? (
                                                <Pause className="w-5 h-5 text-gray-600 group-hover:text-[#B03982] transition-colors" />
                                            ) : (
                                                <Play className="w-5 h-5 text-gray-600 group-hover:text-[#B03982] transition-colors" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-sm font-medium text-gray-900">Watch Preview</span>
                                        <span className="block text-xs text-gray-500">2 min overview</span>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">500+</div>
                                    <div className="text-sm text-gray-600">Organizations</div>
                                </div>
                                <div className="h-8 w-0.5 bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                                    <div className="text-sm text-gray-600">AI Support</div>
                                </div>
                                <div className="h-8 w-0.5 bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">99%</div>
                                    <div className="text-sm text-gray-600">Accuracy</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Video Showcase */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {/* Video Card */}
                        <div className="relative group">
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 z-10">
                                <div className="relative">
                                    <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20 animate-ping-slow"></div>
                                    <div className="relative bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                                        <span className="text-sm font-medium text-gray-700">Live Demo</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Video Container */}
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[#B03982]/10">
                                {/* Gradient Border Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-transparent to-[#733C86] rounded-2xl opacity-10 blur group-hover:opacity-20 transition-opacity duration-500"></div>

                                {/* Video */}
                                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                                    <video
                                        id="hero-video"
                                        className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200"
                                    >
                                        <source
                                            src="https://nerdybuddy.com/wp-content/uploads/2025/07/989.mp4"
                                            type="video/mp4"
                                        />
                                    </video>

                                    {/* Overlay Controls */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="flex items-center justify-between">
                                                <div className="text-white">
                                                    <div className="text-sm font-medium">AI Assistant in Action</div>
                                                    <div className="text-xs text-gray-300">Real-time knowledge processing</div>
                                                </div>
                                                <button
                                                    onClick={handlePlayVideo}
                                                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                                                >
                                                    {isVideoPlaying ? (
                                                        <Pause className="w-5 h-5 text-white" />
                                                    ) : (
                                                        <Play className="w-5 h-5 text-white" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Info Card */}
                            <div className="mt-6 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">See Nerdy Buddy in Action</div>
                                        <div className="text-xs text-gray-500">Interactive AI demonstrations</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex space-x-1">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#B03982] to-[#733C86] opacity-30"></div>
                                            ))}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl border border-gray-200 p-4 shadow-lg animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg">
                                    <div className="text-emerald-600">✓</div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">No Setup Required</div>
                                    <div className="text-xs text-gray-500">Get started instantly</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-bounce">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs text-gray-500">Scroll to explore</span>
                            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-gradient-to-b from-[#B03982] to-[#733C86] rounded-full mt-2 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }
        
        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
        </section>
    );
};

export default HeroSection;