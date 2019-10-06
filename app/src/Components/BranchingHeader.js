import React from 'react';
import { Provider } from "react-redux";

import { store } from "./Login";
import Header from './Header';
import HeaderStore from './HeaderStore';
import { isStore } from '../function/DefineConst';


function BranchingHeader() {
    if( isStore ){
        return <Provider store={store}><HeaderStore /></Provider>
    } else {
        return <Provider store={store}><Header /></Provider>
    }
}

export default BranchingHeader;