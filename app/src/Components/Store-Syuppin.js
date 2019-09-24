
import { withRouter } from "react-router";
import React,{Component} from "react";
import "../CSS/Store-Syuppin.css";
import SuperKlass from './DefineConst';
import axios from 'axios';

  
class StoreSyuppin extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isConfirm:false,
      foodInfo:{},
    }
  }

  handleToStorefinPage = () => {
    this.props.history.push("/store-fin");
  };

  handlePostFoodInfo(){
    this.setState({
      foodInfo:{
          id: 1,//仮
          name: this.props.location.state.itemName,
          originalPrice: this.props.location.state.originalprice,
          salePrice:this.props.location.state.saleprice,
          startTime: this.props.location.state.startTime.value,
          endTime: this.props.location.state.endTime.value,
          amount: this.props.location.state.amount,
          allergys: [
            {
              id: 1,
              name: "卵"
            },
            {
              id: 3,
              name: "乳"
            },
            {
              id: 4,
              name: "小麦"
            }
          ],
          image: "https://dl.dropboxusercontent.com/s/fxss9wae0iq143q/an-pan.jpg",//S3から帰ってきたURl入れる
          storeId: 2,//ストア情報を取得して更新するように変更予定
          storeName: "滝川パン"//ストア情報を取得して更新するように変更予定
        }
    });  
    
    axios
        .post( SuperKlass.CONST.DOMAIN + '/food/', this.foodInfo)
        .then((res) => {
            console.log('succces'+this.foodInfo);
        })

        .catch( (error) => {
            alert("「" + this.foodInfo.name + "」登録失敗");
            console.log(error, this.foodInfo);
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