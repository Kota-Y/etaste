/* 取引済みの商品のコンポーネント */
import React from 'react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import { strTimeEdit } from '../function/storeTime';
import '../CSS/UserDeal.css';

class DealFoodComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            tradeNum: '',
            trades: []
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
                });
                console.log(res.data);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render() {

        return(
            <div className='dealfoods-container'>
                {this.state.trades.map(e =>
                    <DealFoodsBoxAlready 
                        key = {e.id}
                        isCompleted = {e.isCompleted}
                        image = {e.foodImage}
                        food = {e.foodName}
                        amount = {e.amount}
                        price = {e.totalPrice}
                        time = {strTimeEdit(e.recieveTime)}
                        store = {e.storeName}
                    />
                )}
            </div>
        );
    }
}

const DealFoodsBoxAlready = ({isCompleted, image, food, amount, price, time, store})  => (
    <div>
        { isCompleted === "true" &&
            <div className='dealfood-component-already'>
                <div className='dealfood-image-already'>
                    <img src={ image } alt='' />
                </div>
                <div className='dealfood-info-already'>
                    <h3>{'商品名　 : ' + food }</h3>
                    <h3>{'注文個数 : ' + amount + '個' }</h3>    
                    <h3>{'合計　　 : ' + price + '円' }</h3>
                    <h3>{'受取時間 : ' + time }</h3>
                    <h3>{'店舗名　 : ' + store }</h3>
                </div>
            </div>
        }
    </div>
);

export default DealFoodComponent;