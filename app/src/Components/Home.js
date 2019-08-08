import { withRouter } from "react-router";
import React from "react";
import SerchView from "./SerchView";
import '../CSS/Main.css';

class Home extends React.Component {
  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  render() {
    return (
      <div className='home'>
        <SerchView />
        <button onClick={this.handleToSettingPage}>設定ページへ遷移する</button>
      </div>
    );
  }
}

export default withRouter(Home);
