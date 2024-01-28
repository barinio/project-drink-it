import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Backdrop,
  ContaineWrapper,
  Modal,
  CaptionBlock,
  PhotoBlock,
  FormStyle,
  GenderBlock,
  UserName,
  UserEmail,
  PasswordBlock,
} from './Setting.styled';

import icons from '../../img/icons.svg';
import settingAvatar from '../../img/setting-avatar.png';

const Setting = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
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

  return (
    <>
      <Backdrop>
        <ContaineWrapper>
          <Modal>
            <CaptionBlock>
              <h2>Setting</h2>
              <button type="button">
                <svg width="24" height="24">
                  <use href={icons + '#icon-close-setting'}></use>
                </svg>
              </button>
            </CaptionBlock>

            <PhotoBlock>
              <h3>Your photo</h3>
              <div>
                <img
                  src={settingAvatar}
                  alt="avatarName"
                  width={80}
                  height={80}
                />
                <button type="button">
                  <svg width="16" height="16">
                    <use href={icons + '#icon-upload'}></use>
                  </svg>
                  Upload a photo
                </button>
              </div>
            </PhotoBlock>

            <FormStyle onSubmit={formik.handleSubmit}>
              <GenderBlock>
                <h3>Your gender identity</h3>
                <div>
                  <input type="radio" id="woman" name="gender" value="woman" />
                  <label htmlFor="woman">Woman</label>

                  <input type="radio" id="man" name="gender" value="man" />
                  <label htmlFor="man">Man</label>
                </div>
              </GenderBlock>
              <UserName>
                <h3>Your name</h3>
                <input type="text" placeholder="Name" name="user-name" />
              </UserName>
              <UserEmail>
                <h3>E-mail</h3>
                <input type="text" placeholder="E-mail" name="e-mail" />
              </UserEmail>
              <PasswordBlock>
                <h3>Password</h3>
                <div>
                  <h4>Outdated password:</h4>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div>
                  <h4>New Password:</h4>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div>
                  <h4>Repeat new password:</h4>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
              </PasswordBlock>
              <button type="submit">Save</button>
            </FormStyle>
          </Modal>
        </ContaineWrapper>
      </Backdrop>
    </>
  );
};

export default Setting;
