import React, { useState, useEffect } from 'react';
import './ProductDetailContainer.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import { db } from '../../firebase';

const ProductDetailContainer = ({ match }) => {
  const [product, setProduct] = useState({});
  const productID = match.params.id;

  useEffect(() => {
    (async () => {
      const product = await db.collection('products').doc(productID).get()
      if (product.exists) {
        setProduct(product.data());
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
