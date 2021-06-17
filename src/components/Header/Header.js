import React from 'react';
import { Grid, Image, Input, Button } from 'semantic-ui-react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const src = './images/logo.png';

const Header = () => {
  return (
    <div className="Header">
      <Grid verticalAlign="middle" stackable>
        <Grid.Row>
          <Grid.Column only="tablet computer" width={4}>
            <Image src={src} size="small" spaced className="margin-logo" />
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
            <NavBar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Header;
