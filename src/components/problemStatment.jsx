import React from 'react';
import { 
  Brain, 
  FileStack, 
  ShieldAlert, 
  TrendingUp, 
  MessageSquare,
  AlertCircle,
  Target,
  BarChart3,
  Users
} from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Knowledge Overload, Low Engagement",
      description: "Employees struggle to find relevant information in vast document repositories",
      stats: "70% of organizational knowledge goes unused",
      gradient: "from-red-400 to-orange-500"
    },
    {
      icon: <FileStack className="w-8 h-8" />,
      title: "Scattered Documents, Confusing Contradictions",
      description: "Critical information spread across multiple platforms with conflicting versions",
      stats: "42% of employees encounter contradictory information",
      gradient: "from-yellow-400 to-amber-500"
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Plagiarism Risk vs Accessibility",
      description: "Balancing security with easy access to organizational knowledge",
      stats: "68% of organizations face internal data leakage",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Cost of Training and Communication",
      description: "Expensive training programs and inefficient communication channels",
      stats: "$1,286 average cost per employee for training",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "No Bottom-Up Feedback",
      description: "Lack of structured channels for employee insights and suggestions",
      stats: "Only 23% of organizations collect regular feedback",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  const stats = [
    { value: "70%", label: "Unused Knowledge", color: "text-red-500" },
    { value: "42%", label: "Contradictions", color: "text-yellow-500" },
    { value: "$1.2K", label: "Training Cost", color: "text-blue-500" },
    { value: "23%", label: "Feedback Rate", color: "text-green-500" }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-[#B03982]" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              The Challenge We Solve
            </span>
          </div>
          
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 flex justify-center gap-4">
            <span className="block text-gray-900">Problem</span>
            <span className="block bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
              Statement
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizations face critical challenges in knowledge management that impact productivity, security, and growth.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-xl border border-gray-200 p-6 text-center group hover:border-[#B03982]/50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className="mt-3 h-1 w-16 mx-auto bg-gradient-to-r from-gray-300 to-gray-400 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"
                  style={{ width: `${70 - index * 15}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {problems.slice(0, 3).map((problem, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/5 group-hover:to-[#733C86]/5 rounded-2xl transition-all duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-xl border border-gray-300 group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <div className="text-gray-800 transform group-hover:scale-110 transition-transform duration-300">
                        {problem.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] group-hover:bg-clip-text transition-all duration-300">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{problem.stats}</span>
                      <div className="w-8 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-red-400 to-orange-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-gray-100 rounded-full border border-gray-300 text-sm font-bold text-gray-600 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] transition-all duration-300 shadow-sm">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Full Width Problems */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.slice(3).map((problem, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 hover:border-[#B03982]/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/5 group-hover:to-[#733C86]/5 rounded-2xl transition-all duration-500"></div>
              
              <div className="relative flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white rounded-xl border border-gray-300 group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <div className="text-gray-800 transform group-hover:scale-110 transition-transform duration-300">
                        {problem.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] group-hover:bg-clip-text transition-all duration-300">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{problem.stats}</span>
                      <div className="w-24 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${problem.gradient} rounded-full animate-pulse`}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-gray-100 rounded-full border border-gray-300 text-sm font-bold text-gray-600 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#B03982] group-hover:to-[#733C86] transition-all duration-300 shadow-sm">
                  {index + 4}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Impact of Unresolved Problems
              </h3>
              <p className="text-gray-600 leading-relaxed">
                These knowledge management challenges lead to decreased productivity, increased operational costs, 
                employee frustration, and ultimately, hindered organizational growth. Without proper solutions, 
                organizations continue to lose valuable time and resources.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-[#B03982]" />
                <span className="text-gray-900 font-medium">Productivity Loss</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-[#B03982]" />
                <span className="text-gray-900 font-medium">Increased Costs</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#B03982]" />
                <span className="text-gray-900 font-medium">Employee Turnover</span>
              </div>
            </div>
          </div>
          
          {/* Impact Meter */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Impact Level</span>
              <span className="text-sm font-medium text-gray-900">High</span>
            </div>
            <div className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to solve these challenges for your organization?
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B03982]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <span className="font-semibold text-lg text-white">Discover The Solution</span>
              <div className="relative">
                <div className="absolute -inset-2 bg-white/20 rounded-full blur group-hover:animate-ping"></div>
                <AlertCircle className="w-5 h-5 text-white relative z-10" />
              </div>
            </div>
          </button>
        </div> */}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="w-24 h-24 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/10 backdrop-blur-sm animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="w-32 h-32 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/10 backdrop-blur-sm animate-pulse animation-delay-1000"></div>
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

export default ProblemStatement;