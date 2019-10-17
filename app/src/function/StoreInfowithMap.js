/* 店舗情報のコンポーネント　
店舗情報を丸ごとコンポーネント化しようと考えたが、アイテム情報によって動的にstateを変化させて表示するためできるかわからない
保留中*/


import React from 'react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import { strTimeEdit } from '../function/storeTime';
import '../CSS/StoreDeal.css';


class StoreInfowithMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: '',
            startTime: '',
            endTime: '',
            foodImage: '',
            foodName: '',
            id: '',
            storeTrades: []
        }
    }
    componentDidMount() { 
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/trade/store/', {
                    headers: { "Content-Type": "application/json" },
                    data: {},
                })
            .then( (res) => {
                this.setState({
                    amount: res.data.amount,
                    startTime: res.data.startTime,
                    endTime: res.data.endTime,
                    foodImage: res.data.foodImage,
                    foodName: res.data.foodName,
                    id: res.data.id,
                    storeTrades: res.data.storeTrades
                });
                console.log(this.state);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render() {

        return(
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
                <StoreName
                storeName = {this.state.storeName}
                business_hours = {business_hours}
                holiday ={this.state.holiday}
                zip = {this.state.zip}
                address = {this.state.address}
                tel = {this.state.tel}
                url = {this.state.url}
                />
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

        );
    }
}

const StoreDealFoodsBoxAlready = ({isCompleted, food, amount, price, time, user})  => (
    <div>
        { isCompleted === "true" &&
            <div className='dealfood-component-store'>
                <div className='dealfood-info'>
                    <h3>{'商品名　 : ' + food }</h3>
                    <h3>{'注文個数 : ' + amount + '個' }</h3>    
                    <h3>{'合計　　 : ' + price + '円' }</h3>
                    <h3>{'受取時間 : ' + time }</h3>
                    <h3>{'ユーザ　 : ' + user }</h3>
                </div>
            </div>
        }
    </div>
);

export default StoreDealFoodComponent;