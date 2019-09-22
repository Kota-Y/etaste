import React from "react";
import { withRouter } from "react-router";
import axios from "axios";

import SuperKlass from "../function/DefineConst";
import "../CSS/LoginFeature.css";

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name_sei: '',
            name_mei: '',
            name_kana_sei: '',
            name_kana_mei: '',
            email: '',
            password: '',
            password_check: ''
        }
    }

    /* 入力に応じてsetState するためのイベントハンドラ */
    changeNameSei = (e) => {
        this.setState({
            name_sei: e.target.value
        })
    }

    changeNameMei = (e) => {
        this.setState({
            name_mei: e.target.value
        })
    }

    changeNameKanaSei = (e) => {
        this.setState({
            name_kana_sei: e.target.value
        })
    }

    changeNameKanaMei = (e) => {
        this.setState({
            name_kana_mei: e.target.value
        })
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    changePasswordCheck = (e) => {
        this.setState({
            password_check: e.target.value
        })
    }

    handleToMailCheckPage = () => {
        this.props.history.push("/mail-check");
        console.log(this.state);
    };

    handlePostPersonal(){
        axios
            .post( SuperKlass.CONST.DOMAIN + '/user/', { 
                "firstName": this.state.name_sei,
                "lastName": this.state.name_mei,
                "firstNameKana": this.state.name_kana_sei,
                "lastNameKana": this.state.name_kame_mei,
                "email": this.state.email,
                "password": this.state.password
             })
            .then((res) => {
                console.log("登録しました");
            })
    }
  
    render() {
        return (
        <div className='signup-container'>
            <div>
                <form>
                    <div className='input-form'>
                        <label>姓</label>
                        <input type="text" name="name_sei"  value={this.state.name_sei} onChange={this.changeNameSei} />
                        <label>名</label>
                        <input type="text" name="name_mei" value={this.state.name_mei} onChange={this.changeNameMei} />
                        <label>セイ</label>
                        <input type="text" name="name_kana_sei" value={this.state.name_kana_sei} onChange={this.changeNameKanaSei} />
                        <label>メイ</label>
                        <input type="text" name="name_kana_mei" value={this.state.name_kana_mei} onChange={this.changeNameKanaMei} />
                        <label>メールアドレス</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.changeEmail} />
                        <label>パスワード</label>
                        <input type="text" name="password" value={this.state.password} onChange={this.changePassword} />
                        <label>パスワード確認</label>
                        <input type="text" name="password_check" value={this.state.password_check} onChange={this.changePasswordCheck} />
                        <input type="checkbox" name="check" /><label>利用規約・特定商品取引法に同意する</label>
                    </div>
                </form>
            </div>
            <div className='comp-button'>
                <h2
                    onClick={() =>{
                        this.handleToMailCheckPage();
                        this.handlePostPersonal();
                    } }
                >完了</h2>
            </div>
        </div>
    );
  }
}

export default withRouter(SignUp);
