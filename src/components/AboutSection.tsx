import React, { useState } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { User } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { t, lang, isBengali } = useLanguage();

  return (
    <section
      id="about"
      className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#F6F5EF] w-full overflow-hidden min-h-[calc(100vh-200px)]"
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6F24A]" />
            <span>{t(UI_STRINGS.about.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D231C] tracking-tight">
            {t(UI_STRINGS.about.heading)}
          </h2>
        </div>

        {/* 2-Column Split: Authentic Photo & Narrative Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">
          {/* Left Column: Official Profile Photograph Card with Verified Badge */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-white p-3 rounded-2xl border border-[#E2E5DC] shadow-[0_4px_20px_rgba(29,35,28,0.03)] max-w-[360px] mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#181E18]">
                {!imageError ? (
                  <img
                    src={SITE_DATA.personal.profilePhoto}
                    alt={`${t(SITE_DATA.personal.name)} — ${t(SITE_DATA.personal.title)}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#646E63]">
                    <User className="w-12 h-12 mb-3 stroke-1 text-[#1D231C]" />
                    <span className="text-sm font-semibold text-[#1D231C]">{t(SITE_DATA.personal.name)}</span>
                    <span className="text-xs mt-1">{t(SITE_DATA.personal.title)}</span>
                  </div>
                )}
              </div>

              {/* Verified Trust Strip under Photo */}
              <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-[#646E63]">
                <div className="flex items-center gap-1.5 font-medium text-[#1D231C]">
                  <span className="w-2 h-2 rounded-full bg-[#B6F24A]" />
                  <span>{t(UI_STRINGS.about.verifiedBadge)}</span>
                </div>
                <span>{t(SITE_DATA.personal.location)}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6 w-full">
            {/* 4 Bio Paragraphs */}
            <div className={`space-y-4 text-base sm:text-lg text-[#4A544A] leading-relaxed ${isBengali ? 'leading-[1.7]' : ''}`}>
              {SITE_DATA.personal.bio[lang].map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Design Philosophy Callout Card */}
            <div className="p-6 sm:p-7 bg-white rounded-2xl border border-[#E2E5DC] mt-8 shadow-2xs">
              <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2">
                {t(UI_STRINGS.about.philosophyBadge)}
              </div>
              <blockquote className={`text-lg sm:text-xl font-bold text-[#1D231C] leading-snug ${isBengali ? 'leading-[1.5]' : ''}`}>
                “{t(SITE_DATA.personal.philosophy)}”
              </blockquote>
            </div>
          </div>
        </div>

        {/* Software & Core Tools: Full-Width section spanning container with 20px bold title */}
        <div className="pt-10 sm:pt-14 mt-10 sm:mt-14 border-t border-[#E2E5DC] w-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B6F24A]" />
            <span className="text-base sm:text-lg md:text-[20px] font-bold tracking-tight text-[#1D231C]">
              {t(UI_STRINGS.about.toolsBadge)}
            </span>
          </div>

          {/* 4 Cards: 2 cards per row on mobile/tablet (grid-cols-2), 4 in one row on desktop (lg:grid-cols-4) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full">
            {SITE_DATA.tools.map((tool) => {
              const isAi = tool.name.includes('Illustrator');
              const isPs = tool.name.includes('Photoshop');
              const isPr = tool.name.includes('Premiere');
              
              const iconInfo = isAi
                ? { abbr: 'Ai', bg: 'bg-[#FF9A00]/15', border: 'border-[#FF9A00]/30', text: 'text-[#FF9A00]' }
                : isPs
                ? { abbr: 'Ps', bg: 'bg-[#31A8FF]/15', border: 'border-[#31A8FF]/30', text: 'text-[#31A8FF]' }
                : isPr
                ? { abbr: 'Pr', bg: 'bg-[#EA77FF]/15', border: 'border-[#EA77FF]/30', text: 'text-[#EA77FF]' }
                : { abbr: 'Ae', bg: 'bg-[#9999FF]/15', border: 'border-[#9999FF]/30', text: 'text-[#9999FF]' };

              return (
                <div
                  key={tool.name}
                  className="p-3 sm:p-5 bg-white border border-[#E2E5DC] hover:border-[#1D231C] rounded-xl sm:rounded-2xl flex flex-col justify-between shadow-2xs hover:-translate-y-1 hover:shadow-md transition-all duration-200 group"
                >
                  <div>
                    {/* Top: Adobe Brand Icon Badge + Monospace Tag */}
                    <div className="flex items-center justify-between gap-1.5 mb-2.5 sm:mb-3.5">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${iconInfo.bg} border ${iconInfo.border} flex items-center justify-center font-black text-xs sm:text-sm font-english shadow-2xs group-hover:scale-105 transition-transform shrink-0`}
                      >
                        <span className={iconInfo.text}>{iconInfo.abbr}</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md bg-[#F6F5EF] border border-[#E2E5DC] text-[#4A544A] truncate max-w-[70px] sm:max-w-[120px]">
                        {t(tool.category)}
                      </span>
                    </div>

                    {/* Tool Name */}
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-[#1D231C] group-hover:text-black transition-colors leading-tight">
                      {tool.name}
                    </h4>

                    {/* Short Capability Description */}
                    <p className="text-[11px] sm:text-xs text-[#646E63] mt-1.5 sm:mt-2 leading-relaxed">
                      {t(tool.description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
