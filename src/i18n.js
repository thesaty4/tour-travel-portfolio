import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend) // Loads translations from server files
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n to React
  .init({
    fallbackLng: 'hi', // Fallback language
    // debug: true,       // Enable debugging during development
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });

export default i18n;
