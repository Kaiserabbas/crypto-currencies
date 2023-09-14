import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CryptoList from '../components/CryptoList';

const mockStore = configureMockStore([]);

describe('CryptoList and render crypto currencies', () => {
  test('renders crypto currencies', async () => {
    const mockCryptoData = [
      {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        price_usd: 50000,
      },
    ];

    const store = mockStore({
      coins: {
        cryptos: mockCryptoData,
      },
    });

    render(
      <Provider store={store}>
        <CryptoList />
      </Provider>,
    );

    const listElement = screen.getByTestId('Crypto-list');
    expect(listElement).toBeInTheDocument();

    const cryptoCardElement = await screen.findByTestId('search');
    expect(cryptoCardElement).toBeInTheDocument();
  });
});
