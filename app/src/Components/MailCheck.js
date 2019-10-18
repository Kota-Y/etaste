import React from "react";
import { withRouter } from "react-router";

/*
export let BackorFirst= (() =>{
    return this.state.backSignUp
});
*/


class MailCheck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backSignUp:true,
        }
    }
    handleToSignUpPage = () => {
        this.props.history.push({
        pathname: "/sign-up",
        state: { 
                name_sei: this.props.location.state.name_sei,
                name_mei: this.props.location.state.name_mei,
                name_kana_sei: this.props.location.state.name_kana_sei,
                name_kana_mei: this.props.location.state.name_kana_mei,
                email: this.props.location.state.email,
                password: this.props.location.state.password,
                password_check: this.props.location.state.password_check,
        }
    });
};
    render() {

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
