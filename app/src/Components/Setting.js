import { withRouter } from "react-router";
import React from "react";
import "../CSS/Setting.css";

class Setting extends React.Component {
  handleToOpensourcePage = () => {
    this.props.history.push("/opensource");
  };
  handleToTradeHistoryPage = () => {
    this.props.history.push("/tradeHistory");
  };
  handleToTradeHistoryPage = () => {
    this.props.history.push("/profileset");
  };
  handleToQandAPage = () => {
    this.props.history.push("/qanda");
  };
  handleToContactPage = () => {
    this.props.history.push("/contact");
  };
  handleToUnsubscribePage = () => {
    this.props.history.push("/unsubscribe");
  };
  handleToStoreDealPage = () => {
    this.props.history.push("/deal");
  };

  render() {
    return (
      <div>
        <h1>設定</h1>
        <h2 onClick={this.handleToStoreDealPage}>取引履歴</h2>
        <h2 onClick={this.handleToTradeHistoryPage}>プロフィール設定</h2>
        <h2 onClick={this.handleToQandAPage}>Q&A</h2>
        <h2 onClick={this.handleToContactPage}>お問い合わせ</h2>
        <h2 onClick={this.handleToOpensourcePage}>オープンソース</h2>
        <h2>ログアウト</h2>
        <h2　onClick={this.handleToUnsubscribePage}>退会について</h2>
      </div>
    );
  }
}

export default withRouter(Setting);
