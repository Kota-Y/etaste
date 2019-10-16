import React from "react";
import "../CSS/Store-Preview.css";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import Select from "react-select";

import SuperKlass from '../function/DefineConst';
import {strTimeEdit}from '../function/storeTime';
import StoreComponent from '../function/storeComponent';

class StorePreview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        /* Store情報のstate */
        storeName: '',
        access: '',
        address: '',
        areaCity: '',
        areaOther: '',
        areaPref: '',
        closeTime: '',
        holiday: '',
        storeId: '',
        image: '',
        mapLatitude: '',
        mapLongitude: '',
        openTime: '',
        parking: '',
        tel: '',
        url: '',
        zip: '',
        itemName: this.props.location.state.itemName,
        amount: this.props.location.state.amount,
        startTime: this.props.location.state.startTime,
        endTime: this.props.location.state.endTime,
        originalprice: this.props.location.state.originalprice,
        saleprice: this.props.location.state.saleprice,
        allergys:this.props.location.state.allergys,
        itemImage:this.props.location.state.s3url,
        /* お気に入りボタンの画像の切り替え */
        isOpen: true,
       }
    }

    componentDidMount() { 
      console.log(this.props.location.state.s3url);
      console.log(this.state.itemImage);
      /* Storeの情報をGETするメソッド(id1について) */
      axios
          .get(　SuperKlass.CONST.DOMAIN + '/store/', {
                  headers: { "Content-Type": "application/json" },
                  data: {},
              })
          .then( (res) => {
                  this.setState({
                      storeName: res.data.name,
                      access: res.data.access,
                      address: res.data.address,
                      areaCity: res.data.areaCity,
                      areaOther: res.data.areaOther,
                      areaPref: res.data.areaPref,
                      closeTime: res.data.closeTime,
                      holiday: res.data.holiday,
                      storeId: res.data.id,
                      image: res.data.image,
                      mapLatitude: res.data.mapLatitude,
                      mapLongitude: res.data.mapLongitude,
                      openTime: res.data.openTime,
                      parking: res.data.parking,
                      tel: res.data.tel,
                      url: res.data.url,
                      zip: res.data.zip
              });
          })
          .catch( (error) => {
              console.log('通信に失敗しました');
          });
        }

    /* お気に入りするときにストア情報をポストするメソッド */
    handlePostStoreInfo(){
      if( this.state.isOpen ){
          axios
              .post( SuperKlass.CONST.DOMAIN + '/favorite/', {
                  storeId: this.state.storeId,
                  storeName: this.state.storeName,
                  userId: this.state.userId
              })
              .then((res) => {
                  console.log("登録しました");
              })
      } else if( !this.state.isOpen ) {
          axios
              .delete( SuperKlass.CONST.DOMAIN + '/favorite/' + this.state.storeId)
              .then( (res) => {
                  console.log("削除しました");
              })
      }
  }
    /* お気に入りボタンの色の切り替え */
    toggleImage = () => {
      this.setState(state => ({ isOpen: !state.isOpen }))
    }
  
    getImageName = () => this.state.isOpen ? 'favGray' : 'fav';

  render() {

    const imageName = this.getImageName();

    /* 営業時間の先頭が0の場合に消す処理 */
    const business_hours = strTimeEdit( this.state.openTime ) + '〜' + strTimeEdit( this.state.closeTime );

    /* 受け取り可能時間の先頭が0の場合に消す処理 */
    const receiveTime = strTimeEdit( this.state.startTime ) + '〜' + strTimeEdit( this.state.endTime );

    return (
      <div className="">
        <div className='Item-inUserItem'>
            <div className='preview-message'>
            <h1>プレビュー中です</h1>          
            </div>
            <img className='ItemImage-inUserItem' src={this.state.itemImage} alt=''/>
            <div className='Item-container'>
                <div>
                <h1>{this.state.itemName}</h1>
                <div className='price price-inUserItem'>
                    <h3 className='dot-inUserItem'>・</h3>
                    <h3 className='deleat'>{ this.state.originalprice + '円'}</h3>
                    <h3> → </h3> 
                    <h3 className='salePrice'>{this.state.saleprice + '円' }</h3>
                </div>
                
                <h4>・受け取り可能時間 {receiveTime}</h4>
                <h4>・{this.state.storeName}</h4>
                </div>
                
                <div className='history-of-exhibition'>
                <h1>出品経緯</h1>
                <div className='whySale-inUserItem'>
                <h3>{this.state.whySale}</h3>
                </div>

                </div>

                <div className='allergy-show'>
                <h1>アレルギー表示</h1>
                <div className='allergy-show-area'>
                {this.state.allergys.map(e=>
                    <AllergyBox name={e.name}
                    />)}
                </div>
                </div>

                <div className='item-num'>
                <h1>購入個数</h1>
                <div>
                <input
                className='useriteminput'
                placeholder="購入希望個数を入力(半角数字)"/>
                </div>
                </div>

                <div className='receive-time'>
                <h1>受け取り時間</h1>
                <div>
                <Select
                className='timeselect-inUserItem'
                placeholder='受取希望時間を選択'
                />
                </div>
                </div>
                <button className='storesubmit'
                disabled={true}>購入確認</button>
            </div>
        </div>
        <div className='store-detail-inUserItem'>
            <div className='store-info-inUserItem'>
                <div className='store-component-inUserItem'>
                    <StoreComponent />
                </div>
                <div className='favorite-icon-gray-inUserItem'>
                    <img src={imagesPath[imageName]} alt='' 
                        onClick = { () =>{
                            this.toggleImage();
                            this.handlePostStoreInfo();
                        }}
                    />
                </div>
                <div className='store-name'>
                    <h3>{ this.state.storeName }</h3>
                    <h3>{ business_hours }</h3>
                    <h3>{ this.state.holiday }</h3>
                    <h3 className='zip'>{ '〒' + this.state.zip }</h3>
                    <h3 className='address'>{ this.state.address }</h3>
                    <h3>{ this.state.tel }</h3>
                    <h3>
                        <a href={this.state.url}>{ this.state.url }</a>
                    </h3>
                </div>
            </div>
            <div className='map-inUserItem'>
                <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                center={{ lat: Number(this.state.mapLatitude), lng: Number(this.state.mapLongitude)}}
                >
                    <Marker 
                        position={{ lat: Number(this.state.mapLatitude), lng: Number(this.state.mapLongitude)}}
                        name={this.state.storeName}
                    />
                </Map>
            </div> 
        </div>
    </div>
    );
  }
}
const AllergyBox = ({name})  => (
  <div className='allergy-box'>
      <h4>{name}</h4>
  </div>
);
const imagesPath = {
  fav: "./image/fav.png",
  favGray: "./image/fav-gray.png"
}

const mapStyles = {
  width: '78vw',
  height: '38vw',
  margin: '20px'
};

export default withRouter(GoogleApiWrapper({
  apiKey: 'AIzaSyC0J0FF5y8zA1Bd_BNXC_GeYflbOodFN3g'
})(StorePreview));
