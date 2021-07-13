import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  Tab,
  AppBar,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Backdrop,
  Fade
} from '@material-ui/core';
import { TabContext, TabList, TabPanel, Alert, AlertTitle } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';
import Button from '../../components/Button/Button';
import './ProductDetail.css';
import { CartContext } from '../../CartContext';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  cover: {
    width: 500,
  },
  btnCompra: {
    marginLeft: 20
  }
}));

const ProductDetail = ({ product }) => {
  const classes = useStyles();

  const [value, setValue] = useState('1');
  const [cantidadPedida, setCantidadPedida] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const { addItem } = useContext(CartContext);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  const agregarAlCarrito = (cantidadPedida) => {
    addItem(product, cantidadPedida);
    setCantidadPedida(cantidadPedida);
    setOpenModal(true);
  };

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
            image={product.image}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h4">
              {product.title}
            </Typography>
            <Typography variant="h5">${product.price}</Typography>
            <Typography variant="SUBTITLE1" color="textSecondary">
              {
                product.stock === 0
                  ? "Sin stock" 
                  : `Unidades Disponibles: ${product.stock}`
              }
            </Typography>
            {
              cantidadPedida === 0 
                ? (<ItemCount stock={product.stock} initial={1} onAdd={agregarAlCarrito} />) 
                : (
                    <div className="btnLinkSection">
                      <Link to="/">
                        <Button variant="contained" text="Volver" />
                      </Link>
                      <Link to="/cart" className={classes.btnCompra}>
                        <Button variant="contained" text="Terminar mi compra" />
                      </Link>
                    </div>
                  )
            }
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
      <Modal
        aria-labelledby="avisoCart"
        className="modal"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Alert id='avisoCart' severity="success">
            <AlertTitle>
              Se agregó el producto al carrito!
            </AlertTitle>
          </Alert>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default ProductDetail;
