import React from 'react';
import {
  Target,
  Zap,
  Shield,
  Users,
  Lightbulb,
  Rocket,
  TrendingUp,
  Globe,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { value: "100+", label: "Organizations Transformed", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "24/7", label: "AI Assistant Available", icon: <Zap className="w-5 h-5" /> },
    { value: "UK", label: "Registered Company", icon: <Globe className="w-5 h-5" /> },
    { value: "95%", label: "User Satisfaction", icon: <Users className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission Driven",
      description: "Making organizational knowledge accessible to everyone",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Enterprise-grade security for your sensitive data",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly evolving with cutting-edge AI technology",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Adapting to your organization's unique needs",
      color: "from-green-400 to-teal-500"
    }
  ];

  const milestones = [
    { year: "2023", title: "The Beginning", description: "Concept born to solve workplace knowledge gaps" },
    { year: "2024", title: "Platform Launch", description: "First version released to early adopters" },
    { year: "2025", title: "Global Expansion", description: "Serving 100+ organizations worldwide" }
  ];

  return (
    <section className="relative pt-30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B03982" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-5 sm:mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              About Nerdy Buddy
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-bold mb-4 sm:mb-6 leading-tight">

            <span className="block text-gray-900 text-3xl sm:text-4xl md:text-5xl">
              Transforming Knowledge
            </span>

            <span className="block relative">
              <span className="relative z-10 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl">
                Management with AI
              </span>

              <span className="absolute -bottom-1 sm:-bottom-2 left-1/4 w-1/2 h-2 sm:h-3 bg-gradient-to-r from-[#B03982]/20 to-[#733C86]/20 blur-xl -z-10"></span>
            </span>

          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            We're a UK-based AI company on a mission to make organizational knowledge
            simple, secure, and instantly accessible.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-8 md:mb-16 lg:mb-16">
          {/* Left Column - Visual & Stats */}
          <div className="space-y-8">
            {/* Animated GIF Container */}
            <div className="relative group">
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 z-10">
                <div className="px-3 py-1.5 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white text-xs font-bold rounded-full shadow-lg">
                  AI in Action
                </div>
              </div>

              {/* Main Image */}
              <div className="relative rounded-2xl flex justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg group-hover:shadow-xl transition-shadow duration-300">

                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                  <img
                    src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
                    alt="Nerdy Buddy Digital Colleague in Action"
                    className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 hover:border-[#B03982]/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="flex items-center gap-3">

                      {/* Icon */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200">
                        <div className="text-gray-600 group-hover:text-[#B03982] transition-colors duration-300">
                          {stat.icon}
                        </div>
                      </div>

                      {/* Text */}
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-[11px] sm:text-xs text-gray-600">
                          {stat.label}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="pt-6 sm:pt-8">

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 sm:mb-6">
                Our Journey
              </h3>

              <div className="space-y-5 sm:space-y-6 relative">

                {/* Timeline Line */}
                <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-14 sm:pl-12">

                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full border-4 border-white shadow-lg">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-[#B03982] to-[#733C86]"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-1">

                      <div className="text-xs sm:text-sm font-semibold text-gray-500">
                        {milestone.year}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-gray-900">
                        {milestone.title}
                      </h4>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Introduction Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-sm w-full">
              <div className="space-y-5 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-12 md:w-12 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-xl">
                      <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#B03982]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Our Mission</h2>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Nerdy Buddy eliminates the daily friction of searching, asking, and waiting for answers.
                      By giving employees instant access to the right information, we reduce support tickets
                      and free up time for meaningful work.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    What started as a simple idea to help teams find answers faster has grown into
                    a powerful assistant designed to simplify training, manage policies, and improve
                    everyday learning.
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We're not just building tools, we're building better ways for people to learn,
                    share, and grow at work. Join us in transforming how organizations access and
                    utilize knowledge.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl border border-gray-200 p-4 sm:p-5 hover:shadow-lg transition-all duration-300 w-full"
                >
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform rotate-45 translate-x-6 -translate-y-6 sm:translate-x-8 sm:-translate-y-8`}></div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 relative">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br ${value.color} bg-opacity-10 rounded-lg`}>
                        <div className={`text-transparent bg-gradient-to-br ${value.color} bg-clip-text text-sm sm:text-base`}>
                          {value.icon}
                        </div>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-gray-900">{value.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>

                  {/* Hover Line */}
                  <div className="mt-3 sm:mt-4 relative">
                    <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`w-0 h-full bg-gradient-to-r ${value.color} rounded-full group-hover:w-full transition-all duration-700`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 w-full">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Nerdy Buddy</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "AI-powered instant knowledge access",
                  "Secure enterprise-grade platform",
                  "Reduces support tickets by 70%+",
                  "Simple setup, no IT expertise needed",
                  "Continuous learning and improvement",
                  "24/7 availability for global teams"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start sm:items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-0">
                      <div className="w-5 h-5 sm:w-5 md:w-5 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-green-100 rounded-full">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                      </div>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#B03982] to-[#733C86] p-5 sm:p-6 md:p-8 text-white w-full">
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 leading-tight">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 opacity-90 leading-relaxed max-w-md">
              Join hundreds of companies using Nerdy Buddy to streamline their knowledge management.
            </p>
            <button className="group flex items-center justify-center sm:justify-start gap-2 bg-white text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto text-sm sm:text-base">
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pattern Overlay - Adjusted for mobile */}
          <div className="absolute right-0 bottom-0 w-24 sm:w-32 h-24 sm:h-32 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="white" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.9,-0.1C89.8,16.2,86.9,32.4,80.1,47.9C73.3,63.4,62.6,78.2,48.1,85.1C33.6,92,16.8,91,0.7,89.9C-15.4,88.8,-30.8,87.5,-43.9,80.8C-57,74.1,-67.8,62,-74,48.1C-80.2,34.2,-81.8,18.1,-83.6,1.2C-85.4,-15.7,-87.5,-31.4,-81.3,-43.9C-75.1,-56.4,-60.6,-65.7,-45.2,-72.2C-29.8,-78.7,-14.9,-82.4,0.7,-83.8C16.3,-85.2,32.7,-84.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;