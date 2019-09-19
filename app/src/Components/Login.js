import React from "react";
import { withRouter } from "react-router";
import { FacebookLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";

class Login extends React.Component {
  
  render() {
    return (
      <div>
        <h1>ログイン画面</h1>
        <FacebookLoginButton onClick={() => alert("Hello")}>
            <span>Custom text</span>
        </FacebookLoginButton>
        <TwitterLoginButton onClick={() => alert("Hello")}>
            <span>Custom text</span>
        </TwitterLoginButton>
        <InstagramLoginButton onClick={() => alert("Hello")}>
            <span>Custom text</span>
        </InstagramLoginButton>
      </div>
    );
  }
}

export default withRouter(Login);
