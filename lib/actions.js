'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSelectedCurrency = setSelectedCurrency;
exports.getPrices = getPrices;
exports.updateCurrencies = updateCurrencies;
/* globals fetch */

var PREFIX = 'DIGIX_CRYPTO_PRICES';

var actions = exports.actions = {
  SET_CURRENCIES: PREFIX + '_SET_CURRENCIES',
  SET_SELECTED_CURRENCY: PREFIX + '_SET_SELECTED_CURRENCY',
  UPDATE_PRICES: PREFIX + '_UPDATE_PRICES'
};

function setSelectedCurrency(payload) {
  return { type: actions.SET_SELECTED_CURRENCY, payload: payload };
}

function getPrices() {
  return function (dispatch, getStore) {
    var _getStore = getStore(),
        cryptoPrices = _getStore.cryptoPrices;

    var available = cryptoPrices.available,
        baseCurrency = cryptoPrices.baseCurrency;

    var currencies = available.join(',');
    var url = 'https://min-api.cryptocompare.com/data/price?fsym=' + baseCurrency + '&tsyms=' + currencies;
    return fetch(url).then(function (data) {
      return data.json();
    }).then(function (payload) {
      return dispatch({ type: actions.UPDATE_PRICES, payload: payload });
    });
  };
}

function updateCurrencies(payload) {
  return function (dispatch, getStore) {
    dispatch({ type: actions.SET_CURRENCIES, payload: payload });
    return getPrices()(dispatch, getStore);
  };
}