import React from "react";
import { withRouter } from "react-router";

import '../CSS/Recommend.css';

class AllRecommends extends React.Component{
    render(){
        return(
            <div className='top'>
                <div className='all-recommend-items-top'>
                    <h1>今近くで人気の商品です</h1>
                </div>
                <div className='all-recommend-items'>
                    <img src="./image/pan1.png" alt='' />
                    <img src="./image/pan2.png" alt='' />
                    <img src="./image/pan3.png" alt='' />
                    <img src="./image/pan4.png" alt='' />
                    <img src="./image/pan5.png" alt='' />
                    <img src="./image/pan2.png" alt='' />
                    <img src="./image/pan3.png" alt='' />
                    <img src="./image/sand.jpg" alt='' />
                </div>
            </div>
        );
    }


}

export default withRouter(AllRecommends);