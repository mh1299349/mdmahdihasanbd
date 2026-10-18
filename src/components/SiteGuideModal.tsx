import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Globe, FileCode, Folder } from 'lucide-react';

interface SiteGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SiteGuideModal: React.FC<SiteGuideModalProps> = ({ isOpen, onClose }) => {
  const { isBengali } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="bg-[#F7F7F2] w-full max-w-3xl min-h-0 rounded-3xl shadow-2xl flex flex-col overflow-hidden my-auto border border-[#E5E5DF]">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#F7F7F2]/95 backdrop-blur-md px-6 py-5 border-b border-[#E5E5DF] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B7F34A]" />
            <h2 className="text-lg font-bold text-[#20211F]">
              {isBengali ? 'ডিজাইনার হ্যান্ডওভার ও ডেপ্লয়মেন্ট গাইড' : 'Designer Handover & Deployment Guide'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#20211F] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[80vh] text-sm text-[#20211F]">
          {/* Welcome note */}
          <div className="p-4 bg-white rounded-2xl border border-[#E5E5DF]">
            <p className="text-[#6E706A] leading-relaxed">
              {isBengali ? (
                <>এই গাইডটি বিশেষভাবে <strong className="text-[#20211F]">মো মাহদি হাসান</strong>-এর জন্য তৈরি। সাইটটিতে সম্পূর্ণ দ্বিভাষিক সাপোর্ট (বাংলা ও ইংরেজি), অফিশিয়াল ছবি এবং কেন্দ্রীয় ফাইল কনফিগারেশন যুক্ত করা হয়েছে।</>
              ) : (
                <>This guide is prepared specifically for <strong className="text-[#20211F]">Md Mahdi Hasan</strong>. The portfolio is built with centralized bilingual data, verified official portrait, and clean editorial design.</>
              )}
            </p>
          </div>

          {/* Section 1: Updating Projects and Content */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#20211F]">
              <FileCode className="w-4 h-4 text-[#20211F]" />
              <span>{isBengali ? '১. একটি ফাইলে সব তথ্য পরিবর্তন' : '1. Updating Content in One Central File'}</span>
            </div>
            <p className="text-xs text-[#6E706A]">
              {isBengali
                ? 'বারবার কোড এডিট করতে হবে না। সমস্ত তথ্য, প্রজেক্ট এবং কন্টাক্ট লিঙ্ক এই ফাইলে রয়েছে:'
                : 'All projects, contact details, services, and showreel settings live in:'}
            </p>
            <div className="bg-[#20211F] text-white p-3.5 rounded-xl font-mono text-xs overflow-x-auto">
              src/data/portfolioData.ts
            </div>
            <ul className="space-y-1.5 text-xs text-[#6E706A] list-disc list-inside">
              <li>
                <strong>{isBengali ? 'ব্যক্তিগত তথ্য:' : 'Personal Info:'}</strong> {isBengali ? 'ইমেইল, ফোন নম্বর, ফেসবুক লিঙ্ক ও প্রাপ্যতা স্ট্যাটাস পরিবর্তন করুন।' : 'Edit email, phone number, Facebook link, and availability status.'}
              </li>
              <li>
                <strong>{isBengali ? 'প্রজেক্ট গ্যালারি:' : 'Projects Gallery:'}</strong> {isBengali ? '৮–১২টি প্রজেক্টের নাম, ক্যাটাগরি এবং কেস স্টাডি বিবরণ বাংলা ও ইংরেজিতে যুক্ত করুন।' : 'Add or edit your projects and their complete case study details in both languages.'}
              </li>
              <li>
                <strong>{isBengali ? 'শোরিল:' : 'Showreel:'}</strong> <code className="font-mono bg-white px-1 py-0.5 rounded text-[#20211F]">videoUrl</code> {isBengali ? 'ফিল্ডে আপনার এমপি৪ ভিডিও বা ইউটিউব লিঙ্ক দিন।' : 'Change videoUrl to your personal hosted video, YouTube unlisted link, or Vimeo.'}
              </li>
            </ul>
          </div>

          {/* Section 2: Adding Real Project Images */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#20211F]">
              <Folder className="w-4 h-4 text-[#20211F]" />
              <span>{isBengali ? '২. প্রজেক্টের ছবি পরিবর্তনের নিয়ম' : '2. Asset Replacement Checklist'}</span>
            </div>
            <p className="text-xs text-[#6E706A]">
              {isBengali
                ? 'আপনার নিজস্ব ডিজাইনের ছবি ও ভিডিও ফ্রেম যুক্ত করতে নিচের যেকোনো ফোল্ডার ব্যবহার করুন:'
                : 'To add your real design artwork and video frames, place your images in either:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white border border-[#E5E5DF] rounded-xl">
                <span className="font-mono font-bold text-[#20211F]">public/images/projects/</span>
                <p className="text-[#6E706A] mt-1">{isBengali ? 'সরাসরি ইউআরএল রেফারেন্সিংয়ের জন্য।' : 'For direct URL referencing.'}</p>
              </div>
              <div className="p-3 bg-white border border-[#E5E5DF] rounded-xl">
                <span className="font-mono font-bold text-[#20211F]">src/assets/images/</span>
                <p className="text-[#6E706A] mt-1">{isBengali ? 'বান্ডেল অপটিমাইজেশনের জন্য।' : 'For bundled Vite build optimization.'}</p>
              </div>
            </div>
            <div className="p-3 bg-white border border-[#E5E5DF] rounded-xl text-xs space-y-1">
              <div className="font-semibold text-[#20211F]">{isBengali ? 'অফিসিয়াল প্রোফাইল ফটো:' : 'Profile Photo:'}</div>
              <p className="text-[#6E706A]">
                {isBengali ? 'আপনার ক্লাউডিনারি ফটো ইতোমধ্যে সংযুক্ত রয়েছে:' : 'Your official photograph is already connected via Cloudinary:'}
                <br />
                <span className="font-mono text-[11px] text-[#20211F] break-all">
                  https://res.cloudinary.com/flqltzdw/image/upload/v1791728834/WhatsApp_Image_2026-09-06_at_9.04.41_PM.jpg
                </span>
              </p>
            </div>
          </div>

          {/* Section 3: Free Deployment (Vercel & Netlify) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#20211F]">
              <Globe className="w-4 h-4 text-[#20211F]" />
              <span>{isBengali ? '৩. ফ্রি ডেপ্লয়মেন্ট (Vercel বা Netlify)' : '3. Free Deployment to Vercel or Netlify'}</span>
            </div>
            <p className="text-xs text-[#6E706A]">
              {isBengali
                ? 'এই প্রজেক্টটি রিঅ্যাক্ট + ভাইট + টেলউইন্ড সিএসএস দিয়ে তৈরি এবং সম্পূর্ণ ফ্রিতে হোস্ট করার উপযোগী।'
                : 'This project is built with React + Vite + Tailwind CSS and is 100% ready for free instant hosting.'}
            </p>

            <div className="p-4 bg-white border border-[#E5E5DF] rounded-xl space-y-3 text-xs">
              <div className="font-bold text-[#20211F]">{isBengali ? 'পদ্ধতি: Vercel দিয়ে ডেপ্লয় (সহজ ও দ্রুত)' : 'Option A: Deploy with Vercel (Recommended)'}</div>
              <ol className="list-decimal list-inside space-y-1 text-[#6E706A]">
                <li>{isBengali ? 'কোড আপনার গিটহাবে পুশ করুন।' : 'Push this repository to your GitHub account.'}</li>
                <li>{isBengali ? 'vercel.com-এ গিয়ে গিটহাব দিয়ে সাইন ইন করুন।' : 'Go to vercel.com and sign in with GitHub.'}</li>
                <li>{isBengali ? 'Add New > Project নির্বাচন করুন।' : 'Click Add New > Project and select this repo.'}</li>
                <li>
                  {isBengali ? 'Vercel স্বয়ংক্রিয়ভাবে প্রজেক্ট শনাক্ত করবে:' : 'Vercel automatically detects Vite:'}
                  <div className="mt-1 font-mono text-[11px] bg-[#F7F7F2] p-2 rounded text-[#20211F]">
                    Build Command: npm run build<br />
                    Output Directory: dist
                  </div>
                </li>
                <li>{isBengali ? 'Deploy বাটনে ক্লিক করলেই ৩০ সেকেন্ডে ওয়েবসাইট লাইভ হয়ে যাবে।' : 'Click Deploy. In 30 seconds your portfolio will be live with free SSL.'}</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-white border-t border-[#E5E5DF] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#20211F] bg-[#B7F34A] hover:bg-[#a9e83b] rounded-lg transition-colors cursor-pointer"
          >
            {isBengali ? 'বন্ধ করুন' : 'Close Guide'}
          </button>
        </div>
      </div>
    </div>
  );
};
