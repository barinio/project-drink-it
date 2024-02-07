import React, { useState } from 'react';
import { useFormik } from 'formik';
import { FormStyle } from './LogIn.styled';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import icons from '../../img/icons.svg';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authThunk';
import { useTranslation } from 'react-i18next';

const LogInForm = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password is too long')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      dispatch(loginThunk({ email, password }));
    },
    validationSchema: validationSchema,
  });

  return (
    <FormStyle onSubmit={formik.handleSubmit}>

      <h3>{t('signin')}</h3>

      <div className="inputWrapper">
        <label>{t('forms.email')}</label>
        <div
          className="dark-input sign-auth"
          style={{
            borderColor: formik.errors.email && formik.touched.email ? '#ef5050' : '#9ebbff',
            marginBottom: 4,
            color: '#ef5050',
          }}
        >
          <input
            className="dark-sign-input"
            type="email"
            placeholder="E-mail"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              color: formik.errors.email && formik.touched.email ? '#ef5050' : '#407bff',
            }}
          />
        </div>
        <span>{formik.errors.email && formik.touched.email && formik.errors.email}</span>
      </div>
      <div className="inputWrapper">
        <label>{t('forms.password')}</label>
        <div
          className="dark-input sign-auth"
          style={{
            borderColor: formik.errors.password && formik.touched.password ? '#ef5050' : '#9ebbff',
            marginBottom: 4,
            color: '#ef5050',
          }}
        >
          <input
            className="dark-sign-input"
            type={visible ? 'text' : 'password'}
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              color: formik.errors.password && formik.touched.password ? '#ef5050' : '#407bff',
            }}
          />
          <button type="button" className="icon-wrapper" onClick={() => setVisible(!visible)}>
            <svg width="16" height="16">
              <use href={visible ? icons + '#icon-opend-eye' : icons + '#icon-closed-eye'}></use>
            </svg>
          </button>
        </div>
        <span>{formik.errors.password && formik.touched.password && formik.errors.password}</span>
      </div>
      <button type="submit">{t('buttons.signin')}</button>
      <NavLink to="/signup">{t('buttons.signup')}</NavLink>
    </FormStyle>
  );
};

export default LogInForm;
