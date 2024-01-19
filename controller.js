import dbTable from './models/db.js'
const createNewUserDetailsController = async(request, response) => {
  const {user_name} =request.body
  const newUser =await dbTable.User.create({
    user_name ,
  })
  response.json(newUser)
  console.log(request.body);
}

const createNewUserDetailsController1 = async(request, response) => {
  const {user_email,user_id} =request.body
  const newUser =await dbTable.UserDetail.create({
   user_email,user_id
  })
  response.json(newUser)
}

export default {
  createNewUserDetailsController,
  createNewUserDetailsController1
}