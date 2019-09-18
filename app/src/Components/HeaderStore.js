import React from "react";
import { withRouter } from "react-router";
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

  render() {
    return (
      <div className="header">
        <div className="header-contents">
            <img src="./title.png" alt="" className="title" />
            <h2>出品入力</h2>
            <h2
                onClick={ this.handleToDealPage }
            >販売確認</h2>
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

export default withRouter(BranchingHeader);
