import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, AlertCircle, BookOpen, ChevronRight, Calendar, User } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'market', name: 'Market Analysis', count: 8 },
    { id: 'regulatory', name: 'Regulatory', count: 6 },
    { id: 'defi', name: 'DeFi', count: 5 },
    { id: 'nft', name: 'NFTs', count: 5 }
  ];

  const featuredNews = [
    {
      id: 1,
      title: "Bitcoin Reaches New All-Time High as Institutional Adoption Surges",
      excerpt: "Major corporations and investment firms continue to add Bitcoin to their treasury reserves, driving unprecedented demand and price discovery.",
      category: "market",
      author: "Sarah Chen",
      publishedAt: "2 hours ago",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1639815188546-c43c240ff4df",
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "SEC Approves First Ethereum ETF, Opening Doors for Mainstream Investment",
      excerpt: "The regulatory milestone marks a significant step toward broader cryptocurrency acceptance in traditional financial markets.",
      category: "regulatory",
      author: "Mike Rodriguez",
      publishedAt: "4 hours ago",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1643962579738-f221c665a65d",
      featured: true
    },
    {
      id: 3,
      title: "DeFi Protocol Introduces Revolutionary Cross-Chain Yield Farming",
      excerpt: "New protocol enables seamless yield farming across multiple blockchains, potentially transforming the DeFi landscape.",
      category: "defi",
      author: "Emma Thompson",
      publishedAt: "6 hours ago",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg",
      featured: true
    }
  ];

  const regularNews = [
    {
      id: 4,
      title: "Central Banks Worldwide Accelerate CBDC Development",
      excerpt: "Over 80% of central banks are now actively researching or piloting digital currencies, signaling a major shift in monetary policy.",
      category: "regulatory",
      author: "David Kim",
      publishedAt: "8 hours ago",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1639768939489-025b90ba9f23"
    },
    {
      id: 5,
      title: "NFT Marketplace Sees 300% Surge in Creator Royalties",
      excerpt: "Artists and creators are earning record royalties as NFT trading volumes reach new heights across major platforms.",
      category: "nft",
      author: "Lisa Wang",
      publishedAt: "10 hours ago",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1645731504293-ad4d5da42a10"
    },
    {
      id: 6,
      title: "Solana Network Upgrade Promises 50% Faster Transaction Processing",
      excerpt: "The latest network upgrade aims to enhance scalability and reduce congestion during peak trading periods.",
      category: "market",
      author: "Alex Chen",
      publishedAt: "12 hours ago",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 7,
      title: "Major Bank Launches Cryptocurrency Custody Services",
      excerpt: "Traditional financial institutions continue to bridge the gap between conventional banking and digital assets.",
      category: "market",
      author: "Jessica Martinez",
      publishedAt: "14 hours ago",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1597781914467-a5b93258e748"
    },
    {
      id: 8,
      title: "Layer 2 Solutions Show Promising Growth in Transaction Volume",
      excerpt: "Ethereum's layer 2 networks are processing more transactions than ever, offering hope for scalability challenges.",
      category: "defi",
      author: "Tom Wilson",
      publishedAt: "16 hours ago",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1646830662982-8b05d40d9375"
    },
    {
      id: 9,
      title: "Crypto Gaming Platform Reaches 1 Million Daily Active Users",
      excerpt: "Play-to-earn gaming continues to drive mainstream adoption of blockchain technology and digital currencies.",
      category: "nft",
      author: "Ryan Davis",
      publishedAt: "18 hours ago",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/159746/notebook-pen-pencil-education-159746.jpeg"
    }
  ];

  const marketInsights = [
    {
      title: "Weekly Market Wrap-up",
      description: "Key trends and movements in the crypto market this week",
      change: "+5.2%",
      positive: true
    },
    {
      title: "DeFi TVL Analysis",
      description: "Total Value Locked across major DeFi protocols",
      change: "+12.8%",
      positive: true
    },
    {
      title: "NFT Volume Tracker",
      description: "Trading volume across top NFT marketplaces",
      change: "-3.1%",
      positive: false
    }
  ];

  const regulatoryUpdates = [
    {
      country: "United States",
      update: "SEC proposes new crypto disclosure rules",
      impact: "High",
      date: "Jan 15, 2025"
    },
    {
      country: "European Union",
      update: "MiCA regulation implementation timeline announced",
      impact: "Medium",
      date: "Jan 12, 2025"
    },
    {
      country: "Japan",
      update: "Crypto tax reporting requirements updated",
      impact: "Medium",
      date: "Jan 10, 2025"
    }
  ];

  const allNews = [...featuredNews, ...regularNews];
  const filteredNews = selectedCategory === 'all' 
    ? allNews 
    : allNews.filter(article => article.category === selectedCategory);

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
              Crypto News & Insights
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest cryptocurrency news, market analysis, and regulatory updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Insights Bar */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
                <div className={`text-right ${insight.positive ? 'text-green-600' : 'text-red-600'}`}>
                  <div className="flex items-center gap-1">
                    {insight.positive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingUp className="w-4 h-4 transform rotate-180" />
                    )}
                    <span className="font-bold">{insight.change}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News Articles */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Featured Articles */}
                {selectedCategory === 'all' && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {featuredNews.slice(0, 2).map((article, index) => (
                        <motion.article
                          key={article.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="group cursor-pointer"
                        >
                          <div className="relative mb-4">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4 flex gap-2">
                              <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                                {article.category}
                              </span>
                              {article.trending && (
                                <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                                  <TrendingUp className="w-3 h-3" />
                                  Trending
                                </span>
                              )}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {article.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </div>
                            </div>
                            <span>{article.publishedAt}</span>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Articles */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {selectedCategory === 'all' ? 'Latest News' : `${categories.find(c => c.id === selectedCategory)?.name} News`}
                  </h2>
                  <div className="space-y-6">
                    {filteredNews.map((article, index) => (
                      <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                                {article.category}
                              </span>
                              {article.trending && (
                                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full flex items-center gap-1">
                                  <TrendingUp className="w-3 h-3" />
                                  Trending
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {article.author}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {article.readTime}
                                </div>
                              </div>
                              <span>{article.publishedAt}</span>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Regulatory Updates */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <AlertCircle className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Regulatory Updates</h3>
                </div>
                <div className="space-y-4">
                  {regulatoryUpdates.map((update, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{update.country}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          update.impact === 'High' 
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {update.impact} Impact
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{update.update}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {update.date}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Daily Crypto Brief</h3>
                </div>
                <p className="text-primary-100 mb-6">
                  Get the most important crypto news delivered to your inbox every morning.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full px-4 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    Subscribe
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Trending Topics</h3>
                <div className="space-y-3">
                  {['Bitcoin ETF', 'Ethereum 2.0', 'DeFi Yields', 'NFT Markets', 'Layer 2 Solutions'].map((topic, index) => (
                    <div key={topic} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <span className="font-medium text-gray-900">{topic}</span>
                      <span className="text-sm text-gray-500">#{index + 1}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;