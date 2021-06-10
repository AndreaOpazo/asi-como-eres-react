import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  state = {};

  handleItemClick = (_e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item
          name="Inicio"
          active={activeItem === 'Inicio'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Mujer"
          active={activeItem === 'Mujer'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Nina"
          active={activeItem === 'Nina'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Nuevos Lanzamientos"
          active={activeItem === 'Nuevos Lanzamientos'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Rebajas"
          active={activeItem === 'Rebajas'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default NavBar;
