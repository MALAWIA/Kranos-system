import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CRMServicePage, AIChatbotsPage, InventoryPage, WorkflowPage } from './pages/services/CRMServicePage';
import { IndustriesPage, HowItWorksPage, CaseStudiesPage, ResourcesPage, PrivacyPolicyPage, TermsPage, SecurityPage } from './pages/OtherPages';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/crm" element={<CRMServicePage />} />
            <Route path="/services/ai-chatbots" element={<AIChatbotsPage />} />
            <Route path="/services/inventory" element={<InventoryPage />} />
            <Route path="/services/workflow" element={<WorkflowPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/security" element={<SecurityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}