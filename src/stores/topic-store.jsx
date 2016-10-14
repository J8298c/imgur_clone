var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getTopics: function(){
    //returns api module
    return Api.get('topics/defaults/')
    .then(function(json){
      //data returned from ajax request
      this.topics = json.data
      //triggerChange runs when data is successfully recieved
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function(){
    //on chaange passes in list of data
    this.trigger('change', this.topics);
  }
});
