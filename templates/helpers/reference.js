var _ = require('underscore');

module.exports = function(context, options){
  if(context.title === '//'){
    return false;
  } else {
    return options.fn(context);
  }
};
