import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Clock, Zap, Sparkles, Navigation, ArrowRight, MessageSquare, Building, Brain, Github, Twitter, Linkedin, Facebook, Youtube, Send, ArrowUp } from 'lucide-react';

const ContactInformation = () => {

    const contactCards = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Our Office",
            description: "Drop by for a coffee and consultation",
            address: "32-33 Skyline Business Village",
            location: "Limeharbour, London E14 9TS",
            gradient: "from-blue-500 to-cyan-500",
            badge: "📍"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Send Us Email",
            description: "For detailed inquiries and proposals",
            email: "info@nerdybuddy.com",
            response: "Response within 24 hours",
            gradient: "from-purple-500 to-pink-500",
            badge: "📧"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Directly",
            description: "Immediate assistance available",
            phone: "+44 7895 859216",
            hours: "9AM - 6PM GMT",
            gradient: "from-green-500 to-teal-500",
            badge: "📞"
        }
    ];

    const workingHours = [
        { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
        { day: "Saturday", time: "10:00 AM - 4:00 PM" },
        { day: "Sunday", time: "By Appointment" }
    ];

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('https://payment-integration-plum.vercel.app/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: 'abdullah.320409@gmail.com',
                    templateType: 'adminNotification',
                    data: formData
                })
            });
            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    company: '',
                    phone: '',
                    email: '',
                    message: ''
                });
                setTimeout(() => setIsSubmitted(false), 3000);
            } else {
                alert(result.message || 'Failed to send email.');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [progress, setProgress] = useState(0);
    const buttonRef = useRef(null);
    const hasScrolledToTop = useRef(false);

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
            <section className="relative pt-44 pb-14 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white">
                    {/* Geometric Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <circle cx="20" cy="20" r="1" fill="#B03982" opacity="0.3" />
                                    <circle cx="60" cy="20" r="1" fill="#733C86" opacity="0.3" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dots)" />
                        </svg>
                    </div>

                    {/* Gradient Blobs */}
                    <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 -right-40 w-80 h-80 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
                </div>
                <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-600">Ready to Connect</span>
                        </div>

                        <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-6">
                            <span className="block text-gray-900">Let's Start Your</span>
                            <span className="block mt-2 relative">
                                <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                                    AI Transformation
                                </span>
                                <span className="absolute -bottom-2 left-1/4 w-1/2 h-3 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 blur-xl -z-10"></span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Connect with our team to discover how Nerdy Buddy can transform your organizational knowledge management.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
                        {contactCards.map((card, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform rotate-45 translate-x-8 -translate-y-8`}></div>
                                </div>

                                <div className="space-y-4 relative">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${card.gradient} bg-opacity-10 rounded-xl`}>
                                        <div className={`text-transparent bg-gradient-to-br ${card.gradient} bg-clip-text`}>
                                            {card.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                                        <p className="text-gray-600 text-sm">{card.description}</p>
                                    </div>

                                    {/* Details */}
                                    <div className="pt-3 border-t border-gray-100">
                                        {card.address && (
                                            <div className="space-y-1">
                                                <div
                                                    className="text-lg font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent hover:from-[#c94594] hover:to-[#8a48a3] transition-all duration-300"
                                                >{card.address}</div>
                                                <div className="text-sm text-gray-500">{card.location}</div>
                                            </div>
                                        )}
                                        {card.email && (
                                            <div className="space-y-1">
                                                <a
                                                    href={`mailto:${card.email}`}
                                                    className="text-lg font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent hover:from-[#c94594] hover:to-[#8a48a3] transition-all duration-300"
                                                >
                                                    {card.email}
                                                </a>
                                                <div className="text-sm text-gray-500">{card.response}</div>
                                            </div>
                                        )}
                                        {card.phone && (
                                            <div className="space-y-1">
                                                <a
                                                    href={`tel:${card.phone.replace(/\s+/g, '')}`}
                                                    className="text-lg font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent hover:from-[#c94594] hover:to-[#8a48a3] transition-all duration-300"
                                                >
                                                    {card.phone}
                                                </a>
                                                <div className="text-sm text-gray-500">{card.hours}</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <div className="pt-3">
                                        <button className="group flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#B03982] transition-colors duration-300">
                                            <span>Get in touch</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Line */}
                                <div className="mt-4 relative">
                                    <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`w-0 h-full bg-gradient-to-r ${card.gradient} rounded-full group-hover:w-full transition-all duration-700`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                        {/* Map Section */}
                        <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-8">
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Navigation className="w-6 h-6 text-[#B03982]" />
                                    <h3 className="text-xl font-bold">London Headquarters</h3>
                                </div>
                                <p className="text-gray-300">
                                    Visit our state-of-the-art office in the heart of London's business district
                                </p>
                            </div>

                            {/* Address Card */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 mb-6">
                                <div className="flex items-start gap-3">
                                    <Building className="w-5 h-5 text-[#B03982] mt-0.5" />
                                    <div className="flex-1">
                                        <div className="text-lg font-bold mb-1">Skyline Business Village</div>
                                        <div className="text-gray-300 text-sm">
                                            32-33 Limeharbour<br />
                                            London E14 9TS<br />
                                            United Kingdom
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-48 md:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                <iframe className='w-full h-full' loading="lazy" src="https://maps.google.com/maps?q=32-33%20Skyline%20Business%20Village%20Limeharbour%20London%20E14%209TS.&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="32-33 Skyline Business Village Limeharbour London E14 9TS." aria-label="32-33 Skyline Business Village Limeharbour London E14 9TS."></iframe>
                            </div>
                        </div>
                        {/* Quick Contact Form */}
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg">
                                    <MessageSquare className="w-5 h-5 text-[#B03982]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Quick Inquiry</h3>
                                    <p className="text-sm text-gray-500">Send us a quick message</p>
                                </div>
                            </div>

                            {/* Success Message */}
                            {isSubmitted ? (
                                <div className="text-center py-12 space-y-6 animate-fadeIn">
                                    <div className="relative inline-block">
                                        <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur opacity-50"></div>
                                        <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                        <p className="text-gray-600">
                                            Your message has been received. Our team will contact you within 24 hours.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-2 h-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                                        <span className="text-sm text-gray-600">Preparing your demo...</span>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Form Header */}
                                    <div className="mb-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm mb-4">
                                            <Sparkles className="w-4 h-4 text-[#B03982]" />
                                            <span className="text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                                Get Started Today
                                            </span>
                                        </div>
                                        <p className="text-gray-600">
                                            Fill out the form below and our team will reach out to schedule your personalized demo.
                                        </p>
                                    </div>

                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            What is your name? *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Company Field */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            What company do you represent?
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
                                            placeholder="Your company name"
                                        />
                                    </div>

                                    {/* Phone and Email Fields */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Phone number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                E-mail *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
                                                placeholder="your.email@company.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            A few words about your company *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300 resize-none"
                                            placeholder="Tell us about your organization and what you're looking to achieve..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="cursor-pointer group relative w-full px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#B03982]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {/* Animated Background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Ripple Effect */}
                                            <div className="absolute inset-0 overflow-hidden">
                                                <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
                                            </div>

                                            <div className="relative flex items-center justify-center gap-3">
                                                <div className="relative">
                                                    <div className="absolute -inset-2 bg-white/20 rounded-full blur group-hover:animate-ping"></div>
                                                    <Send className="w-5 h-5 text-white relative z-10" />
                                                </div>
                                                <span className="font-semibold text-lg text-white">
                                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                                </span>
                                            </div>
                                        </button>

                                        {/* Form Note */}
                                        <p className="text-xs text-gray-500 mt-4 text-center">
                                            By submitting this form, you agree to our Privacy Policy and consent to being contacted by our team.
                                        </p>
                                    </div>
                                </form>
                            )}

                            {/* Response Time */}
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-600">Typical response time: 2-4 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                <a href="#" className="text-gray-400 hover:text-white transition">
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
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Implementation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Use Cases</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Problem Statement</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
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
    );
};

export default ContactInformation;