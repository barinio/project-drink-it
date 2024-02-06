import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LOCALS } from './constants';
import { en, fr, uk } from './copies';

const resources = {
  [LOCALS.UK]: {
    translation: uk,
  },
  [LOCALS.EN]: {
    translation: en,
  },
  [LOCALS.FR]: {
    translation: fr,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALS.UK,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
