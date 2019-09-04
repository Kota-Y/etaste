import React from 'react';
import axios from 'axios';
//import StoreDetail from './StoreDetail';
import SuperKlass from './DefineConst';
import '../CSS/StoreDetail.css';
import { withRouter } from 'react-router';

class StoreComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: ''
        }
    }

    handleToStoreDetailPage = () => {
        this.props.history.push("/store-detail");
    };
    
    /* Storeの情報をGETするメソッド(id1について) */
    componentDidMount() { 
        axios
            .get(　SuperKlass.CONST.DOMAIN + '/store/detail/1/', {
                    headers: { "Content-Type": "application/json" },
                    data: {}  
                })
            .then( (res) => {
                this.setState({
                    name: res.data.name,
                    image: res.data.image,
                });
            })
            .catch( (error) => {
                console.log('通信に失敗しました');
            });
    }

    render (){
        return(
            <div>
                <div className='container'>
                    <div className='info'>
                        <img src={this.state.image} alt='' 
                            onClick = { this.handleToStoreDetailPage }
                        />
                        <h2>{ this.state.name }</h2>
                        <h3>熊本</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(StoreComponent);