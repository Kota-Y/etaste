import React from 'react';
import { withRouter } from "react-router";
import Grid from '@material-ui/core/Grid';
//import axios from 'axios';

import StoreComponent from './storeComponent';
import '../CSS/favoriteList.css';

class FavoriteList extends React.Component{
    render(){
        return(
            <div className='favList'>
                <h1>お気に入り店舗</h1>
                <div className='list-container'>
                    <Grid container>
                        <Grid item xs={3}><StoreComponent /></Grid>
                        <Grid item xs={3}><StoreComponent /></Grid>
                        <Grid item xs={3}><StoreComponent /></Grid>
                        <Grid item xs={3}><StoreComponent /></Grid>
                        <Grid item xs={3}><StoreComponent /></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withRouter(FavoriteList);