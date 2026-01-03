import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Package, Workflow, Database } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Database,
      title: 'CRM & Customer Automation',
      description: 'Never lose a lead again with automated customer relationship management',
      features: [
        'Lead capture & tracking',
        'Automated follow-ups',
        'Sales pipeline management',
        'WhatsApp & Email automation',
        'Customer lifecycle management',
        'Reporting & analytics'
      ],
      benefits: [
        '80% faster lead response time',
        '60% more leads converted',
        'Complete visibility on sales pipeline'
      ],
      link: '/services/crm',
      image: 'https://images.unsplash.com/photo-1742997734865-71d10c491be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDUk0lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY3NDY2NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots & WhatsApp Automation',
      description: '24/7 customer engagement with AI-powered conversational automation',
      features: [
        'WhatsApp Business integration',
        'Website live chat',
        'Instagram & Facebook automation',
        'Lead qualification',
        'FAQ automation',
        'CRM integration'
      ],
      benefits: [
        '24/7 customer support',
        '90% of queries handled automatically',
        '5x increase in engagement'
      ],
      link: '/services/ai-chatbots',
      image: 'https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzQ2NjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Package,
      title: 'Inventory & Operations Automation',
      description: 'Real-time inventory tracking and automated operations management',
      features: [
        'Real-time stock tracking',
        'Automated reorder alerts',
        'Supplier management',
        'Sales analytics',
        'POS integration',
        'Loss prevention'
      ],
      benefits: [
        '85% faster inventory checks',
        'Zero stockouts',
        '40% reduction in waste'
      ],
      link: '/services/inventory',
      image: 'https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnl8ZW58MXx8fHwxNzY3Mzk2MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Workflow,
      title: 'Workflow & Internal Process Automation',
      description: 'Streamline internal operations and eliminate manual workflows',
      features: [
        'Approval workflows',
        'Document automation',
        'Invoicing & billing',
        'Staff task management',
        'Custom integrations',
        'Reporting automation'
      ],
      benefits: [
        '70% time saved on admin tasks',
        'Faster approval cycles',
        'Complete audit trail'
      ],
      link: '/services/workflow',
      image: 'https://images.unsplash.com/photo-1664181222358-6f736b42d5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGJ1c2luZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc2NzQ2NjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl md:text-5xl">Our Automation Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive automation solutions tailored for Kenyan businesses. From CRM to AI chatbots, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-6 text-3xl md:text-4xl">Transform Every Aspect of Your Business</h2>
            <p className="text-xl text-gray-700">
              Whether you're looking to automate customer engagement, streamline operations, or optimize workflows, our modular solutions can be customized to fit your exact needs.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="mb-4 text-3xl">{service.title}</h3>
                    <p className="mb-6 text-xl text-gray-700">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="mb-3 text-xl">Features:</h4>
                      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 rounded-lg bg-blue-50 p-6">
                      <h4 className="mb-3 text-xl">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                    >
                      See {service.title} in Action
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manual vs Automated Comparison */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl md:text-4xl">Manual vs Automated: The Difference</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-700">
              See how automation transforms daily operations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-8">
              <h3 className="mb-6 text-2xl text-red-900">Manual Operations</h3>
              <ul className="space-y-4">
                {[
                  'Hours spent on data entry',
                  'Leads fall through the cracks',
                  'No real-time visibility',
                  'Errors and inconsistencies',
                  'Limited by working hours',
                  "Can't scale efficiently"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-green-50 p-8">
              <h3 className="mb-6 text-2xl text-green-900">Automated Operations</h3>
              <ul className="space-y-4">
                {[
                  'Instant data capture and processing',
                  'Every lead tracked and followed up',
                  'Real-time dashboards and insights',
                  'Consistent, accurate results',
                  '24/7 operation',
                  'Scale without adding staff'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl md:text-4xl">Industries We Serve</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-700">
              Automation solutions customized for your industry
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              'SMEs & Growing Businesses',
              'Real Estate & Property',
              'Retail & E-Commerce',
              'Service-Based Businesses'
            ].map((industry, idx) => (
              <Link
                key={idx}
                to="/industries"
                className="rounded-lg border-2 border-gray-200 p-6 text-center transition-all hover:border-blue-600 hover:shadow-lg"
              >
                <h3 className="text-xl">{industry}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl md:text-4xl">Ready to Automate Your Business?</h2>
          <p className="mb-8 text-xl opacity-90">
            Book a free automation audit and discover which solutions will deliver the biggest impact for your business.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-gray-100"
            >
              Request a Demo
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