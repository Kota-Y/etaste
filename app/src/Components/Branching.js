import React from 'react';

import UserDeal from './UserDeal';
import StoreDeal from './StoreDeal';
import { store } from '../function/DefineConst';


function Branching() {
    if( store ){
        return <StoreDeal />;
    } else {
        return <UserDeal />;
    }
}

export default Branching;