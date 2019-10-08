import React from "react";
import { withRouter } from "react-router";

class MailCheck extends React.Component {
    handleToSignUpPage = () => {
        this.props.history.push("/sign-up");
    };
  
    render() {
        console.log(this.props.location.state);
        return (
            <div className='mailcheck-container'>
                <h2>ご登録いただいたメールアドレスにメールが届いているか確認してください</h2>
                <div className='account-miss'>
                    <h2
                        onClick={ this.handleToSignUpPage }
                    >届いていない方はサインアップし直してください</h2>
                </div>
            </div>
        );
    }
}

export default withRouter(MailCheck);
