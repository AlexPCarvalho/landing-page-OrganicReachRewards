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

// ✅ Importação antecipada (evita delays)
import en from "./locales/en-US.json";
import pt from "./locales/pt-BR.json";

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>("en-US");
  const translationsMap = {
    "en-US": en,
    "pt-BR": pt,
  };

  const [translations, setTranslations] = useState<Record<string, string>>(en);

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage === "pt-BR" || savedLanguage === "en-US") {
        setLanguage(savedLanguage);
        setTranslations(translationsMap[savedLanguage]);
      } else {
        const browserLanguage = navigator.language;
        if (browserLanguage.startsWith("pt")) {
          setLanguage("pt-BR");
          setTranslations(translationsMap["pt-BR"]);
        }
      }
    } catch (error) {
      console.error("Error loading language preference:", error);
    }
  }, [translationsMap]);

  const changeLanguage = useCallback(
    (lang: Language) => {
      if (lang !== "pt-BR" && lang !== "en-US") return;

      try {
        setLanguage(lang);
        setTranslations(translationsMap[lang]);
        localStorage.setItem("language", lang);
      } catch (error) {
        console.error("Error changing language:", error);
      }
    },
    [translationsMap]
  );

  const t = useCallback(
    (key: keyof typeof en): string => {
      return translations[key] || en[key] || key;
    },
    [translations]
  );

  const contextValue = {
    language,
    changeLanguage,
    t,
  };

  return (
    <I18nContext.Provider value={contextValue as I18nContextType}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
