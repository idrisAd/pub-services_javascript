var services = require('pub-services').services;

function getListPub() {
  console.log(services.pubService.list_pub());
}

function getListOpenPubs(day){
  console.log(services.pubService.open_pub(day));
}

module.exports = {
  //list_pub: services.pubService.list_pub,
  //open_pub: services.pubService.open_pub,
  getListPub: getListPub,
  getListOpenPubs: getListOpenPubs
}
