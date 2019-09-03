import React from 'react';
import { withRouter } from "react-router";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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
            mapLatitude: '',
            mapLongitude: '',
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
                    mapLatitude: res.data.mapLatitude,
                    mapLongitude: res.data.mapLongitude,
                    parking: res.data.parking,
                    tel: res.data.tel,
                    url: res.data.url,
                    zip: res.data.zip
                });
                
                //const mapLatitudeNum = Number(res.data.mapLatitude);
                //const mapLongitudeNum = Number(res.data.mapLongitude);
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    //const coordinates = { lat: Number(this.state.mapLatitude), lng: Number(this.state.mapLongitude) };

    render() {
        return(
            <div className='store-detail'>
                <h1>店舗詳細</h1>
                <div className='store-info'>
                    <div>
                        <img
                            src={this.state.image}
                            alt=''
                        />
                    </div>
                    <div className='store-name'>
                        <h2>{ this.state.name }</h2>
                        <h3>{ this.state.openTime + '-' + this.state.closeTime}</h3>
                        <h3>{ this.state.holiday }</h3>
                        <h3>{ this.state.address }</h3>
                        <h3>{ this.state.tel }</h3>
                        <h3>
                         <a href={this.state.url}>{ this.state.name + 'のHP' }</a>
                        </h3>
                    </div>
                </div>
                <div className='map'>
                    <Map
                    google={this.props.google}
                    zoom={16}
                    style={mapStyles}
                    center={{ lat: Number(this.state.mapLatitude), lng: Number(this.state.mapLongitude)}}
                    >
                        <Marker 
                            position={{ lat: Number(this.state.mapLatitude), lng: Number(this.state.mapLongitude)}}
                            name={this.state.name}
                        />
                    </Map>
                </div>
                
            </div>
        );
    }
}

const mapStyles = {
    width: '38vw',
    height: '28vw',
    margin: '20px'
  };

export default withRouter(GoogleApiWrapper({
    apiKey: 'AIzaSyC0J0FF5y8zA1Bd_BNXC_GeYflbOodFN3g'
  })(StoreDetail));