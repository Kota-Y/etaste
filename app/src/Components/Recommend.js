import React from 'react';
import { withRouter, Switch, Route } from 'react-router';
import "../CSS/Recommend.css";
import Carousel from 'nuka-carousel';
import AllRecommends from './allRecommends';

class Recommend extends React.Component {
    handleToAllRecommendsPage = () => {
        this.props.history.push("/allRecommends");
      };

      handleToAllRecommendsStorePage = () => {
        this.props.history.push("/allRecommendsStore");
      };


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
                        <img src="./image/pan1.png" alt='' />
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
                    onClick={ () => {
                            this.handleToAllRecommendsPage();
                        }
                    }
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
                        <img src="./image/shop1.png" alt='' />
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
            </div>
        );
    }
}

export default withRouter(Recommend);