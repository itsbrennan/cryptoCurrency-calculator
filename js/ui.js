class UI {
  constructor() {
    this.init();
  }

  init() {
    this.printCryptoCurrencies();
  }
  // print the options for the select in the form
  printCryptoCurrencies() {
    cryptoAPI.getCryptoCurrenciesList().then(data => {
      const cryptoCurrencies = data.cryptoCurrencies;
      /// build the select from api
      const select = document.getElementById('cryptocurrency');
      cryptoCurrencies.forEach(currency => {
        // add the option
        const option = document.createElement('option');
        option.value = currency.id;
        option.appendChild(document.createTextNode(currency.name));
        select.appendChild(option);
      });
    });
  }

  // prints a message
  printMessage(message, className) {
    const div = document.createElement('div');
    div.className = className;
    // add the message
    div.appendChild(document.createTextNode(message));
    const messageDiv = document.querySelector('.messages');
    messageDiv.appendChild(div);

    // remove the message
    setTimeout(() => {
      document.querySelector('.messages div').remove();
    }, 3000);
  }

  // prints the result f the rate
  displayResult(result, currency) {
    // read the currency
    let currencyName = 'price_' + currency.toLowerCase();

    // read te result from object
    const value = result[currencyName];

    console.log(value);

    let HTMLTemplate = '';

    HTMLTemplate += `
      <div class = 'card cyan darken-3'>
        <div class = 'card-content white-text'>
          <span class = 'card-title'>Result</span>
          <p>The Price of ${result.name} from ${currency} is ${value}</p>
        </div>
      </div>
    `;
    const divResult = document.querySelector('#result');
    divResult.innerHTML = HTMLTemplate;
  }
}
