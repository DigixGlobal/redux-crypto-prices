/* globals fetch */

const PREFIX = 'DIGIX_CRYPTO_PRICES';

export const actions = {
  SET_CURRENCIES: `${PREFIX}_SET_CURRENCIES`,
  SET_SELECTED_CURRENCY: `${PREFIX}_SET_SELECTED_CURRENCY`,
  UPDATE_PRICES: `${PREFIX}_UPDATE_PRICES`,
};

export function setSelectedCurrency(payload) {
  return { type: actions.SET_SELECTED_CURRENCY, payload };
}

export function getPrices() {
  return (dispatch, getStore) => {
    const { cryptoPrices } = getStore();
    const { available, baseCurrency } = cryptoPrices;
    const currencies = available.join(',');
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${baseCurrency}&tsyms=${currencies}`;
    return fetch(url)
    .then(data => data.json())
    .then(payload => dispatch({ type: actions.UPDATE_PRICES, payload }));
  };
}

export function updateCurrencies(payload) {
  return (dispatch, getStore) => {
    dispatch({ type: actions.SET_CURRENCIES, payload });
    return getPrices()(dispatch, getStore);
  };
}
