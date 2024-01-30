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

export const LogOut = ({ onClose, onLogout }) => {
  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);
  return (
    <>
      <Overlay className="overlay" onClick={onClose} />
      <ModalContent>
        <ModalHeader>
          <h2>Log out</h2>
          <CloseButton type="button" onClick={onClose}>
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        <div>
          <BoxModal>
            <TextStyle>Do you really want to leave?</TextStyle>
            <ButtonBox>
              <ButtonStyle type="button" onClick={onLogout}>
                Log out
              </ButtonStyle>
              <ButtonStyle type="button" onClick={onClose}>
                Cancel
              </ButtonStyle>
            </ButtonBox>
          </BoxModal>
        </div>
      </ModalContent>
    </>
  );
};
