import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useI18n, SUPPORTED_LOCALES, type Locale } from '../i18n/context';

const FLAG_MAP: Record<Locale, string> = {
  en: '🇬🇧',
  ru: '🇷🇺',
  es: '🇲🇽',
  uk: '🇺🇦',
  sv: '🇸🇪',
  de: '🇩🇪',
  fr: '🇫🇷',
};

export default function LanguageSwitcher() {
  const { locale, t, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-poppins"
        aria-label={t.lang.switcher}
      >
        <Globe size={15} className="text-brand-green" />
        <span className="uppercase tracking-wide text-xs">{locale}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-[#12121e] border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50">
          {SUPPORTED_LOCALES.map((loc) => (
            <button
              key={loc}
              onClick={() => { setLocale(loc); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-poppins transition-colors duration-150 ${
                loc === locale
                  ? 'bg-brand-green/10 text-brand-green'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-base leading-none">{FLAG_MAP[loc]}</span>
              <span>{t.lang[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
