import React, { useEffect, useRef, useState } from 'react';
import {
    CheckCircle,
    Settings,
    Users,
    Brain,
    Cloud,
    Star,
    Clock,
    Sparkles,
    ChevronRight,
    X,
    Github,
    Twitter,
    Linkedin,
    Facebook,
    Youtube,
    Globe,
    Building2,
    Rocket,
    Puzzle,
    Briefcase,
    ArrowUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51T4fwyEeXHx7jwBMFmN1Uru4b9yhohGg2ELnZU6ESS7hwISpH5Z08j8ygsksnUTgWdaqvEHuRLJw1fiu5IiOfgA500vyquOrEq');

const StripePaymentForm = ({
    selectedPlan,
    setSelectedPlan,
    annualPlans,
    setShowPaymentModal,
    clientSecret,
    createPaymentIntent,
    setClientSecret
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [step, setStep] = useState('details'); // 'details' or 'payment'
    const [creatingIntent, setCreatingIntent] = useState(false);

    const handleDetailsSubmit = async (e) => {
        e.preventDefault();

        // Validate email
        if (!email) {
            setError('Please enter your email');
            return;
        }

        setCreatingIntent(true);
        setError(null);

        try {
            const success = await createPaymentIntent(email);
            if (success) {
                setStep('payment');
            }
        } catch (err) {
            setError('Failed to initialize payment');
        } finally {
            setCreatingIntent(false);
        }
    };

    const handlePaymentSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);
        setError(null);

        try {
            const cardElement = elements.getElement(CardElement);

            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: name,
                        email: email,
                    }
                }
            });

            if (stripeError) {
                setError(stripeError.message);
                setProcessing(false);
            } else if (paymentIntent && paymentIntent.status === 'succeeded') {
                setPaymentSuccess(true);
                await fetch('https://payment-integration-plum.vercel.app/api/verify-payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        paymentIntentId: paymentIntent.id,
                        name,
                        email,
                        company,
                        planId: selectedPlan.id,
                        planName: selectedPlan.title,
                        billingPeriod: selectedPlan.isYearly ? 'yearly' : 'monthly'
                    })
                });
                setProcessing(false);
                // Close modal after successful payment
                setTimeout(() => {
                    setSelectedPlan(null);
                    setShowPaymentModal(false);
                }, 2000);
            }
        } catch (err) {
            setError('An unexpected error occurred');
            setProcessing(false);
        }
    };

    const cardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
                padding: '10px 12px',
            },
            invalid: {
                color: '#9e2146',
            },
        },
        hidePostalCode: false,
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8">
                <h3 className="text-2xl font-bold mb-4">
                    {step === 'details' ? 'Enter Your Details' : 'Complete Your Purchase'}
                </h3>

                {step === 'details' ? (
                    // Step 1: Customer Details Form
                    <form onSubmit={handleDetailsSubmit}>
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full mt-0 py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#B03982] focus:ring-2 focus:ring-[#B03982]/20 outline-none transition-all duration-300 ease-out"
                                    placeholder="John Doe"
                                    disabled={creatingIntent}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full mt-0 py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#B03982] focus:ring-2 focus:ring-[#B03982]/20 outline-none transition-all duration-300 ease-out"
                                    placeholder="john@company.com"
                                    disabled={creatingIntent}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    required
                                    className="w-full mt-0 py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#B03982] focus:ring-2 focus:ring-[#B03982]/20 outline-none transition-all duration-300 ease-out"
                                    placeholder="Acme Inc."
                                    disabled={creatingIntent}
                                />
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                            <h4 className="font-semibold mb-2">Order Summary</h4>
                            <div className="flex justify-between text-sm">
                                <span>{selectedPlan?.title} Plan ({selectedPlan?.isYearly ? 'Yearly' : 'Monthly'})</span>
                                <span className="font-bold">
                                    ${selectedPlan?.price}
                                </span>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowPaymentModal(false);
                                    setSelectedPlan(null);
                                }}
                                className="cursor-pointer flex-1 py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 disabled:opacity-50"
                                disabled={creatingIntent}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={creatingIntent || !name || !email || !company}
                                className="cursor-pointer flex-1 py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {creatingIntent ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Processing...</span>
                                    </>
                                ) : (
                                    'Continue to Payment'
                                )}
                            </button>
                        </div>
                    </form>
                ) : (
                    // Step 2: Payment Form
                    <form onSubmit={handlePaymentSubmit}>
                        {/* Stripe Card Element */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Card Details
                            </label>
                            <div className="border border-gray-300 rounded-xl p-4 focus-within:ring-2 focus-within:ring-[#B03982] focus-within:border-transparent">
                                <CardElement options={cardElementOptions} />
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                            <h4 className="font-semibold mb-2">Order Summary</h4>
                            <div className="flex justify-between text-sm">
                                <span>{selectedPlan?.title} Plan ({selectedPlan?.isYearly ? 'Yearly' : 'Monthly'})</span>
                                <span className="font-bold">
                                    ${selectedPlan?.price}
                                </span>
                            </div>
                            <div className="mt-2 text-xs text-gray-600">
                                <p>Email: {email}</p>
                                <p>Company: {company}</p>
                            </div>
                        </div>

                        {paymentSuccess && (
                            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-green-800 font-semibold">Payment Successful!</h4>
                                        <p className="text-green-600 text-sm">Your payment has been processed successfully.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => setStep('details')}
                                className="cursor-pointer flex-1 py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 disabled:opacity-50"
                                disabled={processing || paymentSuccess}
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={!stripe || processing || paymentSuccess}
                                className="cursor-pointer flex-1 py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg disabled:opacity-50"
                            >
                                {processing ? 'Processing...' : paymentSuccess ? 'Paid!' : 'Pay Now'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

const PricingPage = () => {

    const [activeTab, setActiveTab] = useState('implementation');
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [isYearly, setIsYearly] = useState(false);
    const [showFaq, setShowFaq] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [clientSecret, setClientSecret] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const authUser = JSON.parse(localStorage.getItem('user'))

    const navigate = useNavigate();

    // Implementation Services Data
    const implementationServices = [
        {
            id: 'Starter (Free)',
            title: "Starter (Free)",
            shortDesc: "Perfect for evaluation and small teams",
            icon: <Rocket className="w-8 h-8" />,
            price: "Free",
            setupFee: "No setup fee",
            features: [
                "Company Creation",
                "Department Creation",
                "Number of Users: 1",
                "Roles & Permissions: Basic - Pre Defined Roles",
                "Admin Portal Access: Yes",
                "LMS Access (Admin): No",
                "Leaderboard: No",
                "Onboarding Module: No",
                "On-Job Training Module: No",
            ],
            gradient: "from-blue-400 to-cyan-500",
            color: "blue",
            stats: [
                { label: "Users", value: "1" },
                { label: "Companies", value: "1" },
                { label: "Documents", value: "100pg" }
            ]
        },
        {
            id: 'Standard',
            title: "Standard",
            shortDesc: "Ideal for growing teams",
            icon: <Briefcase className="w-8 h-8" />,
            price: "200",
            setupFee: "Contact for setup",
            features: [
                "Company Creation: 1",
                "Department Creation: Unlimited",
                "Number of Users: Up to 10",
                "Roles & Permissions: Advanced - can create",
                "Admin Portal Access: Yes",
                "LMS Access (Admin): Yes",
                "Leaderboard: Yes",
                "Onboarding Module: Yes",
                "On-Job Training Module: Yes",
            ],
            gradient: "from-purple-400 to-pink-500",
            color: "purple",
            stats: [
                { label: "Users", value: "10" },
                { label: "Documents", value: "500pg" },
                { label: "Support", value: "Email/WA" }
            ]
        },
        {
            id: 'Enterprise (Integration)',
            title: "Enterprise (Integration)",
            shortDesc: "Complex enterprise firms with custom needs",
            icon: <Globe className="w-8 h-8" />,
            price: "Custom",
            setupFee: "Custom setup",
            features: [
                "Company Creation: Multiple",
                "Department Creation: Unlimited",
                "Number of Users: Unlimited",
                "Roles & Permissions: Fully Custom",
                "Admin Portal Access: Yes",
                "LMS Access (Admin): Yes",
                "Leaderboard: Yes",
                "Onboarding Module: Yes",
                "On-Job Training Module: Yes",
            ],
            gradient: "from-pink-400 to-rose-500",
            color: "pink",
            stats: [
                { label: "Users", value: "∞" },
                { label: "Documents", value: "∞" },
                { label: "Support", value: "Priority" }
            ]
        },
    ];

    // Annual Plans Data
    const annualPlans = [
        {
            id: 'starter-annual',
            title: 'Starter',
            bestFor: 'Evaluation',
            icon: <Rocket className="w-6 h-6" />,
            color: 'blue',
            price: { monthly: 0, yearly: 0 },
            savings: null,
            popular: false,
            cta: 'Start Free',
            keyFeatures: [
                '1 Company, 1 Department',
                '1 User',
                'Basic Roles & Permissions',
                'Admin Portal Access',
                '100 Pages Documents',
                '250k AI Query Credits'
            ]
        },
        {
            id: 'standard-annual',
            title: 'Standard',
            bestFor: 'Growing Teams',
            icon: <Briefcase className="w-6 h-6" />,
            color: 'purple',
            price: { monthly: 99, yearly: 950 },
            savings: 'Save 20%',
            popular: true,
            cta: 'Get Started',
            keyFeatures: [
                'Up to 10 Users',
                'Unlimited Departments',
                'Advanced Roles & Permissions',
                'Full LMS Access',
                '500 Pages Documents',
                'AI Quiz Generation'
            ]
        },
        {
            id: 'enterprise-annual',
            title: 'Enterprise',
            bestFor: 'Complex Enterprise Firms',
            icon: <Globe className="w-6 h-6" />,
            color: 'pink',
            price: { monthly: 599, yearly: 5990 },
            savings: 'Save 16%',
            popular: false,
            cta: 'Contact Sales',
            keyFeatures: [
                'Unlimited Users',
                'Fully Custom Permissions',
                'Unlimited Documents',
                'Custom Integrations',
                'Dedicated CSM',
                'Priority SLA Support'
            ]
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
            question: "How does AI Convert text to video , automatically?",
            answer: "Enables us to focus more on content rather than makes our smoother thanks to the Figma plugin. Workflow smoother than us to focus more on content rather than makes",
            category: "implementation"
        },
        {
            question: "Affordable video production starting at $30/month",
            answer: "Enables us to focus more on content rather than makes our smoother thanks to the Figma plugin. Workflow smoother than us to focus more on content rather than makes",
            category: "billing"
        },
        {
            question: "Web-based app accessible in your browser ?",
            answer: "Enables us to focus more on content rather than makes our smoother thanks to the Figma plugin. Workflow smoother than us to focus more on content rather than makes",
            category: "support"
        },
        {
            question: "How does AI Convert text to video , automatically ?",
            answer: "Enables us to focus more on content rather than makes our smoother thanks to the Figma plugin. Workflow smoother than us to focus more on content rather than makes",
            category: "trial"
        },
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

    const createPaymentIntent = async (email) => {
        try {
            setLoading(true);
            const response = await fetch('https://payment-integration-plum.vercel.app/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: Number(selectedPlan?.price) * 100,
                    currency: 'usd',
                    email: email,
                    metadata: {
                        planId: selectedPlan.id,
                        title: selectedPlan.title,
                        billingPeriod: selectedPlan.isYearly ? 'yearly' : 'monthly'
                    }
                })
            });
            const data = await response.json();
            if (data.success) {
                setClientSecret(data.clientSecret);
                return true;
            } else {
                setError('Failed to initialize payment');
                return false;
            }
        } catch (err) {
            setError('Error creating payment');
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const handlePlanSelect = (service) => {
        const planWithBilling = {
            ...service,
            isYearly: isYearly
        };
        setSelectedPlan(planWithBilling);
        setShowPaymentModal(true);
        setError(null);
        setClientSecret(null); // Reset client secret when new plan is selected
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

    console.log(selectedPlan);

    return (
        <>

            {/* Payment Modal */}

            {showPaymentModal && selectedPlan && (
                <>
                    {selectedPlan.price !== "0" && selectedPlan.price !== 0 ? (
                        <Elements stripe={stripePromise}>
                            <StripePaymentForm
                                selectedPlan={selectedPlan}
                                setSelectedPlan={setSelectedPlan}
                                annualPlans={annualPlans}
                                setShowPaymentModal={setShowPaymentModal}
                                clientSecret={clientSecret}
                                createPaymentIntent={createPaymentIntent}
                                setClientSecret={setClientSecret}
                            />
                        </Elements>
                    ) : (
                        // Handle free plan
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-3xl max-w-md w-full p-8">
                                <h3 className="text-2xl font-bold mb-4">Free Plan Selected</h3>
                                <p className="text-gray-600 mb-6">You've selected the Starter plan. This plan is completely free!</p>
                                <button
                                    onClick={() => {
                                        setShowPaymentModal(false);
                                        setSelectedPlan(null);
                                    }}
                                    className="w-full py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

                {/* Hero Section */}
                <section className="relative pt-44 overflow-hidden">
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
                        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
                        </div> */}
                    </div>
                </section>

                {/* Main Pricing Section */}
                <section className="bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Section Header */}
                        {/* <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Flexible Plans for{' '}
                                <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                    Every Business
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Choose the perfect plan for your organization's needs. All plans include core features.
                            </p>
                        </div> */}

                        {/* Tabs Navigation */}
                        <div className="flex flex-col items-center mb-12">
                            {/* <div className="inline-flex bg-white rounded-2xl border border-gray-200 p-1.5 shadow-lg mb-8">
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
                            </div> */}

                            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-gray-200">
                                <button
                                    onClick={() => setIsYearly(false)}
                                    className={`cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-300 ${!isYearly
                                        ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white'
                                        : 'text-gray-700 hover:text-gray-900'
                                        }`}
                                >
                                    Monthly Billing
                                </button>
                                <button
                                    onClick={() => setIsYearly(true)}
                                    className={`cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${isYearly
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

                        </div>

                        {/* Tab Content */}
                        <div className="transition-all duration-500">
                            {activeTab === 'implementation' ? (
                                <div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {implementationServices.map((service, index) => {
                                            return (
                                                <div
                                                    key={service.id}
                                                    className="cursor-pointer group relative bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-[#B03982]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#B03982]/10 hover:scale-105"
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
                                                            <div className={`relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-${service.color}-50 to-white rounded-2xl border border-gray-200 group-hover:border-transparent transition-all duration-300`}>
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
                                                                {service.price === 'Free' ? 'Free' : service.price === 'Custom' ? 'Custom' : `$ ${service.price}`}
                                                            </div>
                                                            {/* <div className="text-sm text-gray-600">Per hour</div> */}
                                                            {/* <div className="text-xs text-gray-500 mt-1">{service.setupFee} setup</div> */}
                                                        </div>

                                                        {/* Stats */}
                                                        {/* <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gray-50 rounded-xl">
                                                            {service.stats.map((stat, idx) => (
                                                                <div key={idx} className="text-center">
                                                                    <div className="text-xs font-bold text-gray-900">{stat.value}</div>
                                                                    <div className="text-xs text-gray-600">{stat.label}</div>
                                                                </div>
                                                            ))}
                                                        </div> */}

                                                        {/* Features */}
                                                        <div className="space-y-3 mb-8">
                                                            <h4 className="font-semibold text-gray-900">Key Features:</h4>
                                                            {service.features.map((feature, idx) => (
                                                                <div key={idx} className="flex items-start gap-2">
                                                                    <CheckCircle className={`w-4 h-4 text-${service.color}-600 flex-shrink-0 mt-0.5`} />
                                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* CTA Button */}
                                                        <button
                                                            onClick={() => {
                                                                if (service.title === 'Enterprise (Integration)') {
                                                                    navigate('/contact-us')
                                                                } else {
                                                                    handlePlanSelect(service)
                                                                }
                                                            }}
                                                            className="cursor-pointer w-full py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                                        >
                                                            {/* {() ? (
                                                                <>
                                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                    </svg>
                                                                    <span>Processing...</span>
                                                                </>
                                                            ) : (
                                                                'Get Started'
                                                            )} */}
                                                            {service.title === 'Enterprise (Integration)' ? 'Contact Sales' : 'Start Plan'}
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Add-on Services */}
                                    {/* <div className="mt-16">
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
                                    </div> */}
                                </div>
                            ) : (
                                <div>
                                    {/* Annual Plans */}
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {annualPlans.map((plan) => {
                                            const price = isYearly ? plan.price.yearly : plan.price.monthly;
                                            const savings = isYearly ? plan.savings : null;

                                            return (
                                                <div
                                                    key={plan.id}
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
                                                    <div className={`p-6 border-b ${plan.popular ? 'border-[#B03982]/20' : 'border-gray-200'}`}>
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className={`p-3 bg-gradient-to-br from-${plan.color}-100 to-white rounded-xl`}>
                                                                <div className={`text-${plan.color}-600`}>{plan.icon}</div>
                                                            </div>
                                                            <div>
                                                                <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
                                                                <p className="text-sm text-gray-600">{plan.bestFor}</p>
                                                            </div>
                                                        </div>

                                                        {/* Price */}
                                                        <div className="mb-6">
                                                            <div className="flex items-end gap-2">
                                                                <span className="text-4xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                                                    ${price}
                                                                </span>
                                                                <span className="text-gray-600 mb-1">
                                                                    {isYearly ? '/year' : '/month'}
                                                                </span>
                                                            </div>
                                                            {isYearly && price > 0 && (
                                                                <div className="text-sm text-gray-600 mt-2">
                                                                    ${Math.round(price / 12)}/month when billed annually
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Key Features */}
                                                        <div className="space-y-2">
                                                            {plan.keyFeatures.map((feature, idx) => (
                                                                <div key={idx} className="flex items-center gap-2 text-sm">
                                                                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                                                    <span className="text-gray-700">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* CTA Button */}
                                                    <div className="p-6">
                                                        <button
                                                            onClick={() => handlePlanSelect(plan.id, price)}
                                                            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                                                ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white hover:shadow-lg hover:shadow-[#B03982]/20'
                                                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                                }`}
                                                        >
                                                            {plan.cta}
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Enterprise Section */}
                                    {/* <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
                                        <h3 className="text-3xl font-bold mb-4">Need a Custom Enterprise Solution?</h3>
                                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                            Get a tailored plan with custom features, dedicated support, and flexible pricing for your organization.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button
                                                onClick={() => window.location.href = '/contact'}
                                                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                                            >
                                                Contact Sales
                                            </button>
                                            <button
                                                onClick={() => window.location.href = '/schedule-call'}
                                                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                                            >
                                                Schedule a Call
                                            </button>
                                        </div>
                                    </div> */}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="bg-gray-50 mt-10">
                    <div className="container pb-10 mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                    Compare Plans Side by Side
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Find the perfect plan for your business needs with our detailed feature comparison
                            </p>
                        </div>

                        {/* Table Container with Horizontal Scroll for Mobile */}
                        <div className="overflow-x-auto bg-white rounded-3xl border border-gray-200 shadow-lg">
                            <table className="w-full min-w-[1200px]">
                                {/* Table Header */}
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#B03982] to-[#733C86]">
                                        <th className="p-6 text-left text-white font-semibold text-lg w-72">Features</th>
                                        <th className="p-6 text-center text-white font-semibold text-lg w-56">
                                            <div>Starter</div>
                                            {/* <div className="text-sm font-normal text-white/80 mt-1">(Free)</div> */}
                                        </th>
                                        <th className="p-6 text-center text-white font-semibold text-lg w-56">
                                            <div>Standard</div>
                                            {/* <div className="text-sm font-normal text-white/80 mt-1">Growing Teams</div> */}
                                        </th>
                                        {/* <th className="p-6 text-center text-white font-semibold text-lg w-56">
                                            <div>Enterprise Core</div>
                                            <div className="text-sm font-normal text-white/80 mt-1">Large Enterprises</div>
                                        </th> */}
                                        <th className="p-6 text-center text-white font-semibold text-lg w-56">
                                            <div>Enterprise Integration</div>
                                            {/* <div className="text-sm font-normal text-white/80 mt-1">Complex Firms</div> */}
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-gray-200">
                                    {/* Company Structure Section */}
                                    <tr className="bg-gray-50">
                                        <td colSpan="5" className="p-4 font-bold text-[#B03982] text-lg">Company Structure</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Company Creation</td>
                                        <td className="p-5 text-center">1</td>
                                        <td className="p-5 text-center">1</td>
                                        {/* <td className="p-5 text-center">Multiple</td> */}
                                        <td className="p-5 text-center">Multiple</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Department Creation</td>
                                        <td className="p-5 text-center">1</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Unlimited
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Unlimited
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Unlimited
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Number of Users</td>
                                        <td className="p-5 text-center">1</td>
                                        <td className="p-5 text-center">up to 10</td>
                                        {/* <td className="p-5 text-center">up to 30 users</td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Unlimited
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Roles & Permissions</td>
                                        <td className="p-5 text-center">Basic - Pre Defined Roles</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Advanced - can create
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Advanced - can create
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Fully Custom
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Admin & LMS Section */}
                                    <tr className="bg-gray-50">
                                        <td colSpan="5" className="p-4 font-bold text-[#B03982] text-lg">Admin & Learning Management</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Admin Portal Access</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">LMS Access (Admin)</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Leaderboard</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Onboarding Module</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">On-Job Training Module</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Documents Section */}
                                    <tr className="bg-gray-50">
                                        <td colSpan="5" className="p-4 font-bold text-[#B03982] text-lg">Document Management</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Documents</td>
                                        <td className="p-5 text-center">100 pages (1 Time)</td>
                                        <td className="p-5 text-center">500 pages</td>
                                        {/* <td className="p-5 text-center">1M</td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Unlimited
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Documents (On-Job Training)</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">—</td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Unlimited
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">AI-Friendly Documents</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Confidential Documents</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">500 pages</td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">AI-Friendly Confidential Docs</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Quiz & Analytics Section */}
                                    <tr className="bg-gray-50">
                                        <td colSpan="5" className="p-4 font-bold text-[#B03982] text-lg">Quiz & Analytics</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Quiz Generation</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">Manual + AI</td>
                                        {/* <td className="p-5 text-center">Manual + AI</td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Custom + AI
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Quiz Statistics</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">User Statistics</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Feedback to Management</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    {/* User Portal Section */}
                                    <tr className="bg-gray-50">
                                        <td colSpan="5" className="p-4 font-bold text-[#B03982] text-lg">User Portal</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">User Portal – AI Queries</td>
                                        <td className="p-5 text-center">250k (20 qs)</td>
                                        <td className="p-5 text-center">5 million (~300 qs)</td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Unlimited
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Unlimited
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">User Portal – LMS Access</td>
                                        <td className="p-5 text-center">View Only</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Full
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Full
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">User Portal – Onboarding</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">User Portal – On Job Training</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Cross-Platform Section */}
                                    <tr className="bg-gray-50">
                                        <td colSpan="5" className="p-4 font-bold text-[#B03982] text-lg">Cross-Platform</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Mobile App</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Kiosk Mode</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">Optional</td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Custom Integrations</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Yes
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Support & Implementation */}
                                    <tr className="bg-gray-50">
                                        <td colSpan="5" className="p-4 font-bold text-[#B03982] text-lg">Support & Implementation</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Implementation Engineering</td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <X className="w-5 h-5 text-red-400" />
                                                No
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Dedicated
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center gap-1">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                Dedicated
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Support Level</td>
                                        <td className="p-5 text-center">Community / Email</td>
                                        <td className="p-5 text-center">Email / Whatsapp</td>
                                        {/* <td className="p-5 text-center">SLA Support</td> */}
                                        <td className="p-5 text-center">Priority SLA + CSM</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-5 font-medium text-gray-900">Best For</td>
                                        <td className="p-5 text-center">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                                                Evaluation
                                            </span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                                Growing Teams
                                            </span>
                                        </td>
                                        {/* <td className="p-5 text-center">
                                            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                                                Large Enterprises
                                            </span>
                                        </td> */}
                                        <td className="p-5 text-center">
                                            <span className="px-3 py-1 bg-[#B03982]/10 text-[#B03982] rounded-full text-sm font-medium">
                                                Complex Enterprise Firms
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Table Footer Note */}
                        <div className="mt-8 text-center text-gray-600">
                            <p className="text-sm">* Features and pricing subject to change based on specific enterprise requirements</p>
                            <button onClick={() => navigate('/contact-us')} className="cursor-pointer mt-4 px-8 py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300">
                                Contact Sales for Custom Enterprise Pricing
                            </button>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                {/* <section className="py-20 bg-gradient-to-r from-[#B03982] to-[#733C86] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                What Our Clients Say
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                Success stories from businesses we've transformed
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-white"
                                        />
                                        <div>
                                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                                            <p className="text-white/80 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-white/90 italic">"{testimonial.content}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* FAQ Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                    Frequently Asked Questions
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Get answers to common questions about our services
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <div key={index} className="mb-4">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                        className="w-full text-left p-6 bg-white rounded-xl border border-gray-200 hover:border-[#B03982]/50 transition-all duration-300 flex items-center justify-between group"
                                    >
                                        <span className="font-semibold text-gray-900 group-hover:text-[#B03982] transition">
                                            {faq.question}
                                        </span>
                                        <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedFaq === index ? 'rotate-90' : ''}`} />
                                    </button>
                                    {expandedFaq === index && (
                                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 mt-2">
                                            <p className="text-gray-700">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-[#B03982] to-[#733C86] relative overflow-hidden">
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
      `}
                </style>
            </div>

        </>
    );
};

export default PricingPage;