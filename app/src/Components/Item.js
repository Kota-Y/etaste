import React from "react";
import { withRouter } from "react-router";
import "../CSS/Item.css";

class Item extends React.Component {
  render() {
    return (
      <div>
        <a href="http://takigawapan.jp/">滝川パン</a>
      </div>
    );
  }
}

export default withRouter(Item);
