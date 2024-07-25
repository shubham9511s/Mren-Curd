const express = require('express')
const mongoose = require("mongoose");
const bodyparse = require("body-parser")
const cors = require('cors')
const route = require("./Routes/Routes.js")



const app = express()
app.use(cors());
app.use(bodyparse.json())
app.use(express.json())

const PORT= 5000;
const URI= "mongodb://admin:password@13.233.192.11:27017/todo?directConnection=true&appName=mongosh+2.2.12";



const DatabaseDB = async () => {
  try {
     await mongoose.connect(
     URI
    );
    app.listen(PORT , ()=>{
      console.log(`server run on localhost:${PORT}`);
    });
    console.log("MONGODB IS connected sucessfully");

  } catch (error) {
    console.log("MONGODB Connection Failed ", error);
    process.exit(1);
  }
};

DatabaseDB();//Calling Database Function

app.use("/api" ,route); //API devlopment






