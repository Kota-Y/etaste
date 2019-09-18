import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import SuperKlass from '../function/DefineConst';
import '../CSS/UserFin.css';

class UserFin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            /* とりあえず決め打ちの情報 */
            storeName: '滝川パン',
            storeId: 111,
            userId: 2,
            /* 画像切り替え用 */
            isOpen: true
        }

    }
    handleToUserDealPage = () => {
        this.props.history.push("/deal");
    };

    handleToHomePage = () => {
        this.props.history.push("/");
    };

    handlePostStoreInfo(){
        if( this.state.isOpen ){
            axios
                .post( SuperKlass.CONST.DOMAIN + '/favorite/', {
                    storeId: this.state.storeId,
                    storeName: this.state.storeName,
                    userId: this.state.userId
                })
                .then((res) => {
                    console.log("登録しました");
                })
        } else if( !this.state.isOpen ) {
            axios
                .delete( SuperKlass.CONST.DOMAIN + '/favorite/', {
                    storeId: this.state.storeId,
                    storeName: this.state.storeName,
                    userId: this.state.userId
                })
                .then( (res) => {
                    console.log("削除しました");
                })
        }
    }

    toggleImage = () => {
        this.setState(state => ({ isOpen: !state.isOpen }))
      }
    
    getImageName = () => this.state.isOpen ? 'favGray' : 'fav';

    render(){
        const imageName = this.getImageName();

        return(
            <div className='fin-container'>
                <center>
                    <div className='fin-message'>
                        <h2>ご購入ありがとうございました</h2>
                        <h2>{this.state.storeName}をお気に入り登録しますか？</h2>
                    </div>
                    <div className='favorite-icon'>
                        <img src={imagesPath[imageName]} alt='' 
                            onClick = { () =>{
                                this.toggleImage();
                                this.handlePostStoreInfo();
                            }}
                        />
                    </div>
                    <div className='fin-button'>
                        <h2
                            onClick={ this.handleToUserDealPage }
                        >受取準備へ</h2>
                        <h2
                            onClick={ this.handleToHomePage }
                        >ホームへ</h2>
                    </div>
                </center>
            </div>
        );
    }
}

const imagesPath = {
    fav: "./image/fav.png",
    favGray: "./image/fav-gray.png"
}

export default withRouter(UserFin);