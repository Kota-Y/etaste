import React from "react";
import "../CSS/Header.css";
//import title_log from "../image/title.png";

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <div class="header-left">
          {/*<img src="./image/logo.png" alt="" class="logo" />*/}
          <img src="./image/title.png" alt="" class="title" />
          <div id="ham-menu">
            <ul>
              <li>Home</li>
              <li>お気に入り店舗</li>
              <li>受け取り予定・履歴</li>
              <li>設定</li>
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

export default Header;
