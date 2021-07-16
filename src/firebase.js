import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './config';

const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();

export const getProducts = async () => {
  const snapshot = await db.collection('products').get();
  return snapshot.docs.map(product => product.data());
};

export const getProductByID = async (productID) => {
  const product = await db.collection('products').doc(productID).get()
  return product;
};

export const createOrder = async (order) => {
  const newOrder = await db.collection('orders').add(order)
  return newOrder;
};