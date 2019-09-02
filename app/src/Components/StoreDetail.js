import React from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import SuperKlass from './DefineConst';
import "../CSS/StoreDetail.css";

class StoreDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            access: '',
            address: '',
            openTime: '',
            closeTime: '',
            holiday: '',
            map: '',
            parking: '',
            tel: '',
            url: '',
            zip: ''
        };
    }

/* Storeの情報をGETするメソッド(id1について) */
componentDidMount() { 
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/store/detail/1/'　,{
                    headers: { "Content-Type": "application/json" },
                    data: {}  
                })
            .then( (res) => {
                this.setState({
                    name: res.data.name,
                    image: res.data.image,
                    access: res.data.access,
                    address: res.data.address,
                    openTime: res.data.openTime,
                    closeTime: res.data.closeTime,
                    holiday: res.data.holiday,
                    map: res.data.map,
                    parking: res.data.parking,
                    tel: res.data.tel,
                    url: res.data.url,
                    zip: res.data.zip
                  });
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render() {
        return(
            <div className='store-detail'>
                <h1>店舗詳細</h1>
                <div className='store-info'>
                    <img
                        src={this.state.image}
                        alt=''
                    />
                    <div className='store-name'>
                        <h2>{ this.state.name }</h2>
                        <h3>{ this.state.openTime + '-' + this.state.closeTime}</h3>
                        <h3>{ this.state.holiday }</h3>
                        <h3>{ this.state.address }</h3>
                        <h3>{ this.state.tel }</h3>
                        <h3>
                         <a href={this.state.url}>滝川パンHP</a>
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(StoreDetail);