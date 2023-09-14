import { configureStore } from '@reduxjs/toolkit';
import store from '../redux/store';
import cryptoReducer from '../redux/reducers/cryptoReducer';

describe('Redux Store', () => {
  let testStore;

  beforeEach(() => {
    testStore = configureStore({
      reducer: {
        coins: cryptoReducer,
      },
    });
  });

  // Test that the store configuration is correct
  it('should configure the store with the cryptoReducer', () => {
    const expectedInitialState = {
      coins: {
        cryptos: [],
      },
    };
    expect(testStore.getState()).toEqual(expectedInitialState);
  });
  it('should export the configured store', () => {
    const storeState = store.getState();
    const testStoreState = testStore.getState();
    expect(testStoreState).toEqual(storeState);
  });
});
