import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <>
      <h3 className='ProductsTitle'>PRODUCTOS DESTACADOS</h3>
      <div className="ProductsSection">
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
    </>
  );
};

export default ItemList;
