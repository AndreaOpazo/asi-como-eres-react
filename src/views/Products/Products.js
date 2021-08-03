import React, { useState } from 'react';
import { Breadcrumbs, FormControl, NativeSelect } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import './Products.css';

const Products = ({ match }) => {
  const category = match.params.category;
  const [selectedCategory, setSelectedCategory] = useState(category);

  const history = useHistory();

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    history.push(`/productos/${event.target.value}`);
  };

  return (
    <div className="products">
      <div className="headerProducts">
        <Breadcrumbs separator="›" className="breadcrumb">
          <Link to="/" className="link">Home</Link>
          <Link to={`/productos/${category}`} className="link">Productos</Link>
        </Breadcrumbs>
        <FormControl margin="dense">
          <NativeSelect
            defaultValue={selectedCategory}
            inputProps={{
              name: 'name',
            }}
            onChange={handleChange}
          >
            <option value={"todos"}>Todos</option>
            <option value={"mochilas"}>Mochilas</option>
            <option value={"cartucheras"}>Cartucheras</option>
            <option value={"accesorios"}>Accesorios</option>
            <option value={"buzos"}>Buzos</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div className="bodyProducts">
        <ItemListContainer category={selectedCategory} />
      </div>
    </div>
  );
};

export default Products;
