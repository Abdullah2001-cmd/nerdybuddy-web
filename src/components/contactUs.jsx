import React, { useState } from 'react';
import { Facebook, Linkedin, Send, CheckCircle, Sparkles, Users, Building } from 'lucide-react';

const ContactFormSection = () => {
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #B03982 1px, transparent 1px),
                            linear-gradient(to bottom, #733C86 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Let's Start</span>
                <span className="block mt-2">
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                      together with Nerdy Buddy!
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 blur-xl -z-10"></span>
                  </span>
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to transform your organization's knowledge management? Get in touch with our team to schedule a personalized demo and see how Nerdy Buddy can work for you.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61571851855164" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                aria-label="Visit our Facebook page"
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Facebook className="w-5 h-5 text-gray-700 group-hover:text-[#B03982] transition-colors duration-300" />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/106011349/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                aria-label="Visit our LinkedIn page"
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-[#B03982] transition-colors duration-300" />
              </a>
            </div>

            {/* Clap Animation - Hidden on mobile */}
            <div className="hidden md:block relative">
              <div className="absolute -right-10 -top-10 animate-bounce">
                <img
                  src="https://nerdybuddy.com/wp-content/uploads/2024/08/clap.png"
                  alt="Clap animation"
                  className="w-40 h-auto opacity-80"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                  <p className="text-sm text-gray-600">No obligation, just expert advice</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dedicated Support</h4>
                  <p className="text-sm text-gray-600">Personalized implementation team</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                  <Building className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Enterprise Ready</h4>
                  <p className="text-sm text-gray-600">Scalable for organizations of all sizes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8 shadow-xl shadow-[#B03982]/5">
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
                      className="group relative w-full px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#B03982]/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20 animate-ping-slow"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                    Quick Response
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600">Organizations Transformed</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent mb-2">
                24h
              </div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600">Free Consultation</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 8px;
        }

        textarea::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        textarea::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #B03982, #733C86);
          border-radius: 4px;
        }

        textarea::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #c94594, #8a48a3);
        }
      `}</style>
    </section>
  );
};

export default ContactFormSection;