var moment = require('moment');

module.exports = function(date){
  // return moment(date);
  return moment.utc(date).format('DD. MMMM YYYY');
};
