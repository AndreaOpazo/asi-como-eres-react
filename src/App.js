import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import ProductDetailContainer from './views/ProductDetailContainer/ProductDetailContainer';
import Products from './views/Products/Products';
import Checkout from './views/Checkout/Checkout';
import Cart from './views/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/productos/:category" component={Products} />
            <Route path="/producto/:id" component={ProductDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
