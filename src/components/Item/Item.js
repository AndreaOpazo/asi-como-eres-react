import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Item.css';

const Item = ({ character }) => {
  const cardStyles = {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  };

  return (
    <div className="UserCard">
      <Card style={cardStyles}>
        <Image src={character.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{character.title}</Card.Header>
          <Card.Meta>{character.family}</Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Item;
