import React, { useState, useEffect } from 'react';
import { SITE_DATA, UI_STRINGS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, CheckCircle2, Send, Copy, Check, Loader2 } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, EmailIcon } from './SocialIcons';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const { t, isBengali } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand Identity',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const projectTypes = [
    { value: 'Brand Identity', label: isBengali ? 'ব্র্যান্ড আইডেন্টিটি ও লোগো' : 'Brand Identity' },
    { value: 'Social Media', label: isBengali ? 'সোশ্যাল মিডিয়া ডিজাইন' : 'Social Media' },
    { value: 'Posters', label: isBengali ? 'বিজ্ঞাপন ও পোস্টার' : 'Posters' },
    { value: 'Thumbnails', label: isBengali ? 'ইউটিউব থাম্বনেইল' : 'Thumbnails' },
    { value: 'Video Editing', label: isBengali ? 'ভিডিও এডিটিং ও রিলস' : 'Video Editing' }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello Md Mahdi Hasan,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType}\n\n` +
      `Project Details:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    return `mailto:${SITE_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  const constructWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Md Mahdi Hasan! I would like to inquire about a project:\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.projectType}\n` +
      `*Details:* ${formData.message}`
    );
    return `https://wa.me/8801718014437?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate swift network dispatch and trigger mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Automatically attempt to trigger mailto client for seamless transmission
      window.location.href = constructMailtoUrl();
    }, 800);
  };

  return (
    <section id="contact" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#F6F5EF] w-full overflow-hidden min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#646E63] font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6F24A]" />
            <span>{t(UI_STRINGS.contact.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D231C] tracking-tight">
            {t(UI_STRINGS.contact.heading)}
          </h2>
          <p className="text-base sm:text-lg text-[#646E63] mt-3 leading-relaxed">
            {t(UI_STRINGS.contact.subheading)}
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-5 w-full">
            {/* Email Card with 2-second Copy button */}
            <div className="p-6 bg-white rounded-2xl border border-[#E2E5DC] shadow-xs">
              <div className="flex items-center justify-between mb-3 text-xs text-[#646E63]">
                <div className="flex items-center gap-2 font-semibold text-[#1D231C]">
                  <span className="w-7 h-7 rounded-lg bg-[#F6F5EF] border border-[#E2E5DC] flex items-center justify-center text-[#1D231C] shrink-0">
                    <EmailIcon className="w-3.5 h-3.5 text-[#1D231C]" />
                  </span>
                  <span>{t(UI_STRINGS.contact.directEmail)}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#F6F5EF] hover:bg-[#B6F24A] hover:text-[#1D231C] hover:border-[#B6F24A] active:scale-95 transition-all duration-200 ease-out cursor-pointer border border-[#E2E5DC] shadow-2xs"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#1D231C]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? (isBengali ? 'কপি হয়েছে' : 'Copied') : (isBengali ? 'কপি করুন' : 'Copy')}</span>
                </button>
              </div>
              <a
                href={`mailto:${SITE_DATA.personal.email}`}
                className="text-lg sm:text-xl font-bold text-[#1D231C] hover:underline block break-all"
              >
                {SITE_DATA.personal.email}
              </a>
              <p className="text-xs text-[#646E63] mt-2">
                {t(UI_STRINGS.contact.responseNotice)}
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-white rounded-2xl border border-[#E2E5DC] shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-[#1D231C] mb-3 text-xs">
                <span className="w-7 h-7 rounded-lg bg-[#25D366]/15 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </span>
                <span>{t(UI_STRINGS.contact.whatsappTitle)}</span>
              </div>
              <a
                href={SITE_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold text-[#1D231C] hover:underline flex items-center justify-between group"
              >
                <span>{SITE_DATA.personal.phone}</span>
                <ArrowUpRight className="w-4 h-4 text-[#646E63] group-hover:text-[#1D231C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <p className="text-xs text-[#646E63] mt-2">
                {t(UI_STRINGS.contact.whatsappNotice)}
              </p>
            </div>

            {/* Facebook Card */}
            <div className="p-6 bg-white rounded-2xl border border-[#E2E5DC] shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-[#1D231C] mb-3 text-xs">
                <span className="w-7 h-7 rounded-lg bg-[#1877F2]/15 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] shrink-0">
                  <FacebookIcon className="w-4 h-4" />
                </span>
                <span>{t(UI_STRINGS.contact.facebookTitle)}</span>
              </div>
              <a
                href={SITE_DATA.personal.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-[#1D231C] hover:underline flex items-center justify-between group"
              >
                <span>fb.com/MdMahdiHasan.Official</span>
                <ArrowUpRight className="w-4 h-4 text-[#646E63] group-hover:text-[#1D231C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <p className="text-xs text-[#646E63] mt-2">
                {t(UI_STRINGS.contact.facebookNotice)}
              </p>
            </div>

            {/* Availability Note */}
            <div className="p-4 bg-white rounded-xl border border-[#E2E5DC] flex items-center gap-3 text-xs text-[#646E63] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#B6F24A] shrink-0 animate-pulse" />
              <span>{t(UI_STRINGS.contact.acceptingFreelance)}</span>
            </div>
          </div>

          {/* Right Column: Send a Project Brief Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-9 rounded-2xl border border-[#E2E5DC] shadow-xs w-full">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 w-full">
                <div>
                  <h3 className="text-xl font-bold text-[#1D231C]">
                    {t(UI_STRINGS.contact.formTitle)}
                  </h3>
                  <p className="text-xs text-[#646E63] mt-1">
                    {t(UI_STRINGS.contact.formSubtitle)}
                  </p>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#1D231C] mb-2">
                      {t(UI_STRINGS.contact.nameLabel)}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder={t(UI_STRINGS.contact.namePlaceholder)}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F6F5EF] border border-[#E2E5DC] rounded-xl text-base sm:text-sm text-[#1D231C] placeholder:text-[#646E63]/60 focus:outline-none focus:border-[#1D231C] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#1D231C] mb-2">
                      {t(UI_STRINGS.contact.emailLabel)}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder={t(UI_STRINGS.contact.emailPlaceholder)}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F6F5EF] border border-[#E2E5DC] rounded-xl text-base sm:text-sm text-[#1D231C] placeholder:text-[#646E63]/60 focus:outline-none focus:border-[#1D231C] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type Dropdown */}
                <div className="w-full">
                  <label htmlFor="projectType" className="block text-xs font-semibold text-[#1D231C] mb-2">
                    {t(UI_STRINGS.contact.projectTypeLabel)}
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F6F5EF] border border-[#E2E5DC] rounded-xl text-base sm:text-sm text-[#1D231C] focus:outline-none focus:border-[#1D231C] transition-colors cursor-pointer"
                  >
                    {projectTypes.map((pt) => (
                      <option key={pt.value} value={pt.value}>
                        {pt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div className="w-full">
                  <label htmlFor="message" className="block text-xs font-semibold text-[#1D231C] mb-2">
                    {t(UI_STRINGS.contact.detailsLabel)}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder={t(UI_STRINGS.contact.detailsPlaceholder)}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F6F5EF] border border-[#E2E5DC] rounded-xl text-base sm:text-sm text-[#1D231C] placeholder:text-[#646E63]/60 focus:outline-none focus:border-[#1D231C] transition-colors resize-y"
                  />
                </div>

                {/* Submit Action: Primary Lime Green Button with Loading State */}
                <div className="pt-2 w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm font-bold text-[#1D231C] bg-[#B6F24A] hover:bg-[#aef038] hover:shadow-lg hover:shadow-[#B6F24A]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] rounded-xl transition-all duration-300 ease-out cursor-pointer disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#1D231C]" />
                        <span>{isBengali ? 'পাঠানো হচ্ছে...' : 'Sending...'}</span>
                      </>
                    ) : (
                      <>
                        <span>{isBengali ? 'আলোচনা শুরু করুন' : 'Start a Conversation'}</span>
                        <Send className="w-4 h-4 text-[#1D231C] group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success State after sending */
              <div className="space-y-6 py-4 animate-in fade-in w-full">
                <div className="w-12 h-12 rounded-full bg-[#B6F24A] flex items-center justify-center text-[#1D231C]">
                  <CheckCircle2 className="w-6 h-6 text-[#1D231C]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1D231C]">
                    {isBengali ? 'আপনার বার্তা পাঠানোর জন্য প্রস্তুত!' : 'Ready to Send Your Inquiry!'}
                  </h3>
                  <p className="text-sm text-[#646E63] mt-1.5 leading-relaxed">
                    {isBengali
                      ? 'নিচের বোতামে ক্লিক করে mdmahdiofficials@gmail.com অথবা সরাসরি হোয়াটসঅ্যাপে বার্তা পাঠান:'
                      : 'Your brief is ready to dispatch directly to mdmahdiofficials@gmail.com or WhatsApp:'}
                  </p>
                </div>

                <div className="space-y-3 pt-2 w-full">
                  <a
                    href={constructMailtoUrl()}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm font-bold text-[#1D231C] bg-[#B6F24A] hover:bg-[#aef038] hover:shadow-lg hover:shadow-[#B6F24A]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] rounded-xl transition-all duration-300 ease-out shadow-xs"
                  >
                    <EmailIcon className="w-4 h-4 text-[#1D231C]" />
                    <span>{isBengali ? 'ইমেইল অ্যাপে পাঠান' : 'Send via Email Client (mdmahdiofficials@gmail.com)'}</span>
                  </a>

                  <a
                    href={constructWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm font-semibold text-[#1D231C] bg-[#F6F5EF] hover:bg-white hover:border-[#1D231C] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-[#E2E5DC] rounded-xl transition-all duration-300 ease-out"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>{isBengali ? 'হোয়াটসঅ্যাপে পাঠান (+৮৮০১৭১৮০১৪৪৩৭)' : 'Send via WhatsApp (+8801718014437)'}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#E2E5DC] flex items-center justify-between text-xs text-[#646E63]">
                  <span>{isBengali ? 'তথ্য পরিবর্তন করতে চান?' : 'Need to edit something?'}</span>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[#1D231C] font-semibold underline cursor-pointer"
                  >
                    {isBengali ? 'তথ্য পরিবর্তন করুন' : 'Edit Information'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
