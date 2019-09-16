import React from "react";
import { withRouter } from "react-router-dom";

import StoreDealFoodComponent from '../function/StoreDealFoodComponent';
import StoreDealFoodComponentYet from '../function/StoreDealFoodComponentYet';

class StoreDeal extends React.Component {
  
  render() {
    return (
        <div>
            <div>
                <h1>販売中</h1>
                <div>
                    <StoreDealFoodComponentYet />
                </div>
            </div>
            <div>
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