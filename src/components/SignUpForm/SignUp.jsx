import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { SignupForm, ErrorMessage } from './SignUp.styled';
import icons from '../../img/icons.svg';
import { useDispatch } from 'react-redux';
import { signupThunk } from 'redux/auth/authThunk';
import { useTranslation } from 'react-i18next';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password must be at most 64 characters'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password is required'),
    }),
    onSubmit: async ({ email, password }) => {
      try {
        dispatch(signupThunk({ email, password }));
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SignupForm onSubmit={formik.handleSubmit}>
      <h3>{t('signup')}</h3>
      <label>{t('forms.email')}</label>
      <div>
        <div
          className="password-wrapper"
          style={{
            border:
              formik.touched.email && formik.errors.email
                ? '1px solid var(--btn-color-red)'
                : '1px solid var(--secondary-color-blue)',
          }}
        >
          <input
            className="dark-sign-input"
            type="email"
            name="email"
            placeholder="E-mail"
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
        </div>
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
      </div>

      <label>{t('forms.password')}</label>
      <div>
        <div
          className="password-wrapper"
          style={{
            border:
              formik.touched.password && formik.errors.password
                ? '1px solid var(--btn-color-red)'
                : '1px solid var(--secondary-color-blue)',
          }}
        >
          <input
            className="dark-sign-input"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
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
          <button type="button" className="eye-icon" onClick={togglePasswordVisibility}>
            <svg width="16" height="16">
              <use
                href={showPassword ? icons + '#icon-opend-eye' : icons + '#icon-closed-eye'}
              ></use>
            </svg>
          </button>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.touched.password && formik.errors.password}</ErrorMessage>
        ) : null}
      </div>

      <label>{t('forms.repeatPassword')}</label>
      <div>
        <div
          className="password-wrapper"
          style={{
            border:
              formik.touched.password && formik.errors.password
                ? '1px solid var(--btn-color-red)'
                : '1px solid var(--secondary-color-blue)',
          }}
        >
          <input
            className="dark-sign-input"
            type={showPassword ? 'text' : 'password'}
            name="repeatPassword"
            placeholder="Repeat password"
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
          <button type="button" className="eye-icon" onClick={togglePasswordVisibility}>
            <svg width="16" height="16">
              <use
                href={showPassword ? icons + '#icon-opend-eye' : icons + '#icon-closed-eye'}
              ></use>
            </svg>
          </button>
        </div>
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <ErrorMessage>{formik.errors.repeatPassword}</ErrorMessage>
        ) : null}
      </div>

      <button type="submit">{t('buttons.signup')}</button>
      <NavLink to="/signin">{t('buttons.signin')}</NavLink>
    </SignupForm>
  );
};

export default SignUpForm;
