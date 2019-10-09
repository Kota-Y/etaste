import React from "react";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import { strTimeOpen, strTimeClose } from '../function/storeTime';
import StoreComponent from '../function/storeComponent';
import '../CSS/StoreDetailNoitem.css';


class StoreDetailNoitem extends React.Component {
    constructor(props) {
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
            /*Food情報のstate */
            endTime: '',
            foodImage: '',
            foodName: '',
            originalPrice: '',
            salePrice: '',
            startTime: '',
            whySale:'',
            allergies:'',
            /*ユーザーの購入希望個数と購入希望時間 */
            item_num_tobuy:'',
            recieve_time_tobuy:'',
            /* 画像の切り替え */
            isOpen: true,
            /* とりあえずのユーザーID */
            userId: 1
        };
    }
    componentDidMount() { 
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
      /* 営業時間の先頭が0の場合に消す処理 */
      const business_hours = strTimeOpen( this.state.openTime ) + '〜' + strTimeClose( this.state.closeTime );
        

      const imageName = this.getImageName();
      
    return (
      <div className='StoreDetailNoitem-Container'>
        <div className='message-inStoreDetailNoitem'>  
        <h1>申し訳ございません</h1>
        <h1>現在、出品がありません</h1>
        </div>
        <div className='store-detail-inUserItem'>
            <div className='store-info-inUserItem'>
                <div className='store-component-inUserItem'>
                    <StoreComponent />
                </div>
                <div className='favorite-icon-gray'>
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
  })(StoreDetailNoitem));