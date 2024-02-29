import express from "express";
import controller from "./controller.js";

const application = express()
application.use(express.json())

// APIs

application.post('/createNewUserDetails',controller.createNewUserDetailsController)
application.post('/createNewUserDetails1',controller.createNewUserDetailsController1)

const port = 2001
application.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });