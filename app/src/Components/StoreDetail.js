import React from 'react';
import { withRouter } from "react-router";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import StoreComponent from '../function/storeComponent';
import { strTimeOpen, strTimeClose } from '../function/storeTime';
import "../CSS/StoreDetail.css";

class StoreDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            /* Store情報のstate */
            name: '',
            access: '',
            address: '',
            areaCity: '',
            areaOther: '',
            areaPref: '',
            closeTime: '',
            holiday: '',
            id: '',
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
            //id: '',
            foodImage: '',
            foodName: '',
            originalPrice: '',
            salePrice: '',
            startTime: ''
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
                console.log(res.data.name);
                    this.setState({
                        name: res.data.name,
                        access: res.data.access,
                        address: res.data.address,
                        areaCity: res.data.areaCity,
                        areaOther: res.data.areaOther,
                        areaPref: res.data.areaPref,
                        closeTime: res.data.closeTime,
                        holiday: res.data.holiday,
                        id: res.data.id,
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
                    param: this.state.id
                })
            .then( (res) => {
                console.log(res.data.foods[this.state.id].name);
                this.setState({
                    foodName: res.data.foods[this.state.id].name,
                    endTime: res.data.foods[this.state.id].endTime,
                    foodImage: res.data.foods[this.state.id].image,
                    originalPrice: res.data.foods[this.state.id].originalPrice,
                    salePrice: res.data.foods[this.state.id].salePrice,
                    startTime: res.data.foods[this.state.id].startTime,
                });
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render() {
        /* 営業時間の先頭が0の場合に消す処理 */
        const business_hours = strTimeOpen( this.state.openTime ) + '〜' + strTimeClose( this.state.closeTime );
        
        /* 販売時刻の先頭が0の場合に消す処理 */
        const sellTime = strTimeOpen( this.state.startTime ) + '〜' + strTimeClose( this.state.endTime );

        return(
            <div className='store-detail'>
                <div className='store-container'>
                    <div>
                        <h1>店舗詳細</h1>
                    </div>
                    <div className='store-info'>
                        <div className='store-component'>
                            <StoreComponent />
                        </div>
                        <div className='store-name'>
                            <h2>{ this.state.name }</h2>
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
                                name={this.state.name}
                            />
                        </Map>
                    </div> 
                </div>
                <div className='onSale-container'>
                    <div className='title'><h1>出品中の商品</h1></div>
                    <div className='onSale-items'>
                        <div className='items-info'>
                            <img src={this.state.foodImage} alt='' />
                            <h2>{ this.state.foodName }</h2>
                            <div className='price'>
                                <h3 className='deleat'>{ this.state.originalPrice + '円'}</h3>
                                <h3> → </h3>
                                <h3 className='salePrice'>{this.state.salePrice + '円' }</h3>
                            </div>
                            <h3>{ sellTime }</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStyles = {
    width: '38vw',
    height: '28vw',
    margin: '20px'
  };

export default withRouter(GoogleApiWrapper({
    apiKey: 'AIzaSyC0J0FF5y8zA1Bd_BNXC_GeYflbOodFN3g'
  })(StoreDetail));