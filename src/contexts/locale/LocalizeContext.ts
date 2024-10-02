import { createContext, useContext } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/constants/languages/en';
import tr from '@/constants/languages/tr';

const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

const savedLang = localStorage.getItem('lang') || 'tr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    defaultValue: (lng, ns, key) => key,
  });

const LocalizeContext = createContext({
  i18n,
  toggleLanguage: () => {},
  t: (key: any) => i18n.t(key, { defaultValue: key }),
  setLocale: (lang: string) => {},
});

const useLocalizeContext = () => useContext(LocalizeContext);

export { LocalizeContext, useLocalizeContext };
