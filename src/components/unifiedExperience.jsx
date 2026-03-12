import React from 'react';
import {
  Globe,
  Smartphone,
  Monitor,
  Shield,
  Zap,
  CheckCircle,
  Sparkles,
  SmartphoneIcon,
  MonitorIcon,
  ShieldCheck,
  Users,
  Cpu,
  Layers
} from 'lucide-react';

const UnifiedExperience = () => {
  const platforms = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Platform",
      description: "Full-featured browser-based interface",
      features: ["Real-time chat", "Document management", "Admin dashboard"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Apps",
      description: "iOS & Android native applications",
      features: ["Push notifications", "Offline access", "Mobile-optimized"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "AI Kiosk",
      description: "On-site intelligent kiosk system",
      features: ["Facial recognition", "Touch interface", "Secure access"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const platformStats = [
    { value: "100%", label: "Sync Across All Devices", icon: <Zap className="w-4 h-4" /> },
    { value: "24/7", label: "AI Availability", icon: <Cpu className="w-4 h-4" /> },
    { value: "Enterprise", label: "Security Level", icon: <ShieldCheck className="w-4 h-4" /> },
    { value: "Unified", label: "User Experience", icon: <Users className="w-4 h-4" /> }
  ];

  const experienceQualities = [
    {
      title: "Professional & Concise",
      description: "Streamlined interface with enterprise-grade efficiency",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Modern & Engaging",
      description: "Contemporary design with interactive elements",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Friendly & Informative",
      description: "Intuitive guidance with helpful assistance",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Tech-Focused",
      description: "Cutting-edge AI capabilities with robust performance",
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  const ExperienceQualityCard = ({ quality }) => (
    <div className="group relative bg-gradient-to-br from-gray-800/20 to-gray-900/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/30 p-2.5 sm:p-3 md:p-4 hover:border-[#B03982]/50 transition-all duration-300">
      <div className="flex items-start sm:items-center gap-2 sm:gap-3">
        <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
          <div className="text-sm sm:text-base text-[#B03982] group-hover:text-white transition-colors duration-300">
            {quality.icon}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-xs sm:text-sm font-semibold text-white truncate">{quality.title}</h4>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 line-clamp-2">{quality.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #B03982 1px, transparent 1px),
                          linear-gradient(to bottom, #733C86 1px, transparent 1px)`,
            backgroundSize: '30px 30px sm:50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-[#B03982]/30 group">
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-transparent to-[#733C86] rounded-2xl sm:rounded-3xl opacity-50 blur group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src="https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-1024x740.webp"
                  alt="Nerdy Buddy AI Workforce Platform - Unified Experience"
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  srcSet="https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-1024x740.webp 1024w,
                      https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-300x217.webp 300w,
                      https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-768x555.webp 768w,
                      https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-1536x1109.webp 1536w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-3 sm:p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative flex-shrink-0">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-ping"></div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-white truncate">Multi-Platform AI Interface</p>
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 truncate">Seamless experience across all devices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner Accents - Hidden on mobile */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-tl-3xl opacity-50 hidden sm:block"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-br-3xl opacity-50 hidden sm:block"></div>
            </div>

            {/* Platform Icons Bar */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
              {[
                { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, label: "Web" },
                { icon: <SmartphoneIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, label: "iOS" },
                { icon: <MonitorIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, label: "Android" },
                { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, label: "Kiosk" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/30 group hover:border-[#B03982]/50 transition-all duration-300 min-w-[60px] sm:min-w-[70px]"
                >
                  <div className="text-[#B03982] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B03982]" />
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                  Nerdy Buddy AI Workforce Platform
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block text-white">Unified Experience</span>
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                  Across Platforms
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                Nerdy Buddy is accessible across multiple platforms, offering users a seamless
                experience whether they're on the web, using our mobile app (iOS and Android),
                or interacting with our advanced AI-powered kiosk equipped with facial recognition
                for secure, on-site access.
              </p>
            </div>

            {/* Divider */}
            <div className="pt-2 sm:pt-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>

            {/* Experience Qualities */}
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {experienceQualities.slice(0, 2).map((quality, index) => (
                  <ExperienceQualityCard key={index} quality={quality} />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {experienceQualities.slice(2).map((quality, index) => (
                  <ExperienceQualityCard key={index + 2} quality={quality} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="pt-2 sm:pt-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {platformStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/30 p-2 sm:p-3 md:p-4 text-center group hover:border-[#B03982]/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className="text-sm sm:text-base md:text-lg text-[#B03982]">
                      {stat.icon}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 line-clamp-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unified Experience Message */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#B03982]" />
            <span className="text-sm sm:text-base md:text-lg font-medium text-white">
              One Platform, Multiple Access Points, Seamless Experience
            </span>
          </div>
        </div>
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-32 right-10 hidden xl:block">
        <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm animate-pulse"></div>
      </div>

      <div className="absolute bottom-32 left-10 hidden xl:block">
        <div className="w-20 lg:w-24 h-20 lg:h-24 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm animate-pulse animation-delay-1000"></div>
      </div>
    </section>
  );
};

export default UnifiedExperience;