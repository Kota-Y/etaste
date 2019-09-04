import React from 'react';
import { withRouter, Switch, Route } from 'react-router';
import axios from 'axios';
import Carousel from 'nuka-carousel';

import "../CSS/Recommend.css";
import AllRecommends from './allRecommends';
import StoreDetail from './StoreDetail';
import SuperKlass from './DefineConst';
import StoreComponent from './storeComponent';

const foodData = {
    id: 1,
    name: "あんぱん",
    originalPrice: 600,
    salePrice: 300,
    startTime: "1300",
    endTime: "1545",
    number: 3,
    allergy: "[卵,乳,小麦]",
    image: "https://dl.dropboxusercontent.com/s/fxss9wae0iq143q/an-pan.jpg",
    storeId: 2,
    storeName: "滝川パン"
};

class Recommend extends React.Component {
    handleToAllRecommendsPage = () => {
        this.props.history.push("/all-recommends");
    };

    handleToAllRecommendsStorePage = () => {
    this.props.history.push("/allRecommendsStore");
    };

    handleToStoreDetailPage = () => {
        this.props.history.push("/store-detail");
    };

    /* Foodの情報のGETメソッド */
    handleGetFoodInfo() { 
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/food/1/'　,{
                    headers: { "Content-Type": "application/json" },
                    data: {}  
                })
            .then( (res) => {
                const name = res.data.foodIndo[0].name;
                console.log(name);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }
    
    /* Foodの情報のPOSTメソッド */
    handlePostFoodInfo(){
        axios
            .post( SuperKlass.CONST.DOMAIN + '/food/', foodData)
            .then((res) => {
                alert("「" + foodData.name + "」登録完了");
                console.log(foodData.name);
            })
            .catch( (error) => {
                alert("「" + foodData.name + "」登録失敗");
                console.log(error, foodData);
            });
    }

    render() {
        return (
            <div className='recommend-items'>
                <h3>近くで人気の商品</h3>
                <div className='food-image'>
                    <Carousel 
                        slidesToShow={4} 
                        cellAlign="left" 
                        cellSpacing={50}
                        renderBottomCenterControls = { false }>
                        <img src="./image/pan1.png" alt='' 
                            onClick = { this.handleGetFoodInfo }
                        />
                        <img src="./image/pan2.png" alt='' />
                        <img src="./image/pan3.png" alt='' />
                        <img src="./image/pan4.png" alt='' />
                        <img src="./image/pan5.png" alt='' />
                        <img src="./image/pan2.png" alt='' />
                        <img src="./image/pan3.png" alt='' />
                        <img src="./image/sand.jpg" alt='' />
                    </Carousel>
                </div>
                <h4
                    onClick={this.handleToAllRecommendsPage}
                >
                    すべての商品を表示 &rsaquo;
                </h4>

                <h3>近くで人気のお店</h3>
                <div className='shop-image'>
                    <Carousel 
                        slidesToShow={4}
                        cellAlign="left"
                        cellSpacing={50}
                        renderBottomCenterControls = {false}>
                        <StoreComponent />
                        <img src="./image/shop1.png" alt='' 
                            onClick = { this.handleToStoreDetailPage }
                        />
                        <img src="./image/shop2.png" alt='' 
                            onClick = { this.handlePostFoodInfo }
                        />
                        <img src="./image/shop3.png" alt='' />
                        <img src="./image/shop4.png" alt='' />
                        <img src="./image/shop1.png" alt='' />
                        <img src="./image/shop2.png" alt='' />
                        <img src="./image/shop3.png" alt='' />
                        <img src="./image/shop4.png" alt='' />
                    </Carousel>
                </div>
                <h4>すべてのお店を表示 &rsaquo;</h4>
                <div>
                    <Switch>
                        <Route exact path={"/all-recommends"} component={AllRecommends} />
                        <Route exact path={"/store-detail"} component={StoreDetail} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Recommend);