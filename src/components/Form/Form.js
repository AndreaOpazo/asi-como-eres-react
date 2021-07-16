import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import './Form.css';

const Form = ({ realizarPedido }) => {
  const initialBuyer = {
    name: '',
    phone: '',
    email: ''
  };
  const [buyer, setBuyer] = useState(initialBuyer);
  const [saving, setSaving] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value })
  };

  const handleClick = () => {
    setSaving(true);
    realizarPedido(buyer);
  };

  return (
    <form className="checkoutForm">
      <TextField label="Nombre Completo" variant="outlined" size="small" className="name" value={buyer.name} name="name" onChange={handleChange} />
      <TextField label="Telefono" variant="outlined" size="small" className="phone" value={buyer.phone} name="phone" onChange={handleChange} />
      <TextField label="E-mail" variant="outlined" size="small" className="email" value={buyer.email} name="email" onChange={handleChange} />
      <div>
        {
          saving ? <Spinner /> : <Button text="Realizar Pedido" variant="contained" color="primary" event={handleClick} />
        }
      </div>
    </form>
  )
}

export default Form;
