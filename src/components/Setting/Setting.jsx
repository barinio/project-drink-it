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
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth/auth.selectors';
import SettingForm from './SettingForm';
import { updAvatarThunk } from 'redux/auth/thunk';
import { NotAvatar } from 'components/UserMenu/UserMenu.styled';

const Setting = ({ closeModal, onBackdrop }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUserData);

  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [closeModal]);

  const changeHandler = e => {
    const avatar = e.target.files[0];
    dispatch(updAvatarThunk(avatar));
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
                {!user.avatarURL ? (
                  <NotAvatar>{user.userName.split('')[0]}</NotAvatar>
                ) : (
                  <img src={user.avatarURL} alt={user.userName} width={80} height={80} />
                )}
                <div>
                  <svg width="16" height="16">
                    <use href={icons + '#icon-upload'}></use>
                  </svg>
                  <InputUpload accept="image/*" type="file" onChange={e => changeHandler(e)} />
                  Upload a photo
                </div>
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
