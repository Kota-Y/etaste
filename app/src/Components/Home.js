import { withRouter } from "react-router";
import React from "react";

class Home extends React.Component {
  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  render() {
    return (
      <div>
        <h1>Homeです</h1>
        <button onClick={this.handleToSettingPage}>設定ページへ遷移する</button>
      </div>
    );
  }
}

export default withRouter(Home);
