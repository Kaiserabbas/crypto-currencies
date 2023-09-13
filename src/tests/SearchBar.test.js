// SearchBar.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  it('calls onSearch with the input value when input changes', () => {
    const onSearchMock = jest.fn();
    const cryptos = [
      { name: 'Bitcoin', symbol: 'BTC' },
      { name: 'Ethereum', symbol: 'ETH' },
    ];

    const { getByPlaceholderText } = render(
      <SearchBar onSearch={onSearchMock} cryptos={cryptos} />
    );

    const input = getByPlaceholderText('Search cryptocurrencies...');
    fireEvent.change(input, { target: { value: 'btc' } });

    expect(onSearchMock).toHaveBeenCalledWith('btc');
  });

  it('calls onSearch with the input value when "Search" button is clicked', () => {
    const onSearchMock = jest.fn();
    const cryptos = [
      { name: 'Bitcoin', symbol: 'BTC' },
      { name: 'Ethereum', symbol: 'ETH' },
    ];

    const { getByText, getByPlaceholderText } = render(
      <SearchBar onSearch={onSearchMock} cryptos={cryptos} />
    );

    const input = getByPlaceholderText('Search cryptocurrencies...');
    const searchButton = getByText('Search');

    fireEvent.change(input, { target: { value: 'eth' } });
    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledWith('eth');
  });
});
