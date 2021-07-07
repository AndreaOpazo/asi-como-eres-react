import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import ProductDetailContainer from './views/ProductDetailContainer/ProductDetailContainer';
import Products from './views/Products/Products';
import Info from './views/Info/Info';
import Contact from './views/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './views/Cart/Cart';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/productos" component={Products} />
            <Route path="/info" component={Info} />
            <Route path="/contacto" component={Contact} />
            <Route path="/producto/:id" component={ProductDetailContainer} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
