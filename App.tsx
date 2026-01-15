import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundLayers from './components/BackgroundLayers';
import ClientLogos from './components/ClientLogos';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PricingSection from './components/PricingSection';
import QualifyingSection from './components/QualifyingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ServiceDetail from './components/ServiceDetail';
import PricingPage from './components/PricingPage';
import SuccessStoriesPage from './components/SuccessStoriesPage';
import AboutPage from './components/AboutPage';
import LeadPopup from './components/LeadPopup';
import Footer from './components/Footer';
import SecretStrategiesCTA from './components/SecretStrategiesCTA';
import WhyChooseUs from './components/WhyChooseUs';
import ResultsSection from './components/ResultsSection';
import ClientReviews from './components/ClientReviews';
import IndustriesSection from './components/IndustriesSection';
import EcommerceFeatures from './components/EcommerceFeatures';
import { AdminProvider } from './contexts/AdminContext';
import { TrackingProvider } from './contexts/TrackingContext';

// Component for the main landing page content
const LandingPage: React.FC = () => {
  useEffect(() => {
    // Handle hash scrolling for internal links after navigation
    const hash = window.location.hash;
    if (hash && hash.includes('#')) {
      const id = hash.split('#')[2]; // format #/#id or just #id depending on router
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <ClientLogos />
      <ProblemSection />
      <SolutionSection />
      <WhyChooseUs />
      
      {/* New Ecommerce Features Grid with Banner */}
      <EcommerceFeatures />
      
      {/* New Section: Recent Work / Portfolio */}
      <ResultsSection />
      
      <PricingSection />
      <QualifyingSection />
      
      {/* New Section: Wide Screenshots Reviews (Two steps below Results) */}
      <ClientReviews />
      
      {/* Existing Testimonials (Video/Highlights) */}
      <TestimonialsSection />
      
      {/* New Section: Industries */}
      <IndustriesSection />
      
      {/* SecretStrategiesCTA moved here to be before FAQ */}
      <SecretStrategiesCTA />
      
      <FAQSection />
    </>
  );
};

const App: React.FC = () => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme as 'dark' | 'light';
      }
      // Optional: Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'dark'; // Default
  });

  // Apply theme class to HTML element whenever theme state changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AdminProvider>
      <TrackingProvider>
        <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
          {/* Background System */}
          <BackgroundLayers />
          
          {/* Global Lead Popup (35s Timer) */}
          <LeadPopup />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            
            <main className="flex-grow flex flex-col">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/service/:slug" element={<ServiceDetail />} />
                <Route path="/success-stories" element={<SuccessStoriesPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Catch all - Redirects to Home if 404 */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            
            {/* Global Sections */}
            <Footer />
          </div>
        </div>
      </TrackingProvider>
    </AdminProvider>
  );
};

export default App;