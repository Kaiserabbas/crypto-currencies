// reducers.js
import { SET_CRYPTOS } from './actions';

const initialState = {
  cryptos: [],
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CRYPTOS:
      return {
        ...state,
        cryptos: action.cryptos,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
