import {
  Backdrop,
  WrapperModal,
  Modal,
  CaptionBlock,
  PhotoBlock,
  InputUpload,
} from './Setting.styled';

import icons from '../../img/icons.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth/auth.selectors';
import SettingForm from './SettingForm';
import { useState } from 'react';
// import { updAvatarThunk } from 'redux/auth/thunk';

const Setting = ({ closeModal, onBackdrop }) => {
  // const dispatch = useDispatch();
  const user = useSelector(selectAuthUserData);

  const [updateAvatar, setUpdateAvatar] = useState(null);

  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [closeModal]);

  // const uploadFile = async imgUrl => {
  //   try {
  //     dispatch(updAvatarThunk(imgUrl));

  // URL.revokeObjectURL(imgUrl);
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // };

  const changeHandler = e => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setUpdateAvatar(imgUrl);
    // uploadFile(imgUrl);
  };

  return (
    <>
      <Backdrop className="backdrop">
        <WrapperModal onClick={onBackdrop}>
          <Modal className="dark-settings-modal">
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
                <img src={updateAvatar || user.avatarURL} alt="avatarName" width={80} height={80} />
                <div>
                  <svg width="16" height="16">
                    <use href={icons + '#icon-upload'}></use>
                  </svg>
                  <InputUpload accept="image/*" type="file" onChange={e => changeHandler(e)} />
                  Upload a photo
                </div>
              </div>
            </PhotoBlock>

            <SettingForm onClose={closeModal} avatarURL={updateAvatar} />
          </Modal>
        </WrapperModal>
      </Backdrop>
    </>
  );
};

export default Setting;
