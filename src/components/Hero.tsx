import React, { useState } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowUpRight, Sparkles, User, Clock, Briefcase, Award, Layers, Mail } from 'lucide-react';
import { PageId } from './Navbar';

interface HeroProps {
  onExploreServices: () => void;
  onContactClick: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onContactClick, onNavigate }) => {
  const { t, isBengali } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<PageId | null>(null);

  const marqueeItems = [
    isBengali ? 'ব্র্যান্ড আইডেন্টিটি' : 'Brand Identity',
    isBengali ? 'লোগো ডিজাইন' : 'Logo Design',
    isBengali ? 'সোশ্যাল মিডিয়া' : 'Social Media',
    isBengali ? 'পোস্টার ডিজাইন' : 'Posters',
    isBengali ? 'ইউটিউব থাম্বনেইল' : 'Thumbnails',
    isBengali ? 'ভিডিও ও রিলস' : 'Reels',
  ];

  const handleNavigate = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
    } else if (page === 'services') {
      onExploreServices();
    } else if (page === 'contact') {
      onContactClick();
    }
  };

  const exploreCards: {
    id: PageId;
    title: string;
    subtitle: string;
    tag: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'services',
      title: isBengali ? 'সেবাসমূহ' : 'Services',
      subtitle: isBengali ? 'ব্র্যান্ড ও গ্রাফিক্স ডিজাইন' : 'Brand & Visual Design',
      tag: isBengali ? '৫টি ক্যাটাগরি' : '5 Categories',
      icon: <Layers className="w-4 h-4" />
    },
    {
      id: 'about',
      title: isBengali ? 'আমার সম্পর্কে' : 'About Me',
      subtitle: isBengali ? 'দক্ষতা ও ডিজাইনার যাত্রা' : 'Bio & Experience',
      tag: isBengali ? '৩+ বছর' : '3+ Years',
      icon: <User className="w-4 h-4" />
    },
    {
      id: 'process',
      title: isBengali ? 'কাজের প্রক্রিয়া' : 'Work Process',
      subtitle: isBengali ? '৪টি সহজ ও দ্রুত ধাপ' : '4 Simple Steps',
      tag: isBengali ? 'মসৃণ ডেলিভারি' : 'Smooth Flow',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: 'contact',
      title: isBengali ? 'যোগাযোগ' : 'Get in Touch',
      subtitle: isBengali ? 'বার্তা ও ইনকোয়ারি' : 'Start a Project',
      tag: isBengali ? 'দ্রুত রিপ্লাই' : 'Fast Reply',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 w-full overflow-hidden bg-[#F6F5EF] min-h-[calc(100vh-140px)] flex flex-col justify-between">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full pb-6 sm:pb-8 md:pb-10 my-auto">
        
        {/* Responsive Grid: Photo on the left, text on the right (mobile stacks: photo first) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center w-full animate-fade-in-up">
          
          {/* ==========================================================
              PHOTO SIDE (md:col-span-5)
              ========================================================== */}
          <div className="md:col-span-5 flex justify-center md:justify-start w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[330px] md:max-w-[360px] lg:max-w-[390px] xl:max-w-[430px] mx-auto md:mx-0">
              
              {/* Soft Lime Circle Blob behind photo (35% opacity) */}
              <div
                className="absolute -inset-4 sm:-inset-6 bg-[#B6F24A]/35 rounded-full blur-2xl -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Lime Offset Shadow Layer (shifted ~14px right/down, 2deg tilt) */}
              <div
                className="absolute inset-0 bg-[#B6F24A] rounded-3xl translate-x-3.5 translate-y-3.5 rotate-2 z-0 border border-[#1D231C]/25"
                aria-hidden="true"
              />

              {/* Main Photo Frame (rounded frame with dark border) */}
              <div className="relative rounded-3xl overflow-hidden bg-[#181E18] border-2 border-[#1D231C] z-10 shadow-lg aspect-[4/5] w-full">
                {!imgError ? (
                  <img
                    src={SITE_DATA.personal.profilePhoto}
                    alt={`${t(SITE_DATA.personal.name)} — ${t(SITE_DATA.personal.title)}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white/80">
                    <User className="w-14 h-14 mb-3 stroke-1 text-[#B6F24A]" />
                    <span className="text-base font-bold text-white">{t(SITE_DATA.personal.name)}</span>
                    <span className="text-xs text-white/60 mt-1">{t(SITE_DATA.personal.title)}</span>
                  </div>
                )}
              </div>

              {/* Floating Badge 1: Ai (Illustrator - Orange) */}
              <div className="absolute -top-3.5 -left-3 sm:-top-4 sm:-left-4 z-20 bg-white border border-[#E2E5DC] rounded-xl px-2.5 py-1 text-xs sm:text-sm font-bold font-english shadow-md animate-float-0 flex items-center gap-1.5 select-none">
                <span className="w-2 h-2 rounded-full bg-[#FF9A00]" />
                <span className="text-[#FF9A00]">Ai</span>
              </div>

              {/* Floating Badge 2: Ps (Photoshop - Blue) */}
              <div className="absolute -top-3.5 -right-3 sm:-top-4 sm:-right-4 z-20 bg-white border border-[#E2E5DC] rounded-xl px-2.5 py-1 text-xs sm:text-sm font-bold font-english shadow-md animate-float-1 flex items-center gap-1.5 select-none">
                <span className="w-2 h-2 rounded-full bg-[#31A8FF]" />
                <span className="text-[#31A8FF]">Ps</span>
              </div>

              {/* Floating Badge 3: Pr (Premiere Pro - Purple/Pink) */}
              <div className="absolute top-1/2 -right-4 sm:-right-5 z-20 bg-white border border-[#E2E5DC] rounded-xl px-2.5 py-1 text-xs sm:text-sm font-bold font-english shadow-md animate-float-2 flex items-center gap-1.5 select-none">
                <span className="w-2 h-2 rounded-full bg-[#EA77FF]" />
                <span className="text-[#EA77FF]">Pr</span>
              </div>

              {/* Floating Badge 4: Ae (After Effects - Indigo/Purple) */}
              <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 z-20 bg-white border border-[#E2E5DC] rounded-xl px-2.5 py-1 text-xs sm:text-sm font-bold font-english shadow-md animate-float-3 flex items-center gap-1.5 select-none">
                <span className="w-2 h-2 rounded-full bg-[#9999FF]" />
                <span className="text-[#9999FF]">Ae</span>
              </div>

              {/* Floating Experience Badge on bottom-left corner of the photo */}
              <div className="absolute -bottom-3.5 -left-3 sm:-bottom-4 sm:-left-4 z-20 bg-white border border-[#E2E5DC] rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-bold text-[#1D231C]">
                <Sparkles className="w-3.5 h-3.5 text-[#1D231C]" />
                <span>{t(SITE_DATA.personal.experience)}</span>
              </div>

            </div>
          </div>

          {/* ==========================================================
              TEXT SIDE (md:col-span-7)
              ========================================================== */}
          <div className="md:col-span-7 space-y-5 text-left w-full">
            
            {/* Name & Professional Subtitle (Applying CSS 5: text-align center, font-size 34px; CSS 6: text-align center, margin-top -2px) */}
            <div className="w-full text-center md:text-left">
              <h1
                className={`text-[34px] sm:text-5xl lg:text-6xl font-black text-[#1D231C] tracking-tight leading-tight text-center md:text-left ${
                  isBengali ? 'font-bengali' : 'font-english'
                }`}
              >
                {t(SITE_DATA.personal.name)}
              </h1>
              <p className="text-center md:text-left text-[11px] sm:text-xs md:text-[15px] font-extrabold tracking-wider sm:tracking-widest uppercase text-[#646E63] -mt-[2px] sm:mt-1.5 ml-0 sm:ml-1">
                {isBengali ? 'গ্রাফিক ডিজাইনার ও ভিডিও এডিটর' : 'GRAPHIC DESIGNER & VIDEO EDITOR'}
              </p>
            </div>

            {/* Main Headline (2 lines, second line highlighted in lime-green) */}
            <div className="space-y-1 w-full text-center md:text-left">
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1D231C] leading-snug text-center md:text-left ${
                  isBengali ? 'leading-normal font-bengali' : 'tracking-tight'
                }`}
              >
                <span className="block">{t(SITE_DATA.hero.headlineLine1)}</span>
                <span className="inline-block bg-[#B6F24A] text-[#1D231C] px-2.5 py-0.5 rounded-lg mt-1 font-black sm:ml-[-4px] break-words">
                  {t(SITE_DATA.hero.headlineLine2)}
                </span>
              </h2>
            </div>

            {/* Shortened 2-line Paragraph */}
            <p
              className={`text-sm sm:text-base text-[#4A544A] leading-[19.75px] sm:leading-relaxed max-w-xl lg:max-w-2xl xl:max-w-3xl font-normal text-center md:text-left mx-auto md:mx-0 -mt-2 md:mt-0 ${
                isBengali ? 'leading-[1.7]' : ''
              }`}
            >
              {t(SITE_DATA.hero.subheadline)}
            </p>

            {/* Green Dot Status Line: Bangladesh · Available for freelance projects */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-[#4A544A] font-medium pt-1 text-center md:text-left">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#B6F24A] animate-pulse shrink-0" />
              <span className="text-center md:text-left">
                {t(SITE_DATA.personal.location)} · {t(SITE_DATA.personal.availability)}
              </span>
            </div>

            {/* CTA Buttons: Let's Work Together (lime) & Explore Services (white) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 w-full">
              <button
                type="button"
                onClick={onContactClick}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] text-sm font-bold text-[#1D231C] bg-[#B6F24A] hover:bg-[#aef038] border border-[#9fe02c]/50 rounded-xl shadow-xs hover:shadow-lg hover:shadow-[#B6F24A]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer overflow-hidden"
              >
                <span>{t(SITE_DATA.hero.secondaryCtaText)}</span>
                <ArrowUpRight className="w-4 h-4 text-[#1D231C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] text-sm font-semibold text-[#1D231C] bg-white hover:bg-[#FAF9F5] border border-[#D5DCD0] hover:border-[#1D231C] rounded-xl shadow-2xs hover:shadow-md hover:shadow-black/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer"
              >
                <span>{t(SITE_DATA.hero.primaryCtaText)}</span>
                <ArrowRight className="w-4 h-4 text-[#646E63] group-hover:text-[#1D231C] group-hover:translate-x-1 transition-all duration-300 ease-out" />
              </button>
            </div>

            {/* Stats Row directly under buttons */}
            <div className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 sm:gap-3.5 max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
              {/* Stat 1 */}
              <div className="bg-white border border-[#E2E5DC] hover:border-[#1D231C]/30 rounded-xl p-2.5 sm:p-3.5 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-xs text-[#646E63] font-mono">
                  <Award className="w-3.5 h-3.5 text-[#1D231C] shrink-0" />
                  <span className="hidden sm:inline">{isBengali ? 'অভিজ্ঞতা' : 'Experience'}</span>
                </div>
                <div className="text-sm sm:text-lg font-black text-[#1D231C] mt-1 leading-tight">
                  {isBengali ? '৩+ বছর' : '3+ Years'}
                </div>
                <div className="text-[10px] text-[#646E63] sm:hidden truncate mt-0.5">
                  {isBengali ? 'অভিজ্ঞতা' : 'Experience'}
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white border border-[#E2E5DC] hover:border-[#1D231C]/30 rounded-xl p-2.5 sm:p-3.5 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-xs text-[#646E63] font-mono">
                  <Briefcase className="w-3.5 h-3.5 text-[#1D231C] shrink-0" />
                  <span className="hidden sm:inline">{isBengali ? 'সেবাসমূহ' : 'Services'}</span>
                </div>
                <div className="text-sm sm:text-lg font-black text-[#1D231C] mt-1 leading-tight">
                  {isBengali ? '৫টি সেবা' : '5 Services'}
                </div>
                <div className="text-[10px] text-[#646E63] sm:hidden truncate mt-0.5">
                  {isBengali ? 'সেবা' : 'Services'}
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white border border-[#E2E5DC] hover:border-[#1D231C]/30 rounded-xl p-2.5 sm:p-3.5 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-xs text-[#646E63] font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#1D231C] shrink-0" />
                  <span className="hidden sm:inline">{isBengali ? 'রেসপন্স' : 'Response'}</span>
                </div>
                <div className="text-sm sm:text-lg font-black text-[#1D231C] mt-1 leading-tight">
                  {isBengali ? '২৪ ঘণ্টা' : '24h'}
                </div>
                <div className="text-[10px] text-[#646E63] sm:hidden truncate mt-0.5">
                  {isBengali ? 'রেসপন্স' : 'Response'}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ==============================================================
          QUICK EXPLORE CARDS & REFINED EXPERTISE MARQUEE
          Compact, non-intrusive interactive cards + soft-masked ticker
          ============================================================== */}
      <div className="w-full flex flex-col justify-end">
        {/* Compact Quick Explore Cards */}
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full pb-6 sm:pb-7">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#646E63]">
              <span className="w-2 h-2 rounded-full bg-[#B6F24A] animate-pulse" />
              <span>{isBengali ? 'দ্রুত এক্সপ্লোর ও নেভিগেশন' : 'Quick Navigation'}</span>
            </div>
            <span className="text-[11px] font-mono text-[#646E63] hidden sm:inline">
              {isBengali ? 'ক্লিক করে যেকোনো পেজে প্রবেশ করুন' : 'Click any section to explore'}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full">
            {exploreCards.map((card) => {
              const isHovered = hoveredCard === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => handleNavigate(card.id)}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative text-left p-3 sm:p-4 rounded-2xl border transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between overflow-hidden ${
                    isHovered
                      ? 'bg-white border-[#1D231C] shadow-[0_8px_24px_rgba(29,35,28,0.08)] -translate-y-1'
                      : 'bg-white/95 border-[#E2E5DC] hover:border-[#1D231C]/60 hover:bg-white shadow-2xs hover:shadow-xs hover:-translate-y-0.5'
                  } active:scale-[0.98] active:bg-[#B6F24A]/10`}
                >
                  {/* Active Top Accent Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] bg-[#B6F24A] transition-all duration-300 ${
                      isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
                    }`}
                  />

                  {/* Top Row: Icon + Tag & Arrow */}
                  <div className="flex items-center justify-between w-full mb-2.5">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                        isHovered
                          ? 'bg-[#B6F24A] text-[#1D231C] shadow-xs'
                          : 'bg-[#F6F5EF] text-[#1D231C] group-hover:bg-[#B6F24A]/50'
                      }`}
                    >
                      {card.icon}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#646E63] group-hover:text-[#1D231C] transition-colors">
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#F6F5EF] border border-[#E2E5DC]/80 hidden sm:inline">
                        {card.tag}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Title & Micro Subtitle */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1D231C] tracking-tight group-hover:text-black">
                      {card.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#646E63] mt-0.5 truncate">
                      {card.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Refined Expertise Marquee Ribbon with edge fade masks */}
        <div className="w-full bg-[#181E18] text-[#B6F24A] py-3 border-t border-[#2F382F] overflow-hidden select-none relative shadow-inner">
          {/* Subtle gradient masks on edges */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#181E18] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#181E18] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center font-bold text-xs sm:text-sm tracking-wider uppercase">
            {/* Repeating block 1 */}
            <div className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <span key={`m1-${idx}`} className="inline-flex items-center mx-3 sm:mx-4">
                  <span className="text-[#F6F5EF]/95 hover:text-[#B6F24A] transition-colors">{item}</span>
                  <span className="mx-3 sm:mx-4 text-[#B6F24A] text-xs">✦</span>
                </span>
              ))}
            </div>

            {/* Repeating block 2 */}
            <div className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <span key={`m2-${idx}`} className="inline-flex items-center mx-3 sm:mx-4">
                  <span className="text-[#F6F5EF]/95 hover:text-[#B6F24A] transition-colors">{item}</span>
                  <span className="mx-3 sm:mx-4 text-[#B6F24A] text-xs">✦</span>
                </span>
              ))}
            </div>

            {/* Repeating block 3 */}
            <div className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <span key={`m3-${idx}`} className="inline-flex items-center mx-3 sm:mx-4">
                  <span className="text-[#F6F5EF]/95 hover:text-[#B6F24A] transition-colors">{item}</span>
                  <span className="mx-3 sm:mx-4 text-[#B6F24A] text-xs">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
