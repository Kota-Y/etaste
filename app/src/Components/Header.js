import React from "react";
import { withRouter } from "react-router";
//import Home from "./Home";
//import Setting from "./Setting";
import "../CSS/Header.css";
//import title_log from "../image/title.png";

class Header extends React.Component {
  handleToHomePage = () => {
    this.props.history.push("/");
  };

  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  render() {
    return (
      <div class="header">
        <div class="header-left">
          {/*<img src="./image/logo.png" alt="" class="logo" />*/}
          <img src="./image/title.png" alt="" class="title" />
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
