import { actions } from './actions';
import { DEFAULT_BASE_CURRENCY, DEFAULT_SELECTED, DEFAULT_AVAILABLE } from './constants';

const DEFAULT_STATE = {
  available: DEFAULT_AVAILABLE,
  selected: DEFAULT_SELECTED,
  baseCurrency: DEFAULT_BASE_CURRENCY,
  prices: {},
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actions.SET_CURRENCIES : {
      return { ...state, available: action.payload };
    }
    case actions.SET_SELECTED_CURRENCY : {
      return { ...state, selected: action.payload };
    }
    case actions.UPDATE_PRICES : {
      return { ...state, prices: action.payload };
    }
    default: return state;
  }
}
