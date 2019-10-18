import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { store } from "./Login";
import "../CSS/Header.css";

class Header extends React.Component {
  handleToHomePage = () => {
    this.props.history.push("/");
  };

  handleToFavoriteListPage = () =>{
    this.props.history.push('/favorite-list');
  };

  handleToUserDealPage = () => {
    this.props.history.push("/deal");
  };

  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  handleToUserFinPage = () => {
    this.props.history.push("/user-fin");
  };

  handleToLoginPage = () => {
    this.props.history.push("/login");
  };

  handleToSignUpPage = () => {
    this.props.history.push({
    pathname: "/sign-up",
    state: { 
            name_sei: '',
            name_mei: '',
            name_kana_sei:'',
            name_kana_mei: '',
            email: '',
            password:'',
            password_check:'',
    }
});
};

  render() {
    return (
      <div className="header">
        {(() => {
          if ( store.getState().isLoggedIn ) {
            return (
              <div className="header-contents">
                <img src="./title.png" alt="" className="title" />
                <h2
                  onClick={ this.handleToSettingPage }
                >設定</h2>
                <h2
                  onClick={ this.handleToUserDealPage }
                >受取予定・履歴</h2>
                <h2
                  onClick={ this.handleToFavoriteListPage }
                >お気に入り店舗</h2> 
              </div>)
          } else {
            return (
              <div className="header-contents">
                <img src="./title.png" alt="" className="title" />
                <h2
                  onClick = { this.handleToLoginPage }
                >ログイン</h2>
                <h2
                  onClick = { this.handleToSignUpPage }
                >新規登録</h2>
                <h2
                  onClick = { this.handleToLoginPage }
                >受取予定・履歴</h2>
                <h2
                  onClick = { this.handleToLoginPage }
                >お気に入り店舗</h2>
              </div>
            )
          }
        })()}
        <div id="ham-menu">
          <ul>
            <h3
              onClick={() => {
                this.handleToHomePage();
              }}
            >
              Home
            </h3>
            <h3
              onClick={() => {
                this.handleToFavoriteListPage();
              }}
            >
              お気に入り店舗
            </h3>
            <h3
              onClick={() => {
                this.handleToUserDealPage();
              }}
            >
              受け取り予定・履歴
            </h3>
            <h3
              onClick={() => {
                this.handleToSettingPage();
              }}
            >
              設定
            </h3>
            <h3
              onClick={() => {
                this.handleToUserFinPage();
              }}
            >
              テスト購入ボタン
            </h3>
          </ul>
        </div>
        <div id="menu-background" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(withRouter(Header));
