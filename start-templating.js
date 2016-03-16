var _ = require("lodash");

var logins = function(collection) {
  return _.template('Hello <%= name %> (logins: <%= num %>)')({
    name: collection.name,
    num: collection.login.length
  });
};

module.exports = logins;
