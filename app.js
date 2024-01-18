const express = require('express')
const { getClientDetailsController, createNewClientDetailsController } = require('./controller')


const application = express()
application.use(express.json())

// APIs
application.get('/getClientDetails',getClientDetailsController )
application.post('/createClientDetails',createNewClientDetailsController )


const port = 2001
application.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });