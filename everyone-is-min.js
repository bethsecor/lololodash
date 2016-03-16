var _ = require("lodash");

var tempTowns = function(town_temps) {
  var towns = { hot: [], warm: []};

  function check_temp (temp) {
    console.log(temp);
      return temp > 19;
  }

  _.forEach(town_temps, function (town, townname) {
      if (_.every(town, check_temp)) {
          towns.hot.push(townname);
      } else if (_.some(town, check_temp)) {
          towns.warm.push(townname);
      }

  });
  return towns;
};

module.exports = tempTowns;
