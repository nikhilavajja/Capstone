import React from 'react';
import { Sparkles, RefreshCw, CheckCircle, Sun, Droplet, Shield, Heart, Zap, AlertTriangle } from 'lucide-react';

const ResultsPage = ({ result, onRetakeQuiz }) => {
  if (!result) return null;

  const getSkinTypeIcon = (type) => {
    const icons = {
      dry: <Sun className="w-8 h-8 text-yellow-500" />,
      oily: <Droplet className="w-8 h-8 text-blue-500" />,
      combination: <Shield className="w-8 h-8 text-purple-500" />,
      sensitive: <Heart className="w-8 h-8 text-red-500" />,
      normal: <CheckCircle className="w-8 h-8 text-green-500" />
    };
    return icons[type] || icons.normal;
  };

  const getSkinTypeDescription = (type) => {
    const descriptions = {
      dry: 'Your skin tends to be tight, may feel rough, and often appears dull. You need extra hydration and gentle care.',
      oily: 'Your skin produces excess sebum, leading to shine and possible breakouts. Focus on oil control and gentle cleansing.',
      combination: 'You have an oily T-zone with normal to dry cheeks. You need a balanced approach with targeted treatments.',
      sensitive: 'Your skin reacts easily to products and environmental factors. Gentle, fragrance-free products are key.',
      normal: 'Lucky you! Your skin is well-balanced. Focus on maintenance and protection from environmental damage.'
    };
    return descriptions[type] || descriptions.normal;
  };

  const getSkinTypeColor = (type) => {
    const colors = {
      dry: 'from-yellow-400 to-orange-400',
      oily: 'from-blue-400 to-cyan-400',
      combination: 'from-purple-400 to-pink-400',
      sensitive: 'from-red-400 to-pink-400',
      normal: 'from-green-400 to-teal-400'
    };
    return colors[type] || colors.normal;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-rose-500" />
            <h1 className="text-3xl font-bold text-gray-900">Your Skin Analysis Results</h1>
          </div>
          <p className="text-gray-600">
            Based on your responses, here's your personalized skincare guide
          </p>
        </div>

        {/* Results Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className={`bg-gradient-to-r ${getSkinTypeColor(result.type)} p-8 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  {getSkinTypeIcon(result.type)}
                  <h2 className="text-3xl font-bold capitalize">
                    {result.type} Skin
                  </h2>
                </div>
                <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
                  {getSkinTypeDescription(result.type)}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold mb-2">{result.confidence}%</div>
                <div className="text-sm opacity-90">Confidence</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Skin Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {result.characteristics.map((characteristic, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{characteristic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Morning Routine */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Morning Routine</h3>
            </div>
            <div className="space-y-3">
              {result.recommendations.morning.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Routine */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Evening Routine</h3>
            </div>
            <div className="space-y-3">
              {result.recommendations.evening.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Recommendations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Recommended Products */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Recommended Products</h3>
            </div>
            <div className="space-y-3">
              {result.recommendations.products.map((product, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{product}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Ingredients */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Key Ingredients</h3>
            </div>
            <div className="space-y-3">
              {result.recommendations.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Zap className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients to Avoid */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Avoid These</h3>
            </div>
            <div className="space-y-3">
              {result.recommendations.avoid.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <button
            onClick={onRetakeQuiz}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;