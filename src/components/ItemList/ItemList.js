import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <>
      <div className="headerProducts">
        <h4>MIRA TODAS NUESTRAS CATEGORIAS</h4>
        <h5>DESCUBRÍ TODAS NUESTRAS OFERTAS</h5>
        <hr className="hrStyle"></hr>
      </div>
      <div className="productsSection">
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
