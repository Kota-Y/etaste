import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select from "react-select";
import "../CSS/Store-Input.css";
  
const styleKeys = [{ key: "indicatorsContainer" }];
  
const styleFn = base => ({ ...base, border: "5px solid #bac6d" });

const times = [
  { values: "12:00", label: "12:00" },
  { values: "13:00", label: "13:00" },
  { values: "14:00", label: "14:00" },
  { values: "15:00", label: "15:00" },
  { values: "16:00", label: "16:00" }
];

class StoreInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemName: '',
      itemNumber:'',
      startTime:'',
      endTime:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleToStoreSyuppinPage = this.handleToStoreSyuppinPage.bind(this)
  }

  handleToStoreSyuppinPage = () => {
    this.props.history.push({
      pathname: "/store-syuppin",
      state:{itemName: this.state.itemName,
             itemNumber: this.state.itemNumber,
             startTime: this.state.startTime,
             endTime: this.state.endTime
              }
    });

  };

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleChange2(e){    //select用
    this.setState({
      [e.target.name]: e.target.options
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
            <input type='text' value={this.state.itemName}　name='itemName' onChange={this.handleChange} placeholder="商品名"/>
          </div>
          
          <div className="receipt-time">
            <Select
              options={times}
              styles={{
                [styleKeys]: styleFn
              }}
              value={this.state.startTime}
              placeholder='受取開始時間'
              name='startTime'
              onChange={this.handleChange2}
            />
          </div>

          <div className="receipt-time">
            <Select
              options={times}
              styles={{
                [styleKeys]: styleFn
              }}
              placeholder='受取終了時間'
              value={this.state.endTime}
              name='endTime'
              onChange={this.handleChange}
            />
          </div>
          
          <div className="originlprice">
            <input placeholder="定価(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

          <div className="saleprice">
            <input placeholder="販売価格(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

        
          <div className="item-number">
            <input value={this.state.itemNumber}　name='itemNumber' onChange={this.handleChange} placeholder="個数(半角数字)"/>
          </div>

          <div className="">
            <h3>アレルギー表示</h3>

            <input placeholder="アレルギー"/>
          </div>

          <input onClick={this.handleToStoreSyuppinPage} type="submit" value="出品確認"/>
        </div>
      </div>
    );
  }
}

export default withRouter(StoreInput);