import React from 'react';

import Header from './Header';
import HeaderStore from './HeaderStore';
import { store } from '../function/DefineConst';


function Branching() {
    if( store ){
        return <HeaderStore />;
    } else {
        return <Header />;
    }
}

export default Branching;