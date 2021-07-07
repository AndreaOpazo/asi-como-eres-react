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
  Button,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import ItemCount from '../../components/ItemCount/ItemCount';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Link } from 'react-router-dom';
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
            {cantidadPedida === 0 ? (
              <ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
            ) : (
              <div className="btn-compra">
                <Link to="/cart">
                  <br />
                  <Button variant="contained" color="primary">
                    Terminar mi compra
                  </Button>
                </Link>
              </div>
            )}
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
        aria-labelledby="transition-modal-title"
        className="modal"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className="fade-paper">
            <h2 id="transition-modal-title">
              Se agrego el producto al carrito!
            </h2>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default ProductDetail;