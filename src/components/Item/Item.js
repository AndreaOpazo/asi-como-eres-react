import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Item.css';

const Item = ({ items }) => {
  const cardStyles = {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  };

  return (
    <div className="UserCard">
      <Card style={cardStyles}>
        <Image src={items.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{items.title}</Card.Header>
          <Card.Meta>{items.family}</Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Item;
