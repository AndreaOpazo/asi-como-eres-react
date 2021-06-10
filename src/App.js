import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ItemListContainer greeting={'Hola Mundo!'} />
      </div>
    );
  }
}

export default App;
