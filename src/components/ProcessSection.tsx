import React from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { t, isBengali } = useLanguage();

  return (
    <section id="process" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#F6F5EF] w-full overflow-hidden min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6F24A]" />
            <span>{t(UI_STRINGS.about.processBadge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D231C] tracking-tight">
            {t(UI_STRINGS.about.processHeading)}
          </h2>
          <p className="text-base sm:text-lg text-[#646E63] mt-3 leading-relaxed">
            {t(UI_STRINGS.about.processSub)}
          </p>
        </div>

        {/* 4 Cards Grid: Desktop 4 cols, Tablet 2 cols, Mobile 1 col with connecting flow indicator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative w-full">
          {SITE_DATA.process.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-7 bg-white border border-[#E2E5DC] hover:border-[#1D231C] rounded-2xl flex flex-col justify-between shadow-2xs transition-all duration-200 group"
            >
              <div>
                {/* Step Top Row with Number & Flow Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-black text-[#1D231C] bg-[#F6F5EF] px-2.5 py-1 rounded-lg border border-[#E2E5DC]">
                    {step.number}
                  </span>

                  {/* Flow arrow between cards (hidden on last card and on mobile) */}
                  {idx < SITE_DATA.process.length - 1 && (
                    <span className="hidden lg:flex items-center text-[#646E63]/60 group-hover:text-[#1D231C] transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#1D231C] mb-2.5 group-hover:text-black transition-colors">
                  {t(step.name)}
                </h3>

                <p className="text-xs sm:text-sm text-[#646E63] leading-relaxed">
                  {t(step.description)}
                </p>
              </div>

              {/* Bottom subtle accent line instead of the duplicate Phase footer */}
              <div className="mt-6 pt-4 border-t border-[#E2E5DC]/70 flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-[#B6F24A]" />
                <span className="text-[11px] font-mono text-[#646E63] uppercase">
                  {isBengali ? `ধাপ ${step.number}` : `Step ${step.number}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
