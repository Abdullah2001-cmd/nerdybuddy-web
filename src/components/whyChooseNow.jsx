// import React from 'react';
// import { 
//   Brain, 
//   Shield, 
//   Zap, 
//   TrendingUp, 
//   UserCheck,
//   Clock,
//   CheckCircle,
//   Sparkles,
//   Target,
//   BarChart3,
//   Users,
//   Award
// } from 'lucide-react';

// const WhyChooseNow = () => {
//   const reasons = [
//     {
//       icon: <Brain className="w-5 h-5" />,
//       title: "Information Overload is Real",
//       description: "Employees are overwhelmed by scattered information across multiple platforms",
//       stat: "3.6 hours/week wasted searching for info",
//       gradient: "from-red-400 to-orange-500"
//     },
//     {
//       icon: <Zap className="w-5 h-5" />,
//       title: "AI is No Longer a Future Vision — It's Now",
//       description: "Modern workplaces require AI-powered solutions to stay competitive",
//       stat: "89% of employees expect AI at work",
//       gradient: "from-blue-400 to-cyan-500"
//     },
//     {
//       icon: <Shield className="w-5 h-5" />,
//       title: "Security & IP Protection Demands Are Growing",
//       description: "Protecting sensitive data while enabling access is critical",
//       stat: "68% of businesses face internal data risks",
//       gradient: "from-purple-400 to-pink-500"
//     },
//     {
//       icon: <UserCheck className="w-5 h-5" />,
//       title: "Employees Expect Consumer-Grade Experience at Work",
//       description: "Modern interfaces and intuitive interactions are now expected",
//       stat: "94% want work tools as good as personal apps",
//       gradient: "from-green-400 to-teal-500"
//     },
//     {
//       icon: <TrendingUp className="w-5 h-5" />,
//       title: "Training & Onboarding Costs Are Soaring",
//       description: "Traditional methods are expensive and inefficient",
//       stat: "$1,286 average training cost per employee",
//       gradient: "from-yellow-400 to-amber-500"
//     }
//   ];

//   const stats = [
//     { value: "3.6h", label: "Weekly Search Time", icon: <Clock className="w-4 h-4" /> },
//     { value: "89%", label: "Expect AI", icon: <Brain className="w-4 h-4" /> },
//     { value: "68%", label: "Data Risk", icon: <Shield className="w-4 h-4" /> },
//     { value: "$1.2K", label: "Training Cost", icon: <BarChart3 className="w-4 h-4" /> }
//   ];

//   return (
//     <section className="relative py-10 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur-3xl"></div>
        
//         {/* Animated Grid */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(to right, #B03982 1px, transparent 1px),
//                             linear-gradient(to bottom, #733C86 1px, transparent 1px)`,
//             backgroundSize: '40px 40px'
//           }}></div>
//         </div>
//       </div>

//       <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Left Column - Content */}
//           <div className="space-y-8">
//             {/* Header */}
//             <div className="space-y-4">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
//                 <Sparkles className="w-4 h-4 text-[#B03982]" />
//                 <span className="text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                   Why Choose Nerdy Buddy
//                 </span>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 <span className="block text-white">Why</span>
//                 <span className="block mt-2 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
//                   Now?
//                 </span>
//               </h2>
              
//               <p className="text-lg text-gray-400 leading-relaxed">
//                 Modern workplaces face rising pressure to deliver quick, secure, and engaging 
//                 employee support. Traditional PDFs and portals fall short as employees demand 
//                 AI-powered, conversational access to knowledge. At the same time, companies 
//                 must protect sensitive data while cutting onboarding and training costs.
//               </p>
//             </div>

//             {/* Real Problems Section */}
//             <div className="space-y-6">
//               <h3 className="text-2xl md:text-3xl font-bold text-white">
//                 Solving Real-Life Problems:
//               </h3>
              
