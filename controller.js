const { Client, Users } = require("./db");


const getClientDetailsController = (request, response) => {
    response.send('Getting client details')
}
const createNewClientDetailsController = async (request, response) => {
    try {
        // Insert data into Table1
        const clientTable = await Client.create(data1);

        // Insert data into Table2
        const usersTable = await Users.create(data2);

        return res.status(200).json({ message: 'Data inserted successfully' });
      } catch (error) {
        // Handle errors
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }

module.exports = { 
    getClientDetailsController ,
    createNewClientDetailsController 
} 