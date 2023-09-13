import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, cryptos }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    setSearchText(newValue);
    if (newValue === '') {
      onSearch(cryptos);
    } else {
      onSearch(newValue);
    }
  };
  const handleSearch = () => {
    onSearch(searchText);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search cryptocurrencies..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  cryptos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SearchBar;
