import React from "react";
import { withRouter } from "react-router";

import "../CSS/LoginFeature.css";
import ValidatedSignUpForm from "./ValidatedSignUpForm";

class SignUp extends React.Component {
    /* handleToMailCheckPage = () => {
        this.props.history.push("/mail-check");
    }; */
    render() {
        return (
        <div className='signup-container'>
            {/* <form>
                <div>
                    <p class="req">氏名</p>
                    <input type="text" placeholder="氏名" name="text" required autoForcus />
                </div>
                <div>
                    <p class="req">メールアドレス</p>
                    <input type="email" placeholder="メールアドレス" name="email"
                            pattern="[\w\d_-]+@[\w\d_-]+\.[\w\d._-]+" required />
                </div>
                <div>
                    <p>電話番号</p>
                    <input type="tel" placeholder="電話番号" name="tel"
                            pattern="^\d{11}$|^\d{3,4}-\d{3,4}-\d{4}$"/>
                </div>
                <button type="submit">送信する</button>
            </form> */}
            <ValidatedSignUpForm />  
        </div>
    );
  }
}

export default withRouter(SignUp);
