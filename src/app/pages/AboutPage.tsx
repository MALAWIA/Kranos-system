import { Link } from 'react-router-dom';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl md:text-5xl">About AutomateKE</h1>
            <p className="text-xl opacity-90">
              Kenya's leading business automation agency, helping SMEs and growing companies operate smarter, faster, and more profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl">Who We Are</h2>
              <p className="mb-4 text-lg text-gray-700">
                AutomateKE is a Kenyan-based automation agency specializing in helping small and medium enterprises transform their operations through intelligent automation.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                We understand the unique challenges facing Kenyan businesses – from manual data entry to lost leads and inefficient workflows. Our mission is to make enterprise-grade automation accessible and affordable for every growing business in Kenya.
              </p>
              <p className="text-lg text-gray-700">
                With deep expertise in CRM systems, AI chatbots, inventory management, and workflow automation, we've helped hundreds of businesses save time, reduce costs, and scale their operations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1664181222358-6f736b42d5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGJ1c2luZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc2NzQ2NjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-4 text-2xl">Our Mission</h3>
              <p className="text-gray-700">
                To empower every Kenyan business with the tools and technology needed to compete globally, by making automation accessible, affordable, and easy to implement.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-4 text-2xl">Our Vision</h3>
              <p className="text-gray-700">
                To be the driving force behind Kenya's digital transformation, helping businesses automate 1 million manual tasks and create sustainable growth across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-3xl md:text-4xl">Why We Exist</h2>
            <p className="text-xl text-gray-700">
              We saw too many talented Kenyan entrepreneurs held back by manual, time-consuming operations. Businesses losing leads because they couldn't follow up fast enough. Teams spending hours on repetitive tasks instead of growing the business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                stat: '60%',
                label: 'Time wasted on manual tasks',
                desc: 'Average SME spends over half their time on repetitive work'
              },
              {
                stat: '40%',
                label: 'Leads lost to poor follow-up',
                desc: 'Businesses lose nearly half their potential customers'
              },
              {
                stat: '70%',
                label: 'Cost reduction possible',
                desc: 'Automation can cut operational costs dramatically'
              },
            ].map((item, index) => (
              <div key={index} className="text-center rounded-lg bg-blue-50 p-8">
                <div className="mb-4 text-5xl font-bold text-blue-600">{item.stat}</div>
                <h3 className="mb-2 text-xl">{item.label}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-3xl md:text-4xl">Our Approach</h2>
            <p className="text-xl text-gray-700">
              Modular, scalable automation built specifically for Kenya's business environment
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Kenya-Focused',
                desc: 'Solutions designed for Kenyan businesses and WhatsApp-first culture'
              },
              {
                icon: Target,
                title: 'Modular Systems',
                desc: 'Start small and scale as you grow – no massive upfront investment'
              },
              {
                icon: Award,
                title: 'Proven Results',
                desc: 'Track record of 60-80% efficiency improvements'
              },
              {
                icon: Lightbulb,
                title: 'Simple Integration',
                desc: 'Works with your existing tools and processes'
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="rounded-lg bg-white p-6 text-center shadow-md">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-3 text-xl">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl md:text-4xl">Our Team</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-700">
              A dedicated team of automation experts, developers, and business consultants
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our team combines deep technical expertise with intimate knowledge of the Kenyan business landscape. We've worked with businesses across every sector – from real estate to retail, services to manufacturing.
            </p>
            <p className="text-lg text-gray-700">
              Every team member is committed to one goal: helping your business succeed through smart automation.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Tools */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl md:text-4xl">Tools & Technologies</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-700">
              We work with industry-leading platforms and technologies
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              'Airtable',
              'Google Workspace',
              'WhatsApp Business',
              'Zapier',
              'Make.com',
              'HubSpot',
              'OpenAI',
              'Monday.com',
              'Slack',
              'QuickBooks',
              'Salesforce',
              'Zoho'
            ].map((tool, index) => (
              <div key={index} className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-sm">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Presence */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-3xl md:text-4xl">Proudly Kenyan</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-700 mb-8">
              Based in Nairobi with clients across Kenya. We understand local business needs, M-Pesa integration, WhatsApp culture, and regulatory requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-white transition-colors hover:bg-blue-700"
            >
              Talk to an Automation Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
