import express from "express";
import controller from "./controller.js";

const application = express()
application.use(express.json())

// APIs
application.get('/getClientDetails',controller.getClientDetailsController )
application.post('/createClientDetails',controller.createNewClientDetailsController )

const port = 2001
application.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });