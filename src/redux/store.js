// store.js
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './reducers/cryptoReducer';

const store = configureStore({
  reducer: {
    coins: cryptoReducer,
  },
});

export default store;
