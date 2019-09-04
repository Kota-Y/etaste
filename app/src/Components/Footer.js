import React from "react";
import { withRouter } from "react-router";

import "../CSS/Footer.css";

class Footer extends React.Component {
  handleToHomePage = () => {
    this.props.history.push("/");
  };

  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  handleToItemPage = () => {
    this.props.history.push("/item");
  };

  render() {
    return (
      <div className="footer">
        <h1>↓　Footer　↓</h1>
        <button
          onClick={() => {
            this.handleToHomePage();
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            this.handleToSettingPage();
          }}
        >
          設定
        </button>
        <button
          onClick={() => {
            this.handleToItemPage();
          }}
        >
          Item
        </button>
      </div>
    );
  }
}

export default withRouter(Footer);
