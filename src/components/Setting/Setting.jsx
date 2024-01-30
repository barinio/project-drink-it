import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Backdrop,
  WrapperModal,
  Modal,
  CaptionBlock,
  PhotoBlock,
  FormStyle,
  FormWrapper,
  GenderPart,
  RadioLabel,
  InputHidden,
  ContainerUserInfo,
  UserInfoBox,
  PasswordBox,
  BtnSettingSave,
  PasswordInputContainer,
} from './Setting.styled';

import icons from '../../img/icons.svg';
import settingAvatar from '../../img/setting-avatar.png';
import { useEffect, useState } from 'react';

const Setting = ({ closeModal }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string().required('Password is requird'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('onSubmit', values);
    },
    validationSchema: validationSchema,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && closeModal();

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [closeModal]);

  return (
    <>
      <Backdrop className="backdrop">
        <WrapperModal>
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
                <img src={settingAvatar} alt="avatarName" width={80} height={80} />
                <button type="button">
                  <svg width="16" height="16">
                    <use href={icons + '#icon-upload'}></use>
                  </svg>
                  Upload a photo
                </button>
              </div>
            </PhotoBlock>

            <FormStyle onSubmit={formik.handleSubmit}>
              <FormWrapper>
                <div>
                  <GenderPart>
                    <h3>Your gender identity</h3>
                    <div>
                      <RadioLabel>
                        <InputHidden
                          type="radio"
                          id="woman"
                          name="gender"
                          value="woman"
                          checked={!isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        <label htmlFor="woman">
                          <svg width="14" height="14">
                            <use href={icons + '#icon-checkbox'}></use>
                          </svg>
                          Woman
                        </label>
                      </RadioLabel>

                      <RadioLabel>
                        <InputHidden
                          type="radio"
                          id="man"
                          name="gender"
                          value="man"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        <label htmlFor="man">
                          <svg width="14" height="14">
                            <use href={icons + '#icon-checkbox'}></use>
                          </svg>
                          Man
                        </label>
                      </RadioLabel>
                    </div>
                  </GenderPart>
                  <ContainerUserInfo>
                    <UserInfoBox>
                      <h3>Your name</h3>
                      <input type="text" placeholder="Name" name="user-name" />
                    </UserInfoBox>
                    <UserInfoBox>
                      <h3>E-mail</h3>
                      <input type="text" placeholder="E-mail" name="e-mail" />
                    </UserInfoBox>
                  </ContainerUserInfo>
                </div>

                <PasswordBox>
                  <h3>Password</h3>
                  <div>
                    <h4>Outdated password:</h4>
                    <PasswordInputContainer>
                      <button type="button" onClick={togglePasswordVisibility}>
                        <svg width="16" height="16">
                          <use
                            href={icons + (showPassword ? '#icon-opend-eye' : '#icon-closed-eye')}
                          ></use>
                        </svg>
                      </button>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                      />
                    </PasswordInputContainer>
                  </div>
                  <div>
                    <h4>New Password:</h4>
                    <PasswordInputContainer>
                      <button type="button" onClick={togglePasswordVisibility}>
                        <svg width="16" height="16">
                          <use
                            href={icons + (showPassword ? '#icon-opend-eye' : '#icon-closed-eye')}
                          ></use>
                        </svg>
                      </button>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                      />
                    </PasswordInputContainer>
                  </div>
                  <div>
                    <h4>Repeat new password:</h4>
                    <PasswordInputContainer>
                      <button type="button" onClick={togglePasswordVisibility}>
                        <svg width="16" height="16">
                          <use
                            href={icons + (showPassword ? '#icon-opend-eye' : '#icon-closed-eye')}
                          ></use>
                        </svg>
                      </button>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                      />
                    </PasswordInputContainer>
                  </div>
                </PasswordBox>
              </FormWrapper>
              <BtnSettingSave>
                <button type="submit">Save</button>
              </BtnSettingSave>
            </FormStyle>
          </Modal>
        </WrapperModal>
      </Backdrop>
    </>
  );
};

export default Setting;
