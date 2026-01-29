import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: 'index.html' },
        { name: 'About us', href: 'about.html' },
        { name: 'Contact us', href: 'contact.html' },
    ];

    const scrollToContactForm = (e) => {
        e.preventDefault();
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-md shadow-xl`}>
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex-shrink-0 z-50">
                            <a href="index.html" className="block">
                                <div className="relative">
                                    <img
                                        src="https://nerdybuddy.com/wp-content/uploads/2024/08/Nerdy-Buddy-scaled.png"
                                        alt="Nerdy Buddy"
                                        className="h-8 md:h-10 w-auto brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                                    />
                                    {/* Animated border effect */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-0 hover:opacity-20 blur transition-opacity duration-300"></div>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative group text-gray-300 hover:text-gray-500 transition-colors duration-200 px-2 py-1"
                                >
                                    <span className="text-base font-medium">{item.name}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <button
                                onClick={scrollToContactForm}
                                className="cursor-pointer group relative px-6 py-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative flex items-center gap-2">
                                    <span className="font-semibold text-white">Get A Quote</span>
                                    <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="cursor-pointer lg:hidden relative w-10 h-10 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors z-50"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`
          lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
                    {/* Mobile Menu Content */}
                    <div className={`
            absolute top-24 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md transition-all duration-500
            ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
                        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
                            {/* Mobile Menu Items */}
                            <div className="py-4">
                                {menuItems.map((item, index) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`
                      flex items-center justify-between px-6 py-4 text-lg font-medium
                      ${index !== menuItems.length - 1 ? 'border-b border-gray-700/50' : ''}
                      text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200
                    `}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronRight className="w-5 h-5 text-gray-500" />
                                    </a>
                                ))}
                            </div>

                            {/* Mobile CTA Button */}
                            <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/30 border-t border-gray-700">
                                <button
                                    onClick={(e) => {
                                        scrollToContactForm(e);
                                        setIsMenuOpen(false);
                                    }}
                                    className="cursor-pointer w-full group relative px-6 py-4 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#B03982] to-[#733C86] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative flex items-center justify-center gap-3">
                                        <Phone className="w-5 h-5 text-white" />
                                        <span className="font-semibold text-lg text-white">Get A Quote</span>
                                    </div>
                                </button>

                                {/* Contact Info */}
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></div>
                                        <span className="text-sm">24/7 AI Support Available</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></div>
                                        <span className="text-sm">Quick Response Time</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Tagline */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-400 text-sm">
                                Your AI-Powered Knowledge Upgrader
                            </p>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <div className="w-3 h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86]"></div>
                                <span className="text-xs text-gray-500">Nerdy Buddy</span>
                                <div className="w-3 h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Add some space for fixed header */}
            <div className="h-16 md:h-20"></div>

            {/* Decorative elements for header */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-50"></div>

            <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        header {
          animation: fadeInDown 0.5s ease-out;
        }

        @media (max-width: 1024px) {
          .menu-item {
            transform: translateX(-100%);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          
          .menu-item:nth-child(1) { transition-delay: 0.1s; }
          .menu-item:nth-child(2) { transition-delay: 0.2s; }
          .menu-item:nth-child(3) { transition-delay: 0.3s; }
          
          .mobile-menu-open .menu-item {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
        </>
    );
};

export default Navbar;