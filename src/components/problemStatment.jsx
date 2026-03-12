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
  Users,
  BrainCircuit
} from 'lucide-react';
import { LuBrain } from "react-icons/lu";
import { TbFileCertificate } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdOutlineFeedback } from "react-icons/md";
import { RiRecycleLine } from "react-icons/ri";

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
      description: "Critical policies are spread across multiple files, folders, and versions.",
      stats: "Employees spend nearly 1.8 hours per day.",
      gradient: "from-yellow-400 to-amber-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Cost of Training and Communication",
      description: "Organizations repeatedly invest in training employees on policies that are rarely revisited.",
      stats: "$1,286 average cost per employee for training",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Plagiarism Risk vs Accessibility",
      description: "Organizations must share documents internally while protecting them from misuse or copying.",
      stats: "Over 60% of companies report risks from internal data.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "No Bottom-Up Feedback",
      description: "Employees often lack structured channels to share insights from real operational challenges.s",
      stats: "Only about 14% of employees feel their feedback truly reaches leadership.",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  const stats = [
    { icon: <LuBrain className="w-14 h-14" />, value: "70%", label: "Unused Knowledge", color: "text-red-500" },
    { icon: <RiRecycleLine className="w-14 h-14" />, value: "42%", label: "Contradictions", color: "text-yellow-500" },
    { icon: <HiCurrencyDollar className="w-14 h-14" />, value: "$1.2K", label: "Training Cost", color: "text-blue-500" },
    { icon: <MdOutlineFeedback className="w-14 h-14" />, value: "23%", label: "Feedback Rate", color: "text-green-500" }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="relative container mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 flex justify-center items-center gap-2 sm:gap-4">
            <span className="text-gray-900">Problem</span>
            <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
              Statement
            </span>
          </h2>

          <p className="px-2 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-0">
            Organizations face critical challenges in knowledge management that impact productivity, security, and growth.
          </p>
          <div className="inline-flex items-center gap-2 mt-3 sm:mt-4">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#B03982]" />
            <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
              The Challenge We Solve
            </span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="px-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-4 md:p-6 text-center group hover:border-[#B03982]/50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <div className={`flex justify-center text-[#B03982] group-hover:text-[#B03982] transition-colors duration-300 mb-1 sm:mb-2 ${stat.color}`}>
                <div className="text-xl sm:text-2xl md:text-3xl">
                  {stat.icon}
                </div>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2">{stat.label}</div>
              {/* <div className="mt-2 sm:mt-3 h-1 w-12 sm:w-16 mx-auto bg-gradient-to-r from-gray-300 to-gray-400 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full animate-pulse"
                  style={{ width: `${70 - index * 15}%` }}
                ></div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Problems Grid - First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr mb-4">
          {problems.slice(0, 3).map((problem, index) => (
            <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-12px_rgba(176,57,130,0.2)] transition-all duration-500 overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B03982]/0 via-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/20 group-hover:via-[#B03982]/5 group-hover:to-[#733C86]/20 transition-all duration-700"></div>

              {/* Main Content Container */}
              <div className="relative h-full p-5 sm:p-6 md:p-8 flex flex-col">
                {/* Top Section with Icon and Decorative Elements */}
                <div className="relative mb-4 sm:mb-6 md:mb-8">
                  {/* Background Blob */}
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-xl sm:blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Icon Container */}
                  <div className="relative flex items-center justify-between">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:border-transparent transition-all duration-300">
                        <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 group-hover:text-[#B03982] transition-colors duration-300">
                          {problem.icon}
                        </div>
                      </div>
                    </div>

                    {/* Index Number */}
                    {/* <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 group-hover:text-[#B03982]/10 transition-colors duration-500">
                      {(index + 1).toString().padStart(2, '0')}
                    </span> */}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {problem.description}
                  </p>
                </div>

                {/* Bottom Stats Section */}
                <div className="pt-4 sm:pt-5 md:pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {/* Pulse Indicator */}
                      <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B03982] opacity-20"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-gradient-to-r from-[#B03982] to-[#733C86]"></span>
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{problem.stats}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Hover Card */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#B03982] to-[#733C86] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Floating Action Button on Hover */}
              {/* <button className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#B03982] hover:to-[#733C86] group/btn">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          ))}
        </div>

        {/* Bottom Row - Full Width Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {problems.slice(3).map((problem, index) => (
            <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-12px_rgba(176,57,130,0.2)] transition-all duration-500 overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B03982]/0 via-[#B03982]/0 to-[#733C86]/0 group-hover:from-[#B03982]/20 group-hover:via-[#B03982]/5 group-hover:to-[#733C86]/20 transition-all duration-700"></div>

              {/* Main Content Container */}
              <div className="relative h-full p-5 sm:p-6 md:p-8 flex flex-col">
                {/* Top Section with Icon and Decorative Elements */}
                <div className="relative mb-4 sm:mb-6 md:mb-8">
                  {/* Background Blob */}
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full blur-xl sm:blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Icon Container */}
                  <div className="relative flex items-center justify-between">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-lg sm:rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:border-transparent transition-all duration-300">
                        <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 group-hover:text-[#B03982] transition-colors duration-300">
                          {problem.icon}
                        </div>
                      </div>
                    </div>

                    {/* Index Number */}
                    {/* <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-100 group-hover:text-[#B03982]/10 transition-colors duration-500">
                      {(index + 1).toString().padStart(2, '0')}
                    </span> */}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {problem.description}
                  </p>
                </div>

                {/* Bottom Stats Section */}
                <div className="pt-4 sm:pt-5 md:pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {/* Pulse Indicator */}
                      <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B03982] opacity-20"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-gradient-to-r from-[#B03982] to-[#733C86]"></span>
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{problem.stats}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Hover Card */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#B03982] to-[#733C86] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Floating Action Button on Hover */}
              {/* <button className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#B03982] hover:to-[#733C86] group/btn">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                The Impact of Unresolved Problems
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                These knowledge management challenges lead to decreased productivity, increased operational costs,
                employee frustration, and ultimately, hindered organizational growth. Without proper solutions,
                organizations continue to lose valuable time and resources.
              </p>
            </div>

            <div className="flex flex-row md:flex-col gap-4 md:gap-4 flex-wrap">
              <div className="flex items-center gap-2 sm:gap-3">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#B03982] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-900 font-medium">Productivity Loss</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#B03982] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-900 font-medium">Increased Costs</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#B03982] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-900 font-medium">Employee Turnover</span>
              </div>
            </div>
          </div>

          {/* Impact Meter */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-gray-600">Impact Level</span>
              <span className="text-xs sm:text-sm font-medium text-gray-900">High</span>
            </div>
            <div className="w-full h-2 sm:h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements - Hidden on mobile */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="w-16 lg:w-24 h-16 lg:h-24 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/10 backdrop-blur-sm animate-pulse"></div>
        </div>

        {/* <div className="absolute bottom-20 right-10 hidden lg:block">
          <div className="w-24 lg:w-32 h-24 lg:w-32 bg-gradient-to-br from-[#B03982]/5 to-[#733C86]/5 rounded-full border border-[#B03982]/10 backdrop-blur-sm animate-pulse animation-delay-1000"></div>
        </div> */}
      </div>
    </section>
  );
};

export default ProblemStatement;