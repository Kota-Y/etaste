import React from "react";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import { strTimeOpen, strTimeClose } from '../function/storeTime';
import StoreComponent from '../function/storeComponent';
import ItemPurchaseComponent from '../function/ItemPurchaseComponent';
import "../CSS/UserItem.css";

class UserItem extends React.Component {
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
            /* 出品中のFoodの情報state */
            endTime: '',
            foodImage: '',
            foodName: '',
            originalPrice: '',
            salePrice: '',
            startTime: '',
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

        /*　Storeの出品中の商品をGETするメソッド */
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/food/', {
                    headers: { "Content-Type": "application/json" },
                    data: {},
                    param: this.state.storeId
                })
            .then( (res) => {
                console.log(res.data.foods[this.state.storeId].name);
                this.setState({
                    foodName: res.data.foods[this.state.storeId].name,
                    endTime: res.data.foods[this.state.storeId].endTime,
                    foodImage: res.data.foods[this.state.storeId].image,
                    originalPrice: res.data.foods[this.state.storeId].originalPrice,
                    salePrice: res.data.foods[this.state.storeId].salePrice,
                    startTime: res.data.foods[this.state.storeId].startTime,
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
    const business_hours = strTimeOpen( this.state.openTime ) + '〜' + strTimeClose( this.state.closeTime );
        
    /* 販売時刻の先頭が0の場合に消す処理 */
    /*const sellTime = strTimeOpen( this.state.startTime ) + '〜' + strTimeClose( this.state.endTime );*/

    return (
        <div>
        <div className='Item-inUserItem'>
            <img className='ItemImage' src='' alt=''/>
            <ItemPurchaseComponent />
        </div>
        <div className='store-detail-inUserItem'>
            <div className='store-info'>
                <div className='store-component'>
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
            <div className='map'>
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
    width: '38vw',
    height: '28vw',
    margin: '20px'
  };

export default withRouter(GoogleApiWrapper({
    apiKey: 'AIzaSyC0J0FF5y8zA1Bd_BNXC_GeYflbOodFN3g'
  })(UserItem));