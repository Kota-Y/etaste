/* お気入り店舗で使用するストアコンポーネント */
import React from 'react';
import axios from 'axios';
//import Grid from '@material-ui/core/Grid';

import SuperKlass from '../function/DefineConst';
import '../CSS/StoreDetail.css';

class FavStore extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            favoriteStores: []
        }
    }

    /* APIから店舗名と画像を配列に格納するメソッド */
    componentDidMount() { 
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/favorite/', {
                    headers: { "Content-Type": "application/json" },
                    data: {},
            })
            .then( (res) => {
                this.setState({ favoriteStores: res.data.favoriteStores });
                console.log(this.state.favoriteStores);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
        }

    render(){
        return(
            <div className='favorite-store'>
                {this.state.favoriteStores.map(e =>
                    <FavoriteStoreBox 
                        key = {e.id}
                        image = {e.image}
                        name = {e.name}
                    />
                )}
            </div>
        );
    }
};

const FavoriteStoreBox = ({ image, name }) => (
    <div className='container'>
        <div className='info'>
            <img src={ image } alt={ name } />
            <h2>{ name }</h2>
            <h3>熊本</h3>
        </div>
    </div> 
);

export default FavStore;