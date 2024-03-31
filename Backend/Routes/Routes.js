const express = require("express")
const {create,getAll,update,deleteone,getone} = require('../Contoller/Controller.js')

const route = express.Router();


route.post("/create",create)
route.get("/getall",getAll)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteone)
route.get("/getone/:id",getone)

module.exports = route;
 