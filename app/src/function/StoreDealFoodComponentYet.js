/* 販売中の商品のコンポーネント */
import React from 'react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import { recieveTime } from '../function/storeTime';
import '../CSS/StoreDeal.css';


class StoreDealFoodComponentYet extends React.Component{
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
                console.log(res.data.storeTrades);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render() {

        return(
            <div className='dealfoods-container'>
                {this.state.storeTrades.map(e =>
                    <StoreDealFoodsBoxYet
                        key = {e.id}
                        isCompleted = {e.isCompleted}
                        food = {this.state.foodName}
                        amount = {e.orderAmount}
                        price = {e.totalPrice}
                        time = {recieveTime(e.recieveTime)}
                        user = {e.userName}
                    />
                )}
            </div>
        );
    }
}

const StoreDealFoodsBoxYet = ({isCompleted, food, amount, price, time, user})  => (
    <div>
        { isCompleted === "false" &&
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

export default StoreDealFoodComponentYet;