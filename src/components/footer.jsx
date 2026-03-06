import React, { useState } from 'react';
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Send,
  Download,
  Apple,
  Play,
  ArrowRight,
  CheckCircle,
  ChevronUp,
  Globe,
  Shield,
  Brain,
  Github,
  Twitter,
  Youtube,
  FileText
} from 'lucide-react';

const Footer = () => {

  // const [email, setEmail] = useState('');
  // const [agreed, setAgreed] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleNewsletterSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!email || !agreed) return;

  //   setIsSubmitting(true);

  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);
  //     setEmail('');
  //     setAgreed(false);

  //     // Reset after 3 seconds
  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //     }, 3000);
  //   }, 1500);
  // };

  // const quickLinks = [
  //   { label: "About", href: "/about", icon: <Globe className="w-4 h-4" /> },
  //   { label: "Career", href: "/career", icon: <FileText className="w-4 h-4" /> },
  //   { label: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
  //   { label: "Blog", href: "/blog", icon: <FileText className="w-4 h-4" /> }
  // ];

  // const socialLinks = [
  //   {
  //     icon: <Facebook className="w-5 h-5" />,
  //     href: "https://www.facebook.com/profile.php?id=61571851855164",
  //     label: "Facebook",
  //     color: "hover:bg-blue-100 hover:text-blue-600"
  //   },
  //   {
  //     icon: <Linkedin className="w-5 h-5" />,
  //     href: "https://www.linkedin.com/company/106011349/admin/dashboard/",
  //     label: "Linkedin",
  //     color: "hover:bg-blue-50 hover:text-blue-700"
  //   }
  // ];

  // const downloadLinks = [
  //   {
  //     icon: <Play className="w-5 h-5" />,
  //     title: "GET IT ON",
  //     subtitle: "Google Play",
  //     gradient: "from-green-500 to-emerald-600",
  //     bg: "bg-gradient-to-br from-green-50 to-emerald-50",
  //     border: "border-green-200"
  //   },
  //   {
  //     icon: <Apple className="w-5 h-5" />,
  //     title: "Download on the",
  //     subtitle: "App Store",
  //     gradient: "from-gray-800 to-gray-900",
  //     bg: "bg-gradient-to-br from-gray-50 to-gray-100",
  //     border: "border-gray-300"
  //   }
  // ];

  return (
    // <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 overflow-hidden">
    //   <div className="relative container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
    //     {/* Main Footer Content */}
    //     <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
    //       {/* Column 1: Brand & Contact */}
    //       <div className="space-y-8">
    //         {/* Logo & Tagline */}
    //         <div className="space-y-4">
    //           <a href="/" className="inline-block group">
    //             <div className="flex items-center gap-3">
    //               <div className="relative">
    //                 <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    //                 <img
    //                   src="https://nerdybuddy.com/wp-content/uploads/2024/08/Nerdy-Buddy-scaled.png"
    //                   alt="Nerdy Buddy"
    //                   className="h-8 w-auto transition-all duration-300"
    //                 />
    //               </div>
    //               <div className="h-8 w-0.5 bg-gradient-to-b from-[#B03982] to-[#733C86]"></div>
    //               <span className="text-sm font-medium text-gray-500">AI-Powered Knowledge Assistant</span>
    //             </div>
    //           </a>

    //           <p className="text-gray-600 leading-relaxed max-w-md">
    //             Born from the need to reduce workplace friction and simplify access to knowledge using AI.
    //           </p>
    //         </div>

    //         {/* Contact Card */}
    //         <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-5 hover:border-[#B03982]/30 transition-all duration-300 hover:shadow-lg">
    //           <div className="flex items-start gap-4">
    //             <div className="flex-shrink-0">
    //               <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-lg">
    //                 <Phone className="w-6 h-6 text-[#B03982]" />
    //               </div>
    //             </div>
    //             <div className="flex-1">
    //               <div className="text-sm font-medium text-gray-500 mb-1">Contact Support</div>
    //               <a
    //                 href="tel:+447895859216"
    //                 className="text-xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent hover:from-[#c94594] hover:to-[#8a48a3] transition-all duration-300"
    //               >
    //                 +44 7895 859216
    //               </a>
    //               <div className="text-sm text-gray-400 mt-1">Available 9am-6pm GMT</div>
    //             </div>
    //             <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#B03982] transition-colors duration-300 mt-2" />
    //           </div>
    //         </div>

    //         {/* Social Links */}
    //         <div className="space-y-4">
    //           <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
    //             <span>Connect With Us</span>
    //             <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    //           </h4>
    //           <div className="flex items-center gap-3">
    //             {socialLinks.map((social, index) => (
    //               <a
    //                 key={index}
    //                 href={social.href}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className={`relative w-10 h-10 flex items-center justify-center bg-white rounded-lg border border-gray-200 transition-all duration-300 hover:scale-110 ${social.color} shadow-sm hover:shadow-md`}
    //                 aria-label={`Visit our ${social.label} page`}
    //               >
    //                 <div className="relative z-10">
    //                   {social.icon}
    //                 </div>
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Column 2: Quick Links */}
    //       <div className="space-y-8">
    //         <div className="space-y-2">
    //           <h3 className="text-xl font-bold text-gray-900 mb-6 relative inline-block">
    //             Quick Navigation
    //             <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-full"></span>
    //           </h3>
    //           <p className="text-gray-500 text-sm">
    //             Everything you need to explore Nerdy Buddy
    //           </p>
    //         </div>

    //         <ul className="space-y-3">
    //           {quickLinks.map((link, index) => (
    //             <li key={index}>
    //               <a
    //                 href={link.href}
    //                 className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-gray-50 transition-all duration-300"
    //               >
    //                 <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg group-hover:from-[#B03982]/10 group-hover:to-[#733C86]/10 transition-all duration-300">
    //                   <div className="text-gray-400 group-hover:text-[#B03982] transition-colors duration-300">
    //                     {link.icon}
    //                   </div>
    //                 </div>
    //                 <div className="flex-1">
    //                   <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
    //                     {link.label}
    //                   </span>
    //                 </div>
    //                 <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#B03982] group-hover:translate-x-1 transition-all duration-300" />
    //               </a>
    //             </li>
    //           ))}
    //         </ul>

    //         {/* Download Apps */}
    //         <div className="pt-6 border-t border-gray-100">
    //           <h4 className="text-lg font-semibold text-gray-900 mb-4">Get Our App</h4>
    //           <div className="space-y-3">
    //             {downloadLinks.map((link, index) => (
    //               <a
    //                 key={index}
    //                 href="#"
    //                 className={`group flex items-center gap-4 p-4 rounded-xl border ${link.border} ${link.bg} hover:shadow-md transition-all duration-300`}
    //                 aria-label={`Download from ${link.subtitle}`}
    //               >
    //                 <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br ${link.gradient} rounded-lg text-white`}>
    //                   {link.icon}
    //                 </div>
    //                 <div className="flex-1">
    //                   <div className="text-xs font-medium text-gray-500">{link.title}</div>
    //                   <div className="text-base font-bold text-gray-900">{link.subtitle}</div>
    //                 </div>
    //                 <Download className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Column 3: Newsletter */}
    //       <div className="space-y-8">
    //         <div className="space-y-4">
    //           <div className="flex items-center gap-3">
    //             <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-xl">
    //               <Mail className="w-6 h-6 text-[#B03982]" />
    //             </div>
    //             <div>
    //               <h3 className="text-xl font-bold text-gray-900">
    //                 Stay Updated
    //               </h3>
    //               <p className="text-gray-500 text-sm">
    //                 Latest AI insights & product updates
    //               </p>
    //             </div>
    //           </div>
    //           <p className="text-gray-600">
    //             Join 10,000+ professionals who receive our weekly newsletter on AI-powered knowledge management.
    //           </p>
    //         </div>

    //         {/* Newsletter Form */}
    //         {isSubmitted ? (
    //           <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200 p-6 text-center animate-fadeIn">
    //             <div className="relative inline-block mb-4">
    //               <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full blur opacity-50"></div>
    //               <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-500 rounded-full">
    //                 <CheckCircle className="w-6 h-6 text-white" />
    //               </div>
    //             </div>
    //             <h4 className="font-bold text-gray-900 mb-2">Welcome Aboard! 🎉</h4>
    //             <p className="text-gray-600 text-sm">
    //               Check your inbox for a confirmation email.
    //             </p>
    //           </div>
    //         ) : (
    //           <form onSubmit={handleNewsletterSubmit} className="space-y-4">
    //             {/* Email Input */}
    //             <div className="relative">
    //               <input
    //                 type="email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 placeholder="you@company.com"
    //                 className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
    //                 required
    //               />
    //               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    //             </div>

    //             {/* Agreement Checkbox */}
    //             <div className="flex items-start gap-3 p-3 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200">
    //               <input
    //                 type="checkbox"
    //                 id="agreement"
    //                 checked={agreed}
    //                 onChange={(e) => setAgreed(e.target.checked)}
    //                 className="mt-0.5 w-4 h-4 text-[#B03982] bg-white border-gray-300 rounded focus:ring-[#B03982]/20 focus:ring-2"
    //                 required
    //               />
    //               <label htmlFor="agreement" className="text-sm text-gray-600 leading-tight">
    //                 I agree to receive emails and accept the{' '}
    //                 <a href="#" className="text-[#B03982] hover:underline">Terms</a> and{' '}
    //                 <a href="#" className="text-[#B03982] hover:underline">Privacy Policy</a>.
    //               </label>
    //             </div>

    //             {/* Submit Button */}
    //             <button
    //               type="submit"
    //               disabled={isSubmitting || !email || !agreed}
    //               className="group relative w-full px-6 py-3 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#B03982]/20 disabled:opacity-50 disabled:cursor-not-allowed"
    //             >
    //               <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    //               <div className="relative flex items-center justify-center gap-2">
    //                 {isSubmitting ? (
    //                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    //                 ) : (
    //                   <Send className="w-5 h-5 text-white" />
    //                 )}
    //                 <span className="font-semibold text-white">
    //                   {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
    //                 </span>
    //               </div>
    //             </button>
    //           </form>
    //         )}

    //         {/* Trust Badges */}
    //         <div className="pt-6 border-t border-gray-100">
    //           <div className="flex items-center gap-4">
    //             <div className="flex items-center gap-2">
    //               <Shield className="w-4 h-4 text-emerald-500" />
    //               <span className="text-xs text-gray-500">SSL Secured</span>
    //             </div>
    //             <div className="h-4 w-0.5 bg-gray-200"></div>
    //             <div className="flex items-center gap-2">
    //               <div className="w-4 h-4 flex items-center justify-center bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full">
    //                 <span className="text-xs text-white">✓</span>
    //               </div>
    //               <span className="text-xs text-gray-500">No Spam</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Footer Bottom */}
    //     <div className="pt-8 border-t border-gray-200">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    //         {/* Copyright */}
    //         <div className="text-center md:text-left">
    //           <p className="text-gray-500 text-sm">
    //             © {new Date().getFullYear()} Nerdy Buddy. All rights reserved.
    //             <span className="mx-2">•</span>
    //             Design by{' '}
    //             <a
    //               href="https://srptechs.com/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-gray-700 hover:text-[#B03982] transition-colors duration-300 font-medium"
    //             >
    //               SRP Technologies
    //             </a>
    //           </p>
    //         </div>

    //         {/* Legal Links */}
    //         <div className="flex items-center gap-6">
    //           <a
    //             href="#"
    //             className="text-gray-500 hover:text-[#B03982] transition-colors duration-300 text-sm flex items-center gap-1"
    //           >
    //             <Shield className="w-3 h-3" />
    //             Privacy Policy
    //           </a>
    //           <div className="h-4 w-0.5 bg-gray-300"></div>
    //           <a
    //             href="#"
    //             className="text-gray-500 hover:text-[#B03982] transition-colors duration-300 text-sm flex items-center gap-1"
    //           >
    //             <FileText className="w-3 h-3" />
    //             Terms of Use
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Back to Top Button */}
    //     {/* <button
    //       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    //       className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-[#B03982]/50 transition-all duration-300 hover:scale-110 group z-50"
    //       aria-label="Back to top"
    //     >
    //       <div className="relative">
    //         <div className="absolute -inset-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    //         <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-[#B03982] transition-colors duration-300 relative z-10" />
    //       </div>
    //     </button> */}
    //   </div>

    //   <style jsx>{`
    //     @keyframes fadeIn {
    //       from {
    //         opacity: 0;
    //         transform: translateY(10px);
    //       }
    //       to {
    //         opacity: 1;
    //         transform: translateY(0);
    //       }
    //     }

    //     .animate-fadeIn {
    //       animation: fadeIn 0.5s ease-out forwards;
    //     }

    //     /* Custom scrollbar */
    //     ::-webkit-scrollbar {
    //       width: 8px;
    //     }

    //     ::-webkit-scrollbar-track {
    //       background: #f1f1f1;
    //       border-radius: 4px;
    //     }

    //     ::-webkit-scrollbar-thumb {
    //       background: linear-gradient(to bottom, #B03982, #733C86);
    //       border-radius: 4px;
    //     }

    //     ::-webkit-scrollbar-thumb:hover {
    //       background: linear-gradient(to bottom, #c94594, #8a48a3);
    //     }
    //   `}</style>
    // </footer>
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="https://nerdybuddy.com/wp-content/uploads/2024/08/Nerdy-Buddy-scaled.png"
                alt="Nerdy Buddy"
                className="h-8 w-auto transition-all duration-300"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with cutting-edge AI solutions for knowledge management and automation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/nerdy-buddy/" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Roadmap</a></li>
            </ul>
          </div> */}

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Implementation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Use Cases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Problem Statement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 AI Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;