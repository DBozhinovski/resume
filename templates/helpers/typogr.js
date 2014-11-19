var typogr = require('typogr');

module.exports = function(content){
  return typogr(content).typogrify();
};
