var _ = require("lodash");

var totalOrders = function(collection) {
  var articles =  _.groupBy(collection, 'article');
  return _.map(articles, function(orders, article_id){
    return { article: _.toInteger(article_id),
             total_orders: _.sum(_.map(orders, function(element){
      return element.quantity
    }))}
  }).reverse();
};

module.exports = totalOrders;
