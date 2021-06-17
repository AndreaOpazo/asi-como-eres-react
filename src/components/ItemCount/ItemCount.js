import React, { useState } from 'react';
import { Modal, Backdrop, Fade, Button, IconButton } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  //logica para contador
  const [number, setNumber] = useState(initial);

  const sumarUno = () => {
    const nuevaCantidad = number + 1;
    if (stock >= nuevaCantidad) setNumber(nuevaCantidad);
  };

  const restarUno = () => {
    const nuevaCantidad = number - 1;
    if (nuevaCantidad >= 1) setNumber(number - 1);
  };

  //logica para aviso al usuario
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  //Cuando se agrega al carrito un producto
  const agregarAlCarrito = () => (stock > 0 ? onAdd() : null);

  return (
    <div className="CounterSection">
      <span className="span-counter">{number}</span>
      <div className="btn-section">
        <div>
          <IconButton onClick={number > 1 ? restarUno : null}>
            <RemoveCircleIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={stock > 0 ? sumarUno : null}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </div>
        <br />
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Agregar al carrito
        </Button>
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
              <h2 id="transition-modal-title">{agregarAlCarrito()}</h2>
            </div>
          </Fade>
        </Modal>
        {/* <Popup
          // content={agregarAlCarrito}
          on="click"
          pinned
          trigger={<Button color="black">Agregar al carrito</Button>}
        />
        {agregarAlCarrito} */}
        {/* <Button color="black" onClick={agregarAlCarrito}>
          Agregar al carrito
        </Button> */}
      </div>
    </div>
  );
};

export default ItemCount;
