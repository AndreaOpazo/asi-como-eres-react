import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Carousel from '../Carousel/Carousel';
import Spinner from '../Spinner/Spinner';
import './ItemListContainer.css';
import { getProducts } from '../../firebase';
import { Container } from '@material-ui/core';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const mappedProducts = await getProducts();
      setProducts(mappedProducts);
    })();
  }, []);

  return (
    <div className="ItemListContainer">
      <Carousel />
      <Container>
        {
          products.length
            ? <ItemList products={products} />
            : <Spinner />
        }
      </Container>
    </div>
  );
};

export default ItemListContainer;
