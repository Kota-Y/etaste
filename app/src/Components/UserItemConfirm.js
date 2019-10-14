import { withRouter } from "react-router";
import React from "react";
import SuperKlass from './DefineConst';
import axios from 'axios';
import "../CSS/UserItemConfirm.css";
  
class UserItemConfirm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isConfirm:false,
    }
  }

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
    /*合計購入金額の計算 */
    const ItemNum = Number(this.props.location.state.item_num_tobuy);
    const salePrice = Number(this.props.location.state.salePrice);    
    const sumPrice = salePrice * ItemNum;

    return (
      <div className='mainarea-inUserItemConfirm'>
        <div className='check-area-inUserItemConfirm'>
          <p>購入商品：{this.props.location.state.foodName}</p>
          <p>購入個数：{ItemNum}個</p>
          <p>購入金額：{sumPrice}円</p>
          <p>受取時間：{this.props.location.state.recieve_time_tobuy.label}</p>
          <p>受取場所：{this.props.location.state.storeName}</p>
        </div>
        <button className='storeconfirm' 
         onClick={ () =>{ 
          }}>確認完了</button>
      </div>
    );
  }
}



export default withRouter(UserItemConfirm);