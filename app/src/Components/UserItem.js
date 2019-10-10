import React from "react";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import Select from "react-select";

import SuperKlass from '../function/DefineConst';
import { strTimeEdit} from '../function/storeTime';
import StoreComponent from '../function/storeComponent';
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
        this.handleChange = this.handleChange.bind(this)
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
            .get(　SuperKlass.CONST.DOMAIN + '/food/{1}', {
                    headers: { "Content-Type": "application/json" },
                    data: {},
                    param: this.state.storeId
                })
            .then( (res) => {
                console.log(this.state.storeId);
                console.log(res.data.foodInfo);
                this.setState({
                    foodName: res.data.foodInfo[0].name,
                    foodImage: res.data.foodInfo[0].image,
                    originalPrice: res.data.foodInfo[0].originalPrice,
                    salePrice: res.data.foodInfo[0].salePrice,
                    startTime: res.data.foodInfo[0].startTime,
                    endTime: res.data.foodInfo[0].endTime,
                    whySale: res.data.foodInfo[0].whySale,
                    allergies: res.data.foodInfo[0].allergys,
                 });
                 console.log(res.data.foodInfo[0].allergys);
                 console.log(this.state.allergies[0].name);
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


  handleChange(e){ //入力フォームにおいてそれぞれの要素のname属性に対応した変数にvalueを格納
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleChangeselectE = recieve_time_tobuy => {
    this.setState({ recieve_time_tobuy });
  };

  render() {
    const imageName = this.getImageName();

    /* 営業時間の先頭が0の場合に消す処理 */
    const business_hours = strTimeEdit( this.state.openTime ) + '〜' + strTimeEdit( this.state.closeTime );
        
    /* 受け取り可能時間の先頭が0の場合に消す処理 */
    const receiveTime = strTimeEdit( this.state.startTime ) + '〜' + strTimeEdit( this.state.endTime );

    /*　受け取り希望時間の調整　*/
    const timeInfo = new Date();
    console.log(timeInfo);

    return (
    　<div className='UserItem-container'>
        <div className='Item-inUserItem'>
            <img className='ItemImage-inUserItem' src={this.state.foodImage} alt=''/>
            <div className='Item-container'>
                <div>
                <h1>{this.state.foodName}</h1>
                <div className='price price-inUserItem'>
                    <h3 className='dot-inUserItem'>・</h3>
                    <h3 className='deleat'>{ this.state.originalPrice + '円'}</h3>
                    <h3> → </h3> 
                    <h3 className='salePrice'>{this.state.salePrice + '円' }</h3>
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
                <div>
                <h2>?</h2>{/*{this.state.allergies[0].name}ができない？*/}
                </div>
                </div>

                <div className='item-num'>
                <h1>購入個数</h1>
                <div>
                <input
                className='useriteminput'
                value={this.state.item_num_tobuy}　
                name='item_num_tobuy' 
                onChange={this.handleChange} 
                placeholder="購入希望個数を入力(半角数字)"/>
                </div>
                </div>

                <div className='receive-time'>
                <h1>受け取り時間</h1>
                <div>
                <Select
                className='timeselect-inUserItem'
                //options={this.state.times}
                value={this.state.recieve_time_tobuy}
                placeholder='受取希望時間を選択'
                name=''
                onChange={this.handleChangeselect}
                />
                </div>
                </div>
                <button className='storesubmit' 
          /*onClick={ () =>{ 
            this.handleToStoreSyuppinPage();
            }}*/ 
          disabled={this.state.isSubmitButton}>購入確認</button>
            </div>
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
  })(UserItem));