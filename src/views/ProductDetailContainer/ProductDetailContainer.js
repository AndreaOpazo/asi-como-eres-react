import React, { useState, useEffect } from 'react';
import './ProductDetailContainer.css';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductDetailContainer = ({ match }) => {
  const [product, setProduct] = useState({});
  const productID = match.params.id;

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api-productos-prueba.herokuapp.com/productos/${productID}`
      );
      const products = await response.json();
      if (products.length) {
        setProduct(products[0]);
      }
    })();
  }, [productID]);

  return (
    <div className="ProductDetailContainer">
      {Object.keys(product).length && <ProductDetail product={product} />}
    </div>
  );
};

export default ProductDetailContainer;
