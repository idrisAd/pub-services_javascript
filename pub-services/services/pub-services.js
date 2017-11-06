const _ = require('lodash');
var moment = require ('moment');

var pubJSON = require('../mocks/pub.json');


function list_pub(){
  var pubList = [];
  _.forEach(pubJSON, function(value){
    pubList.push(value.name);
  });
  return pubList;
}

function open_pub(day){
  if(_.isEmpty(day)){
    day = moment().format('dddd');
  }
  var filtered = pubJSON.filter(function  (pub) {
    return pub.openDays.includes(day)
  })
  return filtered.map(function (pub){
    return pub.name;
  })
}

module.exports = {
  list_pub: list_pub,
  open_pub: open_pub
}
