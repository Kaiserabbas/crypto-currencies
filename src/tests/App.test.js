import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

describe('App', () => {
  test('renders app header and Crypto List', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const headerElement = screen.getByText('Crypto Dashboard');
    expect(headerElement).toBeInTheDocument();
    const listElement = screen.getByTestId('Crypto-list');
    expect(listElement).toBeInTheDocument();
  });

  // Add more tests for other functionalities of App component
});
