import React, { useState } from 'react';
import { Play, ChevronRight, Menu } from 'lucide-react';
import bgImage from '../assets/bg.png';

const HeroSection = () => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(true);

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

    const handleVideoEnded = () => {
        setIsVideoPlaying(false);
    };

    return (
        <section className="relative min-h-screen mt-32">
            <img src={bgImage} alt="" srcset="" className='absolute opacity-5 w-full top-[-120px]' />
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div> */}
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8 animate-fadeInUp">
                        {/* Subtitle with icon */}
                        <div className="flex items-center gap-3 mb-2 animate-fadeInUp animation-delay-400">
                            <div className="relative">
                                <Menu className="w-5 h-5 bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text animate-bounce" />
                                <Menu className="absolute top-0 left-0 w-5 h-5 bg-gradient-to-t from-purple-500 to-pink-600 bg-clip-text animate-ping" />
                            </div>
                            <span className="text-lg font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent animate-gradient">
                                Creativity, Unleashed.
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-16 mb-4 mt-4">
                            <span className="block text-gray-500 m-0">
                                Smarter Workplaces
                            </span>
                            <span className="block bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent m-0">
                                Start with Nerdy Buddy
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-fadeInUp animation-delay-600">
                            Your AI-Powered Knowledge Upgrader
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp animation-delay-800">
                            {/* Request Demo Button */}
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="cursor-pointer group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B03982]/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative flex items-center justify-center gap-2">
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    <span className="font-semibold text-lg tracking-wide text-amber-50">
                                        Request A Demo
                                    </span>
                                </div>
                            </button>

                            {/* Watch Preview Button */}
                            <button
                                onClick={handlePlayVideo}
                                className="cursor-pointer group px-8 py-4 border-2 border-[#B03982] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <div className="relative">
                                        <div className={`w-5 h-5 ${isVideoPlaying ? 'bg-red-500' : 'bg-green-500'} rounded-full`}></div>
                                        {!isVideoPlaying && (
                                            <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white" />
                                        )}
                                    </div>
                                    <span className="font-semibold text-lg text-gray-600 bg-clip-text group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
                                        Watch Quick Preview
                                    </span>
                                </div>
                            </button>
                        </div>

                        {/* Stats or Features */}
                        {/* <div className="grid grid-cols-3 gap-6 pt-8">
                            {[
                                { value: '24/7', label: 'AI Support' },
                                { value: '99%', label: 'Accuracy' },
                                { value: '10x', label: 'Productivity' }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-4 bg-gradient-to-b from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-colors"
                                >
                                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div> */}
                    </div>

                    {/* Right Column - Video */}
                    <div className="relative animate-fadeIn animation-delay-1000 border-4 border-[#B03982] rounded-2xl">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 group">
                            {/* Video Container */}
                            <div className="relative aspect-video">
                                <video
                                    id="hero-video"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    onEnded={handleVideoEnded}
                                    poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200"
                                >
                                    <source
                                        src="https://nerdybuddy.com/wp-content/uploads/2025/07/989.mp4"
                                        type="video/mp4"
                                    />
                                </video>

                                {/* Video Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Play/Pause Button */}
                                <button
                                    onClick={handlePlayVideo}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-cyan-500/50"
                                >
                                    {isVideoPlaying ? (
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-5 bg-white rounded-full"></div>
                                            <div className="w-1.5 h-5 bg-white rounded-full"></div>
                                        </div>
                                    ) : (
                                        <Play className="w-6 h-6 text-white ml-1" />
                                    )}
                                </button>
                            </div>

                            
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-2xl opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-2xl opacity-20"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <div className="w-6 h-10 bg-gradient-to-br from-[#B03982] to-[#733C86] border-2 border-[#B03982] rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
        </section>
    );
};

export default HeroSection;