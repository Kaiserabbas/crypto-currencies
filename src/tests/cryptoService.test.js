import fetchCryptos from '../services/cryptoService';

describe('fetchCryptos', () => {
  it('should fetch cryptos from the API', async () => {
    // Arrange
    const mockData = [
      { id: 1, name: 'Bitcoin', symbol: 'BTC' },
      { id: 2, name: 'Ethereum', symbol: 'ETH' },
    ];

    // Mock the fetch function
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ data: mockData }),
    });

    // Act
    const result = await fetchCryptos();

    // Assert
    expect(result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.coinlore.net/api/tickers/?start=0&limit=120');

    // Restore the fetch function
    global.fetch.mockRestore();
  });

  it('should throw an error if the network response is not ok', async () => {
    // Mock the fetch function
    jest.spyOn(global, 'fetch').mockResolvedValue({ ok: false });

    // Assert
    await expect(fetchCryptos()).rejects.toThrow('Network response was not ok');

    // Restore the fetch function
    global.fetch.mockRestore();
  });
});
