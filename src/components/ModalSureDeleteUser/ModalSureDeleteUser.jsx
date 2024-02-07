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

export const ModalDeleteUser = ({
  closeDeleteUserModal,
  closeSettingModal,
}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteUserThunk());
    closeDeleteUserModal();
    closeSettingModal();
  };

  return (
    <>
      <Overlay onClick={closeDeleteUserModal} />
      <ModalContent className="dark-delete-modal">
        <ModalHeader>
          <h2>{t('deleteAccount')}</h2>
          <CloseButton onClick={closeDeleteUserModal}>
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        <div>
          <BoxModal>
            <TextStyle className="dark-delete-modal-text">
              {t('sureDeleteAccount')}
            </TextStyle>
            <ButtonBox>
              <ButtonStyle
                className="dark-delete-button"
                onClick={handleDeleteUser}
              >
                {t('delete')}
              </ButtonStyle>
              <ButtonStyle onClick={closeDeleteUserModal}>
                {t('cancel')}
              </ButtonStyle>
            </ButtonBox>
          </BoxModal>
        </div>
      </ModalContent>
    </>
  );
};
