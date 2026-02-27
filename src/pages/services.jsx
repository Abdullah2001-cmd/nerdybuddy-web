// import React, { useState } from 'react';
// import {
//   Brain,
//   Cpu,
//   Users,
//   Shield,
//   Zap,
//   Settings,
//   Cloud,
//   Lock,
//   RefreshCw,
//   Server,
//   TrendingUp,
//   FileText,
//   BarChart3,
//   MessageCircle,
//   Sparkles,
//   ChevronRight,
//   CheckCircle,
//   Star,
//   Clock,
//   Award,
//   Target,
//   Rocket,
//   Layers,
//   Gauge,
//   LineChart,
//   Puzzle,
//   Globe,
//   HeadphonesIcon,
//   HeartHandshake,
//   Code,
//   Database,
//   Network,
//   Palette,
//   Smartphone,
//   Mail,
//   Phone,
//   Calendar,
//   Download,
//   Menu,
//   X,
//   Github,
//   Twitter,
//   Linkedin,
//   Facebook,
//   Youtube,
//   ArrowRight,
//   PlayCircle,
//   BookOpen,
//   Users2,
//   Lightbulb,
//   Briefcase,
//   Building2,
//   Workflow,
//   PenTool,
//   Megaphone,
//   Search,
//   AlertCircle
// } from 'lucide-react';

// const ServicesPage = () => {
//   const [activeService, setActiveService] = useState('all');
//   const [showVideo, setShowVideo] = useState(false);
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   // Hero Stats
//   const stats = [
//     { icon: <Briefcase className="w-6 h-6" />, value: "500+", label: "Projects Completed" },
//     { icon: <Users className="w-6 h-6" />, value: "300+", label: "Happy Clients" },
//     { icon: <Globe className="w-6 h-6" />, value: "25+", label: "Countries Served" },
//     { icon: <Award className="w-6 h-6" />, value: "15+", label: "Industry Awards" }
//   ];

