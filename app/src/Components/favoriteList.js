import React from 'react';
import { withRouter } from "react-router";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
//import StoreComponent from '../function/storeComponent';
import FavStore from '../function/favoriteStoreComponent';
import '../CSS/favoriteList.css';

class FavoriteList extends React.Component{

    /* 店舗詳細の情報をGETするメソッド */
    componentDidMount() { 
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/store/detail/', {
                    headers: { "Content-Type": "application/json" },
                    data: {}  
                })
            .then( (res) => {
                axios.get(SuperKlass.CONST.DOMAIN + '/store/detail/', {
                        headers: { "Content-Type": "application/json" },
                        data: {},
                        param: this.state.storeId
                    })
                    .then( (res) => {
                        this.setState({
                            name: res.data.name,
                            image: res.data.image,
                        });
                    } );
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render(){
        return(
            <div className='favList'>
                <h1>お気に入り店舗</h1>
                <div className='list-container'>
                    <Grid container className='grid'>
                        <Grid item xs={3}><FavStore /></Grid>
                        <Grid item xs={3}><FavStore /></Grid>
                        <Grid item xs={3}><FavStore /></Grid>
                        <Grid item xs={3}><FavStore /></Grid>
                        <Grid item xs={3}><FavStore /></Grid>
                        {/*<Grid item xs={3}><StoreComponent /></Grid>
                        <Grid item xs={3}><StoreComponent /></Grid>
                        <Grid item xs={3}><StoreComponent /></Grid>
                        <Grid item xs={3}><StoreComponent /></Grid>
                        <Grid item xs={3}><StoreComponent /></Grid>*/}
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withRouter(FavoriteList);