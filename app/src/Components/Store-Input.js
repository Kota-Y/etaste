import { withRouter } from "react-router";
import React from "react";
import "../CSS/Store-Input.css";
  
const styleKeys = [{ key: "indicatorsContainer" }];
  
const styleFn = base => ({ ...base, border: "5px solid #bac6d" });

class StoreInput extends React.Component {
  handleToStoreSyuppinPage = () => {
    this.props.history.push("/store-syuppin");
  };

  

  render() {
    return (

      <div>
      <h1>店舗側入力</h1>
        <div className="box-store-input">
         <div>
            <h2>商品画像</h2>
          </div>
          
          <div className="item-name">
            <input placeholder="商品名"/>
          </div>
          
          <div className="receipt-time">
            <input placeholder="受け取り時間"/>
          </div>
          
          <div className="item-price">
            <input placeholder="値段"/>
          </div>

          <div className="item-number">
            <input placeholder="個数"/>
          </div>
          <input onClick={this.handleToStoreSyuppinPage} type="submit" value="出品確認"/>
        </div>
      </div>
    );
  }
}

export default withRouter(StoreInput);