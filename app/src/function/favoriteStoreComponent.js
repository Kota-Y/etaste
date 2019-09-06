/* お気入り店舗で使用するストアコンポーネント */
import React from 'react';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import '../CSS/StoreDetail.css';

class FavStore extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            storeId: ''
        };
    }

    componentDidMount() { 
        //var list = [];
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/favorite/', {
                    headers: { "Content-Type": "application/json" },
                    data: {}  
                })
            .then( (res) => {
                for(let i=0; i<=res.data.foodNum; i++){
                    this.setState({
                        name: res.data.favoriteStores[i].name,
                        image: res.data.favoriteStores[i].image,
                        storeId: res.data.favoriteStores[i].id
                    });
                    //console.log(res.data.favoriteStores[i]);
                  }
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render(){
        return(
            <div className='container' onClick = { this.handleToStoreDetailPage } >
                <div className='info'>
                    <img src={this.state.image} alt='' />
                    <h2>{ this.state.name }</h2>
                    <h3>熊本</h3>
                </div>
            </div> 
        );
    }
}

export default FavStore;