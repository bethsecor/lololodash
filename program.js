// include the Lo-Dash library
var _ = require("lodash");

var worker = function(arrayJSO) {
    return _.filter(arrayJSO, { active: true })
};

// export the worker function as a nodejs module
module.exports = worker;
