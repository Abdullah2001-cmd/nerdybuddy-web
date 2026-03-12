import React from 'react';
import {
  Brain,
  Shield,
  Zap,
  TrendingUp,
  UserCheck,
  Clock,
  CheckCircle,
  Sparkles,
  Target,
  BarChart3,
  Users,
  Award
} from 'lucide-react';

const WhyChooseNow = () => {

  const reasons = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Information Overload is Real",
      description: "Employees are overwhelmed by scattered information across multiple platforms",
      stat: "Within 7 days, new hires forget 70% of what they learned—simply because they can't find it when needed.",
      gradient: "from-red-400 to-orange-500"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI is No Longer a Future Vision — It's Now",
      description: "Modern workplaces require AI-powered solutions to stay competitive",
      stat: "89% of employees expect AI at work",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security & IP Protection Demands Are Growing",
      description: "Protecting sensitive data while enabling access is critical",
      stat: "A determined employee can exfiltrate 40GB of sensitive data in under 30 minutes",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Employees Expect Consumer-Grade Experience at Work",
      description: "Modern interfaces and intuitive interactions are now expected",
      stat: "94% want work tools as good as personal apps",
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Training & Onboarding Costs Are Soaring",
      description: "Traditional methods are expensive and inefficient",
      stat: "Replacing a single employee can cost up to 200% of their annual salary—far more than fixing your onboarding.",
      gradient: "from-yellow-400 to-amber-500"
    }
  ];

  const stats = [
    { value: "3.6h", label: "Weekly Search Time", icon: <Clock className="w-10 h-10" /> },
    { value: "89%", label: "Expect AI", icon: <Brain className="w-10 h-10" /> },
    { value: "68%", label: "Data Risk", icon: <Shield className="w-10 h-10" /> },
    { value: "$1.2K", label: "Training Cost", icon: <BarChart3 className="w-10 h-10" /> }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20">

          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 order-2">

            {/* Real Problems Section */}
            <div className="space-y-4 sm:space-y-6">

              {/* Reasons List */}
              <div className="space-y-3 sm:space-y-4">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-5 hover:border-[#B03982]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/5 group-hover:to-[#733C86]/5 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

                    <div className="relative flex items-start gap-3 sm:gap-4">
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-lg sm:rounded-xl border border-gray-300 group-hover:border-transparent transition-all duration-300 shadow-sm">
                          <div className="text-base sm:text-lg text-gray-800 transform group-hover:scale-110 transition-transform duration-300">
                            {reason.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                            {reason.title}
                          </h4>
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#B03982] transition-colors duration-300 flex-shrink-0" />
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3">
                          {reason.description}
                        </p>

                        {/* Stat Badge */}
                        <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full border border-gray-200">
                          <span className="text-[10px] sm:text-xs font-medium text-gray-700">{reason.stat}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-3 sm:mt-4 relative">
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${reason.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200 p-2.5 sm:p-4 text-center group hover:border-[#B03982]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className="text-base sm:text-lg text-[#B03982]">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600 line-clamp-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - GIF */}
          <div className="relative order-1">

            <div className="space-y-3 sm:space-y-4 mb-6 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B03982]" />
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                  Why Choose Nerdy Buddy
                </span>
              </div>

              <h2 className="flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block text-gray-900">Why</span>
                <span className="block bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                  Now?
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Modern workplaces face rising pressure to deliver quick, secure, and engaging
                employee support. Traditional PDFs and portals fall short as employees demand
                AI-powered, conversational access to knowledge. At the same time, companies
                must protect sensitive data while cutting onboarding and training costs.
              </p>
            </div>

            {/* Floating Badge - Adjusted for mobile */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10">
              <div className="relative">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-md sm:blur-xl opacity-30 animate-ping-slow"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-200 backdrop-blur-sm shadow-sm">
                  <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                    Interactive Demo
                  </span>
                </div>
              </div>
            </div>

            {/* Main GIF Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-[#B03982]/20 group mt-6 lg:mt-8">
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-transparent to-[#733C86] rounded-2xl sm:rounded-3xl opacity-20 blur group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 flex justify-center">
                <div className="w-full sm:w-[30rem] h-auto">
                  <img
                    src="https://nerdybuddy.com/wp-content/uploads/2025/07/Thinking_1.gif"
                    alt="AI Thinking Process - Why Choose Nerdy Buddy Now"
                    className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                {/* Animated Overlay - Adjusted for mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-3 sm:p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-ping"></div>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-white">AI Processing Solutions...</p>
                          <p className="text-[10px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1">Real-time problem analysis</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner Accents - Hidden on mobile */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-tl-3xl opacity-30 hidden sm:block"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-br-3xl opacity-30 hidden sm:block"></div>
            </div>

            {/* Benefits Summary - Mobile optimized */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />,
                  title: "Immediate Impact",
                  desc: "See results from day one"
                },
                {
                  icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
                  title: "Employee Adoption",
                  desc: "94% user satisfaction"
                },
                {
                  icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
                  title: "ROI Focused",
                  desc: "3-6 month payback"
                },
                {
                  icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                  title: "Enterprise Ready",
                  desc: "Security-first"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-4 group hover:border-[#B03982]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
                      <div className="text-[#B03982] group-hover:text-white transition-colors duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">{benefit.title}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 truncate">{benefit.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-32 left-10 hidden xl:block">
          <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/10 backdrop-blur-sm animate-pulse"></div>
        </div>

        <div className="absolute bottom-32 right-10 hidden xl:block">
          <div className="w-20 lg:w-24 h-20 lg:h-24 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/10 backdrop-blur-sm animate-pulse animation-delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNow;