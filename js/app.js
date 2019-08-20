// instantiate the classes
const cryptoAPI = new CryptoAPI();
const ui = new UI();

// create the variables

const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  // read currency
  const currencySelect = document.getElementById('currency').value;
  // read cryptoCurrency
  const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;
  // validate that he selects have somthing

  if (currencySelect === '' || cryptoCurrencySelect === '') {
    ui.printMessage(
      'All the fields are mandatory',
      'deep-orange darken-4 card-panel'
    );
  } else {
    cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect).then(data => {
      ui.displayResult(data.result[0], currencySelect);
    });
  }
});
