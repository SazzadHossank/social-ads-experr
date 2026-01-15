import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';
import MetaAdsLayout from './MetaAdsLayout';
import EcommerceLayout from './EcommerceLayout';
import LandingPageLayout from './LandingPageLayout';
import FakeOrderLayout from './FakeOrderLayout';
import FullBusinessSetupLayout from './FullBusinessSetupLayout';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the service based on slug to get title/desc for default view
  const service = TEXT.solution.items.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Service Not Found</h2>
          <Link to="/">
             <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  // --- ROUTING LOGIC ---
  if (slug === 'meta-ads') {
      return <MetaAdsLayout />;
  }

  if (slug === 'ecommerce-website') {
      return <EcommerceLayout />;
  }
  
  if (slug === 'landing-page-design') {
      return <LandingPageLayout />;
  }

  if (slug === 'fake-order-filtering') {
      return <FakeOrderLayout />;
  }

  if (slug === 'full-business-setup') {
      return <FullBusinessSetupLayout />;
  }

  // --- DEFAULT LAYOUT FOR OTHER SERVICES ---
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors">
                <ArrowLeft size={20} />
                <span>Back to Home</span>
            </Link>

            <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6">
                    {service.title}
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
                   {service.desc}
                </p>

                <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/50">
                    <p className="text-slate-500 dark:text-slate-400 text-center italic">
                        Detailed page design coming soon...
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ServiceDetail;