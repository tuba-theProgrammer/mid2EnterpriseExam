const express= require('express')
const path= require('path')
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const fileUpload = require("express-fileupload");
const taskRouter= require('./Routes/routes')

// using template engine
app.set("view engine","ejs")



// using middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());


const mongoDb='mongodb+srv://tubaAsif:shabana1234@cluster0.soo8g.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoDb, /*We place this to remove warning*/{ useNewUrlParser:
  true, useUnifiedTopology: true }).then(()=>{
  console.log("Connected to MongoDB database")
  }).catch((e)=>{console.log(e.message)})




app.use('/route',taskRouter)

  app.listen(5000,()=>{
    console.log('listening')
})