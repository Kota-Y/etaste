/* 取引予定商品のコンポーネント */
import React from 'react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import { recieveTime } from '../function/storeTime';
import '../CSS/UserDeal.css';

class DealFoodComponentYet extends React.Component{
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

        const resTime = recieveTime( '1200' );

        return(
            <div className='dealfoods-container'>
                {this.state.trades.map(e =>
                    <DealFoodsBoxYet 
                        key = {e.id}
                        isCompleted = {e.isCompleted}
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

const DealFoodsBoxYet = ({isCompleted, image, food, amount, price, time, store})  => (
    <div>
        { isCompleted === "false" &&
            <div className='dealfood-component'>
                <div className='dealfood-image'>
                    <img src={ image } alt='' />
                    <div className='icon-info'>
                        <img src='./image/infomation_icon.png' alt='' />
                    </div>
                </div>
                <div className='dealfood-info'>
                    <h3>{'商品名　 : ' + food }</h3>
                    <h3>{'注文個数 : ' + amount + '個' }</h3>    
                    <h3>{'合計　　 : ' + price + '円' }</h3>
                    <h3>{'受取時間 : ' + time }</h3>
                    <h3>{'店舗名　 : ' + store }</h3>
                    <h2 onClick={ Alert }>受取完了</h2>
                </div>
            </div>
        }
    </div>
);

const Alert = () => {
        alert('本当に受け取りましたか？')
}

export default DealFoodComponentYet;