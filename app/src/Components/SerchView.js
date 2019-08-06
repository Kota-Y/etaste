import React from "react";
import "../CSS/SerchView.css";

class SerchView extends React.Component {
  render() {
    return (
      <div className="view">
        <div className="box-view">
          <h1>フードを探してみよう</h1>
          <div className="serch-area">
            <p> キーワード </p>
            <input />
            <p>エリア</p>
            <input />
            <p>受け取り時間</p>
            <input />
            <input type="submit" value="検索" />
          </div>
        </div>
      </div>
    );
  }
}

export default SerchView;
