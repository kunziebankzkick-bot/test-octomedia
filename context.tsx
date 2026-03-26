import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import en, { type Translations } from './locales/en';
import ru from './locales/ru';
import es from './locales/es';
import uk from './locales/uk';
import sv from './locales/sv';
import de from './locales/de';
import fr from './locales/fr';

export type Locale = 'en' | 'ru' | 'es' | 'uk' | 'sv' | 'de' | 'fr';

const locales: Record<Locale, Translations> = { en, ru, es, uk, sv, de, fr };

export const LOCALE_PREFIXES: Record<Locale, string> = {
  en: '',
  ru: '/ru',
  es: '/es',
  uk: '/uk',
  sv: '/sv',
  de: '/de',
  fr: '/fr',
};

export const SUPPORTED_LOCALES: Locale[] = ['en', 'ru', 'es', 'uk', 'sv', 'de', 'fr'];

function detectLocaleFromPath(pathname: string): Locale {
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === 'en') continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return 'en';
}

function stripLocalePrefix(pathname: string): string {
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === 'en') continue;
    if (pathname === `/${locale}`) return '/';
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  localePath: (path: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const detectedLocale = detectLocaleFromPath(location.pathname);
  const [locale, setLocaleState] = useState<Locale>(detectedLocale);

  useEffect(() => {
    const newLocale = detectLocaleFromPath(location.pathname);
    if (newLocale !== locale) {
      setLocaleState(newLocale);
    }
  }, [location.pathname]);

  const setLocale = (newLocale: Locale) => {
    const basePath = stripLocalePrefix(location.pathname);
    const prefix = LOCALE_PREFIXES[newLocale];
    const newPath = prefix + (basePath === '/' ? '' : basePath) || '/';
    setLocaleState(newLocale);
    navigate(newPath || '/');
  };

  const localePath = (path: string): string => {
    const prefix = LOCALE_PREFIXES[locale];
    if (!prefix) return path;
    if (path === '/') return prefix;
    return prefix + path;
  };

  return (
    <I18nContext.Provider value={{ locale, t: locales[locale], setLocale, localePath }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
