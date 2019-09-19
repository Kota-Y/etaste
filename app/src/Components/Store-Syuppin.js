
import { withRouter } from "react-router";
import React,{Component} from "react";
import "../CSS/Store-Syuppin.css";
import SuperKlass from './DefineConst';
import axios from 'axios';

const foodData = {
  id: 1,
  name:'滝川パン',
  originalPrice: 600,
  salePrice: 300,
  startTime: "1300",
  endTime: "1545",
  number: 3,
  allergy: "[卵,乳,小麦]",
  image: "https://dl.dropboxusercontent.com/s/fxss9wae0iq143q/an-pan.jpg",
  storeId: 2,
  storeName: "滝川パン"
};

  

class StoreSyuppin extends React.Component {
/*
  constructor(props){
    super(props);
    this.state = {
      foodData: [
        { id:1},
        { name: this.state.itemName}
      ]
  }
}
*/
  handleToStorefinPage = () => {
    this.props.history.push("/store-fin");
  };

  handlePostFoodInfo(){
    axios
        .post( SuperKlass.CONST.DOMAIN + '/food/', foodData)
        .then((res) => {
            alert("「" + foodData.name + "」登録完了");
            console.log(foodData.name);
        })
        .catch( (error) => {
            alert("「" + foodData.name + "」登録失敗");
            console.log(error, foodData);
        });
}
  
  render() {
    
    return (
      <div className='mainarea'>
        <div className='check-area'>
          <p>販売商品：{this.props.location.state.itemName}</p>
          <p>販売個数：{this.props.location.state.amount}</p>
          <p>受け取り開始時間：{this.props.location.state.startTime}</p>
          <p>受け取り終了時間：{this.props.location.state.endTime}</p>
          <p>定価：{this.props.location.state.originalprice}円</p>
          <p>販売価格：{this.props.location.state.saleprice}円</p>
          <p>アレルギー：</p>
        </div>
        <button className='storesubmit' onClick={this.handleToStorefinPage,this.handlePostFoodInfo}>確認完了</button>
      </div>
    );
  }
}

export default withRouter(StoreSyuppin);
