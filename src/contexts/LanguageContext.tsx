'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { zh, en, Locale, Language } from '@/locales';

const locales: Record<Language, Locale> = { zh, en };

interface LanguageContextType {
  lang: Language;
  t: Locale;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'zh';
    }

    const saved = localStorage.getItem('lang') as Language | null;
    return saved === 'zh' || saved === 'en' ? saved : 'zh';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = locales[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
