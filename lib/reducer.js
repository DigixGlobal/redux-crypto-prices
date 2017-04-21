'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actions.actions.SET_CURRENCIES:
      {
        return _extends({}, state, { available: action.payload });
      }
    case _actions.actions.SET_SELECTED_CURRENCY:
      {
        return _extends({}, state, { selected: action.payload });
      }
    case _actions.actions.UPDATE_PRICES:
      {
        return _extends({}, state, { prices: action.payload });
      }
    default:
      return state;
  }
};

var _actions = require('./actions');

var _constants = require('./constants');

var DEFAULT_STATE = {
  available: _constants.DEFAULT_AVAILABLE,
  selected: _constants.DEFAULT_SELECTED,
  baseCurrency: _constants.DEFAULT_BASE_CURRENCY,
  prices: {}
};