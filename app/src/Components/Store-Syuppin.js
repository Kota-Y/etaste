import { withRouter } from "react-router";
import React,{Component} from "react";
import "../CSS/Store-Syuppin.css";

class StoreSyuppin extends React.Component {
  
  handleToStorefinPage = () => {
    this.props.history.push("/store-fin");
  };
  
  render() {
    return (
      <div className='main'>

        <div className='check-area'>
          <p>購入商品：{this.props.location.state.itemName}</p>
          <p>購入個数：{this.props.location.state.itemNumber}</p>
          <p>受け取り開始時間：{this.props.location.state.startTime}</p>
          <p>受け取り終了時間：{this.props.location.state.endTime}</p>
          <p>定価：{this.props.location.state.originalprice}円</p>
          <p>販売価格：{this.props.location.state.saleprice}円</p>
          <p>アレルギー：</p>
        </div>
        <button className='storesubmit' onClick={this.handleToStorefinPage}>確認完了</button>
      </div>
    );
  }
}

export default withRouter(StoreSyuppin);
