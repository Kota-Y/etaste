import { withRouter } from "react-router";
import React from "react";
import "../CSS/Setting.css";

class Setting extends React.Component {
  handleToOpensourcePage = () => {
    this.props.history.push("/opensource");
  };

  render() {
    return (
      <div>
        <h1>設定</h1>
        <h2>取引履歴</h2>
        <h2>プロフィール設定</h2>
        <h2>Q&A</h2>
        <h2>お問い合わせ</h2>
        <h2 onClick={this.handleToOpensourcePage}>オープンソース</h2>
        <h2>ログアウト</h2>
        <h2>退会について</h2>
      </div>
    );
  }
}

export default withRouter(Setting);
