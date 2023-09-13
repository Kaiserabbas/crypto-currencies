import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import fetchCryptos from '../services/cryptoService';
import { setCryptos } from '../redux/actions/actions';
import CryptoDetails from './CryptoDetails';
import SearchBar from './SearchBar';
import './CryptoList.css';

const CryptoList = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.coins.cryptos);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function getCryptos() {
      const cryptosData = await fetchCryptos();
      dispatch(setCryptos(cryptosData));
      setSelectedCrypto(cryptosData[0]);
      setFilteredCryptos(cryptosData);
    }
    getCryptos();
  }, [dispatch]);

  const handleSearch = (searchText) => {
    setSearchText(searchText);
    if (typeof searchText === 'string' && searchText.trim() !== '') {
      const filtered = cryptos.filter((crypto) => (
        crypto.name.toLowerCase().includes(searchText.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchText.toLowerCase())
      ));
      setFilteredCryptos(filtered);
    } else {
      setFilteredCryptos(cryptos);
    }
  };

  return (
    <>
      <div className="search">
        <SearchBar onSearch={handleSearch} cryptos={cryptos} />
      </div>
      <div className="crypto-list">
        {filteredCryptos.map((crypto, index) => (
          <div key={crypto.id} className={`crypto-card ${index % 2 === 0 ? 'even' : 'odd'}`} data-testid="crypto-card">
            <h3>
              {crypto.name}
              (
              {crypto.symbol}
              )
            </h3>
            <p>
              Rank:
              {crypto.rank}
            </p>
            <p>
              Price (USD):
              {crypto.price_usd}
            </p>
            <Link to={`/crypto-details/${crypto.id}`}>
              <FaArrowRight className="arrow" />
            </Link>
          </div>
        ))}
        {filteredCryptos.length === 0 && searchText !== '' && (
          <p>No results found.</p>
        )}
        <CryptoDetails crypto={selectedCrypto} />
      </div>
    </>
  );
};

export default CryptoList;
