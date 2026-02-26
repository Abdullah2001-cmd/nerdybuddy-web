import React from 'react'
import AboutHeroSession from '../components/about/hero'
import AIAssistantFeatures from '../components/about/aiAssistant'
import { Facebook, Github, Linkedin, Twitter, Youtube, Brain } from 'lucide-react'

const About = () => {
    return (
        <>
            <AboutHeroSession />
            <AIAssistantFeatures />
            <footer className="bg-gray-900 text-white py-16">
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
                                Empowering businesses with cutting-edge AI solutions for knowledge management and automation.
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
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Product</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Enterprise</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Roadmap</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Resources</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">API Reference</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Webinars</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Partners</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Legal</a></li>
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
        </>
    )
}

export default About