import React, { useEffect } from 'react';
import { PortfolioProject, SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { X, ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onSelectProject: (project: PortfolioProject) => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onOpenContact
}) => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allProjects = SITE_DATA.projects;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const caseStudy = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center p-0 md:p-6 lg:p-10 animate-in fade-in duration-200 w-full">
      <div className="bg-[#F5F5F0] w-full max-w-4xl min-h-screen md:min-h-0 md:rounded-3xl shadow-2xl flex flex-col overflow-hidden my-auto border border-[#E2E5DC]">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#F5F5F0]/95 backdrop-blur-md px-6 py-4 border-b border-[#E2E5DC] flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-mono text-[#646E63]">
            <span className="font-semibold text-[#202720]">{t(project.categoryName)}</span>
            <span>/</span>
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="p-2 text-[#6E706A] hover:text-[#20211F] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              title="Previous project"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="p-2 text-[#6E706A] hover:text-[#20211F] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              title="Next project"
              aria-label="Next project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-[#E5E5DF] mx-1" />
            <button
              onClick={onClose}
              className="p-2 text-[#20211F] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-12 overflow-y-auto">
          {/* Project Title and Overview */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#20211F] tracking-tight leading-tight">
              {t(project.title)}
            </h1>
            <p className="text-base sm:text-lg text-[#6E706A] mt-4 leading-relaxed max-w-2xl">
              {t(caseStudy?.overview || project.shortDescription)}
            </p>
          </div>

          {/* Primary Showcase Artwork */}
          <div className="rounded-2xl overflow-hidden border border-[#E5E5DF] bg-[#20211F]">
            <img
              src={project.coverImage}
              alt={t(project.title)}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[550px]"
            />
          </div>

          {caseStudy && (
            <>
              {/* Objective & Creative Direction */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E5E5DF]">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6E706A] font-semibold mb-2">
                    {t(UI_STRINGS.caseModal.objective)}
                  </div>
                  <p className="text-sm sm:text-base text-[#20211F] leading-relaxed">
                    {t(caseStudy.objective)}
                  </p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6E706A] font-semibold mb-2">
                    {t(UI_STRINGS.caseModal.direction)}
                  </div>
                  <p className="text-sm sm:text-base text-[#20211F] leading-relaxed">
                    {t(caseStudy.creativeDirection)}
                  </p>
                </div>
              </div>

              {/* Design Process */}
              <div className="pt-6 border-t border-[#E5E5DF]">
                <div className="text-xs uppercase tracking-widest text-[#6E706A] font-semibold mb-4">
                  {t(UI_STRINGS.caseModal.process)}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.designProcess.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border border-[#E5E5DF] rounded-xl flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold text-[#6E706A] mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-sm text-[#20211F] leading-relaxed">
                        {step[lang] || step.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Palette & Typography */}
              <div className="pt-6 border-t border-[#E5E5DF] grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6E706A] font-semibold mb-4">
                    {t(UI_STRINGS.caseModal.colors)}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.colors.map((color) => (
                      <div
                        key={color.hex}
                        className="p-3 bg-white border border-[#E5E5DF] rounded-xl flex items-center gap-3"
                      >
                        <div
                          className="w-7 h-7 rounded-lg border border-black/10 shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div>
                          <div className="text-xs font-bold text-[#20211F]">{t(color.name)}</div>
                          <div className="text-[11px] font-mono text-[#6E706A]">{color.hex}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6E706A] font-semibold mb-4">
                    {t(UI_STRINGS.caseModal.typography)}
                  </div>
                  <div className="p-4 bg-white border border-[#E5E5DF] rounded-xl">
                    <p className="text-sm text-[#20211F] leading-relaxed">
                      {t(caseStudy.typography)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Final Deliverables */}
              <div className="pt-6 border-t border-[#E5E5DF]">
                <div className="text-xs uppercase tracking-widest text-[#6E706A] font-semibold mb-4">
                  {t(UI_STRINGS.caseModal.deliverables)}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-sm text-[#20211F] bg-white p-3 rounded-lg border border-[#E5E5DF]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#20211F] shrink-0" />
                      <span>{item[lang] || item.en}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artwork Gallery */}
              {caseStudy.artworkGallery.length > 0 && (
                <div className="pt-6 border-t border-[#E5E5DF] space-y-6">
                  <div className="text-xs uppercase tracking-widest text-[#6E706A] font-semibold">
                    {t(UI_STRINGS.caseModal.gallery)}
                  </div>
                  {caseStudy.artworkGallery.map((slide, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="rounded-2xl overflow-hidden border border-[#E5E5DF] bg-white">
                        <img
                          src={slide.image}
                          alt={t(slide.title)}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#6E706A] px-1">
                        <span className="font-semibold text-[#20211F]">{t(slide.title)}</span>
                        <span>{t(slide.caption)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Navigation & Contact Footer */}
          <div className="pt-10 border-t border-[#E5E5DF] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="text-xs font-semibold text-[#6E706A] hover:text-[#20211F] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t(UI_STRINGS.caseModal.prev)}: {t(prevProject.title)}</span>
              </button>
              <span className="text-[#E5E5DF]">/</span>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="text-xs font-semibold text-[#6E706A] hover:text-[#20211F] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{t(UI_STRINGS.caseModal.next)}: {t(nextProject.title)}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#202720] bg-[#B7F34A] hover:bg-[#a6e636] rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <span>{t(UI_STRINGS.caseModal.discuss)}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
