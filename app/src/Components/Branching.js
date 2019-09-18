import React from 'react';

import UserDeal from './UserDeal';
import StoreDeal from './StoreDeal';
import { isStore } from '../function/DefineConst';


function Branching() {
    if( isStore ){
        return <StoreDeal />;
    } else {
        return <UserDeal />;
    }
}

export default Branching;