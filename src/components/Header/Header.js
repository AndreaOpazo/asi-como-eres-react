import React, { Component } from 'react';
import { Grid, Image, Input } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const src = './images/logo.png';

const paddingB = { paddingBottom: 0 };

class Header extends Component {
  render() {
    return (
      <Grid verticalAlign="middle" className="bg-header" stackable>
        <Grid.Row>
          <Grid.Column only="tablet computer" width={4}>
            <Image src={src} size="small" spaced className="margin-logo" />
          </Grid.Column>
          <Grid.Column only="mobile">
            <Image src={src} size="small" centered className="margin-logo" />
          </Grid.Column>
          <Grid.Column computer={8} textAlign="center">
            <Input icon="search" placeholder="Buscar producto..." />
          </Grid.Column>
          <Grid.Column only="tablet computer" width={4} textAlign="right">
            <CartWidget size="big" />
          </Grid.Column>
          <Grid.Column only="mobile" textAlign="center">
            <CartWidget size="large" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={paddingB}>
          <NavBar />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Header;
