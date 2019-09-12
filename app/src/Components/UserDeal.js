import React from "react";
import { withRouter } from "react-router";

import "../CSS/UserDeal.css";

class UserDeal extends React.Component {
  
  render() {
    return (
        <div className='main'>
            <div className='book-container'>
                <h1>受け取り予定</h1>
            </div>
            <div className='tradingHistory-container'>
                <h1>取引履歴</h1>
            </div>
        </div>
    );
  }
}

export default withRouter(UserDeal);