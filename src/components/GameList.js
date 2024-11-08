// src/components/GameList.js
import React, { useEffect, useState } from 'react';
import { fetchGames } from '../api';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      setGames(data);
    };
    loadGames();
  }, []);

  return (
    <div>
      <h2>Available Video Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <p>Price: ${game.price}</p>
            <p>Stock: {game.stock}</p>
            <img src={game.image_url} alt={game.title} width="150" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
