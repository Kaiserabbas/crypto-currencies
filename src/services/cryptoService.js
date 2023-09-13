// cryptoService.js
const API_URL = 'https://api.coinlore.net/api/tickers/?start=0&limit=120';

const fetchCryptos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.data;
};

export default fetchCryptos;
