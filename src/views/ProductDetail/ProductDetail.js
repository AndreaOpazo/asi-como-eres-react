import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Backdrop,
  Fade
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link, useHistory } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';
import Button from '../../components/Button/Button';
import './ProductDetail.css';
import { CartContext } from '../../CartContext';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnCompra: {
    marginLeft: 20
  }
}));

const ProductDetail = ({ product }) => {
  const classes = useStyles();

  const history = useHistory();

  const [cantidadPedida, setCantidadPedida] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const { addItem } = useContext(CartContext);

  const handleClose = () => {
    setOpenModal(false);
  };

  const agregarAlCarrito = (cantidadPedida) => {
    addItem(product, cantidadPedida);
    setCantidadPedida(cantidadPedida);
    setOpenModal(true);
  };

  const { description } = product;

  return (
    <Grid direction="column" container>
      <Card className={classes.root}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            width="200px"
            image={product.image}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h4">
              {product.title}
            </Typography>
            <Typography variant="h5">${product.price}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
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
                        <Button variant="contained" color="primary" text="Volver" event={() => history.goBack()} />
                      </Link>
                      <Link to="/cart" className={classes.btnCompra}>
                        <Button variant="contained" color="primary" text="Terminar mi compra" />
                      </Link>
                    </div>
                  )
            }
            <br />
            <Typography component="b">
              DESCRIPCIÓN
            </Typography>
            <br />
            <Typography variant="body2" component="b">
              {description.detail}
            </Typography>
            <br />
            <br />
            <Typography component="b">
              MEDIDAS
            </Typography>
            <br />
            <Typography component="b">
              Alto: {description.height}
            </Typography>
            <br />
            <Typography component="b">
              Ancho: {description.width}
            </Typography>
            <br />
            <Typography component="b">
              Profundidad: {description.depth}
            </Typography>
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
