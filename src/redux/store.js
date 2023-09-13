// store.js
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './reducers';

const store = configureStore({
  reducer: {
    coins: cryptoReducer,
  },
});

export default store;
