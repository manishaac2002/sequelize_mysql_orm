import dbTable from "./sample.js"

const getClientDetailsController = (request, response) => {
  response.send('Getting client details')
}
const createNewClientDetailsController = async (request, response) => {
  try {

    const { firstName, lastName, email, address}= request.body;
    const newUser = await dbTable.User.create({ 
      firstName, 
      lastName, 
      email,
      address: {
        street:address.street,
        city:address.city,
        state:address.state,
        zipCode:address.zipCode,
      },
    },
    {
      include: dbTable.Address,
    }
    );
    response.json(newUser);
    console.log(address);
  } catch (error) {

    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
const testingRouterController =()=>{

}
export default  {
  getClientDetailsController,
  createNewClientDetailsController,
  testingRouterController
} 