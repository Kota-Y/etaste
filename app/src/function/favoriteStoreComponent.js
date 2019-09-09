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

    /* APIから店舗名と画像を配列に格納するメソッド */
    componentDidMount() { 
        var listName = [];
        var listImage = [];
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/favorite/', {
                    headers: { "Content-Type": "application/json" },
                    data: {}  
                })
            .then( (res) => {
                for(var i=0; i < res.data.favoriteStores.length; ++ i ){
                    listName.push(res.data.favoriteStores[i].name);
                    listImage.push(res.data.favoriteStores[i].image);
                }
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render(){
        /* const boxes = []
        this.state.language.forEach((value, index) => {
          boxes.push(</>)
        })  */

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

export const favoriteStoreBox = ({ props }) => {
    return(
        <div className='container' onClick = { this.handleToStoreDetailPage } >
            <div className='info'>
                <img src={ props.image } alt='' />
                <h2>{ props.name }</h2>
                <h3>熊本</h3>
            </div>
        </div> 
    );
};

export default FavStore;