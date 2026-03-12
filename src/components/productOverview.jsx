import React, { useState } from 'react';
import {
  Upload,
  Layers,
  Shield,
  MessageSquare,
  Users,
  Zap,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Lock,
  Brain,
  FileText,
  BrainIcon,
  BracesIcon,
  CloudLightning,
  ChartBar,
  Notebook,
  ChartArea
} from 'lucide-react';
import { TfiBarChart } from "react-icons/tfi";
import { MdOutlineOfflineBolt } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const ProductOverview = () => {
  const [activeTab, setActiveTab] = useState('what');

  const howItWorks = [
    {
      icon: <Upload className="w-5 h-5" />,
      title: "Document Upload & Tagging",
      description: "Easily upload PDFs, documents, and resources with intelligent tagging"
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "AI-Friendly Layering",
      description: "Structured knowledge organization for optimal AI comprehension"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure Embedding",
      description: "Enterprise-grade security with encrypted knowledge storage"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Interactive Access",
      description: "Natural language queries with intelligent responses"
    }
  ];

  const whyDifferent = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "No internal team needed",
      description: "We handle everything from setup to maintenance"
    },
    {
      icon: <FaCheck className="w-5 h-5" />,
      title: "Turnkey setup included",
      description: "Get up and running in hours, not weeks"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Engaging, intuitive UX",
      description: "Beautiful interface that employees love to use"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Intellectual Property Is At Risk",
      description: "Beautiful interface that employees love to use"
    }
  ];

  return (
    <section className="relative py-10 md:py-20 lg:py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#B03982]/10 to-transparent"></div> */}
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fadeInUp">
          <div className="inline-flex items-center justify-center md:mb-4 lg:mb-4 mb-2">
            <span className="text-md md:text-lg lg:text-lg font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
              AI That Understands Your Organization
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 flex justify-center gap-2">
            <span className="block text-gray-900">Product</span>
            <span className="block bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
              Overview
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <div className="space-y-10 animate-fadeInLeft">
            {/* What is Nerdy Buddy */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B03982] uppercase tracking-wider">
                  <Brain className="w-4 h-4" />
                  Simple. Secure. Smart.
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                  What is <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">Nerdy Buddy?</span>
                </h3>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <p className="text-md md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">NerdyBuddy</span> is not just a chatbot. It's a{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                      secure, AI-powered assistant
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 -z-10"></span>
                  </span>{' '}
                  built to help employees interact with complex organizational knowledge{' '}
                  <span className="font-bold text-gray-900">quickly, safely, and intelligently</span> —
                  no more digging through PDFs or chasing down the "right person."
                </p>
              </div>
            </div>

            {/* Tabs Navigation */}
            {/* <div className="flex space-x-2 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('how')}
                className={`px-6 py-3 font-medium text-lg transition-all duration-300 relative ${activeTab === 'how'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                How It Works
                {activeTab === 'how' && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86]"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('why')}
                className={`px-6 py-3 font-medium text-lg transition-all duration-300 relative ${activeTab === 'why'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                Why It's Different
                {activeTab === 'why' && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86]"></div>
                )}
              </button>
            </div> */}

            {/* Tab Content */}
            {/* <div className="transition-all duration-500">
              {activeTab === 'how' ? (
                <div className="space-y-6 animate-fadeIn">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    How It <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">Works</span>
                  </h4>

                  <div className="grid md:grid-cols-2 gap-4">
                    {howItWorks.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl border border-gray-200 p-5 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
                            <div className="text-[#B03982] group-hover:text-[#B03982] transition-colors duration-300">
                              {item.icon}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-fadeIn">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Why It's <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">Different</span>
                  </h4>

                  <div className="space-y-4">
                    {whyDifferent.map((item, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl border border-gray-200 hover:border-[#B03982]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
                          <CheckCircle className="w-5 h-5 text-[#B03982] group-hover:text-[#B03982] transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">{item.title}</h5>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#B03982] transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div> */}

            <div className="transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* How It Works Section */}
                <div className="space-y-6 animate-fadeIn">
                  <h4 className="text-center md:text-left lg:text-left text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    How It <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">Works</span>
                  </h4>

                  <div className="grid md:grid-cols-1 gap-4">
                    {howItWorks.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl border border-gray-200 p-2 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
                            <div className="text-[#B03982] group-hover:text-[#B03982] transition-colors duration-300">
                              {item.icon}
                            </div>
                          </div>
                          {/* <div> */}
                            <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                            {/* <p className="text-sm text-gray-600">{item.description}</p> */}
                          {/* </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why It's Different Section */}
                <div className="space-y-6 animate-fadeIn">
                  <h4 className="text-center md:text-left lg:text-left text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Why It's <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">Different</span>
                  </h4>

                  <div className="space-y-4">
                    {whyDifferent.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl border border-gray-200 p-2 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
                            <div className="text-[#B03982] group-hover:text-[#B03982] transition-colors duration-300">
                              {item.icon}
                            </div>
                          </div>
                          {/* <div> */}
                            <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                            {/* <p className="text-sm text-gray-600">{item.description}</p> */}
                          {/* </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="cursor-pointer group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B03982]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <FileText className="w-5 h-5 text-white" />
                  <span className="font-semibold text-lg text-white">Learn More About Features</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - GIF/Image */}
          <div className="relative animate-fadeInRight">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#B03982]/10 group">
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-transparent to-[#733C86] rounded-3xl opacity-20 blur group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-200">
                {/* <img
                  src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
                  alt="Nerdy Buddy AI Assistant in Action"
                  className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                /> */}
                <video
                  id="hero-video"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200"
                >
                  <source
                    src="https://nerdybuddy.com/wp-content/uploads/2025/07/989.mp4"
                    type="video/mp4"
                  />
                </video>
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-white">Live AI Processing</span>
                    </div>
                    <p className="text-sm text-gray-200">
                      Real-time knowledge retrieval and intelligent responses
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-[#B03982]/20 to-[#733C86]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-[#733C86]/20 to-[#B03982]/20 rounded-full blur-xl"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl border border-gray-200 p-4 text-center shadow-sm flex flex-col justify-center items-center">
                {/* <div className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                  99%
                </div> */}
                <MdOutlineOfflineBolt className="w-12 h-12 text-[#B03982]" />
                <div className="text-sm text-gray-600 mt-1 flex items-center justify-center gap-1">
                  <p>Instant Answers</p>
                  {/* <Brain className="w-5 h-5 text-[#B03982]" /> */}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl border border-gray-200 p-4 text-center shadow-sm flex flex-col justify-center items-center">
                {/* <div className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                  99%
                </div> */}
                <TfiBarChart className="w-12 h-12 text-[#B03982]" />
                <div className="text-sm text-gray-600 mt-1 flex items-center justify-center gap-1">
                  <p>Smart Interpretations</p>
                  {/* <Brain className="w-5 h-5 text-[#B03982]" /> */}
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-6 flex items-center justify-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
              <Lock className="w-5 h-5 text-[#B03982]" />
              <div>
                <span className="text-sm font-medium text-gray-900">Enterprise-Grade Security</span>
                <p className="text-xs text-gray-600">End-to-end encrypted knowledge base</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProductOverview;