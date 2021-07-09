import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Carousel from '../Carousel/Carousel';
import Spinner from '../Spinner/Spinner';
import './ItemListContainer.css';
import { db } from '../../firebase';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products').onSnapshot((querySnapshot) => {
      const mappedProducts = querySnapshot.docs.map(product => ({ ...product.data() }))
      setProducts(mappedProducts.slice(0, 4));
    });
  }, []);

  return (
    <div className="ItemListContainer">
      <Carousel />
      {
        products.length
          ? <ItemList products={products} />
          : <Spinner />
      }
    </div>
  );
};

export default ItemListContainer;
