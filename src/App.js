import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Productos from './views/Productos/Productos';
import Info from './views/Info/Info';
import Contacto from './views/Contacto/Contacto';
import CharacterDetailContainer from './views/CharacterDetailContainer/CharacterDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productos" component={Productos} />
          <Route path="/info" component={Info} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/detail/:id" component={CharacterDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
