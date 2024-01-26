import React from 'react';
import { useFormik } from 'formik';
import { FormStyle } from './LogIn.styled';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

const LogInForm = () => {
  const validationSchema = Yup.object({
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
    <FormStyle onSubmit={formik.handleSubmit}>
      <h3>Sing In</h3>
      <div>
        <label>Enter your email</label>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span>
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </span>
      </div>
      <div>
        <label>Enter your password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span>
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
        </span>
      </div>
      <button type="submit">Sign In</button>
      <NavLink to="/signup">Sign up</NavLink>
    </FormStyle>
  );
};

export default LogInForm;
