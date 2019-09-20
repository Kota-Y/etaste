import React from "react";
import { withRouter } from "react-router";

import "../CSS/LoginFeature.css";

class SignUp extends React.Component {
  
  render() {
    return (
      <div className='signup-container'>
            <div>
                <form>
                    <div className='input-form'>
                        <label>姓</label>
                        <input type="text" name="password" />
                        <label>名</label>
                        <input type="text" name="password" />
                        <label>セイ</label>
                        <input type="text" name="password" />
                        <label>メイ</label>
                        <input type="text" name="password" />
                        <label>メールアドレス</label>
                        <input type="email" name="mailAdress" />
                        <label>パスワード</label>
                        <input type="text" name="password" />
                        <label>パスワード確認</label>
                        <input type="text" name="password" />
                        <input type="checkbox" name="check" /><label>利用規約・特定商品取引法に同意する</label>
                    </div>
                </form>
            </div>
            <div className='comp-button'>
                <h2>完了</h2>
            </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
