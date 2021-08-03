import React, { useEffect, useState } from 'react';
import { getImageURL } from '../../firebase';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const values = await Promise.allSettled([
        new Promise(async (resolve) => {
          const url = await getImageURL("categories/mochilas.jpg");
          resolve({
            url, name: "mochilas"
          })  
        }),
        new Promise(async (resolve) => {
          const url = await getImageURL("categories/cartucheras.jpg");
          resolve({
            url, name: "cartucheras"
          })  
        }),
        new Promise(async (resolve) => {
          const url = await getImageURL("categories/buzos.jpg");
          resolve({
            url, name: "buzos"
          })  
        }),
        new Promise(async (resolve) => {
          const url = await getImageURL("categories/accesorios.jpg");
          resolve({
            url, name: "accesorios"
          })  
        })
      ]);
      setCategories(values.map(({value}) => value))
    })();
  }, []);

  return (
    <section>
      {
        categories.length 
          ? (
            <div className="categories">
              {
                categories.map((category, i) => {
                  return (
                    <Link to={`/productos/${category.name}`} className={`category${i+1}`} key={i}>
                      <img
                        src={category.url}
                        width="100%"
                        alt={`category${i+1}`}
                        className={`category${i+1}`}
                      ></img>
                    </Link>
                  );
                })
              }
            </div>
          )
          : <Spinner />
      }
    </section>
  );
};

export default Categories;
