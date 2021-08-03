import React from 'react';
import Navigation from '../Navigation/Navigation';
import {
  AppBar,
  Toolbar,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      background: '#000'
    }
  }));

  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Link to={'/'}>
              <p>ASÍ COMO ERES</p>
            </Link>
          </Grid>
          <Grid item xs/>
          <Grid item xs={3}>
            <Navigation />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
