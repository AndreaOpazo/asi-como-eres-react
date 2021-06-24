import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const useStyles = makeStyles(() => ({
    tab: {
      minWidth: 90,
      width: 90,
      color: '#fff',
    },
  }));

  const classes = useStyles();
  return (
    <Tabs>
      <Link to="/">
        <Tab classes={{ root: classes.tab }} label="HOME" />
      </Link>
      <Link to="/productos">
        <Tab classes={{ root: classes.tab }} label="PRODUCTOS" />
      </Link>
      <Link to="/info">
        <Tab classes={{ root: classes.tab }} label="+INFO" />
      </Link>
      <Link to="/contacto">
        <Tab classes={{ root: classes.tab }} label="CONTACTO" />
      </Link>
      <CartWidget />
    </Tabs>
  );
};

export default Navigation;
