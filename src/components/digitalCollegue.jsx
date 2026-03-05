import React from 'react';
import {
  Users,
  Shield,
  Lock,
  Zap,
  GraduationCap,
  Smile,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { CiSearch } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

const DigitalColleagueLight = () => {

  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Organizational Knowledge Available to every employee",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Documents leaking outside the organization not possible",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure, role-based access to company knowledge",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast onboarding & AI-generated training courses",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: "Interactive experience with a friendly animated guide",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Reduce burden, boost organizational efficiency",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - GIF */}
          <div className="relative order-2 lg:order-1 animate-fadeInLeft">
            <div className="relative">
              {/* Floating Badge - Light */}
              <div className="absolute -top-4 -right-4 z-10">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982]/20 to-[#733C86]/20 rounded-full blur-xl opacity-30"></div>
                  <div className="relative bg-white px-4 py-2 rounded-full border border-[#B03982]/20 shadow-sm backdrop-blur-sm">
                    <span className="text-sm font-medium text-[#733C86]">
                      AI Assistant
                    </span>
                  </div>
                </div>
              </div>

              {/* Main GIF Container - Light */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                {/* Light Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982]/10 via-transparent to-[#733C86]/10 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Image with Light Glow Effect */}
                <div className="relative bg-white rounded-3xl overflow-hidden flex justify-center">
                  <div className="w-[30rem] h-[34rem]">
                    <img
                      src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
                      alt="Nerdy Buddy Digital Colleague in Action"
                      className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Light Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-3 h-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Processing AI Response...</p>
                            <p className="text-xs text-gray-600 mt-1">Real-time knowledge retrieval</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Light Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gradient-to-br from-[#B03982]/30 to-[#733C86]/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gradient-to-br from-[#B03982]/30 to-[#733C86]/30 rounded-br-3xl"></div>
              </div>

              {/* Stats Bar - Light */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: <IoSearch className="w-10 h-10" />, value: "24/7", label: "Smart Search Experience" },
                  { icon: <IoChatboxEllipsesOutline className="w-10 h-10" />, value: "99.9%", label: "Ask in Natural Language" },
                  { icon: <HiOutlineNewspaper className="w-10 h-10" />, value: "10s", label: "Reference-Backed Answers" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-4 text-center group hover:border-[#B03982]/40 hover:shadow-md transition-all duration-300"
                  >
                    {/* <div className="text-xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                      {stat.value}
                    </div> */}
                    <div className="flex justify-center text-[#B03982] group-hover:text-[#B03982] transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content - Light */}
          <div className="order-1 lg:order-2 space-y-8 animate-fadeInRight">
            {/* Header - Light */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20">
                <Sparkles className="w-4 h-4 text-[#B03982]" />
                <span className="text-sm font-medium text-[#733C86]">
                  Nerdy Buddy Benefits
                </span>
              </div>

              <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight">
                <span className="block text-gray-900">Meet your new</span>
                <span className="block mt-2">
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                      Digital Colleague
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 blur-xl -z-10"></span>
                  </span>
                </span>
              </h2>

              <p className="text-lg text-gray-600 max-w-lg">
                An AI-powered assistant that transforms how your team accesses and interacts with organizational knowledge.
              </p>

            </div>

            {/* Benefits List - Light */}
            <div className="space-y-4">
              <div className="grid lg:grid-cols-2 gap-4 items-center">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl border border-gray-200 py-3 px-3 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#B03982]/5 shadow-sm"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Light Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/5 group-hover:to-[#733C86]/5 rounded-2xl transition-all duration-500"></div>

                    <div className="relative flex items-start gap-4">
                      {/* Light Icon Container */}
                      <div className="relative">
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className={`relative w-12 h-12 flex items-center justify-center ${benefit.bgColor} rounded-xl border border-gray-200 group-hover:border-transparent transition-all duration-300`}>
                          <div className={`${benefit.color} transform group-hover:scale-110 transition-transform duration-300`}>
                            {benefit.icon}
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 leading-relaxed">
                          {benefit.title}
                        </h3>

                        {/* Progress Bar Effect - Light */}
                        <div className="mt-3 relative">
                          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${benefit.color.replace('text', 'from')} ${benefit.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Check Indicator - Light */}
                      {/* <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle className="w-5 h-5 text-[#B03982]" />
                    </div> */}
                    </div>

                    {/* Floating Number - Light */}
                    {/* <div className="absolute -left-3 -top-3 w-8 h-8 flex items-center justify-center bg-white rounded-full border border-gray-300 text-xs font-bold text-gray-600 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] transition-all duration-300">
                      {index + 1}
                    </div> */}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - Light */}
            <div>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Light Ripple Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
                </div>

                <div className="relative flex items-center justify-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-white/30 rounded-full blur group-hover:animate-ping-slow"></div>
                    <GraduationCap className="w-5 h-5 text-white relative z-10" />
                  </div>
                  <span className="font-semibold text-lg text-white">Let's Connect</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>

              {/* Additional Info - Light */}
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                  <span>Free consultation included</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                  <span>No commitment required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges - Light */}
      <div className="absolute bottom-4 left-10 hidden lg:block">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-sm">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
            10x
          </div>
          <div className="text-sm text-gray-600">Productivity Boost</div>
        </div>
      </div>

      <div className="absolute top-10 right-10 hidden lg:block">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-sm">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
            100%
          </div>
          <div className="text-sm text-gray-600">Secure Data</div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes float-particles {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
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
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-float-particles {
          animation: float-particles 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default DigitalColleagueLight;