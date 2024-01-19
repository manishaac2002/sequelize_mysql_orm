import dbTable from './models/db.js'
const createNewUserDetailsController = async(request, response) => {
  const {user_name,user_email,user_id} =request.body
  const newUser =await dbTable.User.create({
    user_name ,
  })
  const newUserDetail =await dbTable.UserDetail.create({
   user_email,user_id
  })
  response.json(newUser && newUserDetail )
  console.log(request.body);
}

const createNewUserDetailsController1 = async(request, response) => {

  response.json(newUser)
}

export default {
  createNewUserDetailsController,
  createNewUserDetailsController1
}