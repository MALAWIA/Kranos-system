import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';

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
    // This is now handled by LeadForm component
    alert('Thank you! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254140373356?text=Hello, I would like to book a free Kranos automation audit', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl md:text-5xl">Get In Touch</h1>
            <p className="text-xl opacity-90">
              Book your free Kranos automation audit or get answers to your questions
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
                Fill out the form below and we'll contact you within 24 hours to discuss your Kranos automation needs.
              </p>
              <LeadForm />
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
                      <p className="text-gray-700">info@kranos.com</p>
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
