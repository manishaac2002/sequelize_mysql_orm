const {  Users_Demo, clients } = require("./db");


const getClientDetailsController = (request, response) => {
  response.send('Getting client details')
}
const createNewClientDetailsController = async (request, response) => {
  
}

module.exports = {
  getClientDetailsController,
  createNewClientDetailsController
} 