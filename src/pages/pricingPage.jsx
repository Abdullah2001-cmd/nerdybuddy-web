import React, { useState } from 'react';
import {
    CheckCircle,
    Settings,
    Users,
    Brain,
    Shield,
    Zap,
    Cpu,
    FileText,
    Cloud,
    Lock,
    RefreshCw,
    Server,
    TrendingUp,
    HelpCircle,
    Star,
    Clock,
    Award,
    BarChart3,
    MessageCircle,
    Sparkles,
    Download,
    Mail,
    Phone,
    Calendar,
    ChevronRight,
    X,
    Menu,
    Github,
    Twitter,
    Linkedin,
    Facebook,
    Youtube,
    Globe,
    CreditCard,
    Wallet,
    Building2,
    HeadphonesIcon,
    HeartHandshake,
    Rocket,
    Target,
    Layers,
    Gauge,
    LineChart,
    Puzzle,
    ArrowRight,
    Check,
    AlertCircle
} from 'lucide-react';

const PricingPage = () => {
    const [activeTab, setActiveTab] = useState('implementation');
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [isYearly, setIsYearly] = useState(false);
    const [showFaq, setShowFaq] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);

    // Implementation Services Data
    const implementationServices = [
        {
            id: 'technical',
            title: "Technical Implementation",
            shortDesc: "Seamless integration with your existing infrastructure",
            icon: <Cpu className="w-8 h-8" />,
            price: "30",
            setupFee: "Starting at $2,500",
            features: [
                "Seamless IT System Integration",
                "Robust ERP System Integration",
                "Flexible Cloud or On-Prem Deployment",
                "Flexible Platform Customization",
                "Enterprise-Grade SSO Integration",
                "Comprehensive Data Security & User Auth",
                "API Development & Integration",
                "Legacy System Migration",
                "Data Backup & Recovery Setup"
            ],
            gradient: "from-blue-400 to-cyan-500",
            color: "blue",
            stats: [
                { label: "Avg. Completion", value: "4-6 weeks" },
                { label: "Success Rate", value: "99.9%" },
                { label: "Support", value: "24/7" }
            ]
        },
        {
            id: 'functional',
            title: "Functional Implementation",
            shortDesc: "Optimize your organizational structure and workflows",
            icon: <Users className="w-8 h-8" />,
            price: "25",
            setupFee: "Starting at $1,500",
            features: [
                "Company structure configuration",
                "Departments creation",
                "User role definition and permissions",
                "Document type setup",
                "Uploading & tagging of organizational documents",
                "QA and approval testing with key users",
                "Workflow automation setup",
                "Custom reporting configuration",
                "User acceptance testing"
            ],
            gradient: "from-purple-400 to-pink-500",
            color: "purple",
            stats: [
                { label: "Avg. Completion", value: "3-4 weeks" },
                { label: "Efficiency Gain", value: "40%" },
                { label: "Teams Trained", value: "All" }
            ]
        },
        {
            id: 'ai',
            title: "AI-Efficiency Enhancements",
            shortDesc: "Continuous optimization of AI performance",
            icon: <Brain className="w-8 h-8" />,
            price: "15",
            setupFee: "Included",
            features: [
                "Continuous Usage Tuning",
                "Quarterly AI Performance Review",
                "Log and feedback analysis",
                "Smarter Document Interpretation",
                "AI Prompt & Context Refinement",
                "Optimized Answers for User Satisfaction",
                "Machine Learning Model Updates",
                "Accuracy Improvements",
                "Custom AI Training Sessions"
            ],
            gradient: "from-green-400 to-teal-500",
            color: "green",
            stats: [
                { label: "Accuracy Increase", value: "25%" },
                { label: "Review Frequency", value: "Quarterly" },
                { label: "ROI", value: "300%" }
            ]
        },
        {
            id: 'maintenance',
            title: "Maintenance & Support",
            shortDesc: "24/7 monitoring and dedicated support",
            icon: <Shield className="w-8 h-8" />,
            price: "20",
            setupFee: "Included",
            features: [
                "Dedicated Support for Issue Resolution",
                "Regular Software Updates & Patch Management",
                "Dedicated Support for Issues",
                "Minor Customizations On Demand",
                "Reliable Monitoring & Uptime",
                "Feedback collection for ongoing improvement",
                "Security Audits",
                "Performance Monitoring",
                "Emergency Hotline"
            ],
            gradient: "from-orange-400 to-red-500",
            color: "orange",
            stats: [
                { label: "Response Time", value: "< 1hr" },
                { label: "Uptime SLA", value: "99.99%" },
                { label: "Support", value: "24/7/365" }
            ]
        }
    ];

    // Annual Plans Data
    const annualPlans = [
        {
            name: "Starter",
            title: "Essential",
            price: {
                monthly: 29,
                yearly: 290
            },
            setupFee: "Free",
            description: "Perfect for small teams getting started",
            icon: <Rocket className="w-6 h-6" />,
            features: [
                "Text-to-video (50 credits/mo)",
                "Automated translations (10k words)",
                "50 Creative Units",
                "Basic Analytics",
                "5 Team Members",
                "Email Support",
                "2 Projects",
                "1GB Storage"
            ],
            limitations: [
                "No API access",
                "No custom branding"
            ],
            gradient: "from-gray-400 to-gray-600",
            color: "gray",
            popular: false,
            cta: "Start Free Trial",
            savings: "Save 17%"
        },
        {
            name: "Professional",
            title: "Gold",
            price: {
                monthly: 79,
                yearly: 790
            },
            setupFee: "Free",
            description: "Best for growing businesses",
            icon: <Award className="w-6 h-6" />,
            features: [
                "Text-to-video (500 credits/mo)",
                "Automated translations (50k words)",
                "500 Creative Units",
                "Advanced Analytics",
                "20 Team Members",
                "Priority Email & Chat Support",
                "10 Projects",
                "10GB Storage",
                "API Access",
                "Custom Branding"
            ],
            limitations: [],
            gradient: "from-yellow-400 to-orange-500",
            color: "yellow",
            popular: true,
            cta: "Start Free Trial",
            savings: "Save 20%"
        },
        {
            name: "Enterprise",
            title: "Platinum",
            price: {
                monthly: 299,
                yearly: 2990
            },
            setupFee: "Custom",
            description: "For large organizations with advanced needs",
            icon: <Building2 className="w-6 h-6" />,
            features: [
                "Unlimited Text-to-video",
                "Unlimited translations",
                "Unlimited Creative Units",
                "Enterprise Analytics",
                "Unlimited Team Members",
                "24/7 Phone Support",
                "Unlimited Projects",
                "100GB Storage",
                "Advanced API Access",
                "Custom Branding",
                "SSO Integration",
                "Dedicated Account Manager",
                "Custom AI Training"
            ],
            limitations: [],
            gradient: "from-blue-400 to-purple-500",
            color: "blue",
            popular: false,
            cta: "Contact Sales",
            savings: "Save 25%"
        }
    ];

    // Add-on Services
    const addOns = [
        {
            name: "Additional Storage",
            price: "10",
            unit: "per 10GB/month",
            icon: <Cloud className="w-5 h-5" />
        },
        {
            name: "API Calls",
            price: "0.001",
            unit: "per 1000 calls",
            icon: <Settings className="w-5 h-5" />
        },
        {
            name: "Team Members",
            price: "5",
            unit: "per user/month",
            icon: <Users className="w-5 h-5" />
        },
        {
            name: "Custom Integration",
            price: "150",
            unit: "per hour",
            icon: <Puzzle className="w-5 h-5" />
        }
    ];

    // FAQ Data
    const faqs = [
        {
            question: "How long does implementation typically take?",
            answer: "Implementation time varies based on your needs. Technical implementation typically takes 4-6 weeks, functional implementation 3-4 weeks. We'll work with you to create a timeline that fits your schedule.",
            category: "implementation"
        },
        {
            question: "Can I switch between plans?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. Our team will assist you in transitioning smoothly.",
            category: "billing"
        },
        {
            question: "What kind of support do you provide?",
            answer: "We offer tiered support based on your plan: Email support for Starter, priority chat for Professional, and 24/7 phone support with dedicated account manager for Enterprise.",
            category: "support"
        },
        {
            question: "Is there a free trial?",
            answer: "Yes! All plans come with a 14-day free trial. No credit card required. You'll have full access to all features to test and evaluate our platform.",
            category: "trial"
        },
        {
            question: "Do you offer custom enterprise solutions?",
            answer: "Absolutely! Our Enterprise plan can be fully customized to meet your specific needs. Contact our sales team for a tailored solution.",
            category: "enterprise"
        },
        {
            question: "How secure is my data?",
            answer: "We take security seriously. All data is encrypted at rest and in transit. We're SOC2 compliant and offer SSO, 2FA, and regular security audits.",
            category: "security"
        }
    ];

    // Testimonials
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO at TechCorp",
            content: "The implementation was seamless. Their team guided us through every step and the AI optimization has saved us countless hours.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Michael Chen",
            role: "Operations Director",
            content: "Best decision we made this year. The ROI has been incredible and the support team is always there when we need them.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Innovation",
            content: "The annual plan gave us great savings and the features are exactly what we needed. Highly recommended!",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    // Stats
    const stats = [
        { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
        { icon: <Globe className="w-6 h-6" />, value: "30+", label: "Countries" },
        { icon: <Clock className="w-6 h-6" />, value: "1M+", label: "Hours Saved" },
        { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Client Rating" }
    ];

    // Comparison Features
    const comparisonFeatures = [
        { name: "Text-to-video", starter: "50/mo", pro: "500/mo", enterprise: "Unlimited" },
        { name: "Translations", starter: "10k words", pro: "50k words", enterprise: "Unlimited" },
        { name: "Team Members", starter: "5", pro: "20", enterprise: "Unlimited" },
        { name: "Storage", starter: "1GB", pro: "10GB", enterprise: "100GB" },
        { name: "API Access", starter: false, pro: true, enterprise: true },
        { name: "Custom Branding", starter: false, pro: true, enterprise: true },
        { name: "SSO Integration", starter: false, pro: false, enterprise: true },
        { name: "Dedicated Support", starter: false, pro: false, enterprise: true }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

            {/* Navigation */}
            {/* <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-[#B03982]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                AI Solutions
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Product</a>
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Solutions</a>
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Resources</a>
              <a href="#" className="text-[#B03982] font-semibold">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-4 py-2 text-gray-700 hover:text-[#B03982] transition">
                Sign In
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav> */}

            {/* Hero Section */}
            <section className="relative pt-44 pb-20 overflow-hidden">
                <div className="relative container mx-auto px-4 md:px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 mb-8">
                        <Sparkles className="w-4 h-4 text-[#B03982] mr-2" />
                        <span className="text-sm font-medium text-[#B03982]">Flexible Plans for Every Business</span>
                    </div>

                    <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="block text-gray-900">Simple, Transparent</span>
                        <span className="block mt-2 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                            Pricing for AI Excellence
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        Choose the perfect plan for your business. From implementation to ongoing support,
                        we have flexible options to meet your needs and budget.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-2xl">
                                        <div className="text-[#B03982]">{stat.icon}</div>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Pricing Section */}
            <section>
                <div className="container mx-auto px-4 md:px-6">
                    {/* Tabs Navigation */}
                    <div className="flex flex-col items-center mb-12">
                        <div className="inline-flex bg-white rounded-2xl border border-gray-200 p-1.5 shadow-lg mb-8">
                            <button
                                onClick={() => setActiveTab('implementation')}
                                className={`px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${activeTab === 'implementation'
                                    ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white shadow-md'
                                    : 'text-gray-700 hover:text-gray-900'
                                    }`}
                            >
                                Implementation Services
                            </button>
                            <button
                                onClick={() => setActiveTab('annual')}
                                className={`px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'annual'
                                    ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white shadow-md'
                                    : 'text-gray-700 hover:text-gray-900'
                                    }`}
                            >
                                <span>Annual Plans</span>
                                <span className="px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                                    Save up to 30%
                                </span>
                            </button>
                        </div>

                        {/* Billing Toggle for Annual Plans */}
                        {activeTab === 'annual' && (
                            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-gray-200">
                                <button
                                    onClick={() => setIsYearly(false)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${!isYearly
                                        ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white'
                                        : 'text-gray-700 hover:text-gray-900'
                                        }`}
                                >
                                    Monthly Billing
                                </button>
                                <button
                                    onClick={() => setIsYearly(true)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${isYearly
                                        ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white'
                                        : 'text-gray-700 hover:text-gray-900'
                                        }`}
                                >
                                    Yearly Billing
                                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                                        Save 20%
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Tab Content */}
                    <div className="transition-all duration-500">
                        {activeTab === 'implementation' ? (
                            <div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {implementationServices.map((service, index) => (
                                        <div
                                            key={service.id}
                                            className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-[#B03982]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#B03982]/10 hover:scale-105"
                                        >
                                            {/* Header with Gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                            {/* Top Decoration */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B03982] to-[#733C86] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                                            {/* Content */}
                                            <div className="relative p-8">
                                                {/* Icon */}
                                                <div className="relative mb-6">
                                                    <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/20 to-[#733C86]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                    <div className={`relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-${service.color}-50 to-white rounded-2xl border border-${service.color}-200 group-hover:border-transparent transition-all duration-300`}>
                                                        <div className={`text-${service.color}-600 transform group-hover:scale-110 transition-transform duration-300`}>
                                                            {service.icon}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Title & Description */}
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                                <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>

                                                {/* Price */}
                                                <div className="mb-4">
                                                    <div className="text-4xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                                        ${service.price}
                                                    </div>
                                                    <div className="text-sm text-gray-600">Per hour</div>
                                                    <div className="text-xs text-gray-500 mt-1">{service.setupFee} setup</div>
                                                </div>

                                                {/* Stats */}
                                                <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gray-50 rounded-xl">
                                                    {service.stats.map((stat, idx) => (
                                                        <div key={idx} className="text-center">
                                                            <div className="text-xs font-bold text-gray-900">{stat.value}</div>
                                                            <div className="text-xs text-gray-600">{stat.label}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Features */}
                                                <div className="space-y-3 mb-8">
                                                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                                                    {service.features.slice(0, 6).map((feature, idx) => (
                                                        <div key={idx} className="flex items-start gap-2">
                                                            <CheckCircle className={`w-4 h-4 text-${service.color}-600 flex-shrink-0 mt-0.5`} />
                                                            <span className="text-sm text-gray-700">{feature}</span>
                                                        </div>
                                                    ))}
                                                    <button className="text-[#B03982] text-sm font-medium hover:underline flex items-center gap-1 mt-2">
                                                        See all features <ChevronRight className="w-3 h-3" />
                                                    </button>
                                                </div>

                                                {/* CTA Button */}
                                                <button className="w-full py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300 transform hover:scale-105">
                                                    Get Started
                                                </button>

                                                {/* Badge */}
                                                <div className="absolute -top-3 -right-3 w-12 h-12 flex items-center justify-center bg-white rounded-full border-2 border-[#B03982] text-[#B03982] font-bold text-lg shadow-lg">
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Add-on Services */}
                                <div className="mt-16">
                                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                                        <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                            Add-on Services
                                        </span>
                                    </h3>
                                    <div className="grid md:grid-cols-4 gap-4">
                                        {addOns.map((addon, index) => (
                                            <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#B03982]/50 transition-all">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="p-2 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg">
                                                        {addon.icon}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-gray-900">{addon.name}</div>
                                                        <div className="text-lg font-bold text-[#B03982]">${addon.price}</div>
                                                    </div>
                                                </div>
                                                <div className="text-xs text-gray-600">{addon.unit}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                {/* Annual Plans */}
                                <div className="grid md:grid-cols-3 gap-8">
                                    {annualPlans.map((plan, index) => {
                                        const price = isYearly ? plan.price.yearly : plan.price.monthly;
                                        const savings = isYearly ? plan.savings : null;

                                        return (
                                            <div
                                                key={index}
                                                className={`group relative bg-white rounded-3xl border-2 overflow-hidden transition-all duration-500 hover:scale-105 ${plan.popular
                                                    ? 'border-[#B03982] shadow-2xl shadow-[#B03982]/20'
                                                    : 'border-gray-200 hover:border-[#B03982]/50'
                                                    }`}
                                            >
                                                {/* Popular Badge */}
                                                {plan.popular && (
                                                    <>
                                                        <div className="absolute top-6 right-6 z-10">
                                                            <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                                                                Most Popular
                                                            </div>
                                                        </div>
                                                        <div className="absolute inset-0 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 pointer-events-none"></div>
                                                    </>
                                                )}

                                                {/* Savings Badge */}
                                                {savings && (
                                                    <div className="absolute top-6 left-6 z-10">
                                                        <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg">
                                                            {savings}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Header */}
                                                <div className={`p-8 border-b ${plan.popular ? 'border-[#B03982]/20' : 'border-gray-200'}`}>
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className={`p-3 bg-gradient-to-br from-${plan.color}-100 to-white rounded-xl`}>
                                                            <div className={`text-${plan.color}-600`}>{plan.icon}</div>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
                                                            <p className="text-sm text-gray-600">{plan.description}</p>
                                                        </div>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="mb-6">
                                                        <div className="flex items-end gap-2">
                                                            <span className="text-5xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                                                ${price}
                                                            </span>
                                                            <span className="text-gray-600 mb-1">
                                                                {isYearly ? '/year' : '/month'}
                                                            </span>
                                                        </div>
                                                        {isYearly && (
                                                            <div className="text-sm text-gray-600 mt-2">
                                                                ${Math.round(price / 12)}/month when billed annually
                                                            </div>
                                                        )}
                                                        <div className="text-xs text-gray-500 mt-1">
                                                            Setup: {plan.setupFee}
                                                        </div>
                                                    </div>

                                                    {/* CTA Button */}
                                                    <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                                        ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white hover:shadow-lg hover:shadow-[#B03982]/20'
                                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                        }`}>
                                                        {plan.cta}
                                                    </button>
                                                </div>

                                                {/* Features */}
                                                <div className="p-8">
                                                    <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                                                    <ul className="space-y-4">
                                                        {plan.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-start gap-3">
                                                                <div className="flex-shrink-0">
                                                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                                </div>
                                                                <span className="text-gray-700">{feature}</span>
                                                            </li>
                                                        ))}
                                                        {plan.limitations.map((limitation, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 opacity-50">
                                                                <div className="flex-shrink-0">
                                                                    <X className="w-5 h-5 text-gray-400" />
                                                                </div>
                                                                <span className="text-gray-500">{limitation}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Footer */}
                                                <div className="px-8 pb-8">
                                                    <button className="w-full py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:border-[#B03982] hover:text-[#B03982] transition-all duration-300">
                                                        Compare Features
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Enterprise Section */}
                                <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
                                    <h3 className="text-3xl font-bold mb-4">Need a Custom Enterprise Solution?</h3>
                                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                        Get a tailored plan with custom features, dedicated support, and flexible pricing for your organization.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                                            Contact Sales
                                        </button>
                                        <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                                            Schedule a Call
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                Compare Plans
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Find the perfect plan for your business needs
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-[#B03982] to-[#733C86]">
                                    <th className="p-6 text-left text-white font-semibold">Features</th>
                                    <th className="p-6 text-center text-white font-semibold">Starter</th>
                                    <th className="p-6 text-center text-white font-semibold">Professional</th>
                                    <th className="p-6 text-center text-white font-semibold">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((feature, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                        <td className="p-6 font-medium text-gray-900">{feature.name}</td>
                                        <td className="p-6 text-center">
                                            {typeof feature.starter === 'boolean' ? (
                                                feature.starter ? (
                                                    <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                                )
                                            ) : (
                                                <span className="text-gray-700">{feature.starter}</span>
                                            )}
                                        </td>
                                        <td className="p-6 text-center">
                                            {typeof feature.pro === 'boolean' ? (
                                                feature.pro ? (
                                                    <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                                )
                                            ) : (
                                                <span className="text-gray-700">{feature.pro}</span>
                                            )}
                                        </td>
                                        <td className="p-6 text-center">
                                            {typeof feature.enterprise === 'boolean' ? (
                                                feature.enterprise ? (
                                                    <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                                )
                                            ) : (
                                                <span className="text-gray-700">{feature.enterprise}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                Trusted by Industry Leaders
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            See what our clients say about their experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#B03982]/50 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to know about our pricing and plans
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#B03982]/50 transition-all duration-300"
                            >
                                <button
                                    onClick={() => setShowFaq(showFaq === index ? null : index)}
                                    className="w-full p-6 text-left flex items-center justify-between"
                                >
                                    <span className="font-semibold text-gray-900">{faq.question}</span>
                                    <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${showFaq === index ? 'rotate-90' : ''
                                        }`} />
                                </button>
                                {showFaq === index && (
                                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-6">Still have questions?</p>
                        <button className="px-8 py-4 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#B03982] to-[#733C86] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join hundreds of companies already using our AI solutions to save time, reduce costs, and improve efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-[#B03982] rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                            Start Free Trial
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#B03982] transition-all duration-300">
                            Schedule Demo
                        </button>
                    </div>
                    <p className="text-white/80 mt-6 text-sm">
                        No credit card required • 14-day free trial • Cancel anytime
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <Brain className="w-8 h-8 text-[#B03982]" />
                                <span className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                    AI Solutions
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Empowering businesses with cutting-edge AI solutions for knowledge management and automation.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Product</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Enterprise</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Roadmap</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Resources</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">API Reference</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Webinars</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Partners</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Legal</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 AI Solutions. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Animations */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(45deg, #B03982, #733C86) border-box;
          border: 2px solid transparent;
        }
      `}</style>
        </div>
    );
};

export default PricingPage;