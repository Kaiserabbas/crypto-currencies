import cryptoReducer from '../redux/reducers/cryptoReducer';
import { SET_CRYPTOS } from '../redux/actions/actions';

describe('cryptoReducer', () => {
  it('should return the initial state', () => {
    const state = cryptoReducer(undefined, {});
    expect(state).toEqual({
      cryptos: [],
    });
  });

  it('should update the cryptos array when the SET_CRYPTOS action is dispatched', () => {
    const cryptos = [
      {
        id: 1,
        name: 'Bitcoin',
        price: 10000,
      },
      {
        id: 2,
        name: 'Ethereum',
        price: 5000,
      },
    ];
    const action = {
      type: SET_CRYPTOS,
      cryptos,
    };
    const state = cryptoReducer(undefined, action);
    expect(state).toEqual({
      cryptos,
    });
  });
});
