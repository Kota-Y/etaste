import React from 'react';
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
//import 'pure-react-carousel/dist/react-carousel.es.css';
import "../CSS/Recommend.css";
 
import Carousel from 'nuka-carousel';

export default class Recommend extends React.Component {
  render() {
    return (
        <div className='image-size'>
            <Carousel>
                <img src="./image/pan1.png" alt='' />
                <img src="./image/pan2.png" alt='' />
            </Carousel>
        </div>
    );
  }
}