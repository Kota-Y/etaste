import React from 'react';
import { withRouter } from "react-router";
//import axios from 'axios';

class FavoriteLlist extends React.Component{
    render(){
        return(
            <div>
                <h1>お気に入り店舗の画面です</h1>
            </div>
            );
    }
}

export default withRouter(FavoriteLlist);