//   // Main Services Data
//   const mainServices = [
//     {
//       id: 'ai-solutions',
//       title: 'AI & Machine Learning',
//       shortDesc: 'Cutting-edge AI solutions tailored to your business needs',
//       icon: <Brain className="w-8 h-8" />,
//       gradient: 'from-purple-500 to-pink-500',
//       color: 'purple',
//       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: [
//         'Custom AI Model Development',
//         'Machine Learning Integration',
//         'Natural Language Processing',
//         'Computer Vision Solutions',
//         'Predictive Analytics',
//         'AI-Powered Automation'
//       ],
//       benefits: [
//         'Increase operational efficiency by up to 40%',
//         'Reduce manual errors by 95%',
//         '24/7 automated processing',
//         'Scalable solutions for growing businesses'
//       ],
//       process: [
//         { step: 'Discovery', description: 'Understanding your business needs' },
//         { step: 'Development', description: 'Building custom AI solutions' },
//         { step: 'Integration', description: 'Seamless integration with your systems' },
//         { step: 'Optimization', description: 'Continuous improvement and tuning' }
//       ],
//       technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain'],
//       caseStudy: {
//         title: 'Global Retail Chain',
//         result: '40% increase in customer engagement',
//         link: '#'
//       }
//     },
//     {
//       id: 'cloud-solutions',
//       title: 'Cloud & Infrastructure',
//       shortDesc: 'Scalable, secure cloud solutions for modern businesses',
//       icon: <Cloud className="w-8 h-8" />,
//       gradient: 'from-blue-500 to-cyan-500',
//       color: 'blue',
//       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: [
//         'Cloud Migration Services',
//         'Hybrid Cloud Solutions',
//         'Infrastructure Optimization',
//         'Disaster Recovery',
//         'Multi-Cloud Management',
//         'DevOps Implementation'
//       ],
//       benefits: [
//         'Reduce infrastructure costs by 30%',
//         '99.99% uptime guarantee',
//         'Automatic scaling',
//         'Enhanced security compliance'
//       ],
//       process: [
//         { step: 'Assessment', description: 'Infrastructure audit and planning' },
//         { step: 'Migration', description: 'Seamless data and application migration' },
//         { step: 'Optimization', description: 'Performance tuning and cost optimization' },
//         { step: 'Management', description: '24/7 monitoring and support' }
//       ],
//       technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
//       caseStudy: {
//         title: 'Financial Services Firm',
//         result: '50% reduction in infrastructure costs',
//         link: '#'
//       }
//     },
//     {
//       id: 'data-analytics',
//       title: 'Data Analytics & BI',
//       shortDesc: 'Transform raw data into actionable insights',
//       icon: <BarChart3 className="w-8 h-8" />,
//       gradient: 'from-green-500 to-emerald-500',
//       color: 'green',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: [
//         'Business Intelligence',
//         'Data Warehousing',
//         'Real-time Analytics',
//         'Dashboard Development',
//         'Data Visualization',
//         'Predictive Modeling'
//       ],
//       benefits: [
//         'Faster decision-making',
//         'Identify hidden opportunities',
//         'Real-time business insights',
//         'Competitive advantage'
//       ],
//       process: [
//         { step: 'Data Audit', description: 'Assess data quality and sources' },
//         { step: 'Strategy', description: 'Define KPIs and metrics' },
//         { step: 'Implementation', description: 'Build analytics infrastructure' },
//         { step: 'Insights', description: 'Deliver actionable insights' }
//       ],
//       technologies: ['Tableau', 'Power BI', 'Snowflake', 'Looker', 'Apache Spark'],
//       caseStudy: {
//         title: 'E-commerce Platform',
//         result: '25% increase in conversion rates',
//         link: '#'
//       }
//     },
//     {
//       id: 'cybersecurity',
//       title: 'Cybersecurity',
//       shortDesc: 'Comprehensive security solutions for digital assets',
//       icon: <Shield className="w-8 h-8" />,
//       gradient: 'from-red-500 to-orange-500',
//       color: 'red',
//       image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: [
//         'Security Audits & Assessments',
//         'Threat Detection & Response',
//         'Compliance Management',
//         'Identity & Access Management',
//         'Security Training',
//         'Incident Response'
//       ],
//       benefits: [
//         'Prevent data breaches',
//         'Meet compliance requirements',
//         'Protect brand reputation',
//         'Minimize security risks'
//       ],
//       process: [
//         { step: 'Assessment', description: 'Identify vulnerabilities' },
//         { step: 'Protection', description: 'Implement security measures' },
//         { step: 'Monitoring', description: '24/7 threat detection' },
//         { step: 'Response', description: 'Rapid incident resolution' }
//       ],
//       technologies: ['SIEM', 'Firewalls', 'Encryption', 'IAM', 'Zero Trust'],
//       caseStudy: {
//         title: 'Healthcare Provider',
//         result: '100% compliance achievement',
//         link: '#'
//       }
//     },
//     {
//       id: 'digital-transformation',
//       title: 'Digital Transformation',
//       shortDesc: 'Modernize your business for the digital age',
//       icon: <Rocket className="w-8 h-8" />,
//       gradient: 'from-yellow-500 to-orange-500',
//       color: 'yellow',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: [
//         'Process Automation',
//         'Legacy System Modernization',
//         'Digital Strategy Consulting',
//         'Change Management',
//         'Workflow Optimization',
//         'Technology Roadmap'
//       ],
//       benefits: [
//         'Increase agility and innovation',
//         'Reduce operational costs',
//         'Improve customer experience',
//         'Future-proof your business'
//       ],
//       process: [
//         { step: 'Vision', description: 'Define digital strategy' },
//         { step: 'Plan', description: 'Create transformation roadmap' },
//         { step: 'Execute', description: 'Implement digital solutions' },
//         { step: 'Evolve', description: 'Continuous improvement' }
//       ],
//       technologies: ['Low-Code Platforms', 'RPA', 'APIs', 'Microservices'],
//       caseStudy: {
//         title: 'Manufacturing Company',
//         result: '60% faster production cycles',
//         link: '#'
//       }
//     },
//     {
//       id: 'consulting',
//       title: 'IT Consulting',
//       shortDesc: 'Expert guidance for technology decisions',
//       icon: <Users className="w-8 h-8" />,
//       gradient: 'from-indigo-500 to-purple-500',
//       color: 'indigo',
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       features: [
//         'Technology Strategy',
//         'Architecture Design',
//         'Vendor Selection',
//         'Project Management',
//         'Technical Due Diligence',
//         'Team Training'
//       ],
//       benefits: [
//         'Make informed decisions',
//         'Reduce technology risks',
//         'Optimize IT spending',
//         'Access expert knowledge'
//       ],
//       process: [
//         { step: 'Discovery', description: 'Understand your goals' },
//         { step: 'Analysis', description: 'Evaluate options' },
//         { step: 'Recommendation', description: 'Provide actionable advice' },
//         { step: 'Support', description: 'Guide implementation' }
//       ],
//       technologies: ['Enterprise Architecture', 'Agile', 'ITIL', 'Cloud Strategy'],
//       caseStudy: {
//         title: 'Startup Tech Company',
//         result: 'Scaled from 10 to 200 employees',
//         link: '#'
//       }
//     }
//   ];

//   // Additional Services
//   const additionalServices = [
//     {
//       title: 'Custom Software Development',
//       icon: <Code className="w-6 h-6" />,
//       description: 'Tailored software solutions built to your exact specifications',
//       features: ['Web Applications', 'Mobile Apps', 'Enterprise Software']
//     },
//     {
//       title: 'UI/UX Design',
//       icon: <Palette className="w-6 h-6" />,
//       description: 'User-centered design that drives engagement and conversions',
//       features: ['User Research', 'Wireframing', 'Prototyping']
//     },
//     {
//       title: 'Mobile Development',
//       icon: <Smartphone className="w-6 h-6" />,
//       description: 'Native and cross-platform mobile applications',
//       features: ['iOS', 'Android', 'React Native', 'Flutter']
//     },
//     {
//       title: 'DevOps Services',
//       icon: <Settings className="w-6 h-6" />,
//       description: 'Streamline your development and operations',
//       features: ['CI/CD', 'Infrastructure as Code', 'Monitoring']
//     }
//   ];

//   // Process Steps
//   const processSteps = [
//     {
//       step: '01',
//       title: 'Discovery',
//       description: 'We your business, goals, and challenges',
//       icon: <Search className="w-8 h-8" />
//     },
//     {
//       step: '02',
//       title: 'Strategy',
//       description: 'Develop a tailored roadmap for success',
//       icon: <Target className="w-8 h-8" />
//     },
//     {
//       step: '03',
//       title: 'Implementation',
//       description: 'Execute with precision and agility',
//       icon: <Workflow className="w-8 h-8" />
//     },
//     {
//       step: '04',
//       title: 'Optimization',
//       description: 'Continuously improve and scale',
//       icon: <TrendingUp className="w-8 h-8" />
//     }
//   ];

//   // Technologies
//   const technologies = [
//     { name: 'Artificial Intelligence', icon: <Brain className="w-5 h-5" /> },
//     { name: 'Cloud Computing', icon: <Cloud className="w-5 h-5" /> },
//     { name: 'Big Data', icon: <Database className="w-5 h-5" /> },
//     { name: 'IoT', icon: <Network className="w-5 h-5" /> },
//     { name: 'Blockchain', icon: <Lock className="w-5 h-5" /> },
//     { name: 'Edge Computing', icon: <Cpu className="w-5 h-5" /> }
//   ];

//   // Testimonials
//   const testimonials = [
//     {
//       name: 'David Chen',
//       role: 'CTO, TechInnovate',
//       content: 'The AI solutions they delivered transformed our operations. We saw immediate improvements in efficiency.',
//       rating: 5,
//       avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
//     },
//     {
//       name: 'Sarah Williams',
//       role: 'CEO, GrowthLabs',
//       content: 'Their consulting expertise helped us navigate our digital transformation with confidence.',
//       rating: 5,
//       avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
//     },
//     {
//       name: 'Michael Rodriguez',
//       role: 'Director, DataFirst',
//       content: 'The data analytics platform they built gives us insights we never had before.',
//       rating: 5,
//       avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
//     }
//   ];

//   // FAQ Data
//   const faqs = [
//     {
//       question: 'How do you ensure project success?',
//       answer: 'We follow a proven methodology that includes thorough discovery, clear communication, agile development, and continuous testing. Our team assigns a dedicated project manager to ensure milestones are met and expectations are exceeded.'
//     },
//     {
//       question: 'What industries do you serve?',
//       answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, technology, and professional services. Our solutions are tailored to meet industry-specific requirements and compliance needs.'
//     },
//     {
//       question: 'How long does a typical project take?',
//       answer: 'Project timelines vary based on scope and complexity. A typical project can range from 4-12 weeks for implementation, with ongoing optimization and support available.'
//     },
//     {
//       question: 'Do you provide ongoing support?',
//       answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your solutions continue to perform optimally. This includes regular updates, security patches, and technical support.'
//     },
//     {
//       question: 'How do you handle data security?',
//       answer: 'Security is our top priority. We implement industry-best practices including encryption, access controls, regular audits, and compliance with standards like GDPR, HIPAA, and SOC2.'
//     },
//     {
//       question: 'Can you scale with our business?',
//       answer: 'Absolutely. Our solutions are built to scale with your business. Whether you\'re a startup or enterprise, we design systems that grow with you.'
//     }
//   ];

//   // Partners/Clients
//   const partners = [
//     { name: 'TechCorp', logo: 'https://via.placeholder.com/150x50?text=TechCorp' },
//     { name: 'InnovateLabs', logo: 'https://via.placeholder.com/150x50?text=InnovateLabs' },
//     { name: 'DataDrive', logo: 'https://via.placeholder.com/150x50?text=DataDrive' },
//     { name: 'CloudNine', logo: 'https://via.placeholder.com/150x50?text=CloudNine' },
//     { name: 'SecureSys', logo: 'https://via.placeholder.com/150x50?text=SecureSys' },
//     { name: 'FutureGen', logo: 'https://via.placeholder.com/150x50?text=FutureGen' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

//       {/* Navigation */}

//       {/* <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-2">
//               <Brain className="w-8 h-8 text-[#B03982]" />
//               <span className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                 AI Solutions
//               </span>
//             </div>
            
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Home</a>
//               <a href="#" className="text-[#B03982] font-semibold">Services</a>
//               <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Solutions</a>
//               <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Case Studies</a>
//               <a href="#" className="text-gray-700 hover:text-[#B03982] transition">About</a>
//               <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Contact</a>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <button className="hidden md:block px-4 py-2 text-gray-700 hover:text-[#B03982] transition">
//                 Sign In
//               </button>
//               <button className="px-5 py-2.5 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav> */}

//       {/* Hero Section */}
//       <section className="relative pt-44 pb-20 overflow-hidden">
//         {/* Background Pattern */}
//         {/* <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
//         </div> */}

//         <div className="relative container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 mb-8">
//               <Sparkles className="w-4 h-4 text-[#B03982] mr-2" />
//               <span className="text-sm font-medium text-[#B03982]">Comprehensive Technology Solutions</span>
//             </div>

//             <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-6">
//               <span className="block text-gray-900">Transform Your Business</span>
//               <span className="block mt-2 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
//                 With Our Expert Services
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
//               From AI implementation to digital transformation, we provide end-to-end technology solutions
//               that drive innovation, efficiency, and growth for businesses of all sizes.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//               <button className="px-8 py-4 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300 hover:scale-105">
//                 Explore Our Services
//               </button>
//               <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#B03982] hover:text-[#B03982] transition-all duration-300 flex items-center justify-center gap-2">
//                 <PlayCircle className="w-5 h-5" />
//                 Watch Demo
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="flex justify-center mb-3">
//                     <div className="p-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-2xl">
//                       <div className="text-[#B03982]">{stat.icon}</div>
//                     </div>
//                   </div>
//                   <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Filter */}
//       <section className="py-12 bg-white border-y border-gray-200">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex flex-wrap justify-center gap-4">
//             <button
//               onClick={() => setActiveService('all')}
//               className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeService === 'all'
//                   ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white shadow-md'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//             >
//               All Services
//             </button>
//             {mainServices.map(service => (
//               <button
//                 key={service.id}
//                 onClick={() => setActiveService(service.id)}
//                 className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeService === service.id
//                     ? `bg-gradient-to-r ${service.gradient} text-white shadow-md`
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//               >
//                 {service.title}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Services Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid lg:grid-cols-2 gap-8">
//             {(activeService === 'all'
//               ? mainServices
//               : mainServices.filter(s => s.id === activeService)
//             ).map((service, index) => (
//               <div
//                 key={service.id}
//                 className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-[#B03982]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
//               >
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>

//                   {/* Icon */}
//                   <div className="absolute top-6 left-6">
//                     <div className={`p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30`}>
//                       <div className="text-white">{service.icon}</div>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
//                     <p className="text-white/90 text-lg">{service.shortDesc}</p>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8">
//                   {/* Features */}
//                   <div className="mb-8">
//                     <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                       <Zap className="w-5 h-5 text-[#B03982]" />
//                       Key Features
//                     </h4>
//                     <div className="grid grid-cols-2 gap-3">
//                       {service.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center gap-2">
//                           <CheckCircle className={`w-4 h-4 text-${service.color}-600 flex-shrink-0`} />
//                           <span className="text-sm text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Benefits */}
//                   <div className="mb-8">
//                     <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                       <Award className="w-5 h-5 text-[#B03982]" />
//                       Key Benefits
//                     </h4>
//                     <ul className="space-y-2">
//                       {service.benefits.map((benefit, idx) => (
//                         <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
//                           <TrendingUp className={`w-4 h-4 text-${service.color}-600`} />
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Process */}
//                   <div className="mb-8">
//                     <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                       <Workflow className="w-5 h-5 text-[#B03982]" />
//                       Our Process
//                     </h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       {service.process.map((step, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-xl p-3">
//                           <div className={`text-${service.color}-600 font-bold mb-1`}>{step.step}</div>
//                           <div className="text-xs text-gray-600">{step.description}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Technologies */}
//                   <div className="mb-8">
//                     <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                       <Cpu className="w-5 h-5 text-[#B03982]" />
//                       Technologies
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {service.technologies.map((tech, idx) => (
//                         <span key={idx} className={`px-3 py-1 bg-${service.color}-50 text-${service.color}-700 rounded-full text-xs font-medium`}>
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Case Study */}
//                   <div className={`p-4 bg-${service.color}-50 rounded-xl mb-6`}>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <span className={`text-${service.color}-600 text-xs font-semibold uppercase`}>Case Study</span>
//                         <h5 className="font-semibold text-gray-900 mt-1">{service.caseStudy.title}</h5>
//                         <p className={`text-${service.color}-700 text-sm mt-1`}>{service.caseStudy.result}</p>
//                       </div>
//                       <a href={service.caseStudy.link} className={`text-${service.color}-600 hover:text-${service.color}-700`}>
//                         <ArrowRight className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>

//                   {/* CTA */}
//                   <button className={`w-full py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}>
//                     Learn More About {service.title}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Services */}
//       {/* <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                 Additional Services
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Complementary solutions to complete your technology stack
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {additionalServices.map((service, index) => (
//               <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#B03982]/50 hover:shadow-xl transition-all duration-300 group">
//                 <div className="p-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
//                   <div className="text-[#B03982]">{service.icon}</div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{service.description}</p>
//                 <div className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
//                       <CheckCircle className="w-4 h-4 text-emerald-500" />
//                       {feature}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Process Section */}
//       <section className="pb-10">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                 Our Proven Process
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               A systematic approach to delivering exceptional results
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {processSteps.map((step, index) => (
//               <div key={index} className="relative">
//                 {index < processSteps.length - 1 && (
//                   <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86]"></div>
//                 )}
//                 <div className="relative text-center">
//                   <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-3xl flex items-center justify-center text-white text-2xl font-bold mb-6 transform rotate-45 hover:rotate-0 transition-transform duration-500">
//                     <div className="transform -rotate-45 hover:rotate-0 transition-transform duration-500">
//                       {step.step}
//                     </div>
//                   </div>
//                   <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#B03982]/50 transition-all">
//                     <div className="flex justify-center mb-4 text-[#B03982]">
//                       {step.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technologies Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                 Technologies We Master
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Leveraging cutting-edge technologies to build future-proof solutions
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {technologies.map((tech, index) => (
//               <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#B03982]/50 hover:shadow-lg transition-all duration-300 group">
//                 <div className="flex justify-center mb-3">
//                   <div className="p-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-xl group-hover:scale-110 transition-transform">
//                     <div className="text-[#B03982]">{tech.icon}</div>
//                   </div>
//                 </div>
//                 <span className="text-sm font-medium text-gray-900">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partners/Clients */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                 Trusted By Industry Leaders
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Companies that rely on our expertise
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//             {partners.map((partner, index) => (
//               <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
//                 <img src={partner.logo} alt={partner.name} className="w-full h-auto" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       {/* <section className="py-20 bg-gradient-to-r from-[#B03982] to-[#733C86] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               What Our Clients Say
//             </h2>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               Success stories from businesses we've transformed
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
//                 <div className="flex items-center gap-4 mb-6">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover border-2 border-white"
//                   />
//                   <div>
//                     <h4 className="font-bold text-white">{testimonial.name}</h4>
//                     <p className="text-white/80 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-white/90 italic">"{testimonial.content}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* FAQ Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                 Frequently Asked Questions
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Get answers to common questions about our services
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             {faqs.map((faq, index) => (
//               <div key={index} className="mb-4">
//                 <button
//                   onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//                   className="w-full text-left p-6 bg-white rounded-xl border border-gray-200 hover:border-[#B03982]/50 transition-all duration-300 flex items-center justify-between group"
//                 >
//                   <span className="font-semibold text-gray-900 group-hover:text-[#B03982] transition">
//                     {faq.question}
//                   </span>
//                   <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedFaq === index ? 'rotate-90' : ''
//                     }`} />
//                 </button>
//                 {expandedFaq === index && (
//                   <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 mt-2">
//                     <p className="text-gray-700">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-[#B03982] to-[#733C86] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//         </div>
//         <div className="relative container mx-auto px-4 md:px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Join hundreds of companies already using our AI solutions to save time, reduce costs, and improve efficiency.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-white text-[#B03982] rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
//               Start Free Trial
//             </button>
//             <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#B03982] transition-all duration-300">
//               Schedule Demo
//             </button>
//           </div>
//           <p className="text-white/80 mt-6 text-sm">
//             No credit card required • 14-day free trial • Cancel anytime
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             <div>
//               <div className="flex items-center space-x-2 mb-6">
//                 <Brain className="w-8 h-8 text-[#B03982]" />
//                 <span className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
//                   AI Solutions
//                 </span>
//               </div>
//               <p className="text-gray-400 mb-6">
//                 Empowering businesses with innovative technology solutions for the digital age.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <Github className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">Services</h4>
//               <ul className="space-y-3">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">AI & Machine Learning</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Cloud Solutions</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Data Analytics</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Cybersecurity</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Digital Transformation</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">Company</h4>
//               <ul className="space-y-3">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Partners</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">Support</h4>
//               <ul className="space-y-3">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Support Center</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Status</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               © 2024 AI Solutions. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.9); }
//           to { opacity: 1; transform: scale(1); }
//         }
        
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.6s ease-out forwards;
//         }
        
//         .animate-slideInLeft {
//           animation: slideInLeft 0.6s ease-out forwards;
//         }
        
//         .animate-slideInRight {
//           animation: slideInRight 0.6s ease-out forwards;
//         }
        
//         .animate-scaleIn {
//           animation: scaleIn 0.5s ease-out forwards;
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .hover-lift {
//           transition: transform 0.3s ease;
//         }
        
//         .hover-lift:hover {
//           transform: translateY(-5px);
//         }
        
//         .gradient-border {
//           position: relative;
//           background: linear-gradient(white, white) padding-box,
//                       linear-gradient(45deg, #B03982, #733C86) border-box;
//           border: 2px solid transparent;
//         }
        
//         .text-gradient {
//           background: linear-gradient(135deg, #B03982, #733C86);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesPage;

import React, { useState, useEffect, useRef } from 'react';
import {
  Brain,
  Cpu,
  Users,
  Shield,
  Zap,
  Settings,
  Cloud,
  Lock,
  RefreshCw,
  Server,
  TrendingUp,
  FileText,
  BarChart3,
  MessageCircle,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  Target,
  Rocket,
  Layers,
  Gauge,
  LineChart,
  Puzzle,
  Globe,
  HeadphonesIcon,
  HeartHandshake,
  Code,
  Database,
  Network,
  Palette,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  Download,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  ArrowRight,
  PlayCircle,
  BookOpen,
  Users2,
  Lightbulb,
  Briefcase,
  Building2,
  Workflow,
  PenTool,
  Megaphone,
  Search,
  AlertCircle,
  ArrowUp
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState('all');
  const [showVideo, setShowVideo] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [progress, setProgress] = useState(0);
  const buttonRef = useRef(null);
  const hasScrolledToTop = useRef(false);

  // Smooth scroll to top when component mounts
  useEffect(() => {
    if (window.scrollY > 0 && !hasScrolledToTop.current) {
      hasScrolledToTop.current = true;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);

  // Scroll progress and button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / maxScroll) * 100;
      setProgress(scrollPercent);
      setShowScrollButton(scrolled > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    
    // Add ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full opacity-30 animate-ripple';
    buttonRef.current?.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Hero Stats
  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, value: "500+", label: "Projects Completed" },
    { icon: <Users className="w-6 h-6" />, value: "300+", label: "Happy Clients" },
    { icon: <Globe className="w-6 h-6" />, value: "25+", label: "Countries Served" },
    { icon: <Award className="w-6 h-6" />, value: "15+", label: "Industry Awards" }
  ];

  // Main Services Data
  const mainServices = [
    {
      id: 'ai-solutions',
      title: 'AI & Machine Learning',
      shortDesc: 'Cutting-edge AI solutions tailored to your business needs',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Custom AI Model Development',
        'Machine Learning Integration',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI-Powered Automation'
      ],
      benefits: [
        'Increase operational efficiency by up to 40%',
        'Reduce manual errors by 95%',
        '24/7 automated processing',
        'Scalable solutions for growing businesses'
      ],
      process: [
        { step: 'Discovery', description: 'Understanding your business needs' },
        { step: 'Development', description: 'Building custom AI solutions' },
        { step: 'Integration', description: 'Seamless integration with your systems' },
        { step: 'Optimization', description: 'Continuous improvement and tuning' }
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain'],
      caseStudy: {
        title: 'Global Retail Chain',
        result: '40% increase in customer engagement',
        link: '#'
      }
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud & Infrastructure',
      shortDesc: 'Scalable, secure cloud solutions for modern businesses',
      icon: <Cloud className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Cloud Migration Services',
        'Hybrid Cloud Solutions',
        'Infrastructure Optimization',
        'Disaster Recovery',
        'Multi-Cloud Management',
        'DevOps Implementation'
      ],
      benefits: [
        'Reduce infrastructure costs by 30%',
        '99.99% uptime guarantee',
        'Automatic scaling',
        'Enhanced security compliance'
      ],
      process: [
        { step: 'Assessment', description: 'Infrastructure audit and planning' },
        { step: 'Migration', description: 'Seamless data and application migration' },
        { step: 'Optimization', description: 'Performance tuning and cost optimization' },
        { step: 'Management', description: '24/7 monitoring and support' }
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      caseStudy: {
        title: 'Financial Services Firm',
        result: '50% reduction in infrastructure costs',
        link: '#'
      }
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      shortDesc: 'Transform raw data into actionable insights',
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      color: 'green',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Real-time Analytics',
        'Dashboard Development',
        'Data Visualization',
        'Predictive Modeling'
      ],
      benefits: [
        'Faster decision-making',
        'Identify hidden opportunities',
        'Real-time business insights',
        'Competitive advantage'
      ],
      process: [
        { step: 'Data Audit', description: 'Assess data quality and sources' },
        { step: 'Strategy', description: 'Define KPIs and metrics' },
        { step: 'Implementation', description: 'Build analytics infrastructure' },
        { step: 'Insights', description: 'Deliver actionable insights' }
      ],
      technologies: ['Tableau', 'Power BI', 'Snowflake', 'Looker', 'Apache Spark'],
      caseStudy: {
        title: 'E-commerce Platform',
        result: '25% increase in conversion rates',
        link: '#'
      }
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      shortDesc: 'Comprehensive security solutions for digital assets',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-red-500 to-orange-500',
      color: 'red',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Security Audits & Assessments',
        'Threat Detection & Response',
        'Compliance Management',
        'Identity & Access Management',
        'Security Training',
        'Incident Response'
      ],
      benefits: [
        'Prevent data breaches',
        'Meet compliance requirements',
        'Protect brand reputation',
        'Minimize security risks'
      ],
      process: [
        { step: 'Assessment', description: 'Identify vulnerabilities' },
        { step: 'Protection', description: 'Implement security measures' },
        { step: 'Monitoring', description: '24/7 threat detection' },
        { step: 'Response', description: 'Rapid incident resolution' }
      ],
      technologies: ['SIEM', 'Firewalls', 'Encryption', 'IAM', 'Zero Trust'],
      caseStudy: {
        title: 'Healthcare Provider',
        result: '100% compliance achievement',
        link: '#'
      }
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      shortDesc: 'Modernize your business for the digital age',
      icon: <Rocket className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-500',
      color: 'yellow',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Process Automation',
        'Legacy System Modernization',
        'Digital Strategy Consulting',
        'Change Management',
        'Workflow Optimization',
        'Technology Roadmap'
      ],
      benefits: [
        'Increase agility and innovation',
        'Reduce operational costs',
        'Improve customer experience',
        'Future-proof your business'
      ],
      process: [
        { step: 'Vision', description: 'Define digital strategy' },
        { step: 'Plan', description: 'Create transformation roadmap' },
        { step: 'Execute', description: 'Implement digital solutions' },
        { step: 'Evolve', description: 'Continuous improvement' }
      ],
      technologies: ['Low-Code Platforms', 'RPA', 'APIs', 'Microservices'],
      caseStudy: {
        title: 'Manufacturing Company',
        result: '60% faster production cycles',
        link: '#'
      }
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      shortDesc: 'Expert guidance for technology decisions',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-500',
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Technology Strategy',
        'Architecture Design',
        'Vendor Selection',
        'Project Management',
        'Technical Due Diligence',
        'Team Training'
      ],
      benefits: [
        'Make informed decisions',
        'Reduce technology risks',
        'Optimize IT spending',
        'Access expert knowledge'
      ],
      process: [
        { step: 'Discovery', description: 'Understand your goals' },
        { step: 'Analysis', description: 'Evaluate options' },
        { step: 'Recommendation', description: 'Provide actionable advice' },
        { step: 'Support', description: 'Guide implementation' }
      ],
      technologies: ['Enterprise Architecture', 'Agile', 'ITIL', 'Cloud Strategy'],
      caseStudy: {
        title: 'Startup Tech Company',
        result: 'Scaled from 10 to 200 employees',
        link: '#'
      }
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      title: 'Custom Software Development',
      icon: <Code className="w-6 h-6" />,
      description: 'Tailored software solutions built to your exact specifications',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-6 h-6" />,
      description: 'User-centered design that drives engagement and conversions',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Native and cross-platform mobile applications',
      features: ['iOS', 'Android', 'React Native', 'Flutter']
    },
    {
      title: 'DevOps Services',
      icon: <Settings className="w-6 h-6" />,
      description: 'Streamline your development and operations',
      features: ['CI/CD', 'Infrastructure as Code', 'Monitoring']
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We your business, goals, and challenges',
      icon: <Search className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a tailored roadmap for success',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute with precision and agility',
      icon: <Workflow className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and scale',
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  // Technologies
  const technologies = [
    { name: 'Artificial Intelligence', icon: <Brain className="w-5 h-5" /> },
    { name: 'Cloud Computing', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Big Data', icon: <Database className="w-5 h-5" /> },
    { name: 'IoT', icon: <Network className="w-5 h-5" /> },
    { name: 'Blockchain', icon: <Lock className="w-5 h-5" /> },
    { name: 'Edge Computing', icon: <Cpu className="w-5 h-5" /> }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'David Chen',
      role: 'CTO, TechInnovate',
      content: 'The AI solutions they delivered transformed our operations. We saw immediate improvements in efficiency.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'CEO, GrowthLabs',
      content: 'Their consulting expertise helped us navigate our digital transformation with confidence.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director, DataFirst',
      content: 'The data analytics platform they built gives us insights we never had before.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: 'How do you ensure project success?',
      answer: 'We follow a proven methodology that includes thorough discovery, clear communication, agile development, and continuous testing. Our team assigns a dedicated project manager to ensure milestones are met and expectations are exceeded.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, technology, and professional services. Our solutions are tailored to meet industry-specific requirements and compliance needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A typical project can range from 4-12 weeks for implementation, with ongoing optimization and support available.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your solutions continue to perform optimally. This includes regular updates, security patches, and technical support.'
    },
    {
      question: 'How do you handle data security?',
      answer: 'Security is our top priority. We implement industry-best practices including encryption, access controls, regular audits, and compliance with standards like GDPR, HIPAA, and SOC2.'
    },
    {
      question: 'Can you scale with our business?',
      answer: 'Absolutely. Our solutions are built to scale with your business. Whether you\'re a startup or enterprise, we design systems that grow with you.'
    }
  ];

  // Partners/Clients
  const partners = [
    { name: 'TechCorp', logo: 'https://via.placeholder.com/150x50?text=TechCorp' },
    { name: 'InnovateLabs', logo: 'https://via.placeholder.com/150x50?text=InnovateLabs' },
    { name: 'DataDrive', logo: 'https://via.placeholder.com/150x50?text=DataDrive' },
    { name: 'CloudNine', logo: 'https://via.placeholder.com/150x50?text=CloudNine' },
    { name: 'SecureSys', logo: 'https://via.placeholder.com/150x50?text=SecureSys' },
    { name: 'FutureGen', logo: 'https://via.placeholder.com/150x50?text=FutureGen' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#B03982] to-[#733C86] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation */}
      {/* <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-[#B03982]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                AI Solutions
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Home</a>
              <a href="#" className="text-[#B03982] font-semibold">Services</a>
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Solutions</a>
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Case Studies</a>
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">About</a>
              <a href="#" className="text-gray-700 hover:text-[#B03982] transition">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-4 py-2 text-gray-700 hover:text-[#B03982] transition">
                Sign In
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        </div> */}

        <div className="relative container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#B03982] mr-2" />
              <span className="text-sm font-medium text-[#B03982]">Comprehensive Technology Solutions</span>
            </div>

            <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="block text-gray-900">Transform Your Business</span>
              <span className="block mt-2 bg-gradient-to-r from-[#B03982] via-[#a32c8d] to-[#733C86] bg-clip-text text-transparent">
                With Our Expert Services
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              From AI implementation to digital transformation, we provide end-to-end technology solutions
              that drive innovation, efficiency, and growth for businesses of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#B03982]/20 transition-all duration-300 hover:scale-105">
                Explore Our Services
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#B03982] hover:text-[#B03982] transition-all duration-300 flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-2xl">
                      <div className="text-[#B03982]">{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Filter */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveService('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeService === 'all'
                  ? 'bg-gradient-to-r from-[#B03982] to-[#733C86] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              All Services
            </button>
            {mainServices.map(service => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeService === service.id
                    ? `bg-gradient-to-r ${service.gradient} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {(activeService === 'all'
              ? mainServices
              : mainServices.filter(s => s.id === activeService)
            ).map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-[#B03982]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>

                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 text-lg">{service.shortDesc}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#B03982]" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 text-${service.color}-600 flex-shrink-0`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#B03982]" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <TrendingUp className={`w-4 h-4 text-${service.color}-600`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Workflow className="w-5 h-5 text-[#B03982]" />
                      Our Process
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-3">
                          <div className={`text-${service.color}-600 font-bold mb-1`}>{step.step}</div>
                          <div className="text-xs text-gray-600">{step.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-[#B03982]" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 bg-${service.color}-50 text-${service.color}-700 rounded-full text-xs font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className={`p-4 bg-${service.color}-50 rounded-xl mb-6`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`text-${service.color}-600 text-xs font-semibold uppercase`}>Case Study</span>
                        <h5 className="font-semibold text-gray-900 mt-1">{service.caseStudy.title}</h5>
                        <p className={`text-${service.color}-700 text-sm mt-1`}>{service.caseStudy.result}</p>
                      </div>
                      <a href={service.caseStudy.link} className={`text-${service.color}-600 hover:text-${service.color}-700`}>
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className={`w-full py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                    Learn More About {service.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complementary solutions to complete your technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#B03982]/50 hover:shadow-xl transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-[#B03982]">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                Our Proven Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#B03982] to-[#733C86]"></div>
                )}
                <div className="relative text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#B03982] to-[#733C86] rounded-3xl flex items-center justify-center text-white text-2xl font-bold mb-6 transform rotate-45 hover:rotate-0 transition-transform duration-500">
                    <div className="transform -rotate-45 hover:rotate-0 transition-transform duration-500">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#B03982]/50 transition-all">
                    <div className="flex justify-center mb-4 text-[#B03982]">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                Technologies We Master
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build future-proof solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#B03982]/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-[#B03982]/10 to-[#733C86]/10 rounded-xl group-hover:scale-110 transition-transform">
                    <div className="text-[#B03982]">{tech.icon}</div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Clients */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                Trusted By Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Companies that rely on our expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img src={partner.logo} alt={partner.name} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gradient-to-r from-[#B03982] to-[#733C86] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Success stories from businesses we've transformed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-white/80 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 bg-white rounded-xl border border-gray-200 hover:border-[#B03982]/50 transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-[#B03982] transition">
                    {faq.question}
                  </span>
                  <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedFaq === index ? 'rotate-90' : ''
                    }`} />
                </button>
                {expandedFaq === index && (
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 mt-2">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B03982] to-[#733C86] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our AI solutions to save time, reduce costs, and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#B03982] rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#B03982] transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="w-8 h-8 text-[#B03982]" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering businesses with innovative technology solutions for the digital age.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">AI & Machine Learning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cloud Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Data Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cybersecurity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Digital Transformation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AI Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        ref={buttonRef}
        onClick={scrollToTop}
        className={`fixed z-50 transition-all duration-700 ease-out-expo ${showScrollButton
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-20 pointer-events-none'
          } ${isScrolling ? 'scale-95' : 'scale-100 hover:scale-110'}`}
        style={{
          bottom: '2rem',
          right: '2rem',
        }}
        aria-label="Scroll to top"
      >
        {/* Floating animation container */}
        <div className="relative animate-float">
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          {/* Progress ring */}
          <svg className="absolute -ins-1 w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B03982" />
                <stop offset="100%" stopColor="#733C86" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main Button */}
          <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-full border border-gray-700/50 group-hover:border-transparent transition-all duration-300 shadow-2xl group-hover:shadow-[#B03982]/30 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03982] to-[#733C86] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            {/* Loading animation */}
            {isScrolling && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}

            {/* Icon */}
            <div className={`relative transition-transform duration-300 ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
              <ArrowUp className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Particle effects */}
          {showScrollButton && !isScrolling && (
            <>
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0s' }} />
              <div className="absolute -top-2 right-2 w-1 h-1 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-full animate-float-particles" style={{ animationDelay: '0.3s' }} />
            </>
          )}
        </div>

        {/* Pulse effect */}
        {showScrollButton && !isScrolling && (
          <div className="absolute inset-0 border-2 border-[#B03982]/30 rounded-full animate-ping opacity-0"></div>
        )}

        {/* Tooltip */}
        <div className="absolute right-14 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap border border-gray-700 shadow-xl">
            <span>Back to top</span>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-1.5 h-1.5 bg-gray-900 border-r border-b border-gray-700"></div>
          </div>
        </div>
      </button>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes float-particles {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-10px) scale(0.5); opacity: 0; }
        }

        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(4); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-particles {
          animation: float-particles 1.5s ease-out infinite;
        }

        .animate-ripple {
          animation: ripple 0.6s linear;
        }

        .ease-out-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(45deg, #B03982, #733C86) border-box;
          border: 2px solid transparent;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #B03982, #733C86);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;