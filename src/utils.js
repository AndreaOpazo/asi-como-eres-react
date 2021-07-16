export const calcularTotalYEnvio = (conEnvio, cart) => {
  const subtotal = cart.reduce(
    (acumuladorPrecio, {item, quantity}) =>
      item.price * quantity +
      acumuladorPrecio,
    0
  );
  return conEnvio ? subtotal + 300 : subtotal;
};

export const getActualDate = () => {
  const date = new Date();

  let day = date.getDate();
  if (day < 10) day = `0${day}`;

  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;

  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
};