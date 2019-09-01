import React from "react";
import { withRouter } from "react-router";
import "../CSS/Header.css";

class Header extends React.Component {
  handleToHomePage = () => {
    this.props.history.push("/");
  };

  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img src="./title.png" alt="" className="title" />
          <div id="ham-menu">
            <ul>
              <button
                onClick={() => {
                  this.handleToHomePage();
                }}
              >
                Home
              </button>
              <li>お気に入り店舗</li>
              <li>受け取り予定・履歴</li>
              <button
                onClick={() => {
                  this.handleToSettingPage();
                }}
              >
                設定
              </button>
              <li>ヘルプ</li>
              <li>サインアップ</li>
              <li>ログイン</li>
            </ul>
          </div>
          <div id="menu-background" />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
