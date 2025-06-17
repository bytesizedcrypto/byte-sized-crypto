import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Users, Star, Play, CheckCircle, ArrowRight } from 'lucide-react';

const Lessons = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [completedLessons, setCompletedLessons] = useState([1, 3, 5]); // Mock completed lessons

  const levels = [
    { id: 'all', name: 'All Levels', count: 15 },
    { id: 'beginner', name: 'Beginner', count: 8 },
    { id: 'intermediate', name: 'Intermediate', count: 5 },
    { id: 'advanced', name: 'Advanced', count: 2 }
  ];

  const lessons = [
    {
      id: 1,
      title: "What is Blockchain?",
      description: "Understand the fundamental technology behind all cryptocurrencies",
      level: "beginner",
      duration: "3 min",
      students: "12,547",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1639815188546-c43c240ff4df",
      keyPoints: [
        "Distributed ledger technology",
        "Decentralization benefits",
        "Cryptographic security",
        "Consensus mechanisms"
      ],
      completed: true
    },
    {
      id: 2,
      title: "Bitcoin vs Traditional Money",
      description: "Learn the key differences between digital and fiat currencies",
      level: "beginner",
      duration: "4 min",
      students: "10,832",
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1639768939489-025b90ba9f23",
      keyPoints: [
        "Monetary policy differences",
        "Inflation protection",
        "Store of value",
        "Transaction efficiency"
      ]
    },
    {
      id: 3,
      title: "Setting Up Your First Wallet",
      description: "Step-by-step guide to creating and securing your crypto wallet",
      level: "beginner",
      duration: "5 min",
      students: "15,290",
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg",
      keyPoints: [
        "Hot vs Cold wallets",
        "Private key security",
        "Backup strategies",
        "Recovery phrases"
      ],
      completed: true
    },
    {
      id: 4,
      title: "Reading Crypto Charts",
      description: "Master the basics of technical analysis for crypto trading",
      level: "intermediate",
      duration: "6 min",
      students: "8,456",
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1643962579738-f221c665a65d",
      keyPoints: [
        "Candlestick patterns",
        "Support and resistance",
        "Volume analysis",
        "Trend identification"
      ]
    },
    {
      id: 5,
      title: "DeFi Explained Simply",
      description: "Understand decentralized finance and its core protocols",
      level: "intermediate",
      duration: "7 min",
      students: "6,789",
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1597781914467-a5b93258e748",
      keyPoints: [
        "Lending protocols",
        "Automated Market Makers",
        "Yield farming basics",
        "Liquidity provision"
      ],
      completed: true
    },
    {
      id: 6,
      title: "NFT Fundamentals",
      description: "Learn about non-fungible tokens and their use cases",
      level: "beginner",
      duration: "4 min",
      students: "9,234",
      rating: 4.6,
      thumbnail: "https://images.unsplash.com/photo-1645731504293-ad4d5da42a10",
      keyPoints: [
        "Unique digital assets",
        "Ownership verification",
        "Marketplace dynamics",
        "Creator economy"
      ]
    },
    {
      id: 7,
      title: "Smart Contract Basics",
      description: "Introduction to programmable blockchain applications",
      level: "intermediate",
      duration: "8 min",
      students: "5,123",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      keyPoints: [
        "Automated execution",
        "Ethereum Virtual Machine",
        "Gas fees explained",
        "Security considerations"
      ]
    },
    {
      id: 8,
      title: "Staking for Passive Income",
      description: "Earn rewards by participating in blockchain networks",
      level: "beginner",
      duration: "5 min",
      students: "11,567",
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1646830662982-8b05d40d9375",
      keyPoints: [
        "Proof of Stake consensus",
        "Validator responsibilities",
        "Staking rewards",
        "Slashing risks"
      ]
    },
    {
      id: 9,
      title: "Crypto Tax Basics",
      description: "Understand your tax obligations when trading crypto",
      level: "intermediate",
      duration: "6 min",
      students: "7,890",
      rating: 4.5,
      thumbnail: "https://images.pexels.com/photos/159746/notebook-pen-pencil-education-159746.jpeg",
      keyPoints: [
        "Taxable events",
        "Capital gains/losses",
        "Record keeping",
        "Reporting requirements"
      ]
    },
    {
      id: 10,
      title: "Layer 2 Solutions",
      description: "Scaling blockchain networks for mass adoption",
      level: "advanced",
      duration: "10 min",
      students: "3,456",
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg",
      keyPoints: [
        "Scaling limitations",
        "Rollup technology",
        "State channels",
        "Sidechains"
      ]
    },
    {
      id: 11,
      title: "Risk Management Strategies",
      description: "Protect your investments with proven risk management",
      level: "intermediate",
      duration: "7 min",
      students: "6,234",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1639815188546-c43c240ff4df",
      keyPoints: [
        "Position sizing",
        "Stop losses",
        "Portfolio diversification",
        "Emotional discipline"
      ]
    },
    {
      id: 12,
      title: "MEV and Arbitrage",
      description: "Advanced concepts in maximal extractable value",
      level: "advanced",
      duration: "12 min",
      students: "1,234",
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1639768939489-025b90ba9f23",
      keyPoints: [
        "MEV extraction",
        "Arbitrage opportunities",
        "Flash loans",
        "Sandwich attacks"
      ]
    }
  ];

  const achievements = [
    { title: "First Steps", description: "Complete your first lesson", icon: "🎯", unlocked: true },
    { title: "Knowledge Seeker", description: "Complete 5 lessons", icon: "📚", unlocked: true },
    { title: "Crypto Scholar", description: "Complete 10 lessons", icon: "🎓", unlocked: false },
    { title: "Master Trader", description: "Complete all advanced lessons", icon: "💎", unlocked: false }
  ];

  const filteredLessons = selectedLevel === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.level === selectedLevel);

  const toggleComplete = (lessonId) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Byte-Sized Crypto Lessons
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Learn cryptocurrency concepts in just 2-5 minutes. Perfect for busy professionals who want to stay informed.
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-primary-200">Learning Progress</span>
                <span className="text-white font-semibold">{completedLessons.length}/{lessons.length} Complete</span>
              </div>
              <div className="w-full bg-primary-700/50 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-white h-3 rounded-full"
                />
              </div>
              <div className="text-center mt-2 text-primary-200">
                {Math.round(progressPercentage)}% Complete
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Achievements</h2>
            <p className="text-gray-600">Unlock badges as you progress through your crypto learning journey</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl transition-all duration-300 ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200' 
                    : 'bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <div className={`text-4xl mb-3 ${achievement.unlocked ? 'grayscale-0' : 'grayscale opacity-50'}`}>
                  {achievement.icon}
                </div>
                <h3 className={`font-semibold mb-2 ${achievement.unlocked ? 'text-primary-600' : 'text-gray-500'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-sm ${achievement.unlocked ? 'text-primary-700' : 'text-gray-400'}`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Level Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedLevel === level.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level.name}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedLevel === level.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {level.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedLevel === 'all' ? 'All Lessons' : `${levels.find(l => l.id === selectedLevel)?.name} Lessons`}
            </h2>
            <p className="text-gray-600">
              Quick, actionable lessons designed to fit into your busy schedule
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img 
                    src={lesson.thumbnail} 
                    alt={lesson.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${
                      lesson.level === 'beginner' ? 'bg-green-500' :
                      lesson.level === 'intermediate' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                      {lesson.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {completedLessons.includes(lesson.id) && (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => toggleComplete(lesson.id)}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lesson.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {lesson.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {lesson.rating}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {lesson.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {lesson.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Key Points:</div>
                    <ul className="space-y-1">
                      {lesson.keyPoints.slice(0, 3).map((point, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => toggleComplete(lesson.id)}
                    className={`w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      completedLessons.includes(lesson.id)
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800'
                    }`}
                  >
                    {completedLessons.includes(lesson.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Start Learning
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Become a Crypto Expert?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our comprehensive learning program and get access to premium content, 
              1-on-1 mentorship, and exclusive community benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Upgrade to Premium
              </button>
              <button className="px-8 py-4 bg-primary-700/50 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-primary-600/50 transition-all duration-300 flex items-center justify-center gap-2">
                View Learning Path
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Lessons;