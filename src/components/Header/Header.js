import React from 'react';
import Navigation from '../Navigation/Navigation';
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Grid
} from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      minHeight: 80,
      background: '#000',
    },
    search: {
      padding: '0px 4px',
      display: 'flex',
      alignItems: 'center',
      height: 35,
      width: 250,
      position: 'relative',
      border: '2px solid #fff',
      borderRadius: '25px',
      backgroundColor: fade(theme.palette.common.white, 0),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0),
      },
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: '#fff',
    },
    iconButton: {
      padding: 10,
      color: '#fff',
    },
  }));

  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Grid container direction="row" alignItems="center" spacing={3}>
          <Grid item xs>
            <Link to={'/'}>
              <p>ASÍ COMO ERES</p>
            </Link>
          </Grid>
          <Grid item xs>
            <div className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Qué estas buscando?"
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Navigation />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
