import React, { useState } from 'react';
import { BookOpen, ChevronLeft, Search, Star, Clock, User } from 'lucide-react';

const EducationHub = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Topics', count: 12 },
    { id: 'basics', name: 'Skin Basics', count: 4 },
    { id: 'ingredients', name: 'Ingredients', count: 3 },
    { id: 'routines', name: 'Routines', count: 3 },
    { id: 'problems', name: 'Skin Problems', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Understanding Your Skin Barrier',
      category: 'basics',
      excerpt: 'Learn about the importance of your skin barrier and how to keep it healthy.',
      readTime: 5,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'The Science Behind Hyaluronic Acid',
      category: 'ingredients',
      excerpt: 'Discover how this powerful humectant can transform your skin hydration.',
      readTime: 7,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Building Your First Skincare Routine',
      category: 'routines',
      excerpt: 'A beginner-friendly guide to creating an effective daily skincare routine.',
      readTime: 8,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Retinoids: Benefits and How to Use Them',
      category: 'ingredients',
      excerpt: 'Everything you need to know about incorporating retinoids into your routine.',
      readTime: 10,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Dealing with Acne: A Comprehensive Guide',
      category: 'problems',
      excerpt: 'Learn about different types of acne and effective treatment strategies.',
      readTime: 12,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Sun Protection: More Than Just SPF',
      category: 'basics',
      excerpt: 'Understanding UV rays, sunscreen types, and proper application techniques.',
      readTime: 6,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4465850/pexels-photo-4465850.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Vitamin C: The Ultimate Antioxidant',
      category: 'ingredients',
      excerpt: 'How vitamin C can brighten your skin and protect against environmental damage.',
      readTime: 9,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4465792/pexels-photo-4465792.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      title: 'Night vs Day Routines: Key Differences',
      category: 'routines',
      excerpt: 'Why your morning and evening routines should be different and how to optimize both.',
      readTime: 7,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 9,
      title: 'Sensitive Skin: Identification and Care',
      category: 'problems',
      excerpt: 'How to identify sensitive skin triggers and build a gentle skincare routine.',
      readTime: 11,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4465889/pexels-photo-4465889.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 10,
      title: 'The Role of pH in Skincare',
      category: 'basics',
      excerpt: 'Understanding how pH affects your skin and product effectiveness.',
      readTime: 8,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3993452/pexels-photo-3993452.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 11,
      title: 'Seasonal Skincare Adjustments',
      category: 'routines',
      excerpt: 'How to adapt your skincare routine for different seasons and climates.',
      readTime: 9,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4465832/pexels-photo-4465832.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 12,
      title: 'Skin Aging: Prevention and Treatment',
      category: 'basics',
      excerpt: 'Understanding the aging process and evidence-based anti-aging strategies.',
      readTime: 13,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4465766/pexels-photo-4465766.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="w-8 h-8 text-rose-500" />
              <h1 className="text-3xl font-bold text-gray-900">Education Hub</h1>
            </div>
            <p className="text-gray-600">
              Expert-backed skincare knowledge to help you make informed decisions
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

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full capitalize">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{article.rating}</span>
                    </div>
                  </div>
                  <button className="text-rose-500 hover:text-rose-600 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationHub;