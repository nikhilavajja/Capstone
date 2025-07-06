import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const SkinAssessment = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'skinFeel',
      title: 'How does your skin typically feel?',
      subtitle: 'Think about how your skin feels in the morning or after cleansing',
      options: [
        { value: 'tight', label: 'Tight and dry', weight: { dry: 3, normal: 0, oily: 0, combination: 1, sensitive: 1 } },
        { value: 'comfortable', label: 'Comfortable and balanced', weight: { dry: 0, normal: 3, oily: 0, combination: 1, sensitive: 0 } },
        { value: 'oily', label: 'Oily and greasy', weight: { dry: 0, normal: 0, oily: 3, combination: 2, sensitive: 0 } },
        { value: 'varies', label: 'Varies by area (T-zone oily, cheeks dry)', weight: { dry: 1, normal: 0, oily: 1, combination: 3, sensitive: 0 } }
      ]
    },
    {
      id: 'poreSize',
      title: 'How would you describe your pores?',
      subtitle: 'Look closely at your T-zone and cheek areas',
      options: [
        { value: 'barely-visible', label: 'Barely visible', weight: { dry: 3, normal: 2, oily: 0, combination: 1, sensitive: 1 } },
        { value: 'small', label: 'Small and fine', weight: { dry: 1, normal: 3, oily: 0, combination: 1, sensitive: 1 } },
        { value: 'medium', label: 'Medium-sized, visible', weight: { dry: 0, normal: 1, oily: 2, combination: 2, sensitive: 0 } },
        { value: 'large', label: 'Large and prominent', weight: { dry: 0, normal: 0, oily: 3, combination: 2, sensitive: 0 } }
      ]
    },
    {
      id: 'oilProduction',
      title: 'How oily does your skin get during the day?',
      subtitle: 'Consider your skin 4-6 hours after cleansing',
      options: [
        { value: 'never', label: 'Never gets oily', weight: { dry: 3, normal: 1, oily: 0, combination: 0, sensitive: 1 } },
        { value: 'slightly', label: 'Slightly oily in T-zone only', weight: { dry: 0, normal: 2, oily: 1, combination: 3, sensitive: 0 } },
        { value: 'moderately', label: 'Moderately oily overall', weight: { dry: 0, normal: 0, oily: 3, combination: 1, sensitive: 0 } },
        { value: 'very', label: 'Very oily, needs blotting', weight: { dry: 0, normal: 0, oily: 3, combination: 0, sensitive: 0 } }
      ]
    },
    {
      id: 'breakouts',
      title: 'How often do you experience breakouts?',
      subtitle: 'Include blackheads, whiteheads, and acne',
      options: [
        { value: 'rarely', label: 'Rarely or never', weight: { dry: 2, normal: 3, oily: 0, combination: 1, sensitive: 1 } },
        { value: 'occasionally', label: 'Occasionally (monthly)', weight: { dry: 1, normal: 2, oily: 1, combination: 2, sensitive: 1 } },
        { value: 'regularly', label: 'Regularly (weekly)', weight: { dry: 0, normal: 0, oily: 3, combination: 2, sensitive: 1 } },
        { value: 'constantly', label: 'Almost constantly', weight: { dry: 0, normal: 0, oily: 3, combination: 1, sensitive: 2 } }
      ]
    },
    {
      id: 'sensitivity',
      title: 'How does your skin react to new products?',
      subtitle: 'Think about reactions like redness, burning, or irritation',
      options: [
        { value: 'no-reaction', label: 'No reaction, tolerates most products', weight: { dry: 1, normal: 3, oily: 2, combination: 2, sensitive: 0 } },
        { value: 'mild-reaction', label: 'Mild reaction to harsh products', weight: { dry: 2, normal: 2, oily: 1, combination: 2, sensitive: 2 } },
        { value: 'frequent-reaction', label: 'Frequent reactions to many products', weight: { dry: 2, normal: 0, oily: 0, combination: 1, sensitive: 3 } },
        { value: 'severe-reaction', label: 'Severe reactions to most products', weight: { dry: 1, normal: 0, oily: 0, combination: 0, sensitive: 3 } }
      ]
    },
    {
      id: 'skinTexture',
      title: 'How would you describe your skin texture?',
      subtitle: 'Touch your cheeks and forehead to assess',
      options: [
        { value: 'smooth', label: 'Smooth and soft', weight: { dry: 0, normal: 3, oily: 1, combination: 1, sensitive: 1 } },
        { value: 'rough', label: 'Rough or bumpy', weight: { dry: 3, normal: 0, oily: 1, combination: 1, sensitive: 2 } },
        { value: 'flaky', label: 'Flaky or peeling', weight: { dry: 3, normal: 0, oily: 0, combination: 1, sensitive: 2 } },
        { value: 'uneven', label: 'Uneven (smooth in some areas, rough in others)', weight: { dry: 1, normal: 0, oily: 1, combination: 3, sensitive: 1 } }
      ]
    },
    {
      id: 'weatherReaction',
      title: 'How does weather affect your skin?',
      subtitle: 'Consider seasonal changes and climate effects',
      options: [
        { value: 'no-change', label: 'Weather doesn\'t affect my skin much', weight: { dry: 0, normal: 3, oily: 1, combination: 1, sensitive: 0 } },
        { value: 'dry-winter', label: 'Gets drier in winter/low humidity', weight: { dry: 3, normal: 1, oily: 0, combination: 2, sensitive: 1 } },
        { value: 'oily-summer', label: 'Gets oilier in summer/high humidity', weight: { dry: 0, normal: 1, oily: 3, combination: 2, sensitive: 0 } },
        { value: 'irritated-weather', label: 'Gets irritated with weather changes', weight: { dry: 1, normal: 0, oily: 0, combination: 1, sensitive: 3 } }
      ]
    },
    {
      id: 'ageRange',
      title: 'What\'s your age range?',
      subtitle: 'This helps us tailor recommendations for your skin\'s needs',
      options: [
        { value: 'teens', label: 'Under 20', weight: { dry: 0, normal: 1, oily: 3, combination: 2, sensitive: 1 } },
        { value: 'twenties', label: '20-29', weight: { dry: 1, normal: 2, oily: 2, combination: 2, sensitive: 1 } },
        { value: 'thirties', label: '30-39', weight: { dry: 2, normal: 2, oily: 1, combination: 2, sensitive: 1 } },
        { value: 'forties-plus', label: '40+', weight: { dry: 3, normal: 2, oily: 0, combination: 1, sensitive: 2 } }
      ]
    }
  ];

  const handleAnswerSelect = (questionId, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = () => {
    const scores = { dry: 0, normal: 0, oily: 0, combination: 0, sensitive: 0 };
    
    Object.values(answers).forEach(answer => {
      Object.entries(answer.weight).forEach(([type, weight]) => {
        scores[type] += weight;
      });
    });

    const maxScore = Math.max(...Object.values(scores));
    const skinType = Object.keys(scores).find(key => scores[key] === maxScore);
    const confidence = Math.round((maxScore / (questions.length * 3)) * 100);

    const result = {
      type: skinType,
      confidence,
      characteristics: getCharacteristics(skinType),
      recommendations: getRecommendations(skinType)
    };

    onComplete(result);
  };

  const getCharacteristics = (skinType) => {
    const characteristics = {
      dry: [
        'Feels tight, especially after cleansing',
        'May have flaky or rough patches',
        'Fine lines may be more visible',
        'Pores are barely visible',
        'Rarely breaks out'
      ],
      oily: [
        'Produces excess sebum throughout the day',
        'Large, visible pores',
        'Prone to blackheads and breakouts',
        'Shiny appearance, especially in T-zone',
        'Makeup may not last as long'
      ],
      combination: [
        'Oily T-zone (forehead, nose, chin)',
        'Normal to dry cheeks',
        'Mixed pore sizes across face',
        'Breakouts mainly in T-zone',
        'May need different products for different areas'
      ],
      sensitive: [
        'Reacts easily to new products',
        'May experience redness or irritation',
        'Stinging or burning with certain ingredients',
        'May be reactive to weather changes',
        'Often has underlying dryness'
      ],
      normal: [
        'Well-balanced oil and moisture levels',
        'Small, barely visible pores',
        'Rarely experiences breakouts',
        'Smooth, even texture',
        'Tolerates most skincare products well'
      ]
    };

    return characteristics[skinType] || [];
  };

  const getRecommendations = (skinType) => {
    const recommendations = {
      dry: {
        morning: [
          'Gentle cream cleanser',
          'Hydrating toner or essence',
          'Rich moisturizer with ceramides',
          'Broad-spectrum SPF 30+ sunscreen'
        ],
        evening: [
          'Oil or cream cleanser',
          'Hydrating toner',
          'Face oil or overnight mask',
          'Rich night moisturizer'
        ],
        products: [
          'Cream or oil-based cleansers',
          'Alcohol-free toners',
          'Rich moisturizers with ceramides',
          'Face oils (argan, jojoba, rosehip)',
          'Gentle exfoliants (1-2x per week)'
        ],
        ingredients: [
          'Hyaluronic acid',
          'Ceramides',
          'Glycerin',
          'Niacinamide',
          'Squalane'
        ],
        avoid: [
          'Alcohol-based products',
          'Harsh scrubs',
          'Clay masks',
          'Strong acids without proper hydration',
          'Fragrance (if sensitive)'
        ]
      },
      oily: {
        morning: [
          'Gel or foam cleanser with salicylic acid',
          'Astringent or BHA toner',
          'Lightweight, oil-free moisturizer',
          'Broad-spectrum SPF 30+ (gel-based)'
        ],
        evening: [
          'Double cleanse (oil then gel)',
          'BHA or AHA treatment',
          'Niacinamide serum',
          'Lightweight night moisturizer'
        ],
        products: [
          'Gel or foam cleansers',
          'Clay masks (1-2x per week)',
          'Oil-free moisturizers',
          'Mattifying primers',
          'Chemical exfoliants (BHA/AHA)'
        ],
        ingredients: [
          'Salicylic acid (BHA)',
          'Niacinamide',
          'Retinoids',
          'Zinc',
          'Tea tree oil'
        ],
        avoid: [
          'Heavy, occlusive moisturizers',
          'Oil-based products',
          'Over-cleansing',
          'Harsh scrubs',
          'Comedogenic ingredients'
        ]
      },
      combination: {
        morning: [
          'Gentle gel cleanser',
          'Toner (hydrating for cheeks, mattifying for T-zone)',
          'Different moisturizers for different areas',
          'Broad-spectrum SPF 30+ sunscreen'
        ],
        evening: [
          'Gentle cleanser',
          'Targeted treatments (BHA for T-zone)',
          'Hydrating serum for dry areas',
          'Appropriate moisturizers for each zone'
        ],
        products: [
          'Gentle, balanced cleansers',
          'Multi-masking products',
          'Lightweight moisturizers',
          'Targeted spot treatments',
          'Different products for different face zones'
        ],
        ingredients: [
          'Niacinamide (balancing)',
          'Hyaluronic acid (hydrating)',
          'Salicylic acid (for oily areas)',
          'Ceramides (for dry areas)',
          'Retinoids (evening)'
        ],
        avoid: [
          'One-size-fits-all approach',
          'Very heavy or very light products all over',
          'Harsh astringents on dry areas',
          'Skipping moisturizer on oily areas',
          'Over-treating'
        ]
      },
      sensitive: {
        morning: [
          'Gentle, fragrance-free cleanser',
          'Alcohol-free, soothing toner',
          'Gentle, hypoallergenic moisturizer',
          'Mineral sunscreen (zinc oxide/titanium dioxide)'
        ],
        evening: [
          'Gentle cleanser',
          'Soothing essence or serum',
          'Rich, barrier-repairing moisturizer',
          'Gentle face oil (if tolerated)'
        ],
        products: [
          'Fragrance-free, hypoallergenic products',
          'Gentle, cream cleansers',
          'Soothing masks with oatmeal or honey',
          'Barrier-repairing moisturizers',
          'Minimal ingredient products'
        ],
        ingredients: [
          'Ceramides',
          'Niacinamide (low concentration)',
          'Hyaluronic acid',
          'Oatmeal',
          'Aloe vera'
        ],
        avoid: [
          'Fragrances and essential oils',
          'Alcohol-based products',
          'Strong acids (AHA/BHA)',
          'Physical scrubs',
          'Products with many ingredients'
        ]
      },
      normal: {
        morning: [
          'Gentle cleanser',
          'Vitamin C serum',
          'Lightweight moisturizer',
          'Broad-spectrum SPF 30+ sunscreen'
        ],
        evening: [
          'Gentle cleanser',
          'Retinol or retinoid (2-3x per week)',
          'Hydrating serum',
          'Night moisturizer'
        ],
        products: [
          'Gentle cleansers',
          'Antioxidant serums',
          'Balanced moisturizers',
          'Weekly exfoliating treatments',
          'Preventative anti-aging products'
        ],
        ingredients: [
          'Vitamin C',
          'Retinol',
          'Hyaluronic acid',
          'Niacinamide',
          'Peptides'
        ],
        avoid: [
          'Over-treating your skin',
          'Harsh, stripping products',
          'Skipping moisturizer',
          'Inconsistent routine',
          'Too many active ingredients at once'
        ]
      }
    };

    return recommendations[skinType] || recommendations.normal;
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-rose-500" />
            <h1 className="text-3xl font-bold text-gray-900">Skin Type Assessment</h1>
          </div>
          <p className="text-gray-600">
            Question {currentStep + 1} of {questions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {currentQuestion.title}
          </h2>
          <p className="text-gray-600 mb-8">
            {currentQuestion.subtitle}
          </p>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <label
                key={index}
                className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  answers[currentQuestion.id]?.value === option.value
                    ? 'border-rose-500 bg-rose-50'
                    : 'border-gray-200 hover:border-rose-300'
                }`}
              >
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={answers[currentQuestion.id]?.value === option.value}
                  onChange={() => handleAnswerSelect(currentQuestion.id, option)}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQuestion.id]?.value === option.value
                      ? 'border-rose-500 bg-rose-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion.id]?.value === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-lg text-gray-900">{option.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={currentStep === 0 ? onBack : handlePrevious}
            className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>{currentStep === 0 ? 'Back to Home' : 'Previous'}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
              answers[currentQuestion.id]
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>{currentStep === questions.length - 1 ? 'Get Results' : 'Next'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinAssessment;