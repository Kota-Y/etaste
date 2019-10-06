import React from 'react';
//import { Provider } from "react-redux";
//import { render } from 'react-dom';

//import { isLogin } from "../function/DefineConst";
//import { store } from "./Login";
import Header from './Header';
import HeaderStore from './HeaderStore';
import { isStore } from '../function/DefineConst';


function BranchingHeader() {
    if( isStore ){
        return <HeaderStore />
    } else {
        return <Header />
    }
}

export default BranchingHeader;