//               {/* Reasons List */}
//               <div className="space-y-4">
//                 {reasons.map((reason, index) => (
//                   <div
//                     key={index}
//                     className="group relative bg-gradient-to-br from-gray-800/20 to-gray-900/10 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-5 hover:border-[#B03982]/50 transition-all duration-300"
//                   >
//                     {/* Animated Background */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/5 group-hover:to-[#733C86]/5 rounded-2xl transition-all duration-500"></div>
                    
//                     <div className="relative flex items-start gap-4">
//                       {/* Icon */}
//                       <div className="relative flex-shrink-0">
//                         <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982]/20 to-[#733C86]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 group-hover:border-transparent transition-all duration-300">
//                           <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
//                             {reason.icon}
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Content */}
//                       <div className="flex-1 space-y-2">
//                         <div className="flex items-start justify-between">
//                           <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] group-hover:bg-clip-text transition-all duration-300">
//                             {reason.title}
//                           </h4>
//                           <CheckCircle className="w-5 h-5 text-gray-600 group-hover:text-[#B03982] transition-colors duration-300" />
//                         </div>
                        
//                         <p className="text-sm text-gray-400">
//                           {reason.description}
//                         </p>
                        
//                         {/* Stat Badge */}
//                         <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-800/50 to-gray-900/30 rounded-full border border-gray-700/30">
//                           <span className="text-xs font-medium text-gray-300">{reason.stat}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Progress Indicator */}
//                     <div className="mt-4 relative">
//                       <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
//                         <div 
//                           className={`h-full bg-gradient-to-r ${reason.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/30 p-4 text-center group hover:border-[#B03982]/50 transition-all duration-300"
//                 >
//                   <div className="flex items-center justify-center gap-2 mb-2">
//                     <div className="text-[#B03982]">
//                       {stat.icon}
//                     </div>
//                     <div className="text-xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                       {stat.value}
//                     </div>
//                   </div>
//                   <div className="text-xs text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - GIF */}
//           <div className="relative">
//             {/* Floating Badge */}
//             <div className="absolute -top-4 -right-4 z-10">
//               <div className="relative">
//                 <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-50 animate-ping-slow"></div>
//                 <div className="relative bg-gradient-to-br from-gray-900 to-black px-4 py-2 rounded-full border border-gray-700 backdrop-blur-sm">
//                   <span className="text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                     Interactive Demo
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Main GIF Container */}
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#B03982]/30 group">
//               {/* Gradient Border */}
//               <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-transparent to-[#733C86] rounded-3xl opacity-50 blur group-hover:opacity-70 transition-opacity duration-500"></div>
              
//               {/* Image Container */}
//               <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">
//                 <img
//                   src="https://nerdybuddy.com/wp-content/uploads/2025/07/Thinking_1.gif"
//                   alt="AI Thinking Process - Why Choose Nerdy Buddy Now"
//                   className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
//                   loading="lazy"
//                 />
                
//                 {/* Animated Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
//                   <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
//                       <div className="flex items-center gap-3">
//                         <div className="relative">
//                           <div className="w-3 h-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
//                           <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-ping"></div>
//                         </div>
//                         <div>
//                           <p className="text-sm font-medium text-white">AI Processing Solutions...</p>
//                           <p className="text-xs text-gray-400 mt-1">Real-time problem analysis</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Corner Accents */}
//               <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-tl-3xl opacity-50"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-br-3xl opacity-50"></div>
//             </div>

