import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="UserSection">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/producto/${product.id}`}>
              <Item product={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
