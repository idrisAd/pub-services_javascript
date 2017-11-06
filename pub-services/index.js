var pubService = require("./services/pub-services")

// console.log('La liste des bars: ', pubService.list_pub());
// console.log('Les bars ouverts: ', pubService.open_pub('Monday'));

module.exports = {
  services: {
    pubService : pubService
  }
}
