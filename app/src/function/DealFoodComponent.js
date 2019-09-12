/* 取引予定や取引済みの商品のコンポーネント */
import React from 'react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import { recieveTime } from '../function/storeTime';
import '../CSS/UserDeal.css';

class DealFoodComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            tradeNum: '',
            trades: []
            /* amount: '',
            foodId: '',
            foodImage: '',
            foodName: '',
            id: '',
            isCompleted: '',
            recieveTime: '',
            storeId: '',
            storeName: '',
            totalPrice: '' */
        }
    }
    componentDidMount() { 
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/trade/', {
                    headers: { "Content-Type": "application/json" },
                    data: {},
                })
            .then( (res) => {
                    this.setState({
                        id: res.data.id,
                        tradeNum: res.data.tradeNum,
                        trades: res.data.trades
                        /* amount: '',
                        foodId: '',
                        foodImage: '',
                        foodName: '',
                        id: '',
                        isCompleted: '',
                        recieveTime: '',
                        storeId: '',
                        storeName: '',
                        totalPrice: '' */
                });
                console.log(res.data);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render() {

        const resTime = recieveTime( '1200' );

        return(
            <div className='dealfoods-container'>
                {this.state.trades.map(e =>
                    <DealFoodsBox 
                        key = {e.id}
                        image = {e.foodImage}
                        food = {e.foodName}
                        amount = {e.amount}
                        price = {e.totalPrice}
                        time = {resTime}
                        store = {e.storeName}
                    />
                )}
            </div>
        );
    }
}

const DealFoodsBox = ({image, food, amount, price, time, store})  => (
    <div className='dealfood-component'>
        <div className='dealfood-image'>
            <img src={ image } alt='' />
        </div>
        <div className='dealfood-info'>
            <h3>{'商品名　:' + food }</h3>
            <h3>{'注文個数:' + amount }</h3>    
            <h3>{'合計　　:' + price }</h3>
            <h3>{'受取時間:' + time }</h3>
            <h3>{'店舗名　:' + store }</h3>
        </div>
    </div>
);

export default DealFoodComponent;