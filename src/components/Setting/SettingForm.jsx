import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  SettingFormik,
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
import { ErrorMessage } from 'components/SignUpForm/SignUp.styled';

import icons from '../../img/icons.svg';
import { selectAuthUserData } from 'redux/auth/auth.selectors';
import { updUserInfoThunk } from 'redux/auth/thunk';

const SettingForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectAuthUserData);

  const [isMan, setIsMan] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const validEmailDomains = ['gmail.com', 'i.ua', 'yahoo.com', 'ukr.net'];

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, 'User name must be at least 2 characters')
      .max(64, 'User name must be at most 64 characters')
      .required('User name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .matches(new RegExp(`@(${validEmailDomains.join('|')})$`), 'Invalid email domain'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be at most 64 characters'),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be at most 64 characters'),
    repeatPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      gender: user.gender,
      userName: user.userName,
      email: user.email,
      password: '',
      newPassword: '',
      repeatPassword: '',
    },
    validationSchema,
    onSubmit: values => {
      if (values.password === '' || values.newPassword === '') {
        const { gender, userName, email } = values;
        const userBody = { gender, userName, email };
        dispatch(updUserInfoThunk(userBody));
        return;
      }

      dispatch(updUserInfoThunk(values));
      onClose();
    },
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    user.gender === 'man' && setIsMan(true);
  }, [user]);

  useEffect(() => {
    formik.values.gender = isMan ? 'man' : 'woman';
  }, [formik, isMan]);

  return (
    <SettingFormik onSubmit={formik.handleSubmit}>
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
                  checked={!isMan}
                  onChange={() => setIsMan(!isMan)}
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
                  checked={isMan}
                  onChange={() => setIsMan(!isMan)}
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
              <input
                type="text"
                name="userName"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                style={{
                  color:
                    formik.touched.userName && formik.errors.userName
                      ? 'var(--btn-color-red)'
                      : 'var(--primery-color-blue)',
                }}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <ErrorMessage>{formik.errors.userName}</ErrorMessage>
              ) : null}
            </UserInfoBox>
            <UserInfoBox>
              <h3>E-mail</h3>
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={{
                  color:
                    formik.touched.email && formik.errors.email
                      ? 'var(--btn-color-red)'
                      : 'var(--primery-color-blue)',
                }}
              />
            </UserInfoBox>
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : null}
          </ContainerUserInfo>
        </div>

        <PasswordBox>
          <h3>Password</h3>
          <div>
            <h4>Outdated password:</h4>
            <PasswordInputContainer>
              <button type="button" onClick={togglePasswordVisibility}>
                <svg width="16" height="16">
                  <use href={icons + (showPassword ? '#icon-opend-eye' : '#icon-closed-eye')}></use>
                </svg>
              </button>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                style={{
                  color:
                    formik.touched.password && formik.errors.password
                      ? 'var(--btn-color-red)'
                      : 'var(--primery-color-blue)',
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <ErrorMessage>{formik.touched.password && formik.errors.password}</ErrorMessage>
              ) : null}
            </PasswordInputContainer>
          </div>
          <div>
            <h4>New Password:</h4>
            <PasswordInputContainer>
              <button type="button" onClick={togglePasswordVisibility}>
                <svg width="16" height="16">
                  <use href={icons + (showPassword ? '#icon-opend-eye' : '#icon-closed-eye')}></use>
                </svg>
              </button>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="newPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                style={{
                  color:
                    formik.touched.newPassword && formik.errors.newPassword
                      ? 'var(--btn-color-red)'
                      : 'var(--primery-color-blue)',
                }}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <ErrorMessage>
                  {formik.touched.newPassword && formik.errors.newPassword}
                </ErrorMessage>
              ) : null}
            </PasswordInputContainer>
          </div>
          <div>
            <h4>Repeat new password:</h4>
            <PasswordInputContainer>
              <button type="button" onClick={togglePasswordVisibility}>
                <svg width="16" height="16">
                  <use href={icons + (showPassword ? '#icon-opend-eye' : '#icon-closed-eye')}></use>
                </svg>
              </button>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="repeatPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
                style={{
                  color:
                    formik.touched.repeatPassword && formik.errors.repeatPassword
                      ? 'var(--btn-color-red)'
                      : 'var(--primery-color-blue)',
                }}
              />
              {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                <ErrorMessage>
                  {formik.touched.repeatPassword && formik.errors.repeatPassword}
                </ErrorMessage>
              ) : null}
            </PasswordInputContainer>
          </div>
        </PasswordBox>
      </FormWrapper>
      <BtnSettingSave>
        <button type="submit">Save</button>
      </BtnSettingSave>
    </SettingFormik>
  );
};

export default SettingForm;
