import React, { useState, useEffect } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, EmailIcon } from './SocialIcons';

export type PageId = 'home' | 'services' | 'about' | 'process' | 'contact';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: PageId) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setLang, t, isBengali } = useLanguage();

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t(UI_STRINGS.nav.home) },
    { id: 'services', label: t(UI_STRINGS.nav.services) },
    { id: 'about', label: t(UI_STRINGS.nav.about) },
    { id: 'process', label: t(UI_STRINGS.nav.process) },
    { id: 'contact', label: t(UI_STRINGS.nav.contact) }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (pageId: PageId) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      if (pageId === 'contact' && onOpenContact) {
        onOpenContact();
      } else {
        const el = document.getElementById(pageId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#F6F5EF]/95 backdrop-blur-md border-b border-[#E2E5DC] py-3.5 shadow-[0_2px_12px_rgba(29,35,28,0.04)]'
            : 'bg-[#F6F5EF] border-b border-[#E2E5DC]/70 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Logo / Brand Name & Mobile Back Button */}
          <div className="flex items-center gap-2 min-w-0 shrink-0">
            {currentPage !== 'home' && (
              <button
                type="button"
                onClick={() => handleLinkClick('home')}
                className="inline-flex md:hidden items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1D231C] text-[#B6F24A] text-xs font-bold active:scale-95 transition-all shadow-xs cursor-pointer hover:bg-black"
                aria-label={isBengali ? 'হোমে ফিরে যান' : 'Back to Home'}
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#B6F24A]" />
                <span>{isBengali ? 'হোম' : 'Home'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className="text-base sm:text-lg md:text-xl font-black text-[#1D231C] hover:opacity-80 active:scale-[0.98] transition-all duration-200 min-w-0 flex items-center gap-2 tracking-tight shrink-0 cursor-pointer bg-transparent border-0 p-0 text-left group"
              aria-label="Md Mahdi Hasan - Home"
            >
              <span className="truncate">{t(SITE_DATA.personal.name)}</span>
            </button>
          </div>

          {/* Center Navigation Links: Home | Services | About | Process | Contact */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 text-sm font-medium text-[#646E63]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-all duration-200 whitespace-nowrap shrink-0 px-3.5 py-1.5 rounded-lg relative group bg-transparent border-0 cursor-pointer text-sm ${
                    isActive
                      ? 'text-[#1D231C] font-bold bg-white shadow-2xs'
                      : 'text-[#646E63] hover:text-[#1D231C] hover:bg-black/[0.04]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#B6F24A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: WhatsApp, Facebook, Email icon buttons + বাংলা / English switch */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Direct Social Icons */}
            <div className="hidden lg:flex items-center gap-1.5 text-[#1D231C]">
              <a
                href={SITE_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#1D231C] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:-translate-y-0.5 hover:shadow-xs active:scale-95 transition-all duration-200 shadow-2xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_DATA.personal.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#1D231C] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:-translate-y-0.5 hover:shadow-xs active:scale-95 transition-all duration-200 shadow-2xs"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${SITE_DATA.personal.email}`}
                title="Email"
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#1D231C] hover:bg-[#B6F24A] hover:border-[#B6F24A] hover:-translate-y-0.5 hover:shadow-xs active:scale-95 transition-all duration-200 shadow-2xs"
              >
                <EmailIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Language Switcher: বাংলা | English */}
            <div
              className="inline-flex items-center bg-white border border-[#E2E5DC] rounded-lg p-0.5 text-xs font-medium shadow-xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer text-[11px] sm:text-xs active:scale-95 ${
                  isBengali
                    ? 'bg-[#1D231C] text-white font-semibold shadow-2xs'
                    : 'text-[#646E63] hover:text-[#1D231C]'
                }`}
                aria-pressed={isBengali}
              >
                বাংলা
              </button>
              <span className="text-[#E2E5DC] select-none" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer text-[11px] sm:text-xs active:scale-95 ${
                  !isBengali
                    ? 'bg-[#1D231C] text-white font-semibold shadow-2xs'
                    : 'text-[#646E63] hover:text-[#1D231C]'
                }`}
                aria-pressed={!isBengali}
              >
                English
              </button>
            </div>

            {/* Mobile Header: WhatsApp shortcut icon */}
            <a
              href={SITE_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="md:hidden w-8 h-8 rounded-lg bg-white border border-[#E2E5DC] flex items-center justify-center text-[#1D231C] hover:bg-[#25D366] hover:text-white active:scale-95 transition-all shadow-2xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#1D231C] hover:bg-black/5 active:scale-90 rounded-lg transition-all duration-200 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer with all 6 menu links */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F6F5EF]/98 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col justify-between pb-10 overflow-y-auto animate-fade-in w-full">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E5DC]">
              <span className="text-xs uppercase tracking-widest text-[#646E63] font-semibold">
                {isBengali ? 'ভাষা নির্বাচন' : 'Language'}
              </span>
              <div className="inline-flex items-center bg-white border border-[#E2E5DC] rounded-lg p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setLang('bn')}
                  className={`px-3 py-1 rounded-md ${isBengali ? 'bg-[#1D231C] text-white font-semibold' : 'text-[#646E63]'}`}
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-md ${!isBengali ? 'bg-[#1D231C] text-white font-semibold' : 'text-[#646E63]'}`}
                >
                  English
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-xl font-bold py-3 border-b border-[#E2E5DC] flex items-center justify-between transition-colors bg-transparent border-0 cursor-pointer text-left w-full ${
                      isActive ? 'text-[#1D231C]' : 'text-[#646E63]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#B6F24A]" />}
                      <span>{link.label}</span>
                    </span>
                    <span className="text-sm font-normal text-[#646E63]">→</span>
                  </button>
                );
              })}
            </nav>

            {/* Quick Social & Direct Channels in Mobile Drawer */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#646E63] font-semibold block mb-3">
                {isBengali ? 'সরাসরি যোগাযোগ' : 'Direct Channels'}
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={SITE_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-[#E2E5DC] rounded-xl flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[#1D231C] hover:border-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:${SITE_DATA.personal.email}`}
                  className="p-3 bg-white border border-[#E2E5DC] rounded-xl flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[#1D231C] hover:border-[#1D231C] transition-colors"
                >
                  <EmailIcon className="w-5 h-5 text-[#1D231C]" />
                  <span>Email</span>
                </a>
                <a
                  href={SITE_DATA.personal.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-[#E2E5DC] rounded-xl flex flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[#1D231C] hover:border-[#1877F2] transition-colors"
                >
                  <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E5DC]">
            <a
              href={`mailto:${SITE_DATA.personal.email}`}
              className="block text-sm font-semibold text-[#1D231C] hover:underline break-all"
            >
              {SITE_DATA.personal.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
