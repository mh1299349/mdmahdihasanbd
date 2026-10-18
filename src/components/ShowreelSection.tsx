import React, { useState, useRef } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, Volume2, VolumeX, Maximize2, Film } from 'lucide-react';

export const ShowreelSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { t, isBengali } = useLanguage();

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.error("Playback error:", e);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="showreel" className="py-24 border-t border-[#E5E5DF] bg-[#F7F7F2]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#6E706A] font-semibold mb-2">
              {t(UI_STRINGS.showreel.badge)}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20211F] tracking-tight">
              {t(SITE_DATA.showreel.title)}
            </h2>
            <p className="text-base text-[#6E706A] mt-2 max-w-xl">
              {t(SITE_DATA.showreel.subtitle)}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#6E706A]">
            <Film className="w-4 h-4 text-[#20211F]" />
            <span>{t(SITE_DATA.showreel.badge)}</span>
          </div>
        </div>

        {/* Cinematic Video Showcase Frame */}
        <div className="relative bg-[#20211F] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-[#E5E5DF] group">
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              src={SITE_DATA.showreel.videoUrl}
              poster={SITE_DATA.showreel.posterImage}
              playsInline
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />

            {/* Big Play Button Overlay (when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity duration-300"
              >
                <div className="relative group/btn">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#B7F34A] flex items-center justify-center shadow-xl group-hover/btn:scale-105 transition-transform duration-200">
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 text-[#20211F] fill-[#20211F] ml-1" />
                  </div>
                </div>
              </div>
            )}

            {/* Custom On-Hover Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-2 text-white hover:text-[#B7F34A] transition-colors cursor-pointer"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-2 text-white hover:text-[#B7F34A] transition-colors cursor-pointer"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="text-xs font-mono text-neutral-300">
                  {SITE_DATA.showreel.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="p-2 text-white hover:text-[#B7F34A] transition-colors cursor-pointer"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Guidance Note */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6E706A]">
          <div>
            <span>{t(UI_STRINGS.showreel.editNote)}</span>
          </div>
          <div className="font-mono text-[11px]">
            {isBengali ? 'কনফিগারেশন:' : 'CONFIG:'} <span className="text-[#20211F] font-semibold">SITE_DATA.showreel.videoUrl</span>
          </div>
        </div>
      </div>
    </section>
  );
};
