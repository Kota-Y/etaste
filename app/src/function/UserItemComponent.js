import React from "react";

export const ItemInfo = ({foodName,originalPrice,salePrice,receiveTime,storeName,whySale,allergies})  => (
    <div className='itemInfo-inUserItem'>
      <h1>{foodName}</h1>
      <div className='price price-inUserItem'>
          <h3 className='dot-inUserItem'>・</h3>
          <h3 className='deleat'>{ originalPrice + '円'}</h3>
          <h3> → </h3> 
          <h3 className='salePrice'>{salePrice + '円' }</h3>
      </div>
      
      <h4>・受け取り可能時間 {receiveTime}</h4>
      <h4>・{storeName}</h4>
  
      <div className='history-of-exhibition'>
      <h1>出品経緯</h1>
      <div className='whySale-inUserItem'>
      <h3>{whySale}</h3>
      </div>

      </div>

      <div className='allergy-show'>
      <h1>アレルギー表示</h1>
      <div className='allergy-show-area'>
      {allergies.map(e=>
          <AllergyBox name={e.name}
          />)}
      </div>
      </div>
  </div>
);

const AllergyBox = ({name})  => (
  <div className='allergy-box'>
      <h4>{name}</h4>
  </div>
);

export const StoreName =({storeName,business_hours,holiday,zip,address,tel,url}) =>(
  <div className='store-name'>
      <h3>{ storeName }</h3>
      <h3>{ business_hours }</h3>
      <h3>{holiday}</h3>
      <h3 className='zip'>{ '〒' + zip }</h3>
      <h3 className='address'>{address }</h3>
      <h3>{tel }</h3>
      <h3>
          <a href={url}>{url}</a>
      </h3>
  </div>
);