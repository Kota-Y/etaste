import React from "react";
import Slider from 'react-slick';
//import ReactDom from 'react-dom';
import "../CSS/Recommend.css";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
  
  class Recommend extends React.Component {
    render(){
        const settings = {
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        swipeToSlide:true,
            swipe:true,
            arrows:false
        };
        return(
            <div className='slick-slider'>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div className='slick-list'>
                        <div>
                            <img src="./image/pan1.png" alt='' />
                        </div>
                        <div>
                            <img src="./image/pan2.png" alt='' />
                        </div>
                        <div>
                            <img src="./image/pan3.png" alt='' />
                        </div>
                        <div>
                            <img src="./image/pan4.png" alt='' />
                        </div>
                        <div>
                            <img src="./image/pan5.png" alt='' />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }

  }

export default Recommend;