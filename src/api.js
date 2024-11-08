// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchGames = async () => {
  const response = await axios.get(`${API_BASE_URL}/games`);
  return response.data;
};

export const fetchGame = async (gameId) => {
  const response = await axios.get(`${API_BASE_URL}/games/${gameId}`);
  return response.data;
};
