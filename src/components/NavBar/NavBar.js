import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Menu } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Menu secondary floated="right">
      <Menu.Item> Home </Menu.Item>
      <Menu.Item> Productos </Menu.Item>
      <Menu.Item> +Info </Menu.Item>
      <Menu.Item> Contacto </Menu.Item>
      <Menu.Item>
        <CartWidget size="large" />
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
