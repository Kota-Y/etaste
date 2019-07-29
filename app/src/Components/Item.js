import React from 'react';
import '../CSS/Item.css';

class Item extends React.Component {
  render() {
    return (
        <div>
            <a href="http://takigawapan.jp/">滝川パン</a>
            <button>購入</button>
        </div>
    );
  }
}

export default Item;