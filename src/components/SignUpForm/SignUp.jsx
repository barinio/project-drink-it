import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { SignupForm, ErrorMessage } from "./SignUp.styled";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
  .max(20, 'Password must be at most 20 characters'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password is required'),
    }),
    onSubmit: values => {
      console.log('Form data submitted:', values);
    },
  });

  return (
    <SignupForm onSubmit={formik.handleSubmit}>
      <h3>Sign Up</h3>
      <label>Enter your email</label>
      <div>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        style={{
          border: formik.touched.email && formik.errors.email ? '1px solid var(--btn-color-red)' : '1px solid var(--primery-color-blue)',
          color: formik.touched.email && formik.errors.email ? 'var(--btn-color-red)' : 'var(--primery-color-blue)',
        }}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
      </div>

      <label>Enter your password</label>
      <div>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        style={{
          border: formik.touched.password && formik.errors.password ? '1px solid var(--btn-color-red)' : '1px solid var(--primery-color-blue)',
          color: formik.touched.password && formik.errors.password ? 'var(--btn-color-red)' : 'var(--primery-color-blue)',
        }}
      />
      {formik.touched.password && formik.errors.password ? (
        <ErrorMessage>{formik.touched.password && formik.errors.password}</ErrorMessage>
        ) : null}
        </div>

      <label>Repeat password</label>
      <div>
      <input
        type="password"
        name="repeatPassword"
        placeholder="Repeat password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repeatPassword}
        style={{
          border: formik.touched.password && formik.errors.password ? '1px solid var(--btn-color-red)' : '1px solid var(--primery-color-blue)',
          color: formik.touched.password && formik.errors.password ? 'var(--btn-color-red)' : 'var(--primery-color-blue)',
        }}
      />
      {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
        <ErrorMessage>{formik.errors.repeatPassword}</ErrorMessage>
        ) : null}
        </div>

      <button type="submit">Sign Up</button>
    <NavLink to="/signin">Sign in</NavLink>
  </SignupForm>
  )
};

export default SignUpForm;
