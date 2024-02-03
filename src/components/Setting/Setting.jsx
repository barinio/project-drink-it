import { Backdrop, WrapperModal, Modal, CaptionBlock, PhotoBlock } from './Setting.styled';

import icons from '../../img/icons.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth/auth.selectors';
import SettingForm from './SettingForm';

const Setting = ({ closeModal, onBackdrop }) => {
  const user = useSelector(selectAuthUserData);

  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [closeModal]);

  return (
    <>
      <Backdrop className="backdrop">
        <WrapperModal onClick={onBackdrop}>
          <Modal>
            <CaptionBlock>
              <h2>Setting</h2>
              <button type="button" onClick={closeModal}>
                <svg width="24" height="24">
                  <use href={icons + '#icon-close-setting'}></use>
                </svg>
              </button>
            </CaptionBlock>
            <PhotoBlock>
              <h3>Your photo</h3>
              <div>
                <img src={user.avatarURL} alt="avatarName" width={80} height={80} />
                <button type="button">
                  <svg width="16" height="16">
                    <use href={icons + '#icon-upload'}></use>
                  </svg>
                  Upload a photo
                </button>
              </div>
            </PhotoBlock>

            <SettingForm onClose={closeModal} />
          </Modal>
        </WrapperModal>
      </Backdrop>
    </>
  );
};

export default Setting;
