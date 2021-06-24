import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import { Tab, AppBar } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from '../../components/ItemCount/ItemCount';
import './ProductDetail.css';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  cover: {
    width: 500,
  },
}));

const ProductDetail = ({ product }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState('1');

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  const agregarAlCarrito = () => 'El producto se agrego al carrito.';

  const {
    description,
    description: { info },
  } = product;

  return (
    <Grid direction="row" justify="flex-start" alignItems="flex-start">
      <Card className={classes.root}>
        <Grid item xs={4}>
          <CardMedia
            className={classes.cover}
            component="img"
            image={`../images/${product.image}`}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h4">
              {product.title}
            </Typography>
            <Typography variant="h5">${product.price}</Typography>
            <Typography variant="SUBTITLE1" color="textSecondary">
              Unidades Disponibles: 5
            </Typography>
            <ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
            <TabContext value={value}>
              <AppBar position="static" color="transparent">
                <TabList onChange={handleChange} indicatorColor="primary">
                  <Tab label="DESCRIPCIÓN" value="1" />
                  <Tab label="INFORMACIÓN ADICIONAL" value="2" />
                </TabList>
              </AppBar>
              <TabPanel value="1">
                <Typography component="subtitle1" variant="b">
                  MEDIDAS
                </Typography>
                <Typography variant="subtitle1">
                  Alto: {description.height}
                </Typography>
                <Typography variant="subtitle1">
                  Ancho: {description.width}
                </Typography>
                <Typography variant="subtitle1">
                  Profundidad: {description.depth}
                </Typography>
                <br />
                <Typography variant="subtitle1">
                  {description.detail}
                </Typography>
              </TabPanel>
              <TabPanel value="2">
                <Typography component="subtitle1" variant="b">
                  {info.assurance}
                </Typography>
                <Typography variant="subtitle1">
                  Dimension {info.dimension}
                </Typography>
                <Typography variant="subtitle1">Talle {info.waist}</Typography>
                <Typography variant="subtitle1">Color {info.colour}</Typography>
              </TabPanel>
            </TabContext>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
};

export default ProductDetail;
