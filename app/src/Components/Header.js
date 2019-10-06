import React from "react";
import { withRouter } from "react-router";
import { Provider } from "react-redux";
//import { render } from 'react-dom';

//import { isLogin } from "../function/DefineConst";
import { store } from "./Login";
//import { mappingState } from "./ValidatedLoginForm";
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
    this.props.history.push("/sign-up");
  };

  render() {
    return (
      <Provider store={store}>
      <div className="header">
        {(() => {
          console.log(store.getState());
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
      </Provider>
    );
  }
}

export default withRouter(Header);
