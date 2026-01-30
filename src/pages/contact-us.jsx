import React from 'react';
import { MapPin, Mail, Phone, Clock, Zap, Navigation, ArrowRight, MessageSquare, Building } from 'lucide-react';

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

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Pattern */}
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
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-600">Ready to Connect</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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

                            {/* Badge */}
                            <div className="absolute -top-3 -left-3 z-10">
                                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-lg text-2xl">
                                    {card.badge}
                                </div>
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
                                            <div className="text-sm font-medium text-gray-900">{card.address}</div>
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

                {/* Right Column - Map & Quick Contact */}
                <div className="grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Map Section */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black text-white">
                        <div className="relative p-6 md:p-8">
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

                            {/* Map Placeholder */}
                            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="relative inline-block">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full flex items-center justify-center mb-3">
                                                <MapPin className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -inset-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20"></div>
                                        </div>
                                        <div className="text-sm font-medium">Interactive Map View</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <a
                                    href="https://maps.google.com/?q=32-33+Skyline+Business+Village+Limeharbour+London+E14+9TS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-center"
                                >
                                    Open in Maps
                                </a>
                                <a
                                    href="tel:+447895859216"
                                    className="px-4 py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-lg font-medium hover:from-[#c94594] hover:to-[#8a48a3] transition-all duration-300 text-center"
                                >
                                    Get Directions
                                </a>
                            </div>
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

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your message..."
                                    rows="3"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300 hover:scale-[1.02]"
                            >
                                Send Message
                            </button>
                        </form>

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
    );
};

export default ContactInformation;