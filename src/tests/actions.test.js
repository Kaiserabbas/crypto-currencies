import { setCryptos, SET_CRYPTOS } from '../redux/actions/actions';

describe('setCryptos', () => {
  it('should create an action to set cryptos', () => {
    const cryptos = ['Bitcoin', 'Ethereum', 'Litecoin'];
    const expectedAction = {
      type: SET_CRYPTOS,
      cryptos: cryptos,
    };
    expect(setCryptos(cryptos)).toEqual(expectedAction);
  });
});
