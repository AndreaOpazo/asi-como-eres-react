import React, { useEffect, useState } from 'react';
import { getProducts } from '../../firebase';
import Spinner from '../Spinner/Spinner';
import Item from '../Item/Item';
import Alert from '@material-ui/lab/Alert';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({category}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterProducts = () => {
    setFilteredProducts(
      category === "todos" ? products : products.filter(
        product => product.category === category
      )
    );
  }
  
  useEffect(() => {
    (async () => {
      const totalProducts = await getProducts();
      setProducts(totalProducts);
    })();
  }, []);

  useEffect(filterProducts, [category, products]);

  return (
    <>
      {
        products.length
        ? (
          <Container>
            { category === "cartucheras"
              ?
                <Alert icon={false} severity="info" className="alert" info="alert">PRÓXIMAMENTE</Alert>
              :
              <div className="itemListContainer">
                {
                  filteredProducts.map(product => {
                    return (
                      <div key={product.id}>
                        <Link to={`/producto/${product.id}`}>
                          <Item product={product} />
                        </Link>
                      </div>
                    );
                  })
                }
              </div>
            }
          </Container>
        )
        : <Spinner />
      }
    </>
  );
};

export default ItemListContainer;
