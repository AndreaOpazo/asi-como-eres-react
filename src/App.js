import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <Header />
      <ItemListContainer />
    </div>
  );
};

export default App;
