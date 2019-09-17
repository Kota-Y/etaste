import { withRouter } from "react-router";
import React from "react";
import "../CSS/Store-fin.css";

class Storefin extends React.Component {
  handleToHomePage = () => {
    this.props.history.push("/");
  };
  
  render() {
    return (
      <div className="storefin">
        <h1>出品完了しました</h1>
        <button className='backhome' onClick={this.handleToHomePage}>確認完了</button>
      </div>
    );
  }
}

export default withRouter(Storefin);
