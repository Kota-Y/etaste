import React from "react";
import { withRouter } from "react-router";
import { FacebookLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";

import '../CSS/LoginFeature.css'
import ValidatedLoginForm from "./ValidatedLoginForm";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
    }

    handleToSignUpPage = () => {
        this.props.history.push("/sign-up");
    };
  
    render() {
        //const { email, password } = this.state;

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
                {/* <form onSubmit={this.handleSubmit}　className='input-form'>
                    <label htmlFor="email">Email</label>
                    <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="email">Password</label>
                    <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={this.handleChange}
                    />
                    <h2>Login</h2>
                </form> */}
                <ValidatedLoginForm />
                {/* <form>
                    <div className='input-form'>
                        <label>メールアドレス</label>
                        <input type="email" name="mailAdress" />
                    </div>
                    <div className='input-form'>
                        <label>パスワード</label>
                        <input type="password" name="password" />
                    </div>
                </form> 
                <h2>ログイン</h2>*/}
                <h3>パスワードを忘れた方</h3>
                <h3
                    onClick={ this.handleToSignUpPage }
                >アカウント新規作成</h3>
            </div>
        );
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
      };
}

export default withRouter(Login);
