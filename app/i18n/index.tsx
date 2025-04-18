"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";

export type Language = "pt-BR" | "en-US";

interface I18nContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultContext: I18nContextType = {
  language: "en-US",
  changeLanguage: () => {},
  t: (key) => key,
};

const I18nContext = createContext<I18nContextType>(defaultContext);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>("en-US");
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (
        savedLanguage &&
        (savedLanguage === "pt-BR" || savedLanguage === "en-US")
      ) {
        setLanguage(savedLanguage);
      } else {
        const browserLanguage = navigator.language;
        if (browserLanguage.startsWith("pt")) {
          setLanguage("pt-BR");
        }
      }
    } catch (error) {
      console.error("Error loading language preference:", error);
    }
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationData = await import(`./locales/${language}.json`);
        setTranslations(translationData.default || translationData);
      } catch (error) {
        console.error(`Translation file for ${language} not found:`, error);
        setTranslations({});
      }
    };

    loadTranslations();
  }, [language]);

  const changeLanguage = useCallback((lang: Language) => {
    if (lang !== "pt-BR" && lang !== "en-US") return;

    try {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[key] || key;
    },
    [translations]
  );

  const contextValue = {
    language,
    changeLanguage,
    t,
  };

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
