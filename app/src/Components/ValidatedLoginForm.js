import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";

import "../CSS/LoginFeature.css";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
        email: Yup.string()
            .email("有効なメールアドレスではありません")
            .required("必須項目です"),
        password: Yup.string()
            .required("必須項目です")
            .min(8, "パスワードは8文字以上です")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit} className='input-form'>
          <label htmlFor="email">メールアドレス</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
