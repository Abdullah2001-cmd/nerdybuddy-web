import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Check, Zap, MessageSquare, Globe, Smartphone } from 'lucide-react';
import logoImage from '../assets/logo2.png'
import Chat from './chat';

const HeroSection = ({ reveal }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timer;
        if (reveal === false) {
            setIsVisible(false);
            timer = setTimeout(() => setIsVisible(true), 100);
        } else {
            setIsVisible(true);
        }
        return () => clearTimeout(timer);
    }, [reveal]);

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

    console.log({
        "reveal": reveal, 
        "isVisible": isVisible
    });

    return (
        <>
            {/* <Chat /> */}
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-14">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
                    <div className="absolute bottom-0 top-0 left-4 transform translate-y-1/6">
                        <img
                            src={logoImage}
                            alt="AI Chat Interface Background"
                            className="w-[900px] opacity-5"
                        />
                    </div>
                </div>
                <div className="relative mx-10 px-4 md:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div
                            className="transform"
                            style={{
                                transform: !reveal && isVisible ? 'translateX(0)' : 'translateX(-6rem)',
                                opacity: !reveal && isVisible ? 1 : 0,
                                transition: !reveal && isVisible ? 'transform 1s ease, opacity 1s ease' : 'none'
                            }}
                        >
                            <div className="relative">
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-full border border-white/40 shadow-lg shadow-[#B03982]/5 mb-8">
                                    <Sparkles className="w-5 h-5 text-[#B03982]" />
                                    <span className="text-base font-semibold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                        AI-Powered Solutions
                                    </span>
                                    <div className="ml-2 px-2 py-1 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full">
                                        <span className="text-xs font-medium text-[#733C86]">New</span>
                                    </div>
                                </div>
                                <div className="space-y-6 relative">
                                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading">
                                        <span className="text-gray-900">{slide.title}</span>
                                        <span className="relative">
                                            <span className="bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                                                {slide.highlightedWords.join(' ')}
                                            </span>
                                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B03982]/30 to-[#733C86]/30 blur-sm"></span>
                                        </span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                        {slide.description}
                                    </p>
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
                                <div className="grid grid-cols-3 mt-6 border-t border-gray-100">
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">500+</div>
                                        <div className="text-sm text-gray-600">Organizations</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                                        <div className="text-sm text-gray-600">AI Support</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">99.9%</div>
                                        <div className="text-sm text-gray-600">Accuracy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative transform"
                            style={{
                                transform: !reveal && isVisible ? 'translateX(0)' : 'translateX(6rem)',
                                opacity: !reveal && isVisible ? 1 : 0,
                                transition: !reveal && isVisible ? 'transform 1s ease 0.3s, opacity 1s ease 0.3s' : 'none'
                            }}
                        >
                            <div className="flex justify-center">
                                <div className='relative'>
                                    <img
                                        src="https://aiglobe.wpengine.com/wp-content/uploads/2023/12/chat-mob.png"
                                        alt="AI Chat Interface"
                                        className="w-[360px] max-w-sm mx-auto drop-shadow-2xl"
                                    />
                                    <div
                                        id="hero-character-target"
                                        className="absolute top-0 right-10 transform -translate-y-1/2 w-14 h-14 z-50 lg:block pointer-events-none"
                                        aria-hidden="true"
                                    />
                                    <div className="absolute top-10 -left-38 z-20 animate-float-slow">
                                        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg">
                                            <MessageSquare className="w-6 h-6 text-[#B03982]" />
                                        </div>
                                    </div>
                                    <div className="absolute top-0 -left-20 z-20 animate-float-slow">
                                        <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg">
                                            <Globe className="w-8 h-8 text-[#733C86]" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-20 -left-20 z-20 animate-float-slower">
                                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg">
                                            <Smartphone className="w-5 h-5 text-[#B03982]" />
                                        </div>
                                    </div>
                                </div>
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
                                <div className="absolute -bottom-0 -right-8 bg-white rounded-2xl border border-gray-200 p-4 shadow-2xl">
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
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
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
            `}
                </style>
            </section>
        </>
    );
};

export default HeroSection;