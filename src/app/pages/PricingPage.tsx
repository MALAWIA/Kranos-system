import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 'KES 25,000',
      period: '/month',
      description: 'Perfect for small businesses just starting their automation journey',
      features: [
        'Basic CRM setup',
        'WhatsApp Business integration',
        'Lead capture forms',
        'Email automation (up to 500/month)',
        'Basic reporting dashboard',
        'Email support',
        '1 user included',
      ],
      cta: 'Start with Starter',
      popular: false
    },
    {
      name: 'Growth',
      price: 'KES 75,000',
      period: '/month',
      description: 'For growing businesses ready to scale operations',
      features: [
        'Everything in Starter, plus:',
        'AI Chatbot on website & WhatsApp',
        'Advanced CRM with pipeline management',
        'Inventory tracking (up to 1,000 SKUs)',
        'Custom workflow automation',
        'Email automation (up to 2,000/month)',
        'Advanced analytics',
        'Priority support',
        '5 users included',
      ],
      cta: 'Choose Growth',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for established businesses with complex needs',
      features: [
        'Everything in Growth, plus:',
        'Unlimited users',
        'Unlimited inventory SKUs',
        'Custom integrations',
        'Dedicated account manager',
        'White-label options',
        'API access',
        'Custom training',
        '24/7 phone support',
        'SLA guarantees',
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOns = [
    { name: 'Additional Users', price: 'KES 5,000/user/month' },
    { name: 'Extra WhatsApp Number', price: 'KES 10,000/month' },
    { name: 'Advanced AI Training', price: 'KES 30,000 one-time' },
    { name: 'Custom Integration', price: 'Starting at KES 50,000' },
    { name: 'Staff Training Session', price: 'KES 15,000/session' },
    { name: 'Data Migration', price: 'Starting at KES 40,000' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="mb-6 text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
            <p className="text-xl opacity-90">
              Choose the plan that fits your business. All plans include setup, training, and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border-2 p-8 ${
                  plan.popular
                    ? 'border-blue-600 shadow-xl'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 text-2xl">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full rounded-md px-6 py-4 text-center transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All prices in Kenyan Shillings (KES). No hidden fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">Add-Ons & Custom Work</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-700">
              Extend your automation with additional services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-xl">{addon.name}</h3>
                <p className="text-blue-600">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">Feature Comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center">Growth</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CRM System', 'Basic', 'Advanced', 'Enterprise'],
                  ['WhatsApp Integration', '✓', '✓', '✓'],
                  ['AI Chatbot', '—', '✓', '✓'],
                  ['Inventory Management', '—', 'Up to 1,000', 'Unlimited'],
                  ['Users Included', '1', '5', 'Unlimited'],
                  ['Email Automation', '500/mo', '2,000/mo', 'Unlimited'],
                  ['Custom Integrations', '—', '1 included', 'Unlimited'],
                  ['Support', 'Email', 'Priority', '24/7 Dedicated'],
                  ['Training', 'Self-service', '2 sessions', 'Unlimited'],
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4 text-center text-gray-600">{row[1]}</td>
                    <td className="p-4 text-center text-gray-600">{row[2]}</td>
                    <td className="p-4 text-center text-gray-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is included in setup?',
                a: 'All plans include complete system setup, data migration assistance, initial configuration, and staff training to get you started.'
              },
              {
                q: 'Can I change plans later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                q: 'Do you offer a free trial?',
                a: 'We offer a free automation audit where we assess your needs and demonstrate our solutions. For serious prospects, we can arrange a 14-day trial of the Growth plan.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept M-Pesa, bank transfer, and credit cards. Monthly subscriptions can be paid via M-Pesa paybill.'
              },
              {
                q: 'Is there a setup fee?',
                a: 'Setup is included in your first month\'s payment for Starter and Growth plans. Enterprise plans have custom setup based on complexity.'
              },
              {
                q: 'What if I need custom features?',
                a: 'We specialize in custom work! Contact our sales team to discuss your specific requirements and get a custom quote.'
              }
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-xl opacity-90">
            Book a free consultation to find the perfect plan for your business
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-gray-100"
            >
              Book Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
