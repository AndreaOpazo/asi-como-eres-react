import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import ItemList from '../../components/ItemList/ItemList';
import Categories from '../../components/Categories/Categories';
import { Container } from '@material-ui/core';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <Container>
        <div className="headerCategories">
          <h3>MIRA TODAS NUESTRAS CATEGORIAS</h3>
          <h5>DESCUBRÍ TODAS NUESTRAS OFERTAS</h5>
          <hr className="hrStyle"></hr>
        </div>
        <Categories />
      </Container>
      <ItemList />
    </div>
  );
};

export default Home;
