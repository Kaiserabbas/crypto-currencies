// CryptoDetails.js
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import fetchCryptos from '../services/cryptoService';
import './CryptoDetails.css';

const CryptoDetails = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    async function fetchCryptoDetails() {
      const cryptosData = await fetchCryptos();
      const selectedCrypto = cryptosData.find((item) => item.id === id);

      if (selectedCrypto) {
        setCrypto(selectedCrypto);
      }
    }
    fetchCryptoDetails();
  }, [id]);

  if (!crypto) {
    return null;
  }

  return (
    <div className="crypto-details" data-testid="Crypto-list">
      <h2>
        {crypto.name}
        (
        {crypto.symbol}
        )
      </h2>
      <table className="table">
        <tbody>
          <tr>
            <td>Rank:</td>
            <td>
              {crypto.rank}
            </td>
          </tr>
          <tr>
            <td>
              Price (USD):
            </td>
            <td>
              {crypto.price_usd}
            </td>
          </tr>
          <tr>
            <td>7 Days Chnage %:</td>
            <td>
              {crypto.percent_change_7d}
            </td>
          </tr>
          <tr>
            <td>24 Hours Change %:</td>
            <td>
              {crypto.percent_change_24h}
            </td>
          </tr>
          <tr>
            <td>1 Hour Change %:</td>
            <td>
              {crypto.percent_change_1h}
            </td>
          </tr>
          <tr>
            <td>Market CAP (USD):</td>
            <td>
              {crypto.market_cap_usd}
            </td>
          </tr>
          <tr>
            <td>Price Compared To Bitcoin:</td>
            <td>
              {crypto.price_btc}
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/" className="arrow-link">
        <IoIosArrowBack className="back-arrow" />
        Back to DashBoard
      </Link>
    </div>
  );
};

CryptoDetails.propTypes = {
  crypto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    price_usd: PropTypes.string.isRequired,
    percent_change_7d: PropTypes.string.isRequired,
    percent_change_24h: PropTypes.string.isRequired,
    percent_change_1h: PropTypes.string.isRequired,
    price_btc: PropTypes.string.isRequired,
  }),
};

CryptoDetails.defaultProps = {
  crypto: null,
};

export default CryptoDetails;
