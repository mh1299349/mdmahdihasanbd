import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArrowLeft } from 'lucide-react';

const parseHash = (): PageId => {
  if (typeof window === 'undefined') return 'home';
  const clean = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
  if (['services', 'about', 'process', 'contact'].includes(clean)) {
    return clean as PageId;
  }
  return 'home';
};

function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState<PageId>(parseHash);
  const [inquiredService, setInquiredService] = useState<string | undefined>(undefined);
  const { isBengali } = useLanguage();

  // Synchronize browser history and hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const page = parseHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const newHash = page === 'home' ? '' : `#/${page}`;
    if (window.location.hash !== newHash) {
      if (page === 'home') {
        history.pushState(null, '', window.location.pathname);
      } else {
        window.location.hash = `#/${page}`;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectService = (serviceTitle: string) => {
    setInquiredService(serviceTitle);
    navigateTo('contact');
  };

  return (
    <div className={`min-h-screen w-full bg-[#F6F5EF] text-[#1D231C] selection:bg-[#B6F24A] selection:text-[#1D231C] flex flex-col justify-between ${isBengali ? 'font-bengali' : 'font-english'}`}>
      {/* Top Navigation Bar (Logo always navigates to Home, tabs navigate to respective pages) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Subpage Sticky/Top Back-to-Home Header for effortless return on mobile and desktop */}
      {currentPage !== 'home' && (
        <div className="w-full bg-[#F6F5EF]/95 backdrop-blur-md pt-20 sm:pt-24 pb-2.5 border-b border-[#E2E5DC] sticky top-0 z-30">
          <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white border border-[#E2E5DC] hover:border-[#1D231C] text-[#1D231C] text-xs sm:text-sm font-bold shadow-2xs hover:shadow-xs hover:bg-[#B6F24A]/20 active:scale-95 transition-all cursor-pointer group"
              aria-label={isBengali ? 'হোমে ফিরে যান' : 'Back to Home'}
            >
              <ArrowLeft className="w-4 h-4 text-[#1D231C] group-hover:-translate-x-1 transition-transform" />
              <span>{isBengali ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
            </button>

            <span className="text-[11px] sm:text-xs font-mono font-semibold text-[#646E63] bg-white px-2.5 py-1 rounded-lg border border-[#E2E5DC]">
              {currentPage === 'services' && (isBengali ? 'সেবাসমূহ' : 'Services')}
              {currentPage === 'about' && (isBengali ? 'আমার সম্পর্কে' : 'About Me')}
              {currentPage === 'process' && (isBengali ? 'কাজের প্রক্রিয়া' : 'Work Process')}
              {currentPage === 'contact' && (isBengali ? 'যোগাযোগ' : 'Contact')}
            </span>
          </div>
        </div>
      )}

      {/* Main Multi-Page Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {currentPage === 'home' && (
          <div className="w-full animate-fade-in flex flex-col flex-1">
            <Hero
              onExploreServices={() => navigateTo('services')}
              onContactClick={() => navigateTo('contact')}
              onNavigate={navigateTo}
            />
          </div>
        )}

        {currentPage === 'services' && (
          <div className="w-full animate-fade-in flex-1">
            <ServicesSection onSelectService={handleSelectService} />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="w-full animate-fade-in flex-1">
            <AboutSection />
          </div>
        )}

        {currentPage === 'process' && (
          <div className="w-full animate-fade-in flex-1">
            <ProcessSection />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="w-full animate-fade-in flex-1">
            <ContactSection preselectedService={inquiredService} />
          </div>
        )}
      </main>

      {/* Persistent Footer with matching multi-page navigation links */}
      <Footer
        currentPage={currentPage}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
