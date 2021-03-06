var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'ccb4985d32fc66d';

module.exports = {
  get: function(url){
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json()
    })
    /*.then(function(data){
      console.log(data);
    })*/
  }
};
