
import { withRouter } from "react-router";
import React from "react";
import "../CSS/Store-Syuppin.css";
import SuperKlass from './DefineConst';
import axios from 'axios';

  
class StoreSyuppin extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isConfirm:false,
      foodInfo:{
        id: 1,//仮
        name: this.props.location.state.itemName,
        originalPrice: this.props.location.state.originalprice,
        salePrice:this.props.location.state.saleprice,
        startTime: this.props.location.state.startTime.value,
        endTime: this.props.location.state.endTime.value,
        amount: this.props.location.state.amount,
        allergys:this.props.location.state.allergys,
        image: this.props.location.state.s3url,//S3から帰ってきたURl入れる
        storeId: 2,//ストア情報を取得して更新するように変更予定
        storeName: "滝川パン"//ストア情報を取得して更新するように変更予定
      },
    }
  }

  handleToStorefinPage = () => {
    this.props.history.push("/store-fin");
    console.log(this.state.foodInfo.name);
    console.log(this.state.foodInfo.originalPrice);
    console.log(this.state.foodInfo.salePrice);
    console.log(this.state.foodInfo.startTime);
    console.log(this.state.foodInfo.endTime);
    console.log(this.state.foodInfo.amount);
    console.log(this.state.foodInfo.allergys);
    console.log(this.state.foodInfo.image);
  };

  handlePostFoodInfo(){
    axios
        .post( SuperKlass.CONST.DOMAIN + '/food/', this.foodInfo)
        .then((res) => {
            console.dir('succces'+this.state.foodInfo);
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
          <p>受け取り開始時間：{this.props.location.state.startTime.label}</p>
          <p>受け取り終了時間：{this.props.location.state.endTime.label}</p>
          <p>定価：{this.props.location.state.originalprice}円</p>
          <p>販売価格：{this.props.location.state.saleprice}円</p>
          <p>アレルギー：</p>
          <p>{this.props.location.state.allergys.map((e)=>e.name+' ')}</p>
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