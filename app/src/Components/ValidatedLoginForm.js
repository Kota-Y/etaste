import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";

import "../CSS/LoginFeature.css";
import {store} from './Login';

/* ログイン用の決め打ちのメルアドとパスワード */
const userInfo = {
  email: 'etaste@aaa.com',
  password: 'etaste0712'
}

//ステートのマッピング
function mappingState(state){
  return state;
}

class ValidatedLoginForm extends React.Component{

  render(){
    return(
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
              if( userInfo.email ===  values.email && userInfo.password ===  values.password ){
                this.props.history.push("/");
                this.props.dispatch({ type:'LOGIN' });
                console.log(store.getState());
              } else {
                this.props.dispatch({ type:'NOTLOGIN' });
                console.log(store.getState());
              }
          }, 500);
        }}

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
              <button
                type="submit" 
                disabled={isSubmitting}
              >
                Login
              </button>
            </form>
          );
        }}
      </Formik>
  );}
}

//ストアのコネクト
ValidatedLoginForm = connect(mappingState)(ValidatedLoginForm);

export default withRouter(ValidatedLoginForm);
