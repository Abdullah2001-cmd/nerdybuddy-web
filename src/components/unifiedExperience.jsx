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

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #B03982 1px, transparent 1px),
                            linear-gradient(to bottom, #733C86 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#B03982]/30 group">
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-transparent to-[#733C86] rounded-3xl opacity-50 blur group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">
                <img
                  src="https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-1024x740.webp"
                  alt="Nerdy Buddy AI Workforce Platform - Unified Experience"
                  className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  srcSet="https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-1024x740.webp 1024w,
                          https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-300x217.webp 300w,
                          https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-768x555.webp 768w,
                          https://nerdybuddy.com/wp-content/uploads/2025/05/NB-Platforms-1536x1109.webp 1536w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-3 h-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-ping"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Multi-Platform AI Interface</p>
                          <p className="text-xs text-gray-400 mt-1">Seamless experience across all devices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-tl-3xl opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-br-3xl opacity-50"></div>
            </div>

            {/* Platform Icons Bar */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {[
                { icon: <Globe className="w-6 h-6" />, label: "Web" },
                { icon: <SmartphoneIcon className="w-5 h-5" />, label: "iOS" },
                { icon: <MonitorIcon className="w-5 h-5" />, label: "Android" },
                { icon: <Shield className="w-5 h-5" />, label: "Kiosk" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-3 bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/30 group hover:border-[#B03982]/50 transition-all duration-300"
                >
                  <div className="text-[#B03982] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#B03982]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                  Nerdy Buddy AI Workforce Platform
                </span>
              </div>
              
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block text-white">Unified Experience</span>
                <span className="block mt-2 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                  Across Platforms
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Nerdy Buddy is accessible across multiple platforms, offering users a seamless 
                experience whether they're on the web, using our mobile app (iOS and Android), 
                or interacting with our advanced AI-powered kiosk equipped with facial recognition 
                for secure, on-site access.
              </p>
            </div>

            {/* Divider */}
            <div className="pt-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>

            {/* Experience Qualities */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {experienceQualities.slice(0, 2).map((quality, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-800/20 to-gray-900/10 backdrop-blur-sm rounded-xl border border-gray-700/30 p-4 hover:border-[#B03982]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
                        <div className="text-[#B03982] group-hover:text-white transition-colors duration-300">
                          {quality.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{quality.title}</h4>
                        <p className="text-sm text-gray-400 mt-1">{quality.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {experienceQualities.slice(2).map((quality, index) => (
                  <div
                    key={index + 2}
                    className="group relative bg-gradient-to-br from-gray-800/20 to-gray-900/10 backdrop-blur-sm rounded-xl border border-gray-700/30 p-4 hover:border-[#B03982]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
                        <div className="text-[#B03982] group-hover:text-white transition-colors duration-300">
                          {quality.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{quality.title}</h4>
                        <p className="text-sm text-gray-400 mt-1">{quality.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="pt-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platformStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/30 p-4 text-center group hover:border-[#B03982]/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-[#B03982]">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* App Store Icons */}
            {/* <div className="flex items-center justify-center gap-6 pt-6">
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-32 h-10 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 group-hover:border-[#B03982]/50 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-white" viewBox="0 -189.93 539.856 539.856" fill="currentColor">
                      <path d="M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.834 3.834 0 0 1 3.834 3.835l.001 30.543z"/>
                      <path d="M30.128 19.784c-.029-3.223 2.639-4.791 2.761-4.864-1.511-2.203-3.853-2.504-4.676-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.859 1.086 1.554 2.355 3.287 4.016 3.226 1.625-.066 2.232-1.035 4.193-1.035 1.943 0 2.513 1.035 4.207.996 1.744-.027 2.842-1.56 3.89-3.127 1.255-1.779 1.759-3.533 1.779-3.623-.04-.014-3.386-1.292-3.42-5.154zM26.928 10.306c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.421.106 2.88-.717 3.792-1.793z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-400">Download on the</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-32 h-10 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 group-hover:border-[#B03982]/50 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 -47.5 135 135" fill="currentColor">
                      <path d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z"/>
                      <path d="M27 24.3l-4.1-4.1V19.9l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z"/>
                      <path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4"/>
                      <path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-400">GET IT ON</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Platform Details */}
        {/* <div className="mt-16 grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/20 to-gray-900/10 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/5 group-hover:to-[#733C86]/5 rounded-2xl transition-all duration-500"></div>
              <div className="relative space-y-4">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/20 to-[#733C86]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 group-hover:border-transparent transition-all duration-300">
                    <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{platform.title}</h3>
                  <p className="text-gray-400 mb-4">{platform.description}</p>
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <div className="w-full h-1 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${platform.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Unified Experience Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
            <Layers className="w-5 h-5 text-[#B03982]" />
            <span className="text-lg font-medium text-white">
              One Platform, Multiple Access Points, Seamless Experience
            </span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-10 hidden lg:block">
        <div className="w-20 h-20 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-32 left-10 hidden lg:block">
        <div className="w-24 h-24 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm animate-pulse animation-delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default UnifiedExperience;