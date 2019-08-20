class CryptoAPI {
  // query rest api with currency and crypto
  async queryAPI(currency, cryptocurrency) {
    const url = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`
    );
    const result = await url.json();
    return { result };
  }

  // get all the cryptoCurrencies
  async getCryptoCurrenciesList() {
    const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');
    const cryptoCurrencies = await url.json();
    return { cryptoCurrencies };
  }
}
