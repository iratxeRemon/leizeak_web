import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import translationEU from './locales/eu/translation.json';

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN },
  eu: { translation: translationEU }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'eu', 
    fallbackLng: 'es', 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
