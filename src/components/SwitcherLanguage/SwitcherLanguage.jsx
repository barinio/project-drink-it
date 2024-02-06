import i18next from 'i18next';
import { LOCALS } from 'i18n/constants';

import { useTranslation } from 'react-i18next';
import { SwitcherWrapper } from './SwitcherLanguage.styled';

const SwitcherLanguage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SwitcherWrapper className="swither-language">
        <p>{t('test')}</p>

        <ul>
          <li>
            <button
              disabled={i18next.language === LOCALS.UK}
              onClick={() => i18next.changeLanguage(LOCALS.UK)}
            >
              Солов'їна
            </button>
          </li>
          <li>
            <button
              disabled={i18next.language === LOCALS.EN}
              onClick={() => i18next.changeLanguage(LOCALS.EN)}
            >
              English
            </button>
          </li>
          <li>
            <button
              disabled={i18next.language === LOCALS.FR}
              onClick={() => i18next.changeLanguage(LOCALS.FR)}
            >
              Français
            </button>
          </li>
          {/* <li>
            <button>Español</button>
          </li>
          <li>
            <button>Italiano</button>
          </li>
          <li>
            <button>Deutsch</button>
          </li>
          <li>
            <button>Portuguese</button>
          </li>
          <li>
            <button>Japanese</button>
          </li>
          <li>
            <button>Polish</button>
          </li> */}
        </ul>
      </SwitcherWrapper>
    </>
  );
};

export default SwitcherLanguage;
