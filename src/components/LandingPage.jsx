import React from 'react';
import { Sparkles, Sun, Droplet, Shield, Heart, ArrowRight, CheckCircle, Users, Award, Clock, Star } from 'lucide-react';

const LandingPage = ({ onStartAssessment }) => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-rose-500" />,
      title: 'Personalized Analysis',
      description: 'Get a comprehensive skin type assessment tailored to your unique characteristics'
    },
    {
      icon: <Sun className="w-6 h-6 text-orange-500" />,
      title: 'Expert Recommendations',
      description: 'Receive professional skincare advice based on dermatological research'
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: 'Routine Tracking',
      description: 'Monitor your skincare progress and maintain consistency with our tracker'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Ingredient Safety',
      description: 'Learn about safe ingredients and what to avoid for your specific skin type'
    }
  ];

  const skinTypes = [
    {
      type: 'Normal Skin',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      description: 'Balanced, not too oily or dry'
    },
    {
      type: 'Dry Skin',
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      description: 'Tight, flaky, or rough texture'
    },
    {
      type: 'Oily Skin',
      icon: <Droplet className="w-8 h-8 text-blue-500" />,
      description: 'Shiny, enlarged pores, acne-prone'
    },
    {
      type: 'Combination',
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      description: 'Oily T-zone, dry cheeks'
    },
    {
      type: 'Sensitive',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      description: 'Reactive, irritation-prone'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Finally found a routine that works! My combination skin has never looked better.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Maria Garcia",
      rating: 5,
      text: "The personalized recommendations transformed my sensitive skin routine completely.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Chen",
      rating: 5,
      text: "Love how detailed the analysis is. It's like having a dermatologist in my pocket!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                  Perfect Skin
                </span>
                Care Routine
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Take our comprehensive skin analysis to get personalized recommendations from skincare experts. 
                Transform your skin with science-backed advice tailored just for you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onStartAssessment}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Start Free Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>50k+ users</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5 min assessment</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-full">
                <img
                  src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Beautiful skincare routine"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkinWise?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced skin analysis combines dermatological science with personalized care to give you the best results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Types Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Know Your Skin Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your skin type is the first step to achieving healthy, glowing skin.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skinTypes.map((skin, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="mb-4 flex justify-center">
                  {skin.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {skin.type}
                </h3>
                <p className="text-sm text-gray-600">
                  {skin.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who've transformed their skincare routine
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Verified User</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl text-rose-100 mb-8 leading-relaxed">
            Take our free 5-minute assessment and get personalized skincare recommendations today.
          </p>
          <button
            onClick={onStartAssessment}
            className="px-10 py-5 bg-white text-rose-600 rounded-xl font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;