import React from "react";
import { withRouter } from "react-router-dom";

import DealFoodComponent from '../function/DealFoodComponent';
import "../CSS/UserDeal.css";

class UserDeal extends React.Component {
  
  render() {
    return (
        <div className='main-deal'>
            <div className='book-container'>
                <h1>受け取り予定</h1>
                <div>
                    <DealFoodComponent />
                </div>
            </div>
            <div className='tradingHistory-container'>
                <h1>取引履歴</h1>
            </div>
        </div>
    );
  }
}

export default withRouter(UserDeal);