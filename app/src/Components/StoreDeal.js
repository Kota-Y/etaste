import React from "react";
import { withRouter } from "react-router-dom";

//import DealFoodComponent from '../function/DealFoodComponent';
//import DealFoodComponentYet from '../function/DealFoodComponentYet';
import "../CSS/StoreDeal.css";

class StoreDeal extends React.Component {
  
  render() {
    return (
        <div className='main-deal'>
            <div className='book-container'>
                <h1>販売中</h1>
                {/* <div>
                    <DealFoodComponentYet />
                </div> */}
            </div>
            <div className='tradingHistory-container'>
                <h1>販売済み</h1>
                {/* <div>
                    <DealFoodComponent />
                </div> */}
            </div>
        </div>
    );
  }
}

export default withRouter(StoreDeal);