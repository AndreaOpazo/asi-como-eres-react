import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ data }) => {
  return (
    <div className="UserSection">
      {data.map((item) => {
        return <Item items={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
