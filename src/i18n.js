import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'English',
    },
  },
  fr: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next',
    },
  },
  ukr: {
    translation: {
      'Welcome to React': 'Вітаю в React et react-i18next',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'ukr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

//======
// import { useTranslation } from 'react-i18next';
// import './i18n';

//===== ()=> {
// const { t } = useTranslation();

//===== return {
/* <div>
        <button>English</button>
        <button>Солов'їна</button>
        <button>Español</button>
        <button>Français</button>
        <button>Italiano</button>
        <button>Deutsch</button>
      </div> */
