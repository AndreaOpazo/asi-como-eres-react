import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/" className="navLink">HOME</Link>
        <Link to="/productos/todos" className="navLink">PRODUCTOS</Link>
        <Link to="/cart" className="navLink">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
