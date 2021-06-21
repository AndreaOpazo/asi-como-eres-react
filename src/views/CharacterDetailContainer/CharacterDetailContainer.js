import React, { useEffect, useState } from 'react';
import './CharacterDetailContainer.css';
import CharacterDetail from '../CharacterDetail/CharacterDetail';

const CharacterDetailContainer = ({ match }) => {
  const [character, setCharacter] = useState({});
  const characterID = match.params.id;

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://thronesapi.com/api/v2/Characters/${characterID}`
      );
      const character = await response.json();
      setCharacter(character);
    })();
  }, [characterID]);

  return (
    <div className="CharacterDetail" style={{ padding: 40 }}>
      <CharacterDetail character={character} />
    </div>
  );
};

export default CharacterDetailContainer;
