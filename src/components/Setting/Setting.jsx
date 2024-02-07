import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Backdrop,
  WrapperModal,
  Modal,
  CaptionBlock,
  PhotoBlock,
  InputUpload,
  DeleteButton,
} from './Setting.styled';

import icons from '../../img/icons.svg';
import { selectAuthUserData } from 'redux/auth/auth.selectors';
import SettingForm from './SettingForm';
import { deleteUserThunk, updAvatarThunk } from 'redux/auth/authThunk';
import { NotAvatar } from 'components/UserMenu/UserMenu.styled';

import { ModalDeleteUser } from 'components/ModalSureDeleteUser/ModalSureDeleteUser';

const Setting = ({
  closeModal,
  closeDeleteUserModal,
  onClose,
  openSureDeleteModal,
  isSureDelete,
  onBackdrop,
}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const user = useSelector(selectAuthUserData);

  useEffect(() => {
    const onEsc = e => {
      e.key === 'Escape' && isSureDelete
        ? closeDeleteUserModal()
        : closeModal();
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [closeModal, closeDeleteUserModal, isSureDelete]);

  const changeHandler = e => {
    const avatar = e.target.files[0];
    dispatch(updAvatarThunk(avatar));
  };

  const onDeleteUser = () => {
    dispatch(deleteUserThunk());
  };

  return (
    <>
      <Backdrop className="backdrop">
        <WrapperModal onClick={onBackdrop}>
          <Modal className="dark-settings-modal">
            <CaptionBlock>
              <h2>{t('setting')}</h2>
              <button type="button" onClick={closeModal}>
                <svg width="24" height="24">
                  <use href={icons + '#icon-close-setting'}></use>
                </svg>
              </button>
            </CaptionBlock>
            <PhotoBlock>
              <h3>{t('yourPhoto')}</h3>
              <div>
                {!user.avatarURL ? (
                  <NotAvatar>{user.userName.split('')[0]}</NotAvatar>
                ) : (
                  <img
                    src={user.avatarURL}
                    alt={user.userName}
                    width={80}
                    height={80}
                  />
                )}
                <div>
                  <svg width="16" height="16">
                    <use href={icons + '#icon-upload'}></use>
                  </svg>
                  <InputUpload
                    accept="image/*"
                    type="file"
                    onChange={e => changeHandler(e)}
                  />
                  {t('uploadPhoto')}
                </div>
              </div>
            </PhotoBlock>

            <SettingForm onClose={closeDeleteUserModal} />
            <DeleteButton
              className="dark-delete-button delete-user"
              type="button"
              onClick={openSureDeleteModal}
            >
              {t('delete')}
            </DeleteButton>
          </Modal>
        </WrapperModal>
      </Backdrop>
      {isSureDelete && (
        <ModalDeleteUser
          onClose={onClose}
          closeSettingModal={closeModal}
          onDeleteUser={onDeleteUser}
        />
      )}
    </>
  );
};

export default Setting;
