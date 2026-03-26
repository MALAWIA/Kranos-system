import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/254140373356?text=Hello, I would like to learn more about your automation services', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Kranos.com</h3>
            <p className="mb-4 text-sm">
              Kenya's leading business automation agency. We help SMEs, real estate firms, retail businesses, and service companies automate their operations.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleWhatsApp}
                className="rounded-full bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/crm" className="hover:text-white transition-colors">CRM & Customer Automation</Link></li>
              <li><Link to="/services/ai-chatbots" className="hover:text-white transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services/inventory" className="hover:text-white transition-colors">Inventory Automation</Link></li>
              <li><Link to="/services/workflow" className="hover:text-white transition-colors">Workflow Automation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>0140373356</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>kranos098@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              © 2026 Kranos.com. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/security" className="hover:text-white transition-colors">
                Data Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
