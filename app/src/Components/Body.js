import React from 'react';
import '../CSS/Body.css';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state  = {};
    }

    render(){
        return(
            <div className="Body">
                <h1>ホーム画面</h1>
                <a>User Page</a>
                <a>Item</a>
                <a>Home</a>
                <a>List</a>
                <a>Setting</a>
            </div>
        );
    }
}

export default Body;