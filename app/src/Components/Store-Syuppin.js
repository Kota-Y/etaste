import { withRouter } from "react-router";
import React,{Component} from "react";


class StoreSyuppin extends React.Component {
  
  render() {
    return (
      <div>
        <h1>出品画面です</h1>
        <p>{this.props.location.state.text}</p>
      </div>
    );
  }
}

export default withRouter(StoreSyuppin);
