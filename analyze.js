var _ = require("lodash");

var performance = function(collection) {
  var analysis = {};

  var averageIncome = _.mean(_.map(collection, function(element){
    return element.income;
  }));

  analysis['average'] = averageIncome;
  analysis['underperform'] = _.orderBy(_.filter(collection,
    _.conforms({'income': _.partial(_.lte, _, averageIncome) })), 'income');
  analysis['overperform'] = _.orderBy(_.filter(collection,
    _.conforms({'income': _.partial(_.gt, _, averageIncome) })), 'income');
  return analysis
};

module.exports = performance;
