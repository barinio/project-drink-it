import { useDispatch } from 'react-redux';
import { deleteWaterThunk } from 'redux/waterDetails/waterThunk';
import {
  BoxModal,
  ButtonBox,
  ButtonStyle,
  TextStyle,
  ModalHeader,
} from './DeleteWaterModal.styled';
import icons from '../../img/icons.svg';
import {
  Overlay,
  ModalContent,
  CloseButton,
  CloseIcon,
} from 'components/TodayListModal/TodayListModal.styled';
import { useTranslation } from 'react-i18next';

export const DeleteWaterModal = ({ onClose, recordId, ownerId }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleDelete = () => {
    const dataDelete = {
      id: recordId,
      _id: ownerId,
    };
    dispatch(deleteWaterThunk(dataDelete)).then(data => {
      if (!data.error) onClose();
    });
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
              <ButtonStyle className="dark-delete-button" onClick={handleDelete}>
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
