import React from 'react';

import Header from './Header';
import HeaderStore from './HeaderStore';
import { isStore } from '../function/DefineConst';


function Branching() {
    if( isStore ){
        return <HeaderStore />;
    } else {
        return <Header />;
    }
}

export default Branching;