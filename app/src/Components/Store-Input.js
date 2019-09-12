import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "../CSS/Store-Input.css";
  
const styleKeys = [{ key: "indicatorsContainer" }];
  
const styleFn = base => ({ ...base, border: "5px solid #bac6d" });

class StoreInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleToStoreSyuppinPage = this.handleToStoreSyuppinPage.bind(this)
  }

  handleToStoreSyuppinPage = () => {
    this.props.history.push({
      pathname: "/store-syuppin",
      state:{text: this.state.text}
    });

  };
  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }
  

  render() {
    return (

      <div>
      <h1>店舗側入力</h1>
        <div className="box-store-input">
         <div>
            <h2>商品画像</h2>
          </div>
          
          <div className="item-name">
            <input type='text' value={this.state.text} onChange={this.handleChange} placeholder="商品名"/>
          </div>
          
          <div className="receipt-time">
            <input placeholder="受け取り時間"/>
          </div>
          
          <div className="item-price">
            <input placeholder="値段(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

          <div className="item-number">
            <input placeholder="個数(半角数字)"/>
          </div>
          <input onClick={this.handleToStoreSyuppinPage} type="submit" value="出品確認"/>
        </div>
      </div>
    );
  }
}

export default withRouter(StoreInput);