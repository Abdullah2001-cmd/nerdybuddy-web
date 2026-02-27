import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronRight, Phone, ChevronDown, User, Settings, LogOut, Sparkles } from 'lucide-react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('user'));
    const user = JSON.parse(localStorage.getItem('user'));
    const location = useLocation()
    const navigate = useNavigate()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: '/', active: location.pathname === '/' },
        { name: 'Pricing', href: '/pricing', active: location.pathname === '/pricing' },
        { name: 'Services', href: '/services', active: location.pathname === '/services' },
        { name: 'About us', href: '/about', active: location.pathname === '/about' },
        { name: 'Contact us', href: '/contact-us', active: location.pathname === '/contact-us' },
    ];

    const scrollToContactForm = (e) => {
        e.preventDefault();
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const profileRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle logout with animation
    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            localStorage.clear();
            sessionStorage.clear();
            await signOut(auth);
            setIsProfileOpen(false);
            console.log('Logged out successfully, storage cleared');
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout error:', error);
            alert('Error logging out. Local data cleared successfully.');
        } finally {
            setIsLoggingOut(false);
        }
    };

    // Get user initials for avatar
    const getUserInitials = () => {
        if (user?.displayName) {
            return user.displayName
                .split(' ')
                .map(name => name[0])
                .join('')
                .toUpperCase()
                .slice(0, 2);
        }
        return user?.email?.slice(0, 2).toUpperCase() || 'U';
    };

    // Get display name
    const getDisplayName = () => {
        if (user?.displayName) return user.displayName;
        if (user?.email) return user.email.split('@')[0];
        return 'User';
    };

    console.log(user);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-50 backdrop-blur-md shadow-md`}>
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <NavLink to="" className="block">
                            <div className="relative">
                                <img
                                    src="https://nerdybuddy.com/wp-content/uploads/2024/08/Nerdy-Buddy-scaled.png"
                                    alt="Nerdy Buddy"
                                    className="h-8 w-auto transition-all duration-300"
                                />
                            </div>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={`relative group hover:text-[#B03982] transition px-2 py-1 ${item.active ? 'text-[#B03982]' : 'text-gray-700'}`}
                                >
                                    <span className="text-base font-medium">{item.name}</span>
                                    {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span> */}
                                </NavLink>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop */}
                        {isAuth ? (
                            <div className="hidden lg:block relative" ref={profileRef}>
                                {/* Profile Button */}
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="group relative flex items-center gap-3 px-4 py-2 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-xl border border-[#B03982]/20 hover:border-[#B03982]/40 transition-all duration-300"
                                >
                                    {/* Avatar with Gradient */}
                                    <div className="relative">
                                        <img className="w-8 h-8 rounded-full" src={user?.profile} alt="" />
                                    </div>

                                    {/* User Info */}
                                    <div className="flex flex-col items-start">
                                        <span className="text-md font-medium text-gray-700 truncate max-w-[120px]">
                                            {getDisplayName()}
                                        </span>
                                        <span className="text-xs text-gray-500">Account</span>
                                    </div>

                                    {/* Chevron Icon with Animation */}
                                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute right-0 mt-2 w-64 transform transition-all duration-300 origin-top-right ${isProfileOpen
                                        ? 'opacity-100 scale-100 translate-y-0'
                                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                                        {/* User Info Header */}
                                        <div className="p-4 bg-gradient-to-r from-[#B03982]/5 to-[#733C86]/5 border-b border-gray-100">
                                            <div className="flex items-center gap-3">
                                                <img className="w-8 h-8 rounded-full" src={user?.profile} alt="" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-md font-semibold text-gray-900 truncate">
                                                        {getDisplayName()}
                                                    </p>
                                                    <p className="text-xs text-gray-500 truncate">
                                                        {user?.email || 'No email'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Menu Items */}
                                        <div className="p-2">
                                            {/* Profile Option */}
                                            <button
                                                onClick={() => {
                                                    setIsProfileOpen(false);
                                                    // Navigate to profile
                                                }}
                                                className="w-full flex items-center gap-3 px-3 py-2.5 text-md text-gray-700 hover:bg-gradient-to-r hover:from-[#B03982]/5 hover:to-[#733C86]/5 rounded-lg transition-all duration-200 group"
                                            >
                                                <div className="relative">
                                                    <User className="w-4 h-4 text-gray-500 group-hover:text-[#B03982] transition-colors" />
                                                </div>
                                                <span className="flex-1 text-left">Your Profile</span>
                                            </button>

                                            {/* Settings Option */}
                                            <button
                                                onClick={() => {
                                                    setIsProfileOpen(false);
                                                    // Navigate to settings
                                                }}
                                                className="w-full flex items-center gap-3 px-3 py-2.5 text-md text-gray-700 hover:bg-gradient-to-r hover:from-[#B03982]/5 hover:to-[#733C86]/5 rounded-lg transition-all duration-200 group"
                                            >
                                                <Settings className="w-4 h-4 text-gray-500 group-hover:text-[#B03982] transition-colors" />
                                                <span className="flex-1 text-left">Settings</span>
                                            </button>

                                            {/* Divider */}
                                            <div className="my-2 border-t border-gray-100"></div>

                                            {/* Logout Option with Animation */}
                                            <button
                                                onClick={handleLogout}
                                                disabled={isLoggingOut}
                                                className="w-full relative overflow-hidden group"
                                            >
                                                <div
                                                    className={`flex items-center gap-3 px-3 py-2.5 text-md text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 ${isLoggingOut ? 'pointer-events-none' : ''
                                                        }`}
                                                >
                                                    {/* Animated Background for Logout */}
                                                    <div
                                                        className={`absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform transition-transform duration-700 ${isLoggingOut ? 'translate-x-0' : '-translate-x-full'
                                                            }`}
                                                    ></div>

                                                    {/* Content */}
                                                    <div className="relative flex items-center gap-3 w-full">
                                                        {isLoggingOut ? (
                                                            <>
                                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                                <span className="text-white font-medium">Logging out...</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                                                <span className="flex-1 text-left">Logout</span>
                                                                <span className="text-xs opacity-50">→</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </button>
                                        </div>

                                        {/* Footer Note */}
                                        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                                            <div className="flex items-center gap-2">
                                                <Sparkles className="w-3 h-3 text-[#B03982]" />
                                                <span className="text-xs text-gray-500">Signed in securely</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden lg:block">
                                <button
                                    onClick={() => navigate('/login')}
                                    className="cursor-pointer group relative px-6 py-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B03982]/30"
                                >
                                    <div className="relative flex items-center gap-2">
                                        <span className="font-semibold text-white">Login</span>
                                        <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>
                            </div>
                        )}

                        {/* Mobile Profile View - Optional */}
                        {isAuth && (
                            <div className="lg:hidden">
                                {/* Mobile version can be added here if needed */}
                            </div>
                        )}

                        {/* Add custom keyframes for shimmer animation */}
                        <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>


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
                                        <span className="text-md">24/7 AI Support Available</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></div>
                                        <span className="text-md">Quick Response Time</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Tagline */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-400 text-md">
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
            {/* <div className="h-16 md:h-20"></div> */}

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

            <Outlet />

        </>
    );
};

export default Navbar;