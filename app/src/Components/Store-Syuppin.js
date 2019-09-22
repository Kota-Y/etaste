
import { withRouter } from "react-router";
import React,{Component} from "react";
import "../CSS/Store-Syuppin.css";
import SuperKlass from './DefineConst';
import axios from 'axios';

  
class StoreSyuppin extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isConfirm:false
    }
  }

  handleToStorefinPage = () => {
    this.props.history.push("/store-fin");
  };

  handlePostFoodInfo(){
    const foodData = {
      id: 1,//保留：ログイン状態から取得？
      name: this.props.location.itemName,
      originalPrice:this.props.location.state.originalprice,
      salePrice:this.props.location.state.saleprice,
      startTime:this.props.location.state.startTime.value,
      endTime:this.props.location.state.endTime.value,
    　amount:this.props.location.state.amount,
      allergy: "[卵,乳,小麦]",
      image: this.props.location.state.itemImage,
      storeId: 2,//保留：ログイン状態から取得
      storeName: "滝川パン"//保留：ログイン状態から取得
    
     /*
      id: 1,//保留：ログイン状態から取得？
      name: 'test',
      originalPrice:'test',
      salePrice:'test',
      startTime:'test',
      endTime:'test',
    　amount:'test',
      allergy: "[卵,乳,小麦]",
      image: 'test',
      storeId: 2,//保留：ログイン状態から取得
      storeName: "滝川パン"//保留：ログイン状態から取得*/
    };
    
    axios
        .post( SuperKlass.CONST.DOMAIN + '/food/', foodData)
        .then((res) => {
            console.log(foodData);
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
          <p>受け取り開始時間：{this.props.location.state.startTime.value}</p>
          <p>受け取り終了時間：{this.props.location.state.endTime.value}</p>
          <p>定価：{this.props.location.state.originalprice}円</p>
          <p>販売価格：{this.props.location.state.saleprice}円</p>
          <p>アレルギー：</p>
        </div>
        <button className='storeconfirm' 
        onClick={ () =>{ 
          this.handlePostFoodInfo();
          this.handleToStorefinPage();
          }}>確認完了</button>
      </div>
    );
  }
}

export default withRouter(StoreSyuppin);
