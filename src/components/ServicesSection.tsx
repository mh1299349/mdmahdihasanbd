import React from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { t, lang, isBengali } = useLanguage();

  return (
    <section id="services" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#F6F5EF] w-full overflow-hidden min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6F24A]" />
            <span>{t(UI_STRINGS.services.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D231C] tracking-tight">
            {t(UI_STRINGS.services.heading)}
          </h2>
          <p className="text-base sm:text-lg text-[#646E63] mt-3 leading-relaxed">
            {t(UI_STRINGS.services.subheading)}
          </p>
        </div>

        {/* Numbered Editorial Services List (01 to 05) with light lime hover tint */}
        <div className="divide-y divide-[#E2E5DC] border-t border-b border-[#E2E5DC] w-full">
          {SITE_DATA.services.map((service) => (
            <div
              key={service.number}
              className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-[#B6F24A]/10 transition-colors px-4 sm:px-6 rounded-2xl cursor-default"
            >
              {/* Number and Title */}
              <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-base sm:text-lg font-bold text-[#646E63] shrink-0">
                  {service.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D231C] group-hover:text-black transition-colors">
                  {t(service.title)}
                </h3>
              </div>

              {/* Description and Deliverables */}
              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm sm:text-base text-[#646E63] leading-relaxed">
                  {t(service.description)}
                </p>

                {/* Scope & Deliverables Sub-tags */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#1D231C]/75 font-medium">
                  {service.deliverables.map((item, dIdx) => (
                    <React.Fragment key={dIdx}>
                      <span>{item[lang] || item.en}</span>
                      {dIdx < service.deliverables.length - 1 && <span className="text-[#646E63]">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Direct Inquiry Action */}
              <div className="lg:col-span-2 flex lg:justify-end items-center">
                <button
                  type="button"
                  onClick={() => onSelectService(t(service.title))}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1D231C] py-2.5 px-4.5 rounded-xl border border-[#D5DCD0] bg-white hover:bg-[#1D231C] hover:text-[#B6F24A] hover:border-[#1D231C] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300 ease-out cursor-pointer shadow-2xs group/btn"
                >
                  <span>{t(UI_STRINGS.services.inquire)}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300 ease-out" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
