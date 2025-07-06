import React, { useState } from 'react';
import { Calendar, ChevronLeft, Plus, Check, X, Sparkles, TrendingUp, Award } from 'lucide-react';

const RoutineTracker = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [routines, setRoutines] = useState({
    morning: [
      { id: 1, name: 'Gentle Cleanser', completed: true },
      { id: 2, name: 'Vitamin C Serum', completed: true },
      { id: 3, name: 'Moisturizer', completed: false },
      { id: 4, name: 'SPF 30+', completed: false }
    ],
    evening: [
      { id: 5, name: 'Oil Cleanser', completed: false },
      { id: 6, name: 'Gel Cleanser', completed: false },
      { id: 7, name: 'Retinol Serum', completed: false },
      { id: 8, name: 'Night Moisturizer', completed: false }
    ]
  });

  const [newProduct, setNewProduct] = useState('');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState('morning');

  const toggleProduct = (routineType, productId) => {
    setRoutines(prev => ({
      ...prev,
      [routineType]: prev[routineType].map(product =>
        product.id === productId
          ? { ...product, completed: !product.completed }
          : product
      )
    }));
  };

  const addProduct = () => {
    if (newProduct.trim()) {
      const newId = Date.now();
      setRoutines(prev => ({
        ...prev,
        [selectedRoutine]: [...prev[selectedRoutine], {
          id: newId,
          name: newProduct.trim(),
          completed: false
        }]
      }));
      setNewProduct('');
      setShowAddProduct(false);
    }
  };

  const removeProduct = (routineType, productId) => {
    setRoutines(prev => ({
      ...prev,
      [routineType]: prev[routineType].filter(product => product.id !== productId)
    }));
  };

  const getCompletionStats = () => {
    const totalProducts = routines.morning.length + routines.evening.length;
    const completedProducts = routines.morning.filter(p => p.completed).length + 
                            routines.evening.filter(p => p.completed).length;
    const completionRate = totalProducts > 0 ? Math.round((completedProducts / totalProducts) * 100) : 0;
    
    return { totalProducts, completedProducts, completionRate };
  };

  const getMorningCompletion = () => {
    const completed = routines.morning.filter(p => p.completed).length;
    const total = routines.morning.length;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const getEveningCompletion = () => {
    const completed = routines.evening.filter(p => p.completed).length;
    const total = routines.evening.length;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const stats = getCompletionStats();
  const morningCompletion = getMorningCompletion();
  const eveningCompletion = getEveningCompletion();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-rose-500" />
              <h1 className="text-3xl font-bold text-gray-900">Routine Tracker</h1>
            </div>
            <p className="text-gray-600">
              Track your daily skincare routine and build healthy habits
            </p>
          </div>
          <button
            onClick={onBack}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Date Selector */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{stats.completionRate}%</h3>
                <p className="text-sm text-gray-600">Daily Completion</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{morningCompletion}%</h3>
                <p className="text-sm text-gray-600">Morning Routine</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{eveningCompletion}%</h3>
                <p className="text-sm text-gray-600">Evening Routine</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">7</h3>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
            </div>
          </div>
        </div>

        {/* Routines */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Morning Routine */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Morning Routine</h2>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{morningCompletion}%</div>
                  <div className="text-sm opacity-90">Complete</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {routines.morning.map(product => (
                  <div
                    key={product.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${
                      product.completed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleProduct('morning', product.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          product.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300 hover:border-orange-500'
                        }`}
                      >
                        {product.completed && <Check className="w-4 h-4 text-white" />}
                      </button>
                      <span className={`font-medium ${
                        product.completed ? 'text-green-700 line-through' : 'text-gray-900'
                      }`}>
                        {product.name}
                      </span>
                    </div>
                    <button
                      onClick={() => removeProduct('morning', product.id)}
                      className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedRoutine('morning');
                  setShowAddProduct(true);
                }}
                className="w-full mt-4 p-4 border-2 border-dashed border-orange-300 rounded-xl text-orange-600 hover:bg-orange-50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* Evening Routine */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-400 to-purple-400 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Evening Routine</h2>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{eveningCompletion}%</div>
                  <div className="text-sm opacity-90">Complete</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {routines.evening.map(product => (
                  <div
                    key={product.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${
                      product.completed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleProduct('evening', product.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          product.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300 hover:border-indigo-500'
                        }`}
                      >
                        {product.completed && <Check className="w-4 h-4 text-white" />}
                      </button>
                      <span className={`font-medium ${
                        product.completed ? 'text-green-700 line-through' : 'text-gray-900'
                      }`}>
                        {product.name}
                      </span>
                    </div>
                    <button
                      onClick={() => removeProduct('evening', product.id)}
                      className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedRoutine('evening');
                  setShowAddProduct(true);
                }}
                className="w-full mt-4 p-4 border-2 border-dashed border-indigo-300 rounded-xl text-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Product</span>
              </button>
            </div>
          </div>
        </div>

        {/* Add Product Modal */}
        {showAddProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Add Product to {selectedRoutine === 'morning' ? 'Morning' : 'Evening'} Routine
              </h3>
              <input
                type="text"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                placeholder="Enter product name..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent mb-4"
                autoFocus
                onKeyPress={(e) => e.key === 'Enter' && addProduct()}
              />
              <div className="flex space-x-3">
                <button
                  onClick={addProduct}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-200"
                >
                  Add Product
                </button>
                <button
                  onClick={() => {
                    setShowAddProduct(false);
                    setNewProduct('');
                  }}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutineTracker;