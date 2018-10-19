var assert = require('assert');

var _ = require('lodash');

module.exports = function (action, quantity, price, transmitOrder, tif) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a number.');
  assert(_.isNumber(price), 'Price must be a number.');

  if (transmitOrder === undefined) {
    transmitOrder = true;
  }

  return {
    action: action,
    lmtPrice: price,
    orderType: 'LMT',
    totalQuantity: quantity,
    tif: tif || 'DAY',
    transmit: transmitOrder
  };
};
