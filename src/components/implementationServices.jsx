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
  TrendingUp
} from 'lucide-react';

const ImplementationServices = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  const services = [
    {
      id: 'technical',
      title: "Technical Implementation",
      icon: <Cpu className="w-8 h-8" />,
      price: "30",
      features: [
        "Seamless IT System Integration",
        "Robust ERP System Integration",
        "Flexible Cloud or On-Prem Deployment",
        "Flexible Platform Customization",
        "Enterprise-Grade SSO Integration",
        "Comprehensive Data Security & User Auth"
      ],
      gradient: "from-blue-400 to-cyan-500",
      image: "https://nerdybuddy.com/wp-content/uploads/2024/09/project-img8-295x125.webp"
    },
    {
      id: 'functional',
      title: "Functional Implementation",
      icon: <Users className="w-8 h-8" />,
      price: "25",
      features: [
        "Company structure configuration",
        "Departments creation",
        "User role definition and permissions",
        "Document type setup",
        "Uploading & tagging of organizational documents",
        "QA and approval testing with key users"
      ],
      gradient: "from-purple-400 to-pink-500",
      image: "https://nerdybuddy.com/wp-content/uploads/2024/09/project-img8-295x125.webp"
    },
    {
      id: 'ai',
      title: "AI-Efficiency Enhancements",
      icon: <Brain className="w-8 h-8" />,
      price: "15",
      features: [
        "Continuous Usage Tuning",
        "Quarterly AI Performance Review",
        "Log and feedback analysis",
        "Smarter Document Interpretation",
        "AI Prompt & Context Refinement",
        "Optimized Answers for User Satisfaction"
      ],
      gradient: "from-green-400 to-teal-500",
      image: "https://nerdybuddy.com/wp-content/uploads/2024/09/project-img8-295x125.webp"
    },
    {
      id: 'maintenance',
      title: "Maintenance & Support",
      icon: <Shield className="w-8 h-8" />,
      price: "20",
      features: [
        "Dedicated Support for Issue Resolution",
        "Regular Software Updates & Patch Management",
        "Dedicated Support for Issues",
        "Minor Customizations On Demand",
        "Reliable Monitoring & Uptime",
        "Feedback collection for ongoing improvement"
      ],
      gradient: "from-orange-400 to-red-500",
      image: "https://nerdybuddy.com/wp-content/uploads/2024/09/project-img8-295x125.webp"
    }
  ];

  const annualPlan = [
    {
      title: "Silver",
      price: "$29",
      period: "/ month",
      features: [
        "Text-to-video",
        "Automated translations",
        "100 Creative Units",
        "All Basic Features",
        "20+ Remove background/mo"
      ],
      gradient: "from-gray-400 to-gray-600",
      highlighted: false
    },
    {
      title: "Gold",
      price: "$59",
      period: "/ month",
      features: [
        "Text-to-video",
        "Automated translations",
        "1500 Creative Units",
        "All Basic Features",
        "50+ Remove background/mo"
      ],
      gradient: "from-yellow-400 to-orange-500",
      highlighted: true,
      popular: true
    },
    {
      title: "Platinum",
      price: "$199",
      period: "/ month",
      features: [
        "Text-to-video",
        "Automated translations",
        "Unlimited Avatars",
        "All Basic Features",
        "Unlimited Remove background/mo",
        "16x Factor Upscaling"
      ],
      gradient: "from-blue-400 to-purple-500",
      highlighted: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="block text-gray-900">Implementation &</span>
            <span className="block mt-2 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
              Support Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive services to ensure successful implementation and ongoing optimization of your AI knowledge management solution
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gradient-to-br from-gray-100 to-white rounded-full border border-gray-200 p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'monthly'
                ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white shadow-md'
                : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              Implementation Services
            </button>
            <button
              onClick={() => setActiveTab('annually')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'annually'
                ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white shadow-md'
                : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              <span>Annual Plans</span>
              <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full">
                Save 30%
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {activeTab === 'monthly' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-[#B03982]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#B03982]/10 hover:scale-[1.02]"
                >
                  {/* Header */}
                  <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-xl border border-gray-300 group-hover:border-transparent transition-all duration-300">
                        <div className="text-gray-800 transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>

                    {/* Price if exists */}
                    {service.price && (
                      <div className="mt-4">
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                          ${service.price}
                        </div>
                        <div className="text-sm text-gray-600">Per hour</div>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 rounded-full">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                            </div>
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Image */}
                  {/* <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div> */}

                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-white to-gray-100 rounded-full border border-gray-300 text-xs font-bold text-gray-600 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] transition-all duration-300 shadow-sm">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 animate-fadeIn">
              {annualPlan.map((plan, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border ${plan.highlighted
                    ? 'border-[#B03982]/50 shadow-xl shadow-[#B03982]/10'
                    : 'border-gray-200'
                    } overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Save Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                      Save 30%
                    </div>
                  </div>

                  {/* Header */}
                  <div className={`relative p-8 border-b ${plan.highlighted ? 'border-[#B03982]/20' : 'border-gray-200'
                    }`}>
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                        {plan.price}
                      </div>
                      <div className="text-sm text-gray-600">{plan.period}</div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300">
                      Start Free Trial Today
                    </button>
                  </div>

                  {/* Features List */}
                  <div className="p-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Decoration */}
                  {/* <div className="relative h-24 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className={`absolute inset-0 bg-gradient-to-t ${plan.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `radial-gradient(circle at 25px 25px, #B03982 2%, transparent 0%), 
                                      radial-gradient(circle at 75px 75px, #733C86 2%, transparent 0%)`,
                      backgroundSize: '100px 100px'
                    }}></div>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-16 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Implementation</h4>
              <p className="text-sm text-gray-600">Get up and running in weeks, not months</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mx-auto mb-4">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-sm text-gray-600">Dedicated team for setup and ongoing optimization</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Continuous Improvement</h4>
              <p className="text-sm text-gray-600">Regular updates and AI model enhancements</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to get started?</h4>
              <p className="text-gray-600">Schedule a free consultation with our experts</p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-[#B03982]/20 transition-all duration-300 hover:scale-105">
              Book a Demo
            </button>
          </div>
        </div>
      </div>

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

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ImplementationServices;