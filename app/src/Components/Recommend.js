import React from 'react';
import { withRouter, Switch, Route } from 'react-router';
import "../CSS/Recommend.css";
import Carousel from 'nuka-carousel';
import AllRecommends from './allRecommends';
import axios from 'axios';
//axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        };
    }

    handleToAllRecommendsPage = () => {
        this.props.history.push("/allRecommends");
      };

    handleToAllRecommendsStorePage = () => {
    this.props.history.push("/allRecommendsStore");
    };

    handleGetFoodInfo() { 
        axios
            .get('http://127.0.0.1:8084/food/1/',{
                    headers: { "Content-Type": "application/json" },
                    data: {}  
                })
            .then( (res) => {
                console.log(res.data);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }
    
    handlePostFoodInfo(){
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

        axios
            .post('http://127.0.0.1:8084/food/', foodData)
            .then((res) => {
                alert("「" + foodData.name + "」登録完了");
                this.$router.push({path: '/articles/list'});
            })
            .catch(error => {
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
                        renderBottomCenterControls = { false }>
                        <img src="./image/shop1.png" alt='' 
                            onClick = { this.handlePostFoodInfo }
                        />
                        <img src="./image/shop2.png" alt='' />
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
                        <Route exact path={"/allRecommends"} component={AllRecommends} />
                    </Switch>
                </div>
                <h2>{this.handleGetFoodInfo}</h2>
            </div>
        );
    }
}

export default withRouter(Recommend);