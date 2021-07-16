import React, { useState, useEffect } from 'react';
import './ProductDetailContainer.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import Spinner from '../../components/Spinner/Spinner'
import { getProductByID } from '../../firebase';

const ProductDetailContainer = ({ match }) => {
  const [product, setProduct] = useState({});
  const productID = match.params.id;

  useEffect(() => {
    (async () => {
      const product = await getProductByID(productID);
      if (product.exists) {
        setProduct(product.data());
      }  
    })();
  }, [productID]);

  return (
    <div className="ProductDetailContainer">
      {
        Object.keys(product).length
          ? <ProductDetail product={product} />
          : <Spinner />
      }
    </div>
  );
};

export default ProductDetailContainer;
