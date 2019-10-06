import React from 'react';
import { withRouter } from "react-router";

import FavStore from '../function/favoriteStoreComponent';
import '../CSS/favoriteList.css';

class FavoriteList extends React.Component{

    render(){
        return(
            <div className='favList'>
                <h1>お気に入り店舗</h1>
                <div className='list-container'>
                    <FavStore />
                </div>
            </div>
        );
    }
}

export default withRouter(FavoriteList);