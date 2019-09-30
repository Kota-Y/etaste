import React from "react";
import { withRouter } from "react-router-dom";

import StoreDealFoodComponent from '../function/StoreDealFoodComponent';
import StoreDealFoodComponentYet from '../function/StoreDealFoodComponentYet';
import '../CSS/StoreDeal.css';

class StoreDeal extends React.Component {
  
  render() {
    return (
        <div className='main-deal'>
            <div className='book-container'>
                <h1>販売中</h1>
                <div>
                    <StoreDealFoodComponentYet />
                </div>
            </div>
            <div className='tradingHistory-container'>
                <h1>販売済み</h1>
                <div>
                    <StoreDealFoodComponent/>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(StoreDeal);