import React from 'react';
import { withRouter } from "react-router";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';

import SuperKlass from './DefineConst';
import StoreComponent from './storeComponent';
import { strTimeOpen, strTimeClose } from '../function/storeTime';
import "../CSS/StoreDetail.css";

class StoreDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            /* Store情報のstate */
            name: '',
            storeId: '',
            storeImage: '',
            access: '',
            address: '',
            openTime: '',
            closeTime: '',
            holiday: '',
            map: '',
            mapLatitude: '',
            mapLongitude: '',
            parking: '',
            tel: '',
            url: '',
            zip: '',
            /* 出品中のFoodの情報state */
            foodName:'',
            endTime: '',
            foodId: '',
            foodImage: '',
            originalPrice: '',
            salePrice: '',
            startTime: ''
        };
    }

    componentWillMount() { 
        /* Storeの情報をGETするメソッド(id1について) */
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/store/detail/', {
                    headers: { "Content-Type": "application/json" },
                    data: {},
                })
            .then( (res) => {
                axios.get(SuperKlass.CONST.DOMAIN + '/store/detail/', {
                    headers: { "Content-Type": "application/json" },
                    data: {},
                    param: this.state.storeId
                    })
                    .then( (res) => {
                        this.setState({
                            name: res.data.name,
                            storeId: res.data.id,
                            storeImage: res.data.image,
                            access: res.data.access,
                            address: res.data.address,
                            openTime: res.data.openTime,
                            closeTime: res.data.closeTime,
                            holiday: res.data.holiday,
                            map: res.data.map,
                            mapLatitude: res.data.mapLatitude,
                            mapLongitude: res.data.mapLongitude,
                            parking: res.data.parking,
                            tel: res.data.tel,
                            url: res.data.url,
                            zip: res.data.zip
                        });
                    } );
                //console.log(this.state.storeId);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
        /*　Storeの出品中の商品をGETするメソッド */
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/store/', {
                    headers: { "Content-Type": "application/json" },
                    data: {},
                    param: this.state.storeId
                })
            .then( (res) => {
                this.setState({
                    foodName: res.data.foods[0].name,
                    endTime: res.data.foods[0].endTime,
                    foodId: res.data.foods[0].id,
                    foodImage: res.data.foods[0].image,
                    originalPrice: res.data.foods[0].originalPrice,
                    salePrice: res.data.foods[0].salePrice,
                    startTime: res.data.foods[0].startTime
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
    margin: '20px',
    position: 'absolute',
  };

export default withRouter(GoogleApiWrapper({
    apiKey: 'AIzaSyC0J0FF5y8zA1Bd_BNXC_GeYflbOodFN3g'
  })(StoreDetail));