import React, { useEffect, useRef, useState } from 'react'
import AboutHeroSession from '../components/about/hero'
import AIAssistantFeatures from '../components/about/aiAssistant'
import { Facebook, Github, Linkedin, Twitter, Youtube, Brain, ArrowUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [progress, setProgress] = useState(0);
    const buttonRef = useRef(null);
    const hasScrolledToTop = useRef(false);
    const navigate = useNavigate()

    // Smooth scroll to top when component mounts
    useEffect(() => {
        if (window.scrollY > 0 && !hasScrolledToTop.current) {
            hasScrolledToTop.current = true;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, []);

    // Scroll progress and button visibility
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

        // Add ripple effect
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
        <>
            <AboutHeroSession />
            <AIAssistantFeatures />
            <footer className="bg-gray-900 text-white py-16">
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
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Problem Statement</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Use Cases</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Implementation</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li onClick={() => navigate('/about')}><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li onClick={() => navigate('/contact-us')}><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
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
            {/* Scroll to Top Button */}
            <button
                ref={buttonRef}
                onClick={scrollToTop}
                className={`fixed z-50 transition-all duration-700 ease-out-expo ${showScrollButton
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-20 pointer-events-none'
                    } ${isScrolling ? 'scale-95' : 'scale-100 hover:scale-110'}`}
                style={{
                    bottom: '2rem',
                    right: '2rem',
                }}
                aria-label="Scroll to top"
            >
                {/* Floating animation container */}
                <div className="relative animate-float">
                    {/* Outer glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Progress ring */}
                    <svg className="absolute -ins-1 w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="url(#progress-gradient)"
                            strokeWidth="2"
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
                    <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-full border border-gray-700/50 group-hover:border-transparent transition-all duration-300 shadow-2xl group-hover:shadow-[#B03982]/30 overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                        {/* Loading animation */}
                        {isScrolling && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* Icon */}
                        <div className={`relative transition-transform duration-300 ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
                            <ArrowUp className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* Particle effects */}
                    {showScrollButton && !isScrolling && (
                        <>
                            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0s' }} />
                            <div className="absolute -top-2 right-2 w-1 h-1 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0.3s' }} />
                        </>
                    )}
                </div>

                {/* Pulse effect */}
                {showScrollButton && !isScrolling && (
                    <div className="absolute inset-0 border-2 border-[#B03982]/30 rounded-full animate-ping opacity-0"></div>
                )}

                {/* Tooltip */}
                <div className="absolute right-14 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap border border-gray-700 shadow-xl">
                        <span>Back to top</span>
                        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-1.5 h-1.5 bg-gray-900 border-r border-b border-gray-700"></div>
                    </div>
                </div>
            </button>
        </>
    )
}

export default About