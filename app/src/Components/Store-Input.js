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
      endTime:'',
      originalprice:'',
      saleprice:''
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
             endTime: this.state.endTime,
             originalprice: this.state.originalprice,
             saleprice: this.state.saleprice
              }
    });

  };

  handleChange(e){ //それぞれの要素のname属性に対応した変数にvalueを格納
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (

      <div>
      <h1>店舗側入力</h1>
        <div className="box-store-input">
          <div className='item-image'>
            <h2>商品画像</h2>
          </div>
          
          <div className="item-name">
            <input type='text' 
            value={this.state.itemName}　
            name='itemName' 
            onChange={this.handleChange} 
            placeholder="商品名"/>
          </div>
          
          <div className="startTime">
            <Select
              className='select'
              options={times}
              styles={{
                [styleKeys]: styleFn
              }}
              value={this.state.startTime}
              placeholder='受取開始時間'
              name='startTime'
              onChange={this.handleChange}
            />
          </div>

          <div className="endTime">
            <Select
              className='select'
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
          
          <div className="originalprice">
            <input 
            value={this.state.originalprice}　
            name='originalprice' 
            onChange={this.handleChange} 
            placeholder="定価(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

          <div className="saleprice">
            <input 
            value={this.state.saleprice}　
            name='saleprice' 
            onChange={this.handleChange} 
            placeholder="販売価格(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

        
          <div className="itemnumber">
            <input value={this.state.itemNumber}　
            name='itemNumber' 
            onChange={this.handleChange} 
            placeholder="個数(半角数字)"/>
            <h4 className='ko'>個</h4>
          </div>

          <div className="">
            <h3>アレルギー表示</h3>

          </div>
          <button className='storesubmit' onClick={this.handleToStoreSyuppinPage}>出品確認</button>
          {/*<input onClick={this.handleToStoreSyuppinPage} type="submit" value="出品確認"/>*/}
        </div>
      </div>
    );
  }
}

export default withRouter(StoreInput);