var _ = require("lodash");

var commentCounter = function(collection) {
  var commentCounts = [];

  var usernames = _.map(collection, function(element){
    return element.username
  });

  var counts = _.countBy(usernames, _.identity)

  return _.map(counts, function(value, key){
    return { username: key, comment_count: value }
  }).reverse();
};

module.exports = commentCounter;

// lololodash solution:

// var commentcount = function (comments) {
//
//   var counted = [];
//
//   // Group by username
//   comments = _.groupBy(comments, "username");
//
//   _.forEach(comments, function (item, name) {
//
//       counted.push({
//           username: name,
//           comment_count: _.size(item)
//       });
//   });
//
//   return _.sortBy(counted, "comment_count").reverse();
//   // alternative with a sorted function
//   // return _.sortBy(counted, function(comment) { return -comment.comment_count; });
// };
