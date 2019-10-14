import { withRouter } from "react-router";
import React from "react";
import "../CSS/Store-Preview.css";

class StorePreview extends React.Component {
  
  render() {
    return (
      <div className="storefin">
        <h1>StorePreview</h1>
        <button className='backhome' onClick={this.handleToHomePage}>ホームへ</button>
      </div>
    );
  }
}

export default withRouter(StorePreview);