//import mongoose
const mongoose = require('mongoose')

//connection string in .env

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("Mongodb Atlas connected with Server");
    }
).catch(err=>{
    console.log("Connection failed!!!");
    console.log(err);
})