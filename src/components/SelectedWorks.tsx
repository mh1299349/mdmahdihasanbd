import React, { useState, useMemo } from 'react';
import { SITE_DATA, PortfolioProject, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Eye, Play } from 'lucide-react';

interface SelectedWorksProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');
  const { t, isBengali } = useLanguage();

  const filterTabs = [
    { key: 'all', label: isBengali ? 'সকল কাজ' : 'All' },
    { key: 'brand', label: isBengali ? 'ব্র্যান্ড আইডেন্টিটি' : 'Brand Identity' },
    { key: 'social', label: isBengali ? 'সোশ্যাল মিডিয়া' : 'Social Media' },
    { key: 'poster', label: isBengali ? 'পোস্টার' : 'Posters' },
    { key: 'thumbnail', label: isBengali ? 'থাম্বনেইল' : 'Thumbnails' },
    { key: 'video', label: isBengali ? 'ভিডিও' : 'Video' }
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategoryKey === 'all') {
      return SITE_DATA.projects;
    }
    if (activeCategoryKey === 'brand') {
      return SITE_DATA.projects.filter((p) => p.categoryKey === 'brand' || p.categoryKey === 'logo');
    }
    return SITE_DATA.projects.filter((p) => p.categoryKey === activeCategoryKey);
  }, [activeCategoryKey]);

  return (
    <section id="work" className="py-20 sm:py-24 bg-[#F6F5EF] text-[#1D231C] w-full overflow-hidden border-t border-[#E2E5DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6F24A]" />
              <span>{t(UI_STRINGS.works.badge)}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D231C] tracking-tight">
              {t(UI_STRINGS.works.heading)}
            </h2>
            <p className="text-sm sm:text-base text-[#646E63] mt-2 max-w-xl leading-relaxed">
              {t(UI_STRINGS.works.subheading)}
            </p>
          </div>

          <div className="text-xs font-mono text-[#646E63] bg-white px-3.5 py-2 rounded-xl border border-[#E2E5DC] shrink-0 self-start md:self-auto shadow-2xs">
            {isBengali ? (
              <span>মোট {SITE_DATA.projects.length}টির মধ্যে {filteredProjects.length}টি কাজ</span>
            ) : (
              <span>SHOWING {filteredProjects.length} OF {SITE_DATA.projects.length} PROJECTS</span>
            )}
          </div>
        </div>

        {/* Filter Tabs: All | Brand Identity | Social Media | Posters | Thumbnails | Video */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-[#E2E5DC] mb-10 sm:mb-12 w-full">
          {filterTabs.map((tab) => {
            const isActive = activeCategoryKey === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategoryKey(tab.key)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98] ${
                  isActive
                    ? 'bg-[#B6F24A] text-[#1D231C] shadow-xs'
                    : 'bg-white text-[#646E63] hover:text-[#1D231C] border border-[#E2E5DC] hover:border-[#1D231C]/30 shadow-2xs'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid: 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {filteredProjects.map((project) => {
            const isVideo = project.categoryKey === 'video';

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-white border border-[#E2E5DC] hover:border-[#1D231C] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-2xs"
              >
                {/* Artwork Container */}
                <div className="relative overflow-hidden bg-[#181E18] aspect-[4/3] w-full">
                  <img
                    src={project.coverImage}
                    alt={t(project.title)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay: Lime "View" label and slight lift */}
                  <div className="absolute inset-0 bg-[#1D231C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B6F24A] text-[#1D231C] text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {isVideo ? <Play className="w-3.5 h-3.5 fill-current" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isBengali ? 'দেখুন' : 'View'}</span>
                    </span>
                  </div>

                  {/* Category Pill Tag on top-left of image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs border border-[#E2E5DC] rounded-lg text-[10px] sm:text-xs font-mono font-bold text-[#1D231C] shadow-2xs">
                      {t(project.categoryName)}
                    </span>
                  </div>
                </div>

                {/* Project Details Footer */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#1D231C] group-hover:text-black transition-colors leading-snug">
                        {t(project.title)}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-[#646E63] group-hover:text-[#1D231C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>
                    <p className="text-xs text-[#646E63] mt-2 line-clamp-2 leading-relaxed">
                      {t(project.shortDescription)}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E2E5DC]/80 flex items-center justify-between text-[11px] font-mono text-[#646E63]">
                    <span>{project.year}</span>
                    <span className="text-[#1D231C] font-semibold group-hover:underline">
                      {isBengali ? 'বিস্তারিত দেখুন' : 'Case Study'} →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
