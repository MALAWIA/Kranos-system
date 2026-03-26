import { Link } from 'react-router-dom';

export function IndustriesPage() {
  const industries = [
    {
      title: 'SMEs & Growing Businesses',
      description: 'Streamline operations and scale efficiently without adding overhead',
      challenges: ['Limited resources', 'Manual processes', 'Scaling difficulties'],
      solutions: ['CRM automation', 'Workflow optimization', 'Customer engagement tools']
    },
    {
      title: 'Real Estate & Property Management',
      description: 'Automate client management, property tracking, and communication',
      challenges: ['Lead follow-up', 'Property tracking', 'Client communication'],
      solutions: ['Property CRM', 'WhatsApp automation', 'Document management']
    },
    {
      title: 'Retail & E-Commerce',
      description: 'Optimize inventory, sales processes, and customer experience',
      challenges: ['Inventory management', 'Order processing', 'Stock tracking'],
      solutions: ['Real-time inventory', 'Sales automation', 'Customer analytics']
    },
    {
      title: 'Service-Based Businesses',
      description: 'Enhance client experience and streamline service delivery',
      challenges: ['Appointment booking', 'Client follow-up', 'Service tracking'],
      solutions: ['Booking automation', 'Client CRM', 'Service workflow']
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl md:text-5xl">Industries We Serve</h1>
          <p className="text-xl opacity-90">
            Tailored automation solutions for every sector
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {industries.map((industry, index) => (
              <div key={index} className="rounded-lg border-2 border-gray-200 p-8">
                <h2 className="mb-4 text-3xl">{industry.title}</h2>
                <p className="mb-6 text-lg text-gray-700">{industry.description}</p>
                
                <h3 className="mb-3 text-xl">Common Challenges:</h3>
                <ul className="mb-6 space-y-2">
                  {industry.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      {challenge}
                    </li>
                  ))}
                </ul>

                <h3 className="mb-3 text-xl">Our Solutions:</h3>
                <ul className="mb-6 space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      {solution}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                >
                  Start Automating
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function HowItWorksPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-center text-4xl">How It Works</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {[
            { step: '1', title: 'Automation Audit', desc: 'Free assessment of your operations' },
            { step: '2', title: 'System Design', desc: 'Custom solution for your needs' },
            { step: '3', title: 'Development', desc: 'Build and integrate tools' },
            { step: '4', title: 'Testing & Deployment', desc: 'Ensure everything works' },
            { step: '5', title: 'Support & Scaling', desc: 'Ongoing optimization' },
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
      </div>
    </div>
  );
}

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-center text-4xl">Case Studies</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              company: 'Real Estate Firm, Nairobi',
              result: '70% reduction in manual data entry',
              quote: 'Kranos.com transformed how we manage properties and clients.'
            },
            {
              company: 'Retail Chain, Mombasa',
              result: '85% faster inventory management',
              quote: 'Stock tracking is now automated. We always know what we have.'
            },
            {
              company: 'Service Provider, Kisumu',
              result: '60% more leads converted',
              quote: 'The WhatsApp chatbot handles queries 24/7. We never miss a client.'
            },
          ].map((study, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
              <p className="mb-4 italic">"{study.quote}"</p>
              <p className="mb-2 font-semibold text-blue-600">{study.result}</p>
              <p className="text-sm text-gray-600">{study.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ResourcesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-center text-4xl">Resources & Insights</h1>
        <p className="mb-8 text-center text-xl text-gray-700">
          Learn about automation, AI, and business efficiency
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            'Getting Started with Business Automation',
            'WhatsApp Marketing Best Practices in Kenya',
            'How to Choose the Right CRM for Your SME',
            'AI Chatbots: The Complete Guide',
            'Inventory Management Tips for Retailers',
            'Workflow Automation Checklist'
          ].map((title, index) => (
            <div key={index} className="rounded-lg border-2 border-gray-200 p-6">
              <h3 className="mb-2 text-xl">{title}</h3>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>Last updated: January 2026</p>
          <h2>1. Introduction</h2>
          <p>Kranos.com ("we", "our", or "us") respects your privacy and is committed to protecting your personal data.</p>
          <h2>2. Data Collection</h2>
          <p>We collect information you provide directly to us when you use our services, including contact information, business details, and usage data.</p>
          <h2>3. Data Security</h2>
          <p>We implement appropriate security measures to protect your data against unauthorized access, alteration, or disclosure.</p>
          <h2>4. Contact Us</h2>
          <p>For privacy-related questions, contact us at kranos098@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl">Terms of Service</h1>
        <div className="prose max-w-none">
          <p>Last updated: January 2026</p>
          <h2>1. Agreement to Terms</h2>
          <p>By using Kranos.com services, you agree to these terms and conditions.</p>
          <h2>2. Services</h2>
          <p>We provide business automation solutions including CRM, chatbots, and workflow automation.</p>
          <h2>3. Payment Terms</h2>
          <p>Payment is required as per your chosen subscription plan. We accept M-Pesa, bank transfer, and credit cards.</p>
          <h2>4. Contact</h2>
          <p>For questions about these terms, contact kranos098@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export function SecurityPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl">Data Security & Compliance</h1>
        <div className="prose max-w-none">
          <h2>Our Commitment to Security</h2>
          <p>At Kranos.com, we take data security seriously. All customer data is encrypted and stored securely.</p>
          <h2>Security Measures</h2>
          <ul>
            <li>End-to-end encryption for data transmission</li>
            <li>Secure cloud infrastructure</li>
            <li>Regular security audits</li>
            <li>Compliance with Kenyan data protection regulations</li>
            <li>Staff training on data handling</li>
          </ul>
          <h2>Compliance</h2>
          <p>We comply with the Kenya Data Protection Act and maintain high standards for data privacy and security.</p>
          <h2>Questions?</h2>
          <p>For security questions, contact our team at security@kranos.com</p>
        </div>
      </div>
    </div>
  );
}
