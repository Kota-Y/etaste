import React from 'react';
//simport PropTypes from 'prop-types';
import "../CSS/Recommend.css";
import Carousel from 'nuka-carousel';

export default class Recommend extends React.Component {
  render() {
    return (
        <div className='recommend-items'>
            <h3>近くで人気の商品</h3>
            <div className='food-image'>
                <Carousel slidesToShow={5} cellAlign="left" cellSpacing={20}>
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
            <h4>すべての商品を表示 &rsaquo;</h4>

            <h3>近くで人気のお店</h3>
            <div className='shop-image'>
                <Carousel slidesToShow={5} cellAlign="left" cellSpacing={20}>
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
        </div>
    );
  }
}