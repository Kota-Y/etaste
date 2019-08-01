import { withRouter } from "react-router";
import React from "react";

class Setting extends React.Component {
  handleToSettingPage = () => {
    this.props.history.push("/setting");
  };

  render() {
    return (
      <div>
        <h1>設定画面です</h1>
      </div>
    );
  }
}

export default withRouter(Setting);