//             {/* Benefits Summary */}
//             <div className="mt-8 grid grid-cols-2 gap-4">
//               {[
//                 { 
//                   icon: <Target className="w-5 h-5" />, 
//                   title: "Immediate Impact", 
//                   desc: "See results from day one" 
//                 },
//                 { 
//                   icon: <Users className="w-5 h-5" />, 
//                   title: "Employee Adoption", 
//                   desc: "94% user satisfaction" 
//                 },
//                 { 
//                   icon: <Award className="w-5 h-5" />, 
//                   title: "ROI Focused", 
//                   desc: "3-6 month payback period" 
//                 },
//                 { 
//                   icon: <Shield className="w-5 h-5" />, 
//                   title: "Enterprise Ready", 
//                   desc: "Security-first approach" 
//                 }
//               ].map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/30 p-4 group hover:border-[#B03982]/50 transition-all duration-300"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
//                       <div className="text-[#B03982] group-hover:text-white transition-colors duration-300">
//                         {benefit.icon}
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-medium text-white">{benefit.title}</div>
//                       <div className="text-xs text-gray-400">{benefit.desc}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Timeline Indicator */}
//             <div className="mt-8 p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/30">
//               <div className="flex items-center justify-between mb-3">
//                 <span className="text-sm font-medium text-gray-300">Time to Value</span>
//                 <span className="text-sm font-bold text-[#B03982]">Rapid</span>
//               </div>
//               <div className="w-full h-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full overflow-hidden">
//                 <div className="w-3/4 h-full bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] rounded-full animate-pulse"></div>
//               </div>
//               <div className="flex justify-between mt-2 text-xs text-gray-400">
//                 <span>Setup</span>
//                 <span>Integration</span>
//                 <span>Results</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 pt-10 border-t border-gray-700/30">
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
//               Don't Wait for Tomorrow's Solutions
//               <span className="block mt-2 text-lg text-gray-400 font-normal">
//                 The future of workplace productivity is here today
//               </span>
//             </h3>
            
//             <button className="group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B03982]/40">
//               <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               <div className="relative flex items-center justify-center gap-3">
//                 <Clock className="w-5 h-5 text-white" />
//                 <span className="font-semibold text-lg text-white">Schedule Your Demo Today</span>
//                 <div className="relative">
//                   <div className="absolute -inset-2 bg-white/20 rounded-full blur group-hover:animate-ping"></div>
//                   <Sparkles className="w-5 h-5 text-white relative z-10" />
//                 </div>
//               </div>
//             </button>
            
//             <p className="mt-6 text-sm text-gray-400">
//               Join 500+ forward-thinking organizations already transforming their workplace
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-32 left-10 hidden lg:block">
//         <div className="w-20 h-20 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm animate-pulse"></div>
//       </div>
      
//       <div className="absolute bottom-32 right-10 hidden lg:block">
//         <div className="w-24 h-24 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm animate-pulse animation-delay-1000"></div>
//       </div>

//       <style jsx>{`
//         @keyframes ping-slow {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 0.5;
//           }
//           50% {
//             transform: scale(1.2);
//             opacity: 0;
//           }
//         }

