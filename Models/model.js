const fileFactory = require('express-fileupload/lib/fileFactory')
const mongoose= require('mongoose')
const taskSchema= mongoose.Schema({
   image:{
       type:String,
       required:true
   },
   name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true
},
city:{
    type:String,
    required:true
},
postcode:{
    type:Number,
    required:true
},
})

module.exports= mongoose.model('task',taskSchema)