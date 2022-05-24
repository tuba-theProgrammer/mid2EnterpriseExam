const Task= require('../Models/model')
const path = require('path')

const showApp= async(req,res)=>{
    res.render('AddUpdateUser')
}



module.exports= {showApp}