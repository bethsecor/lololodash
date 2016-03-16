var _ = require("lodash");

var sortByQuantity = function(arrayJSO) {
  return _.orderBy(arrayJSO, "quantity", 'desc')
};

module.exports = sortByQuantity;
