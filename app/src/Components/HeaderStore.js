import React from "react";
import { withRouter } from "react-router";

import { isLogin } from "../function/DefineConst";
import "../CSS/Header.css";

class BranchingHeader extends React.Component {
  handleToHomePage = () => {
    this.props.history.push("/");
  };

  handleToFavoriteListPage = () =>{
    this.props.history.push('/favorite-list');
  }

  handleToDealPage = () => {
    this.props.history.push("/deal");
  };

  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  handleToLoginPage = () => {
    this.props.history.push("/login");
  };

  handleToSignUpPage = () => {
    this.props.history.push("/sign-up");
  };

  render() {
    return (
      <div className="header">
        {(() => {
              if ( isLogin ) {
                return (
                  <div className="header-contents">
                    <img src="./title.png" alt="" className="title" />
                    <h2
                      onClick = { this.handleToSettingPage }
                    >設定</h2>
                    <h2>出品入力</h2>
                    <h2
                        onClick={ this.handleToDealPage }
                    >販売確認</h2> 
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
                        this.handleToDealPage();
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
                </ul>
            </div>
            <div id="menu-background" />
        </div>
    );
  }
}

export default withRouter(BranchingHeader);
