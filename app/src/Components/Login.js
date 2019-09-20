import React from "react";
import { withRouter } from "react-router";
import { FacebookLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";

import '../CSS/LoginFeature.css';

class Login extends React.Component {
    handleToSignUpPage = () => {
        this.props.history.push("/sign-up");
    };
  
  render() {
    return (
        <div className='login-page'>
            <div className='social-login-button'>
                <FacebookLoginButton size='45px'>
                    <span>Facebookでログイン</span>
                </FacebookLoginButton >
                <TwitterLoginButton size='45px'>
                    <span>Twitterでログイン</span>
                </TwitterLoginButton>
                <InstagramLoginButton size='45px'>
                    <span>Instagramでログイン</span>
                </InstagramLoginButton>
            </div>
            <form>
                <div className='input-form'>
                    <input type="email" name="mailAdress" value="メールアドレス" />
                </div>
                <div className='input-form'>
                    <input type="password" name="password" value="パスワード" />
                </div>
            </form>
            <h2>ログイン</h2>
            <h3>パスワードを忘れた方</h3>
            <h3
                onClick={ this.handleToSignUpPage }
            >アカウント新規作成</h3>
        </div>
    );
  }
}

export default withRouter(Login);
