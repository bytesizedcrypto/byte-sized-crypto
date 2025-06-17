import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, RefreshCw, Search, Star, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Market = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');

  // Mock data for demo - in production, this would come from CoinGecko API
  const mockCryptoData = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      current_price: 43250.21,
      price_change_percentage_24h: 2.45,
      market_cap: 847382947382,
      total_volume: 23847382947,
      image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      sparkline_in_7d: { price: [42000, 43000, 42500, 44000, 43800, 43250] }
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      current_price: 2584.32,
      price_change_percentage_24h: -1.23,
      market_cap: 310847382947,
      total_volume: 12847382947,
      image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      sparkline_in_7d: { price: [2600, 2550, 2620, 2580, 2590, 2584] }
    },
    {
      id: 'binancecoin',
      name: 'BNB',
      symbol: 'BNB',
      current_price: 312.45,
      price_change_percentage_24h: 0.87,
      market_cap: 48847382947,
      total_volume: 1847382947,
      image: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
      sparkline_in_7d: { price: [310, 315, 308, 320, 314, 312] }
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      current_price: 98.76,
      price_change_percentage_24h: 5.34,
      market_cap: 42847382947,
      total_volume: 2847382947,
      image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      sparkline_in_7d: { price: [95, 92, 98, 102, 99, 98.76] }
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      current_price: 0.4823,
      price_change_percentage_24h: -2.15,
      market_cap: 16847382947,
      total_volume: 847382947,
      image: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
      sparkline_in_7d: { price: [0.49, 0.51, 0.47, 0.50, 0.48, 0.4823] }
    },
    {
      id: 'avalanche-2',
      name: 'Avalanche',
      symbol: 'AVAX',
      current_price: 36.42,
      price_change_percentage_24h: 3.21,
      market_cap: 13847382947,
      total_volume: 647382947,
      image: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
      sparkline_in_7d: { price: [35, 37, 34, 38, 36.8, 36.42] }
    }
  ];

  const mockMarketStats = {
    total_market_cap: 1750000000000,
    total_volume: 65000000000,
    market_cap_change_percentage_24h: 1.23,
    bitcoin_dominance: 48.5
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCryptoData(mockCryptoData);
      setLoading(false);
    }, 1000);
  }, []);

  const formatPrice = (price) => {
    if (price < 1) return `$${price.toFixed(4)}`;
    return `$${price.toLocaleString()}`;
  };

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toLocaleString()}`;
  };

  const filteredData = cryptoData.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const MiniChart = ({ data, isPositive }) => {
    const chartData = data.map((price, index) => ({ price, index }));
    
    return (
      <ResponsiveContainer width={100} height={50}>
        <LineChart data={chartData}>
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke={isPositive ? '#10b981' : '#ef4444'} 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-primary-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading market data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Crypto Market Overview
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl">
              Stay updated with real-time cryptocurrency prices, market caps, and trending coins.
            </p>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">
                  {formatMarketCap(mockMarketStats.total_market_cap)}
                </div>
                <div className="text-primary-200 text-sm">Total Market Cap</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">
                  {formatMarketCap(mockMarketStats.total_volume)}
                </div>
                <div className="text-primary-200 text-sm">24h Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400">
                  +{mockMarketStats.market_cap_change_percentage_24h}%
                </div>
                <div className="text-primary-200 text-sm">24h Change</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">
                  {mockMarketStats.bitcoin_dominance}%
                </div>
                <div className="text-primary-200 text-sm">BTC Dominance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search cryptocurrencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {['24h', '7d', '30d'].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedTimeframe === timeframe
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>

          {/* Crypto Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">#</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coin</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">24h %</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Market Cap</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Volume (24h)</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Last 7 Days</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredData.map((coin, index) => (
                    <motion.tr
                      key={coin.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={coin.image} 
                            alt={coin.name}
                            className="w-8 h-8 rounded-full"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/32x32/3b82f6/ffffff?text=' + coin.symbol.charAt(0);
                            }}
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{coin.name}</div>
                            <div className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-gray-900">
                        {formatPrice(coin.current_price)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-medium ${
                          coin.price_change_percentage_24h >= 0
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {coin.price_change_percentage_24h >= 0 ? (
                            <ArrowUpRight className="w-4 h-4" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4" />
                          )}
                          {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-gray-900">
                        {formatMarketCap(coin.market_cap)}
                      </td>
                      <td className="px-6 py-4 text-right text-gray-900">
                        {formatMarketCap(coin.total_volume)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <MiniChart 
                          data={coin.sparkline_in_7d.price} 
                          isPositive={coin.price_change_percentage_24h >= 0}
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 text-gray-400 hover:text-yellow-500 transition-colors">
                          <Star className="w-5 h-5" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Analysis & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our expert analysis and market trends
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Market Sentiment</h3>
                  <p className="text-green-600 font-medium">Bullish</p>
                </div>
              </div>
              <p className="text-gray-700">
                Overall market showing positive momentum with increased institutional adoption.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Top Gainer</h3>
                  <p className="text-blue-600 font-medium">SOL +5.34%</p>
                </div>
              </div>
              <p className="text-gray-700">
                Solana leads today's gainers with strong ecosystem development news.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">DeFi TVL</h3>
                  <p className="text-purple-600 font-medium">$45.2B</p>
                </div>
              </div>
              <p className="text-gray-700">
                Total Value Locked in DeFi protocols continues to grow steadily.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;