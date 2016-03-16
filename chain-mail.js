var _ = require("lodash");

var chainSort = function(array) {
  var chains = _.map(array, function(element) {
    return (element + "chained").toUpperCase();
  });
  return chains.sort();
};

module.exports = chainSort;
