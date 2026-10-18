import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LocalizedString } from '../data/portfolioData';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (str: LocalizedString | { en: string; bn: string }) => string;
  isBengali: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('md_mahdi_lang');
      if (saved === 'bn' || saved === 'en') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en'; // English is the default as specified
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('md_mahdi_lang', newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'bn' : 'en');
  };

  const t = (str: LocalizedString | { en: string; bn: string }): string => {
    if (!str) return '';
    return str[lang] || str.en || '';
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'bn') {
      document.body.classList.add('lang-bn', 'font-bengali');
      document.body.classList.remove('font-english');
    } else {
      document.body.classList.add('font-english');
      document.body.classList.remove('lang-bn', 'font-bengali');
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isBengali: lang === 'bn' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
