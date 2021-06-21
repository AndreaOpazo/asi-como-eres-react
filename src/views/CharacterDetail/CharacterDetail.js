import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CharacterDetail = ({ character }) => {
  return (
    <Card key={character.id}>
      <Image src={character.imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.title}</Card.Header>
        <Card.Meta>{character.family}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default CharacterDetail;
