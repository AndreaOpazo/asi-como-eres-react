import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Carousel from '../Carousel/Carousel';
import Spinner from '../Spinner/Spinner';
import './ItemListContainer.css';
import { db } from '../../firebase';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    db.collection('products').onSnapshot((querySnapshot) => {
      const mappedProducts = querySnapshot.docs.map(product => ({ ...product.data() }))
      setProducts(mappedProducts.slice(0, 4));
    });
    setIsLoading(false);
  }, []);

  return (
    <div className="ItemListContainer">
      <Carousel />
      {isLoading 
        ? <Spinner />
        : <ItemList products={products} />
      }
    </div>
  );
};

export default ItemListContainer;
