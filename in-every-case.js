var _ = require("lodash");

var addSize = function(collection) {
  return _.forEach(collection, function(value, key) {
    if (value['population'] > 1) {
      value['size'] = 'big'
    } else if (value['population'] < 1 & value['population'] > 0.5) {
      value['size'] = 'med'
    } else {
      value['size'] = 'small'
    }
  })
};

module.exports = addSize;
