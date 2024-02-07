import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LOCALS } from './constants';
import { de, en, es, fr, it, ja, pl, pt, uk } from './copies';

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
  [LOCALS.ES]: {
    translation: es,
  },
  [LOCALS.IT]: {
    translation: it,
  },
  [LOCALS.DE]: {
    translation: de,
  },
  [LOCALS.PT]: {
    translation: pt,
  },
  [LOCALS.JA]: {
    translation: ja,
  },
  [LOCALS.PL]: {
    translation: pl,
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