//         .animate-ping-slow {
//           animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WhyChooseNow;

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
      stat: "3.6 hours/week wasted searching for info",
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
      stat: "68% of businesses face internal data risks",
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
      stat: "$1,286 average training cost per employee",
      gradient: "from-yellow-400 to-amber-500"
    }
  ];

  const stats = [
    { value: "3.6h", label: "Weekly Search Time", icon: <Clock className="w-4 h-4" /> },
    { value: "89%", label: "Expect AI", icon: <Brain className="w-4 h-4" /> },
    { value: "68%", label: "Data Risk", icon: <Shield className="w-4 h-4" /> },
    { value: "$1.2K", label: "Training Cost", icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-3xl"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #B03982 1px, transparent 1px),
                            linear-gradient(to bottom, #733C86 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#B03982]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                  Why Choose Nerdy Buddy
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Why</span>
                <span className="block mt-2 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                  Now?
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Modern workplaces face rising pressure to deliver quick, secure, and engaging 
                employee support. Traditional PDFs and portals fall short as employees demand 
                AI-powered, conversational access to knowledge. At the same time, companies 
                must protect sensitive data while cutting onboarding and training costs.
              </p>
            </div>

            {/* Real Problems Section */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Solving Real-Life Problems:
              </h3>
              
              {/* Reasons List */}
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl border border-gray-200 p-5 hover:border-[#B03982]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/5 group-hover:to-[#733C86]/5 rounded-2xl transition-all duration-500"></div>
                    
                    <div className="relative flex items-start gap-4">
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-xl border border-gray-300 group-hover:border-transparent transition-all duration-300 shadow-sm">
                          <div className="text-gray-800 transform group-hover:scale-110 transition-transform duration-300">
                            {reason.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] group-hover:bg-clip-text transition-all duration-300">
                            {reason.title}
                          </h4>
                          <CheckCircle className="w-5 h-5 text-gray-400 group-hover:text-[#B03982] transition-colors duration-300" />
                        </div>
                        
                        <p className="text-sm text-gray-600">
                          {reason.description}
                        </p>
                        
                        {/* Stat Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full border border-gray-200">
                          <span className="text-xs font-medium text-gray-700">{reason.stat}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="mt-4 relative">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-xl border border-gray-200 p-4 text-center group hover:border-[#B03982]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-[#B03982]">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - GIF */}
          <div className="relative">
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-30 animate-ping-slow"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 px-4 py-2 rounded-full border border-gray-200 backdrop-blur-sm shadow-sm">
                  <span className="text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                    Interactive Demo
                  </span>
                </div>
              </div>
            </div>

            {/* Main GIF Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#B03982]/20 group">
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#B03982] via-transparent to-[#733C86] rounded-3xl opacity-20 blur group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-200">
                <img
                  src="https://nerdybuddy.com/wp-content/uploads/2025/07/Thinking_1.gif"
                  alt="AI Thinking Process - Why Choose Nerdy Buddy Now"
                  className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-3 h-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-ping"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">AI Processing Solutions...</p>
                          <p className="text-xs text-gray-300 mt-1">Real-time problem analysis</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-tl-3xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gradient-to-br from-[#B03982] to-[#733C86] rounded-br-3xl opacity-30"></div>
            </div>

            {/* Benefits Summary */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { 
                  icon: <Target className="w-5 h-5" />, 
                  title: "Immediate Impact", 
                  desc: "See results from day one" 
                },
                { 
                  icon: <Users className="w-5 h-5" />, 
                  title: "Employee Adoption", 
                  desc: "94% user satisfaction" 
                },
                { 
                  icon: <Award className="w-5 h-5" />, 
                  title: "ROI Focused", 
                  desc: "3-6 month payback period" 
                },
                { 
                  icon: <Shield className="w-5 h-5" />, 
                  title: "Enterprise Ready", 
                  desc: "Security-first approach" 
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-xl border border-gray-200 p-4 group hover:border-[#B03982]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg group-hover:from-[#B03982]/20 group-hover:to-[#733C86]/20 transition-all duration-300">
                      <div className="text-[#B03982] group-hover:text-white transition-colors duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{benefit.title}</div>
                      <div className="text-xs text-gray-600">{benefit.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Indicator */}
            <div className="mt-8 p-4 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Time to Value</span>
                <span className="text-sm font-bold text-[#B03982]">Rapid</span>
              </div>
              <div className="w-full h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] rounded-full animate-pulse"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-600">
                <span>Setup</span>
                <span>Integration</span>
                <span>Results</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 pt-10 border-t border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Don't Wait for Tomorrow's Solutions
              <span className="block mt-2 text-lg text-gray-600 font-normal">
                The future of workplace productivity is here today
              </span>
            </h3>
            
            <button className="group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B03982]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-white" />
                <span className="font-semibold text-lg text-white">Schedule Your Demo Today</span>
                <div className="relative">
                  <div className="absolute -inset-2 bg-white/20 rounded-full blur group-hover:animate-ping"></div>
                  <Sparkles className="w-5 h-5 text-white relative z-10" />
                </div>
              </div>
            </button>
            
            <p className="mt-6 text-sm text-gray-600">
              Join 500+ forward-thinking organizations already transforming their workplace
            </p>
          </div>
        </div> */}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 hidden lg:block">
        <div className="w-20 h-20 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/10 backdrop-blur-sm animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-32 right-10 hidden lg:block">
        <div className="w-24 h-24 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/10 backdrop-blur-sm animate-pulse animation-delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0;
          }
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

export default WhyChooseNow;