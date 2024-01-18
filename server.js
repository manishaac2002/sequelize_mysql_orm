import express  from "express";
import testingRoute from "./router.js"
const application =express()
const port =4000

application.post('/testingRouter',testingRoute.testingRouterController)

application.listen(port,()=>{
  console.log(`server is running on ${port}`);
})