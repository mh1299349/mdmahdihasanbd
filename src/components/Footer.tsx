import React from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, EmailIcon } from './SocialIcons';

import { PageId } from './Navbar';

interface FooterProps {
  currentPage?: string;
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, isBengali } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const exploreLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t(UI_STRINGS.nav.home) },
    { id: 'services', label: t(UI_STRINGS.nav.services) },
    { id: 'about', label: t(UI_STRINGS.nav.about) },
    { id: 'process', label: t(UI_STRINGS.nav.process) },
    { id: 'contact', label: t(UI_STRINGS.nav.contact) }
  ];

  const handleLinkClick = (pageId: PageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      if (pageId === 'home') {
        scrollToTop();
      } else {
        const target = document.getElementById(pageId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-[#F6F5EF] border-t border-[#E2E5DC] pt-14 sm:pt-16 lg:pt-20 pb-12 w-full overflow-hidden text-[#1D231C]">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full space-y-12">
        
        {/* ==============================================================
            TOP SECTION: MH MONOGRAM + NAME & TITLE + STATUS
            ============================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#E2E5DC]">
          {/* Left: Monogram and Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 sm:gap-4 font-english min-w-0 bg-transparent border-0 p-0 cursor-pointer text-left group"
          >
            {/* MH Dark Badge with lime-green dot on top right */}
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#1D231C] text-white flex items-center justify-center font-bold text-sm sm:text-base tracking-wider font-english relative shrink-0 shadow-xs border border-[#1D231C] group-hover:scale-105 transition-transform"
              aria-hidden="true"
            >
              <span>MH</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B6F24A] border-2 border-[#F6F5EF]" />
            </div>

            {/* Name & Title */}
            <div className="min-w-0">
              <h3 className="text-[23px] sm:text-2xl md:text-[30px] lg:text-[33px] font-black text-[#1D231C] tracking-tight leading-tight sm:leading-none mt-0 group-hover:text-black transition-colors">
                {t(SITE_DATA.personal.name)}
              </h3>
              <p className="text-[9px] sm:text-xs md:text-[13px] font-bold tracking-wider sm:tracking-widest uppercase text-[#646E63] mt-0.5 sm:mt-1 ml-0.5">
                {isBengali ? 'গ্রাফিক ডিজাইনার ও ভিডিও এডিটর' : 'GRAPHIC DESIGNER & VIDEO EDITOR'}
              </p>
            </div>
          </button>

          {/* Right: Availability Status with subtle separator */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A544A] font-semibold sm:pl-4 sm:border-l sm:border-[#E2E5DC] pt-0.5 sm:pt-0">
            <span className="w-2 h-2 rounded-full bg-[#B6F24A] animate-pulse shrink-0" />
            <span>
              {isBengali ? 'ফ্রিল্যান্স কাজের জন্য প্রস্তুত' : 'Available for Freelance Projects'}
            </span>
          </div>
        </div>

        {/* ==============================================================
            MID SECTION: TWO BALANCED COLUMNS (EXPLORE & LET'S CONNECT)
            ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pt-2">
          
          {/* Column 1: EXPLORE (Matching Navbar Links, font-size: 17px/20px) */}
          <div className="md:col-span-5 space-y-3 text-[17px]">
            <h4 className="text-base sm:text-[20px] font-bold tracking-widest text-[#1D231C] uppercase">
              {isBengali ? 'এক্সপ্লোর' : 'EXPLORE'}
            </h4>
            <div className="w-8 h-1 bg-[#B6F24A] rounded-full" />

            <ul className="space-y-3 pt-3 text-[18px] sm:text-[20px] font-semibold text-[#4A544A]">
              {exploreLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.id)}
                    className="group inline-flex items-center gap-2 hover:text-[#1D231C] hover:translate-x-1 transition-all duration-200 ease-out cursor-pointer bg-transparent border-0 p-0 text-left"
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#1D231C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: LET'S CONNECT (heading font-size: 20px) */}
          <div className="md:col-span-7 md:border-l md:border-[#E2E5DC] md:pl-10 space-y-3">
            <h4 className="text-base sm:text-[20px] font-bold tracking-widest text-[#1D231C] uppercase">
              {isBengali ? 'যুক্ত হোন' : "LET'S CONNECT"}
            </h4>
            <div className="w-8 h-1 bg-[#B6F24A] rounded-full" />

            {/* 3 Contact Cards */}
            <div className="space-y-3.5 pt-3">
              
              {/* 1. EMAIL CARD */}
              <a
                href={`mailto:${SITE_DATA.personal.email}`}
                className="group flex items-center justify-between p-4 bg-white border border-[#E2E5DC] hover:border-[#1D231C] rounded-2xl transition-all shadow-2xs cursor-pointer min-w-0"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-10 h-10 rounded-xl bg-[#F6F5EF] border border-[#E2E5DC] flex items-center justify-center text-[#1D231C] group-hover:bg-[#B6F24A] transition-colors shrink-0">
                    <EmailIcon className="w-4 h-4 text-[#1D231C]" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#7A867A]">
                      EMAIL
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-[#1D231C] break-all">
                      {SITE_DATA.personal.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7A867A] group-hover:text-[#1D231C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
              </a>

              {/* 2. WHATSAPP CARD */}
              <a
                href={SITE_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white border border-[#E2E5DC] hover:border-[#25D366] rounded-2xl transition-all shadow-2xs cursor-pointer min-w-0"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-10 h-10 rounded-xl bg-[#F6F5EF] border border-[#E2E5DC] flex items-center justify-center text-[#1D231C] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#7A867A]">
                      WHATSAPP
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-[#1D231C]">
                      {SITE_DATA.personal.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7A867A] group-hover:text-[#1D231C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
              </a>

              {/* 3. FACEBOOK PROFILE CARD */}
              <a
                href={SITE_DATA.personal.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white border border-[#E2E5DC] hover:border-[#1877F2] rounded-2xl transition-all shadow-2xs cursor-pointer min-w-0"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-10 h-10 rounded-xl bg-[#F6F5EF] border border-[#E2E5DC] flex items-center justify-center text-[#1D231C] group-hover:bg-[#1877F2] group-hover:text-white transition-colors shrink-0">
                    <FacebookIcon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#7A867A]">
                      FACEBOOK PROFILE
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-[#1D231C] truncate">
                      fb.com/MdMahdiHasan.Official
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7A867A] group-hover:text-[#1D231C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
              </a>

            </div>
          </div>

        </div>

        {/* ==============================================================
            BOTTOM BAR: COPYRIGHT & BACK TO TOP
            ============================================================== */}
        <div className="pt-8 border-t border-[#E2E5DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#646E63] w-full">
          <div>
            © {currentYear} {t(SITE_DATA.personal.name)}. {t(UI_STRINGS.footer.allRights)}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E2E5DC] hover:border-[#1D231C] hover:-translate-y-0.5 hover:shadow-2xs active:scale-95 transition-all duration-200 ease-out cursor-pointer group text-xs text-[#1D231C]"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#1D231C] group-hover:-translate-y-0.5 transition-transform duration-200" />
            <span className="font-semibold">{t(UI_STRINGS.footer.backToTop)}</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
