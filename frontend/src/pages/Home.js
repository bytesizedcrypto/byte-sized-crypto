import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, TrendingUp, Calculator, Users, Star, Play, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Structured Learning",
      description: "Step-by-step crypto education from basics to advanced concepts",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Live Market Data",
      description: "Real-time crypto prices and market analysis tools",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calculator,
      title: "Smart Tools",
      description: "Profit calculators, DCA tools, and portfolio trackers",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Connect with fellow crypto learners and experts",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "New Crypto Investor",
      content: "Finally found a platform that explains crypto without the jargon. The byte-sized lessons are perfect for my busy schedule!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Rodriguez",
      role: "DeFi Enthusiast",
      content: "The DCA calculator helped me optimize my investment strategy. Saved me thousands in the last bull run!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      role: "Crypto Trader",
      content: "Best educational resource I've found. The community is incredibly supportive and knowledgeable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "10K+", label: "Students Taught" },
    { number: "500+", label: "Lessons Created" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Community Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%233b82f6" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 lg:opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1639815188546-c43c240ff4df" 
            alt="Blockchain Technology" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                  🚀 Master Crypto – One Byte At A Time
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-hero font-extrabold text-gray-900 mb-6 leading-tight">
                Learn 
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  {" "}Crypto{" "}
                </span>
                the Smart Way
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                From complete beginner to crypto expert. Get bite-sized lessons, live market data, 
                and powerful tools to master cryptocurrency investing and trading.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/learn"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-glow transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/market"
                  className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  View Live Market
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1639815188546-c43c240ff4df" 
                  alt="Cryptocurrency Education"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm opacity-90">Start your crypto journey</div>
                  <div className="text-2xl font-bold">Today</div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Calculator className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to 
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Master Crypto
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines education, tools, and community to give you the complete crypto learning experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our 
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Students Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful crypto learners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Crypto Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have mastered cryptocurrency with our proven system. 
              Start with our free crypto basics guide today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/learn"
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free PDF Guide
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/market"
                className="px-8 py-4 bg-primary-700/50 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-primary-600/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Market Data
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;