import express from "express";
import controller from "./controller.js";

const application = express()
application.use(express.json())

// APIs
//continue here get request
application.post('/createNewUserDetails',controller.createNewUserDetailsController)

const port = 2001
application.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });