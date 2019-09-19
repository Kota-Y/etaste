import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select from "react-select";
import "../CSS/Store-Input.css";
  
const styleKeys = [{ key: "indicatorsContainer" }];
  
const styleFn = base => ({ ...base, border: "5px solid #bac6d" });


const times = [
  { value: "12:00", label: "12:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" }
];

class StoreInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemImage:'',
      itemName: '',
      amount:'',
      originalprice:'',
      saleprice:'',
      allergies:[],
      isButton:true,
      sonota:'',
      isSonota:true,
      //以下アレルギー表示関係
      isShrimp:false,
      isTamago:false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleToStoreSyuppinPage = this.handleToStoreSyuppinPage.bind(this)
    this.handleChangedisable = this.handleChangedisable.bind(this)
    this.handleChangeFile = this.handleChangeFile.bind(this)
    this.handleChangeTamago = this.handleChangeTamago.bind(this)
  }
  state = {
    startTime: null,
    endTime:null
  };

  handleToStoreSyuppinPage = () => {
    this.props.history.push({
      pathname: "/store-syuppin",
      state:{itemName: this.state.itemName,
             amount: this.state.amount,
             startTime: this.state.startTime,
             endTime: this.state.endTime,
             originalprice: this.state.originalprice,
             saleprice: this.state.saleprice
          }
    });
  };

  handleChange(e){ //それぞれの要素のname属性に対応した変数にvalueを格納
    this.setState({
      [e.target.name]: e.target.value,
      isButton:!(this.state.itemName)
    })
  }
  handleChangeselectS = startTime => {
    this.setState({ startTime });
    console.log(`Option selected:`, startTime);
  };

  handleChangeselectE = endTime => {
    this.setState({ endTime });
    console.log(`Option selected:`, endTime);
  };

  handleChangeFile(e){
    var files = e.target.files;
    var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    var image_url = files.length===0 ? "" : createObjectURL(files[0]);
    this.setState({itemImage: image_url});
  }
 
  handleChangedisable(e){
    this.setState({
      isSonota:!(this.state.isSonota)
    });
  }

  handleChangeTamago(e){
    this.setState({
      isTamago:!(this.state.isTamago)
    });
  }

  
  render() { 
    var tamago = {
      backgroundImage: 'url(../bg_photo/photo_1.jpg)'
    };
    var tamagogrey = {
      backgroundImage: 'url(../bg_photo/tamagogrey.jpg)'
    };
    var styleTamago = this.state.isTamago ? tamago : tamagogrey;   

    return (
      <div>
      <h1>店舗側入力</h1>
        <div className="box-store-input">
          <div className='item-image'>
            <input type="file" ref="file" onChange={this.handleChangeFile} />
            <img className='item-imageflame' src={this.state.itemImage}/>
          </div>
          
          <div className="item-name">
            <input type='text' 
            className='storeinputinput'
            value={this.state.itemName}　
            name='itemName' 
            onChange={this.handleChange} 
            placeholder="商品名"/>
          </div>
          
          <div className="startTime">
            <Select
              className='timeselect'
              options={times}
              styles={{
                [styleKeys]: styleFn
              }}
              value={this.state.startTime}
              placeholder='受取開始時間'
              name='startTime'
              onChange={this.handleChangeselectS}
            />
          </div>

          <div className="endTime">
            <Select
              className='timeselect'
              options={times}
              styles={{
                [styleKeys]: styleFn
              }}
              placeholder='受取終了時間'
              value={this.state.endTime}
              name='endTime'
              onChange={this.handleChangeselectE}>
              </Select>
          </div>

          <div className="originalprice">
            <input 
            className='storeinputinput'
            value={this.state.originalprice}　
            name='originalprice' 
            onChange={this.handleChange} 
            placeholder="定価(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

          <div className="saleprice">
            <input
            className='storeinputinput'
            value={this.state.saleprice}　
            name='saleprice' 
            onChange={this.handleChange} 
            placeholder="販売価格(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

          <div className="amount">
            <input 
            className='storeinputinput'
            value={this.state.itemNumber}　
            name='amount' 
            onChange={this.handleChange} 
            placeholder="個数(半角数字)"/>
            <h4 className='ko'>個</h4>
          </div>

          <div className="allergies"> 
            <h3>アレルギー表示</h3>
            <div className='allergiecom'>
              <button className='tamago' style={styleTamago} onClick={this.handleChangeTamago}></button>
              <button className='tamago'/*onClick={this.handleChangedisable}*/></button>
              </div>
{/*} 
            <button className='isSonota' onClick={this.handleChangedisable}>その他</button>
           
           <Select
            options={allergiefoods}
            isMulti
            placeholder='その他'
            />
           <input name='sonota' 
            onChange={this.handleChange} 
            placeholder='アレルギーを入力してください'
            disabled={this.state.isSonota}/>*/}
          </div>
          
          <button className='storesubmit' onClick={this.handleToStoreSyuppinPage} 
          disabled={this.state.isButton}>出品確認</button>
        </div>
      </div>
    );
  }
}

export default withRouter(StoreInput);