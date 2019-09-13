import { withRouter } from "react-router";
import React,{Component} from "react";


class StoreSyuppin extends React.Component {
  
  render() {
    return (
      <div>
        <h1>出品画面です</h1>
        <p>{this.props.location.state.itemName}</p>
        <p>{this.props.location.state.itemNumber}</p>
        <p>{this.props.location.state.startTime}</p>
        <p>{this.props.location.state.endTime}</p>
      </div>
    );
  }
}

export default withRouter(StoreSyuppin);
