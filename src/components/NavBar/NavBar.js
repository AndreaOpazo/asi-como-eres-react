import React, { Component } from 'react'
import { Grid, Icon, Image, Input, Menu } from 'semantic-ui-react'
import './NavBar.css';

const src = './images/logo.png';

class NavBar extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <Grid verticalAlign='middle' columns='equal' className='bg-header'>
        <Grid.Row>
          <Grid.Column>
            <Image src={src} size='small' floated='left' className='margin-logo' />
          </Grid.Column>
          <Grid.Column>
            <Input fluid icon='search' placeholder='Buscar producto...' />
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <Icon name='shopping cart' size='big' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Menu widths={5}>
              <Menu.Item
                name='Inicio'
                active={activeItem === 'Inicio'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Mujer'
                active={activeItem === 'Mujer'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Nina'
                active={activeItem === 'Nina'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Nuevos Lanzamientos'
                active={activeItem === 'Nuevos Lanzamientos'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Rebajas'
                active={activeItem === 'Rebajas'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
};

export default NavBar;