import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheck, TrendingUp, DollarSign, Clock } from 'lucide-react';

export function HomePage() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/254140373356?text=Hello, I would like to book a free automation audit', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
                Automate Your Business Operations in Kenya
              </h1>
              <p className="mb-8 text-xl opacity-90">
                Cut costs, boost efficiency, and scale faster with tailored automation solutions for Kenyan SMEs
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-gray-100"
                >
                  Book Free Automation Audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-4 font-semibold transition-all hover:bg-white hover:text-blue-600"
                >
                  WhatsApp Chat
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzM2OTIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Automation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl">Who We Help</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Tailored automation solutions for Kenya's growing businesses
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'SMEs & Growing Businesses', desc: 'Streamline operations and scale efficiently' },
              { title: 'Real Estate & Property Management', desc: 'Automate client management and property tracking' },
              { title: 'Retail & E-Commerce', desc: 'Optimize inventory and sales processes' },
              { title: 'Service-Based Businesses', desc: 'Enhance client experience and workflow' },
            ].map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <h3 className="mb-3 text-xl">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <Link
                  to="/industries"
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl">Core Solutions</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Comprehensive automation tools to transform your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: 'CRM & Customer Automation',
                desc: 'Never lose a lead again. Automated follow-ups, pipeline management, and customer engagement.',
                img: 'https://images.unsplash.com/photo-1742997734865-71d10c491be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDUk0lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY3NDY2NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                link: '/services/crm'
              },
              {
                title: 'AI Chatbots & WhatsApp Automation',
                desc: '24/7 customer support with AI-powered chatbots on WhatsApp, website, and social media.',
                img: 'https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzQ2NjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                link: '/services/ai-chatbots'
              },
              {
                title: 'Inventory & Operations Automation',
                desc: 'Real-time inventory tracking, automated reordering, and comprehensive analytics.',
                img: 'https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnl8ZW58MXx8fHwxNzY3Mzk2MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                link: '/services/inventory'
              },
              {
                title: 'Workflow & Internal Process Automation',
                desc: 'Streamline approvals, reporting, invoicing, and staff task management.',
                img: 'https://images.unsplash.com/photo-1664181222358-6f736b42d5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGJ1c2luZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc2NzQ2NjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                link: '/services/workflow'
              },
            ].map((solution, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-2xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={solution.img}
                    alt={solution.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl">{solution.title}</h3>
                  <p className="mb-4 text-gray-600">{solution.desc}</p>
                  <Link
                    to={solution.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
                  >
                    Explore Solution <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Simple, transparent process from audit to deployment
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {[
              { step: '1', title: 'Automation Audit', desc: 'Free assessment of your current operations' },
              { step: '2', title: 'System Design', desc: 'Custom solution tailored to your needs' },
              { step: '3', title: 'Development', desc: 'Build and integrate automation tools' },
              { step: '4', title: 'Testing & Deployment', desc: 'Ensure everything works perfectly' },
              { step: '5', title: 'Support & Scaling', desc: 'Ongoing support and optimization' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-white transition-colors hover:bg-blue-700"
            >
              Learn More About Our Process
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl">Why Automate with Us?</h2>
              <div className="space-y-4">
                {[
                  { icon: DollarSign, title: 'Cost Savings', desc: 'Reduce operational costs by up to 60%' },
                  { icon: TrendingUp, title: 'Increased Efficiency', desc: 'Boost productivity and accuracy' },
                  { icon: Clock, title: 'Save Time', desc: 'Free up hours for strategic work' },
                  { icon: CircleCheck, title: 'Scalability', desc: 'Grow without adding overhead' },
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-1 text-xl">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 p-8">
              <h3 className="mb-6 text-2xl">Ready to Transform Your Business?</h3>
              <p className="mb-6 text-gray-700">
                Get a free automation audit and discover how much time and money you can save.
              </p>
              <Link
                to="/contact"
                className="block w-full rounded-md bg-blue-600 px-6 py-4 text-center text-white transition-colors hover:bg-blue-700"
              >
                Book Free Audit Now
              </Link>
              <button
                onClick={handleWhatsApp}
                className="mt-4 block w-full rounded-md border-2 border-blue-600 px-6 py-4 text-center text-blue-600 transition-colors hover:bg-blue-50"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl">Trusted by Kenya's Leading Businesses</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                company: 'Real Estate Firm, Nairobi',
                result: '70% reduction in manual data entry',
                quote: 'Kranos transformed how we manage properties and clients. Our team is now 3x more productive.'
              },
              {
                company: 'Retail Chain, Mombasa',
                result: '85% faster inventory management',
                quote: 'Stock tracking used to take hours. Now it\'s automated and we always know what we have.'
              },
              {
                company: 'Service Provider, Kisumu',
                result: '60% more leads converted',
                quote: 'The WhatsApp chatbot handles customer queries 24/7. We never miss a potential client now.'
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">"{testimonial.quote}"</p>
                <p className="mb-2 font-semibold text-blue-600">{testimonial.result}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
            >
              View All Case Studies <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl md:text-4xl">Start Automating Today</h2>
          <p className="mb-8 text-xl opacity-90">
            Join hundreds of Kenyan businesses that have already automated their operations
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-gray-100"
            >
              Book Free Automation Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 font-semibold transition-all hover:bg-white hover:text-blue-600"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}