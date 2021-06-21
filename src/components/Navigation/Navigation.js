import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <Menu secondary floated="right">
      <Menu.Item>
        <Link to="/" className="Link">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/productos" className="Link">
          Productos
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/info" className="Link">
          +Info
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contacto" className="Link">
          Contacto
        </Link>
      </Menu.Item>
      <Menu.Item>
        <CartWidget size="large" />
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
