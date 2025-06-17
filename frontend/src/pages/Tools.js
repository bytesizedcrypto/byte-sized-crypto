import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Wallet, Star, DollarSign, BarChart3, PieChart } from 'lucide-react';

const Tools = () => {
  const [activeCalculator, setActiveCalculator] = useState('pnl');
  
  // P&L Calculator State
  const [pnlData, setPnlData] = useState({
    buyPrice: '',
    sellPrice: '',
    quantity: '',
    fees: '0.1'
  });

  // DCA Calculator State
  const [dcaData, setDcaData] = useState({
    monthlyAmount: '',
    months: '',
    startPrice: '',
    endPrice: ''
  });

  // Portfolio Tracker State
  const [portfolioData, setPortfolioData] = useState([
    { coin: 'Bitcoin', symbol: 'BTC', amount: 0.5, price: 43250, value: 21625 },
    { coin: 'Ethereum', symbol: 'ETH', amount: 10, price: 2584, value: 25840 },
    { coin: 'Solana', symbol: 'SOL', amount: 100, price: 98.76, value: 9876 }
  ]);

  const calculators = [
    {
      id: 'pnl',
      name: 'P&L Calculator',
      icon: DollarSign,
      description: 'Calculate your profit and loss from crypto trades'
    },
    {
      id: 'dca',
      name: 'DCA Calculator',
      icon: BarChart3,
      description: 'Analyze your dollar-cost averaging strategy'
    },
    {
      id: 'portfolio',
      name: 'Portfolio Tracker',
      icon: PieChart,
      description: 'Track your crypto portfolio performance'
    }
  ];

  const wallets = [
    {
      name: 'MetaMask',
      type: 'Browser Extension',
      rating: 4.5,
      features: ['Multi-chain', 'DeFi Compatible', 'Mobile App'],
      pros: ['User-friendly', 'Wide adoption', 'Strong security'],
      cons: ['Limited advanced features', 'Gas fee issues'],
      image: 'https://images.unsplash.com/photo-1639768939489-025b90ba9f23'
    },
    {
      name: 'Ledger Nano X',
      type: 'Hardware Wallet',
      rating: 4.8,
      features: ['Bluetooth', '100+ coins', 'Mobile App'],
      pros: ['Excellent security', 'Wide coin support', 'Bluetooth connectivity'],
      cons: ['Price', 'Learning curve'],
      image: 'https://images.unsplash.com/photo-1597781914467-a5b93258e748'
    },
    {
      name: 'Trust Wallet',
      type: 'Mobile Wallet',
      rating: 4.3,
      features: ['Multi-chain', 'DApp Browser', 'Staking'],
      pros: ['Easy to use', 'Built-in DEX', 'Staking rewards'],
      cons: ['Limited desktop support', 'Customer support'],
      image: 'https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg'
    }
  ];

  const exchanges = [
    {
      name: 'Binance',
      rating: 4.6,
      fees: '0.1%',
      features: ['Spot Trading', 'Futures', 'Staking', 'NFTs'],
      pros: ['Low fees', 'High liquidity', 'Many features'],
      cons: ['Regulatory issues', 'Complex interface'],
      image: 'https://images.unsplash.com/photo-1646830662982-8b05d40d9375'
    },
    {
      name: 'Coinbase',
      rating: 4.2,
      fees: '0.5%',
      features: ['Easy Buying', 'Coinbase Pro', 'Staking', 'NFTs'],
      pros: ['User-friendly', 'Regulated', 'Good security'],
      cons: ['High fees', 'Limited coins'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      name: 'Kraken',
      rating: 4.4,
      fees: '0.26%',
      features: ['Spot Trading', 'Futures', 'Staking', 'Margin'],
      pros: ['Good security', 'Low fees', 'Advanced features'],
      cons: ['Interface complexity', 'Slower deposits'],
      image: 'https://images.unsplash.com/photo-1643962579738-f221c665a65d'
    }
  ];

  // P&L Calculator Logic
  const calculatePnL = () => {
    const { buyPrice, sellPrice, quantity, fees } = pnlData;
    if (!buyPrice || !sellPrice || !quantity) return null;

    const buyTotal = parseFloat(buyPrice) * parseFloat(quantity);
    const sellTotal = parseFloat(sellPrice) * parseFloat(quantity);
    const feeAmount = (buyTotal + sellTotal) * (parseFloat(fees) / 100);
    const profit = sellTotal - buyTotal - feeAmount;
    const profitPercentage = (profit / buyTotal) * 100;

    return {
      buyTotal: buyTotal.toFixed(2),
      sellTotal: sellTotal.toFixed(2),
      fees: feeAmount.toFixed(2),
      profit: profit.toFixed(2),
      profitPercentage: profitPercentage.toFixed(2)
    };
  };

  // DCA Calculator Logic
  const calculateDCA = () => {
    const { monthlyAmount, months, startPrice, endPrice } = dcaData;
    if (!monthlyAmount || !months || !startPrice || !endPrice) return null;

    const totalInvested = parseFloat(monthlyAmount) * parseFloat(months);
    const avgPrice = (parseFloat(startPrice) + parseFloat(endPrice)) / 2;
    const totalCoins = totalInvested / avgPrice;
    const currentValue = totalCoins * parseFloat(endPrice);
    const profit = currentValue - totalInvested;
    const profitPercentage = (profit / totalInvested) * 100;

    return {
      totalInvested: totalInvested.toFixed(2),
      totalCoins: totalCoins.toFixed(6),
      currentValue: currentValue.toFixed(2),
      profit: profit.toFixed(2),
      profitPercentage: profitPercentage.toFixed(2)
    };
  };

  const pnlResult = calculatePnL();
  const dcaResult = calculateDCA();
  const totalPortfolioValue = portfolioData.reduce((sum, item) => sum + item.value, 0);

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
              Crypto Tools & Resources
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Professional calculators, portfolio trackers, and comprehensive guides to help you make informed crypto decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trading Calculators</h2>
            <p className="text-gray-600">Powerful tools to analyze your trades and investment strategies</p>
          </motion.div>

          {/* Calculator Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCalculator === calc.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <calc.icon className="w-5 h-5" />
                {calc.name}
              </button>
            ))}
          </div>

          {/* Calculator Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {activeCalculator === 'pnl' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Profit & Loss Calculator</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Buy Price ($)</label>
                      <input
                        type="number"
                        value={pnlData.buyPrice}
                        onChange={(e) => setPnlData({...pnlData, buyPrice: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter buying price"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sell Price ($)</label>
                      <input
                        type="number"
                        value={pnlData.sellPrice}
                        onChange={(e) => setPnlData({...pnlData, sellPrice: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter selling price"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                      <input
                        type="number"
                        value={pnlData.quantity}
                        onChange={(e) => setPnlData({...pnlData, quantity: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter quantity"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Trading Fees (%)</label>
                      <input
                        type="number"
                        value={pnlData.fees}
                        onChange={(e) => setPnlData({...pnlData, fees: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="0.1"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Results</h4>
                  {pnlResult ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Total Buy Cost:</span>
                        <span className="font-semibold">${pnlResult.buyTotal}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Total Sell Value:</span>
                        <span className="font-semibold">${pnlResult.sellTotal}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Trading Fees:</span>
                        <span className="font-semibold">${pnlResult.fees}</span>
                      </div>
                      <div className={`flex justify-between items-center p-4 rounded-xl ${
                        parseFloat(pnlResult.profit) >= 0 ? 'bg-green-50' : 'bg-red-50'
                      }`}>
                        <span className="text-gray-600">Net Profit/Loss:</span>
                        <span className={`font-bold text-lg ${
                          parseFloat(pnlResult.profit) >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          ${pnlResult.profit} ({pnlResult.profitPercentage}%)
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Enter values to see results</p>
                  )}
                </div>
              </div>
            )}

            {activeCalculator === 'dca' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">DCA Calculator</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Investment ($)</label>
                      <input
                        type="number"
                        value={dcaData.monthlyAmount}
                        onChange={(e) => setDcaData({...dcaData, monthlyAmount: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter monthly amount"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Months</label>
                      <input
                        type="number"
                        value={dcaData.months}
                        onChange={(e) => setDcaData({...dcaData, months: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter number of months"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Starting Price ($)</label>
                      <input
                        type="number"
                        value={dcaData.startPrice}
                        onChange={(e) => setDcaData({...dcaData, startPrice: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter starting price"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Price ($)</label>
                      <input
                        type="number"
                        value={dcaData.endPrice}
                        onChange={(e) => setDcaData({...dcaData, endPrice: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter current price"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">DCA Results</h4>
                  {dcaResult ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Total Invested:</span>
                        <span className="font-semibold">${dcaResult.totalInvested}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Total Coins:</span>
                        <span className="font-semibold">{dcaResult.totalCoins}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600">Current Value:</span>
                        <span className="font-semibold">${dcaResult.currentValue}</span>
                      </div>
                      <div className={`flex justify-between items-center p-4 rounded-xl ${
                        parseFloat(dcaResult.profit) >= 0 ? 'bg-green-50' : 'bg-red-50'
                      }`}>
                        <span className="text-gray-600">Total Return:</span>
                        <span className={`font-bold text-lg ${
                          parseFloat(dcaResult.profit) >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          ${dcaResult.profit} ({dcaResult.profitPercentage}%)
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Enter values to see DCA analysis</p>
                  )}
                </div>
              </div>
            )}

            {activeCalculator === 'portfolio' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Tracker</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Coin</th>
                        <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Amount</th>
                        <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Price</th>
                        <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Value</th>
                        <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Allocation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {portfolioData.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-semibold text-gray-900">{item.coin}</div>
                              <div className="text-sm text-gray-500">{item.symbol}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right font-medium">{item.amount}</td>
                          <td className="px-6 py-4 text-right">${item.price.toLocaleString()}</td>
                          <td className="px-6 py-4 text-right font-semibold">${item.value.toLocaleString()}</td>
                          <td className="px-6 py-4 text-right">
                            <span className="inline-block w-12 h-2 bg-primary-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary-600"
                                style={{ width: `${(item.value / totalPortfolioValue) * 100}%` }}
                              ></div>
                            </span>
                            <span className="ml-2 text-sm text-gray-600">
                              {((item.value / totalPortfolioValue) * 100).toFixed(1)}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total Portfolio Value:</span>
                    <span className="text-2xl font-bold text-primary-600">${totalPortfolioValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Wallet Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wallet Comparison</h2>
            <p className="text-gray-600">Compare the best crypto wallets for your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {wallets.map((wallet, index) => (
              <motion.div
                key={wallet.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <img 
                  src={wallet.image} 
                  alt={wallet.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{wallet.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{wallet.rating}</span>
                  </div>
                </div>
                <p className="text-primary-600 font-medium mb-4">{wallet.type}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {wallet.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-lg">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-green-600 mb-1">Pros:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {wallet.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-600 mb-1">Cons:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {wallet.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exchange Reviews</h2>
            <p className="text-gray-600">Compare top cryptocurrency exchanges</p>
          </motion.div>

          <div className="space-y-6">
            {exchanges.map((exchange, index) => (
              <motion.div
                key={exchange.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={exchange.image} 
                        alt={exchange.name}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exchange.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-medium">{exchange.rating}</span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-primary-600 font-medium">Fees: {exchange.fees}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-600 mb-2">Pros:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {exchange.pros.map((pro, i) => (
                            <li key={i}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-600 mb-2">Cons:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {exchange.cons.map((con, i) => (
                            <li key={i}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h5 className="font-semibold text-gray-900 mb-3">Features:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {exchange.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;