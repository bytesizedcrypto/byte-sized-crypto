import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Star, Trophy, Heart, Reply, ThumbsUp, Calendar, User, ExternalLink, Crown, Zap } from 'lucide-react';

const Community = () => {
  const [selectedTab, setSelectedTab] = useState('discussions');

  const tabs = [
    { id: 'discussions', name: 'Discussions', icon: MessageCircle },
    { id: 'success', name: 'Success Stories', icon: Trophy },
    { id: 'qa', name: 'Q&A', icon: Users }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best DeFi protocols to start with in 2025?",
      author: "CryptoNewbie",
      authorLevel: "Beginner",
      content: "I'm just getting into DeFi and feeling overwhelmed by all the options. Which protocols would you recommend for someone starting out?",
      replies: 23,
      likes: 15,
      timestamp: "2 hours ago",
      tags: ["DeFi", "Beginner", "Question"],
      trending: true
    },
    {
      id: 2,
      title: "Market Analysis: Why I think we're entering a new bull run",
      author: "ChartMaster",
      authorLevel: "Expert",
      content: "Looking at the on-chain metrics and technical indicators, I believe we're at the start of a significant bull market. Here's my analysis...",
      replies: 45,
      likes: 72,
      timestamp: "4 hours ago",
      tags: ["Analysis", "Bull Market", "Technical Analysis"],
      expert: true
    },
    {
      id: 3,
      title: "Staking rewards comparison across different networks",
      author: "StakeHolder",
      authorLevel: "Intermediate",
      content: "I've been tracking staking rewards across various networks for the past 6 months. Here's what I've found...",
      replies: 18,
      likes: 34,
      timestamp: "6 hours ago",
      tags: ["Staking", "Rewards", "Comparison"]
    },
    {
      id: 4,
      title: "Tax implications of DeFi yield farming",
      author: "TaxGuru",
      authorLevel: "Expert",
      content: "With tax season approaching, I wanted to share some insights about how DeFi activities are taxed...",
      replies: 31,
      likes: 58,
      timestamp: "1 day ago",
      tags: ["Tax", "DeFi", "Yield Farming"],
      expert: true
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "From $1000 to $50,000: My DCA Bitcoin Journey",
      author: "BitcoinDCAer",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: "Started with just $100/month DCA into Bitcoin 3 years ago. Today my portfolio is worth over $50k. Here's exactly what I did and the lessons I learned...",
      profit: "+4900%",
      timeframe: "3 years",
      strategy: "DCA",
      verified: true,
      likes: 156,
      comments: 43
    },
    {
      id: 2,
      title: "How I Made $25K Trading Altcoins in 6 Months",
      author: "AltcoinTrader",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=150&h=150&fit=crop&crop=face",
      story: "After learning technical analysis through Byte Sized Crypto, I managed to turn $5K into $30K trading altcoins. Not financial advice, but here's my journey...",
      profit: "+500%",
      timeframe: "6 months",
      strategy: "Technical Analysis",
      verified: true,
      likes: 203,
      comments: 67
    },
    {
      id: 3,
      title: "Passive Income Success: $2000/month from DeFi",
      author: "YieldFarmer",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: "Built a portfolio that generates $2000+ monthly passive income through various DeFi protocols. Started with just $20K investment...",
      profit: "+120% APY",
      timeframe: "1 year",
      strategy: "Yield Farming",
      verified: true,
      likes: 298,
      comments: 89
    }
  ];

  const qnaData = [
    {
      id: 1,
      question: "What's the difference between staking and yield farming?",
      author: "LearningCrypto",
      answered: true,
      bestAnswer: "Staking involves locking up tokens to secure a network and earn rewards, typically 5-15% APY. Yield farming involves providing liquidity to DeFi protocols for higher rewards (often 20-100%+ APY) but with more complexity and risk.",
      answers: 5,
      votes: 23,
      timestamp: "3 hours ago"
    },
    {
      id: 2,
      question: "Is it too late to start investing in crypto?",
      author: "LateComer2025",
      answered: true,
      bestAnswer: "It's never too late! While we're past the very early days, crypto is still in its infancy compared to traditional markets. Focus on education, start small, and think long-term.",
      answers: 12,
      votes: 45,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      question: "How do I calculate my crypto taxes?",
      author: "TaxConfused",
      answered: false,
      answers: 8,
      votes: 18,
      timestamp: "1 day ago"
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "25,847", icon: Users },
    { label: "Discussions", value: "3,245", icon: MessageCircle },
    { label: "Success Stories", value: "892", icon: Trophy },
    { label: "Questions Answered", value: "5,678", icon: Star }
  ];

  const topContributors = [
    { name: "CryptoMentor", level: "Expert", contributions: 145, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { name: "BlockchainBabe", level: "Expert", contributions: 132, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=150&h=150&fit=crop&crop=face" },
    { name: "DeFiGuru", level: "Expert", contributions: 128, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "ChartAnalyst", level: "Advanced", contributions: 98, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" }
  ];

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
              Crypto Community Hub
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Connect with fellow crypto enthusiasts, share experiences, and learn from the community's collective wisdom.
            </p>
            
            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-12">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-200" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-primary-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-6 border-b-2 font-medium transition-colors whitespace-nowrap ${
                  selectedTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Discussions Tab */}
              {selectedTab === 'discussions' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Community Discussions</h2>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors">
                      Start Discussion
                    </button>
                  </div>

                  {discussions.map((discussion, index) => (
                    <motion.div
                      key={discussion.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {discussion.author.charAt(0)}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900">{discussion.author}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              discussion.authorLevel === 'Expert' ? 'bg-purple-100 text-purple-700' :
                              discussion.authorLevel === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {discussion.authorLevel}
                            </span>
                            {discussion.expert && (
                              <Crown className="w-4 h-4 text-yellow-500" />
                            )}
                            {discussion.trending && (
                              <div className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                                <Zap className="w-3 h-3" />
                                Trending
                              </div>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {discussion.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {discussion.content}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {discussion.tags.map((tag, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Reply className="w-4 h-4" />
                                {discussion.replies} replies
                              </div>
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4 text-blue-500" />
                                {discussion.likes}
                              </div>
                            </div>
                            <span>{discussion.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Success Stories Tab */}
              {selectedTab === 'success' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Success Stories</h2>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors">
                      Share Your Story
                    </button>
                  </div>

                  {successStories.map((story, index) => (
                    <motion.div
                      key={story.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <img 
                          src={story.authorAvatar} 
                          alt={story.author}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900">{story.author}</span>
                            {story.verified && (
                              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                <Star className="w-3 h-3" />
                                Verified
                              </div>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {story.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {story.story}
                          </p>
                          
                          <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-xl">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">{story.profit}</div>
                              <div className="text-sm text-gray-600">Profit</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600">{story.timeframe}</div>
                              <div className="text-sm text-gray-600">Timeframe</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-purple-600">{story.strategy}</div>
                              <div className="text-sm text-gray-600">Strategy</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Heart className="w-4 h-4 text-red-500" />
                                {story.likes} likes
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />
                                {story.comments} comments
                              </div>
                            </div>
                            <button className="text-primary-600 hover:text-primary-700 font-medium">
                              Read Full Story
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Q&A Tab */}
              {selectedTab === 'qa' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Questions & Answers</h2>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors">
                      Ask Question
                    </button>
                  </div>

                  {qnaData.map((qa, index) => (
                    <motion.div
                      key={qa.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {qa.author.charAt(0)}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900">{qa.author}</span>
                            {qa.answered && (
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                Answered
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {qa.question}
                          </h3>
                          
                          {qa.answered && qa.bestAnswer && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Star className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-green-800">Best Answer</span>
                              </div>
                              <p className="text-gray-700 leading-relaxed">
                                {qa.bestAnswer}
                              </p>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />
                                {qa.answers} answers
                              </div>
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4 text-blue-500" />
                                {qa.votes} votes
                              </div>
                            </div>
                            <span>{qa.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Top Contributors */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Top Contributors</h3>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.name} className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={contributor.avatar} 
                          alt={contributor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{contributor.name}</div>
                        <div className="text-sm text-gray-600">{contributor.level}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary-600">{contributor.contributions}</div>
                        <div className="text-xs text-gray-500">contributions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Community Guidelines */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Guidelines</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Be respectful and constructive in all discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Share knowledge and help others learn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No financial advice or investment recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use proper tags for better discoverability</span>
                  </li>
                </ul>
              </motion.div>

              {/* Discord Community */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Join Discord</h3>
                    <p className="text-indigo-100">Real-time chat community</p>
                  </div>
                </div>
                <p className="text-indigo-100 mb-6">
                  Connect with 10,000+ crypto enthusiasts in our active Discord server. Get instant help and join daily discussions.
                </p>
                <button className="w-full px-4 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  Join Discord Server
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;