'use client';

export default function PricingPlans() {
  const teamPlanFeatures = [
    'Access to 13,000+ top courses',
    'Certification prep',
    'Goal-focused recommendations',
    'AI-powered coaching',
    'Analytics and adoption reports'
  ];

  const enterprisePlanFeatures = [
    'Access to 30,000+ top courses',
    'Certification prep',
    'Goal-focused recommendations',
    'AI-powered coaching',
    'Advanced analytics and insights',
    'Dedicated customer success team',
    'International course collection featuring 15 languages',
    'Customizable content',
    'Hands-on tech training with add-on',
    'Strategic implementation services with add-on'
  ];

  const aiFluencyPlans = [
    {
      name: 'AI Readiness Collection',
      description: 'Build org-wide AI fluency fast with 50 curated courses + AI Assistant to accelerate learning.',
      target: 'More than 100 people'
    },
    {
      name: 'AI Growth Collection',
      description: 'Scale AI and technical expertise with 800+ specialized courses and 30+ role-specific learning paths in multiple languages.',
      target: 'More than 20 people'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Grow your team's skills and your business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Team Plan */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 relative">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Team Plan</h3>
              <p className="text-sm text-gray-600 mb-4">2 to 50 people - For your team</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">Free</span>
              </div>
              <p className="text-sm text-gray-500">Billed annually. Cancel anytime.</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {teamPlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-purple-500 p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Plan</h3>
              <p className="text-sm text-gray-600 mb-4">More than 20 people - For your whole organization</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">Contact sales</span>
                <span className="text-gray-600 ml-2">for pricing</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {enterprisePlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Contact Sales
            </button>
          </div>

          {/* AI Fluency */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Fluency</h3>
              <p className="text-sm text-gray-600 mb-4">From AI foundations to Enterprise transformation</p>
            </div>
            
            <div className="space-y-6 mb-8">
              {aiFluencyPlans.map((plan, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{plan.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                  <p className="text-xs text-purple-600 font-medium">{plan.target}</p>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you? 
          </p>
          <button className="text-purple-600 hover:text-purple-700 font-medium">
            Compare all plans →
          </button>
        </div>
      </div>
    </div>
  );
}