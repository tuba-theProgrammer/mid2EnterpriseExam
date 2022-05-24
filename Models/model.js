const fileFactory = require('express-fileupload/lib/fileFactory')
const mongoose= require('mongoose')
const taskSchema= mongoose.Schema({
//    image:{
//        type:String,
//        required:true
//    },
   name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
country:{
    type:String,
    required:true
},
postcode:{
    type:Number,
    required:true
},
})

module.exports= mongoose.model('task',taskSchema)
