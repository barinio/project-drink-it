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

export const DeleteWaterModal = ({ onClose, recordId, ownerId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(ownerId);
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
      <ModalContent>
        <ModalHeader>
          <h2>Delete entry</h2>
          <CloseButton onClick={onClose}>
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        <div>
          <BoxModal>
            <TextStyle>Are you sure you want to delete the entry?</TextStyle>
            <ButtonBox>
              <ButtonStyle onClick={handleDelete}>Delete</ButtonStyle>
              <ButtonStyle onClick={onClose}>Cancel</ButtonStyle>
            </ButtonBox>
          </BoxModal>
        </div>
      </ModalContent>
    </>
  );
};
