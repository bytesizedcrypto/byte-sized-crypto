import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Lock, Star, Clock, Users, ChevronRight, CheckCircle, Play } from 'lucide-react';

const Learn = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const tabs = [
    { id: 'all', name: 'All Courses', count: 8 },
    { id: 'free', name: 'Free Content', count: 2 },
    { id: 'premium', name: 'Premium', count: 6 },
  ];

  const courses = [
    {
      id: 1,
      title: "Crypto Basics - Complete Guide",
      description: "Everything you need to know about cryptocurrency fundamentals. Perfect for absolute beginners.",
      type: "free",
      format: "PDF Guide",
      duration: "30 min read",
      students: "15,847",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1639768939489-025b90ba9f23",
      lessons: [
        "What is Cryptocurrency?",
        "How Blockchain Works", 
        "Setting Up Your First Wallet",
        "Making Your First Purchase",
        "Security Best Practices"
      ]
    },
    {
      id: 2,
      title: "Beginner's Trading Guide",
      description: "Learn the fundamentals of crypto trading, market analysis, and risk management strategies.",
      type: "premium",
      format: "Video Course",
      duration: "2.5 hours",
      students: "8,439",
      rating: 4.8,
      price: "$29",
      thumbnail: "https://images.unsplash.com/photo-1643962579738-f221c665a65d",
      lessons: [
        "Technical Analysis Basics",
        "Reading Candlestick Charts",
        "Risk Management",
        "Order Types Explained",
        "Trading Psychology"
      ]
    },
    {
      id: 3,
      title: "DeFi Mastery Course",
      description: "Deep dive into Decentralized Finance protocols, yield farming, and liquidity provision.",
      type: "premium",
      format: "Interactive Course",
      duration: "4 hours",
      students: "5,291",
      rating: 4.9,
      price: "$49",
      thumbnail: "https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg",
      lessons: [
        "DeFi Protocols Overview",
        "Uniswap & DEX Trading",
        "Yield Farming Strategies",
        "Liquidity Mining",
        "DeFi Risks & Security"
      ]
    },
    {
      id: 4,
      title: "NFT Creator's Handbook",
      description: "Complete guide to creating, minting, and selling NFTs across different marketplaces.",
      type: "premium",
      format: "Practical Guide",
      duration: "3 hours",
      students: "3,847",
      rating: 4.7,
      price: "$39",
      thumbnail: "https://images.unsplash.com/photo-1645731504293-ad4d5da42a10",
      lessons: [
        "NFT Fundamentals",
        "Creating Digital Art",
        "Minting on OpenSea",
        "Marketing Your NFTs",
        "Building Your Brand"
      ]
    },
    {
      id: 5,
      title: "Smart Contracts Development",
      description: "Learn Solidity programming and build your first smart contracts on Ethereum.",
      type: "premium",
      format: "Code-Along Course",
      duration: "6 hours",
      students: "2,156",
      rating: 4.8,
      price: "$79",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      lessons: [
        "Solidity Fundamentals",
        "Smart Contract Architecture",
        "Testing & Deployment",
        "Security Best Practices",
        "Building a DApp"
      ]
    },
    {
      id: 6,
      title: "Technical Analysis Mastery",
      description: "Advanced chart reading, indicators, and trading strategies for crypto markets.",
      type: "premium",
      format: "Video Series",
      duration: "5 hours",
      students: "6,738",
      rating: 4.9,
      price: "$59",
      thumbnail: "https://images.unsplash.com/photo-1639815188546-c43c240ff4df",
      lessons: [
        "Advanced Charting",
        "Fibonacci Retracements",
        "Volume Analysis",
        "Market Structure",
        "Trading Strategies"
      ]
    },
    {
      id: 7,
      title: "Crypto Investment Portfolio",
      description: "Build and manage a diversified crypto investment portfolio for long-term growth.",
      type: "premium",
      format: "Strategy Guide",
      duration: "2 hours",
      students: "4,923",
      rating: 4.8,
      price: "$35",
      thumbnail: "https://images.unsplash.com/photo-1646830662982-8b05d40d9375",
      lessons: [
        "Portfolio Allocation",
        "Risk Assessment",
        "Rebalancing Strategies",
        "Tax Optimization",
        "Performance Tracking"
      ]
    },
    {
      id: 8,
      title: "Crypto Glossary & Terms",
      description: "Comprehensive dictionary of cryptocurrency and blockchain terminology.",
      type: "free",
      format: "Reference Guide",
      duration: "Quick Reference",
      students: "12,456",
      rating: 4.7,
      thumbnail: "https://images.pexels.com/photos/159746/notebook-pen-pencil-education-159746.jpeg",
      lessons: [
        "A-Z Crypto Terms",
        "Trading Terminology", 
        "DeFi Glossary",
        "Technical Indicators",
        "Common Abbreviations"
      ]
    }
  ];

  const filteredCourses = courses.filter(course => 
    selectedTab === 'all' || course.type === selectedTab
  );

  const CourseCard = ({ course }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          {course.type === 'free' ? (
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
              Free
            </span>
          ) : (
            <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-full">
              Premium {course.price}
            </span>
          )}
        </div>
        {course.type === 'premium' && (
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Lock className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {course.students}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            {course.rating}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {course.description}
        </p>

        <div className="mb-4">
          <div className="text-sm font-medium text-gray-700 mb-2">What you'll learn:</div>
          <ul className="space-y-1">
            {course.lessons.slice(0, 3).map((lesson, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {lesson}
              </li>
            ))}
            {course.lessons.length > 3 && (
              <li className="text-sm text-gray-500">
                +{course.lessons.length - 3} more lessons
              </li>
            )}
          </ul>
        </div>

        <div className="flex gap-3">
          {course.type === 'free' ? (
            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download Free
            </button>
          ) : (
            <>
              <button className="flex-1 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center gap-2">
                Buy {course.price}
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Play className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master Cryptocurrency
              <span className="block text-primary-200">One Lesson at a Time</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              From complete beginner to crypto expert. Our structured learning path takes you through 
              every aspect of cryptocurrency and blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#courses"
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Learning Free
              </a>
              <a 
                href="#premium"
                className="px-8 py-4 bg-primary-700/50 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-primary-600/50 transition-all duration-300"
              >
                View Premium Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.name}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedTab === 'all' && 'All Courses'}
              {selectedTab === 'free' && 'Free Content'}
              {selectedTab === 'premium' && 'Premium Courses'}
            </h2>
            <p className="text-gray-600">
              {selectedTab === 'free' 
                ? 'Start your crypto journey with our free educational content'
                : selectedTab === 'premium'
                ? 'Unlock advanced strategies and in-depth tutorials'
                : 'Choose from our complete collection of crypto educational content'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section id="premium" className="py-20 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unlock Premium Learning
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get access to advanced courses, exclusive content, and personalized support to accelerate your crypto journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Courses</h3>
              <p className="text-gray-300">Access to all premium courses and future content updates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Access</h3>
              <p className="text-gray-300">Join our exclusive Discord community and get expert support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1-on-1 Support</h3>
              <p className="text-gray-300">Get personalized guidance from our crypto experts</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-glow transform hover:scale-105">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;