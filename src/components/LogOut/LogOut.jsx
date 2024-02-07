import {
  BoxModal,
  ButtonBox,
  ButtonStyle,
  TextStyle,
  ModalHeader,
} from '../DeleteWaterModal/DeleteWaterModal.styled';
import icons from '../../img/icons.svg';
import {
  Overlay,
  ModalContent,
  CloseButton,
  CloseIcon,
} from 'components/TodayListModal/TodayListModal.styled';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LogOut = ({ onClose, onLogout }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);
  return (
    <>
      <Overlay className="overlay" onClick={onClose} />
      <ModalContent className="dark-logout-modal">
        <ModalHeader>
          <h2>{t('logOut')}</h2>
          <CloseButton type="button" onClick={onClose}>
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        <div>
          <BoxModal>
            <TextStyle>{t('wantToLeave')}</TextStyle>
            <ButtonBox>
              <ButtonStyle
                className="dark-logout-button"
                type="button"
                onClick={onLogout}
              >
                {t('logOut')}
              </ButtonStyle>
              <ButtonStyle type="button" onClick={onClose}>
                {t('cancel')}
              </ButtonStyle>
            </ButtonBox>
          </BoxModal>
        </div>
      </ModalContent>
    </>
  );
};
