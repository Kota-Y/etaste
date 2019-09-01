import { withRouter } from "react-router-dom";
import React from "react";
import SerchView from "./SerchView";
import '../CSS/Main.css';
import Recommend from "./Recommend";

class Home extends React.Component {
  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  render() {
    return (
      <div>
        <div className="bg-image">
          <div className="bg-mask">
            <SerchView />
            <button onClick={this.handleToSettingPage}>設定ページへ遷移する</button>
          </div>
        </div>
        <Recommend />
      </div>
    );
  }
}

export default withRouter(Home);
