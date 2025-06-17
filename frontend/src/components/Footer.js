import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, MessageCircle, Mail, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    Learn: [
      { name: 'Crypto Basics', href: '/learn#basics' },
      { name: 'Beginner Guide', href: '/learn#beginner' },
      { name: 'DeFi & NFTs', href: '/learn#intermediate' },
      { name: 'Smart Contracts', href: '/learn#advanced' },
      { name: 'Glossary', href: '/learn#glossary' },
    ],
    Tools: [
      { name: 'P&L Calculator', href: '/tools#pnl' },
      { name: 'DCA Calculator', href: '/tools#dca' },
      { name: 'Portfolio Tracker', href: '/tools#portfolio' },
      { name: 'Wallet Comparison', href: '/tools#wallets' },
      { name: 'Exchange Reviews', href: '/tools#exchanges' },
    ],
    Resources: [
      { name: 'Market Analysis', href: '/market' },
      { name: 'Crypto News', href: '/news' },
      { name: 'Byte-Sized Lessons', href: '/lessons' },
      { name: 'Community Hub', href: '/community' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Discord', icon: MessageCircle, href: '#', color: 'hover:text-indigo-400' },
  ];

  return (
    <footer className="bg-gradient-to-br from-dark via-slate-900 to-slate-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest crypto insights, market analysis, and educational content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-glow transform hover:scale-105 flex items-center justify-center gap-2">
                  Subscribe
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <div className="w-7 h-7 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg blur-md opacity-50"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent">
                  Byte Sized Crypto
                </h2>
                <p className="text-sm text-gray-400">Master Crypto – One Byte At A Time</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Simplifying cryptocurrency education through bite-sized lessons, practical tools, and real-world insights for beginners and experts alike.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 ${social.color} transform hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Byte Sized Crypto. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:contact@bytesizedcrypto.com" className="text-gray-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;