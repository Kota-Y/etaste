import React from 'react';

import UserDeal from './UserDeal';
import StoreDeal from './StoreDeal';

const store = false;
function Branching() {
    if( store ){
        return <StoreDeal />;
    } else {
        return <UserDeal />;
    }
}

export default Branching;