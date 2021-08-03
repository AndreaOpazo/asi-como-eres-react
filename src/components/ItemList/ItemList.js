import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import { getProducts } from '../../firebase';
import Button from '../Button/Button';
import './ItemList.css';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const mappedProducts = await getProducts();
      setProducts(mappedProducts);
    })();
  }, []);
  return (
    <section className="sectionBestProducts">
      {
        products.length
        ? (
          <>
            <h1 className="titleBestProducts">DESTACADOS</h1>
            <div className="bestProducts">
              {
                products.slice(Math.max(products.length - 4, 0)).map((product) => {
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
            <Link to="/productos/todos" className="btnAllProducts">
              <Button variant="outlined" color="primary" text="Ver todos los productos" />
            </Link>
          </>
        )
        : <Spinner />
      }
    </section>
  );
};

export default ItemList;
