import React from 'react';
import { Grid, Image, Input, Button } from 'semantic-ui-react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { Link } from 'react-router-dom';

const src = './images/logo.png';

const Header = () => {
  return (
    <div className="Header">
      <Grid verticalAlign="middle" stackable>
        <Grid.Row>
          <Grid.Column only="tablet computer" width={4}>
            <Link to={'/'}>
              <Image src={src} size="small" spaced className="margin-logo" />
            </Link>
          </Grid.Column>
          <Grid.Column only="mobile">
            <Image src={src} size="small" centered className="margin-logo" />
          </Grid.Column>
          <Grid.Column computer={4} textAlign="center">
            <Input
              icon="search"
              placeholder="Buscar producto..."
              style={{ marginRight: 5 }}
            />
            <Button circular color="facebook" icon="facebook" />
            <Button circular color="instagram" icon="instagram" />
          </Grid.Column>
          <Grid.Column computer={8} textAlign="right">
            <Navigation />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Header;
