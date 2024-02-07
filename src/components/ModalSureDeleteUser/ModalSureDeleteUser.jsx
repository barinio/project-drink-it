import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  BoxModal,
  ButtonBox,
  ButtonStyle,
  TextStyle,
  ModalHeader,
} from 'components/DeleteWaterModal/DeleteWaterModal.styled';
import icons from '../../img/icons.svg';

import { deleteUserThunk } from 'redux/auth/authThunk';

import {
  CloseButton,
  CloseIcon,
  ModalContent,
  Overlay,
} from 'components/TodayListModal/TodayListModal.styled';

export const ModalDeleteUser = ({ onClose, closeSettingModal }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteUserThunk());
    onClose();
    closeSettingModal();
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContent className="dark-delete-modal">
        <ModalHeader>
          <h2>{t('deleteEntry')}</h2>
          <CloseButton onClick={onClose}>
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        <div>
          <BoxModal>
            <TextStyle className="dark-delete-modal-text">
              {t('sureDeleteEntry')}
            </TextStyle>
            <ButtonBox>
              <ButtonStyle
                className="dark-delete-button"
                onClick={handleDeleteUser}
              >
                {t('delete')}
              </ButtonStyle>
              <ButtonStyle onClick={onClose}>{t('cancel')}</ButtonStyle>
            </ButtonBox>
          </BoxModal>
        </div>
      </ModalContent>
    </>
  );
};
