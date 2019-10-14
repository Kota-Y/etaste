import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { withRouter } from 'react-router';

import SuperKlass from '../function/DefineConst';
import "../CSS/LoginFeature.css";

class ValidatedSignUpForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isAgreed: false,

            name_sei: '',
            name_mei: '',
            name_kana_sei: '',
            name_kana_mei: '',
            email: '',
            password: '',
            password_check: '',
        }

        this.handleToMailCheckPage = this.handleToMailCheckPage.bind(this)
    }

    onAgreementCheckboxChanged(newValue) {
        this.setState({ isAgreed: newValue })
    }
    
    handleToMailCheckPage = () => {
        this.props.history.push({
            pathname: "/mail-check",
            state: { name_sei: this.state.name_sei,
                    name_mei: this.state.name_mei,
                    name_kana_sei: this.state.name_kana_sei,
                    name_kana_mei: this.state.name_kana_mei,
                    email: this.state.email,
                    password: this.state.password,
                    password_check: this.state.password_check
            }
        });
    };
    
    render() {
        return(
            <Formik
                initialValues={{ 
                    name_sei: '',
                    name_mei: '',
                    name_kana_sei: '',
                    name_kana_mei: '',
                    email: '',
                    password: '',
                    password_check: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        this.handleToMailCheckPage();
                        axios
                            .post( SuperKlass.CONST.DOMAIN + '/user/', { 
                                values
                            })
                            .then((res) => {
                                console.log("登録しました");
                            })
                    }, 500);
                }}

                validationSchema={Yup.object().shape({
                    name_sei: Yup.string()
                        .required("必須項目です"),
                    name_mei: Yup.string()
                        .required("必須項目です"),
                    name_kana_sei: Yup.string()
                        .required("必須項目です"),
                    name_kana_mei: Yup.string()
                        .required("必須項目です"),
                    email: Yup.string()
                        .email("有効なメールアドレスではありません")
                        .required("必須項目です"),
                    password: Yup.string()
                        .required("必須項目です")
                        .min(8, "パスワードは8文字以上です")
                        .matches(/[a-zA-Z0-9]+/, "パスワードは半角英数字で入力してください"),
                    password_check: Yup.string()
                        .oneOf([Yup.ref('password')], "パスワードが一致しません")
                        .required("必須項目です")
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
                        <label htmlFor="email">姓</label>
                            <input
                            name="name_sei"
                            type="text"
                            placeholder="姓"
                            value={values.name_sei}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name_sei && touched.name_sei && "error"}
                        />
                        {errors.name_sei && touched.name_sei && (
                            <div className="input-feedback">{errors.name_sei}</div>
                        )}

                        <label htmlFor="email">名</label>
                            <input
                            name="name_mei"
                            type="text"
                            placeholder="名"
                            value={values.name_mei}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name_mei && touched.name_mei && "error"}
                        />
                        {errors.name_mei && touched.name_mei && (
                            <div className="input-feedback">{errors.name_mei}</div>
                        )}

                        <label htmlFor="email">セイ</label>
                            <input
                            name="name_kana_sei"
                            type="text"
                            placeholder="セイ"
                            value={values.name_kana_sei}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name_kana_sei && touched.name_kana_sei && "error"}
                        />
                        {errors.name_kana_sei && touched.name_kana_sei && (
                            <div className="input-feedback">{errors.name_kana_sei}</div>
                        )}

                        <label htmlFor="email">メイ</label>
                            <input
                            name="name_kana_mei"
                            type="text"
                            placeholder="メイ"
                            value={values.name_kana_mei}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name_kana_mei && touched.name_kana_mei && "error"}
                        />
                        {errors.name_kana_mei && touched.name_kana_mei && (
                            <div className="input-feedback">{errors.name_kana_mei}</div>
                        )}

                        <label htmlFor="email">メールアドレス</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="メールアドレスを入力"
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
                            placeholder="パスワードを入力"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password && "error"}
                        />
                        {errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}

                        <label htmlFor="email">パスワード(確認)</label>
                        <input
                            name="password_check"
                            type="password"
                            placeholder="再度パスワードを入力"
                            value={values.password_check}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password_check && touched.password_check && "error"}
                        />
                        {errors.password_check && touched.password_check && (
                            <div className="input-feedback">{errors.password_check}</div>
                        )}

                        <input
                            id="check"
                            type="checkbox"
                            name="check"
                            onClick={evt => {
                                this.onAgreementCheckboxChanged(evt.currentTarget.checked)
                            }}
                        /><label>利用規約・特定商品取引法に同意する</label>

                        <button
                            id="but"
                            type="submit"
                            disabled={isSubmitting || !this.state.isAgreed}
                        >
                            登録
                        </button>
                    </form>
                );
            }}
            </Formik>
        );
    }
}

/* const FormikForm = withFormik({
    mapPropsToValues({ title, body }) {
      return {
        title: title || '', // titleに値が入っていたらpropsで渡されたtitleを表示、または空表示
        body: body || ''
      }
    }
  })(ValidatedSignUpForm) */

export default withRouter(ValidatedSignUpForm);
