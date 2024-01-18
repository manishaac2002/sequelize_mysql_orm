const { User } = require("./sample");

const getClientDetailsController = (request, response) => {
  response.send('Getting client details')
}
const createNewClientDetailsController = async (request, response) => {
  try {

    const { firstName, lastName, email } = request.body;
    const newUser = await User.create({ firstName, lastName, email });
    response.json(newUser);
  } catch (error) {

    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getClientDetailsController,
  createNewClientDetailsController
} 