import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert('Thank you! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254700000000?text=Hello, I would like to book a free automation audit', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl md:text-5xl">Get In Touch</h1>
            <p className="text-xl opacity-90">
              Book your free automation audit or get answers to your questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl">Book a Free Consultation</h2>
              <p className="mb-8 text-lg text-gray-700">
                Fill out the form below and we'll contact you within 24 hours to discuss your automation needs.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    What would you like to automate? *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-8 py-4 text-white transition-colors hover:bg-blue-700"
                >
                  Book Free Audit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl">Contact Information</h2>
              <div className="space-y-6">
                <div className="rounded-lg bg-gray-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl">Phone</h3>
                      <p className="text-gray-700">+254 700 000 000</p>
                      <p className="text-sm text-gray-600">Mon-Fri 8am-6pm EAT</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl">Email</h3>
                      <p className="text-gray-700">info@automateke.co.ke</p>
                      <p className="text-sm text-gray-600">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl">Location</h3>
                      <p className="text-gray-700">Nairobi, Kenya</p>
                      <p className="text-sm text-gray-600">Serving businesses nationwide</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl">WhatsApp</h3>
                      <p className="mb-3 text-gray-700">Fastest way to reach us</p>
                      <button
                        onClick={handleWhatsApp}
                        className="rounded-md bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
                      >
                        Chat on WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-blue-50 p-6">
                <h3 className="mb-3 text-xl">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  * WhatsApp support available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
