import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ characters }) => {
  return (
    <div className="UserSection">
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link to={`/detail/${character.id}`}>
              <Item character={character} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
