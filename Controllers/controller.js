const Task= require('../Models/model')
const path = require('path')

const showApp= async(req,res)=>{
    res.render('AddUpdateUser')
}
const errorPage= async(req,res)=>{
    res.render('errorPage')
}

const viewAllUsers=async (req,res)=>{
    const data= await Task.find()
    res.render('ViewAllUsers',{data})
}
const deleteUser=async (res,res)=>{
   const {id} = req.query
    await Task.findByIdAndRemove(id)
    const data= await Task.find()
    res.render('ViewAllUsers',{data})
}

const addUser= async(req,res)=>{
    console.log(req.body)
    Task.create(req.body,(err,user)=>{
        if(err){

            console.log('Error in inserting data',err.message)
            return res.redirect('/route/errorPage')
        }
        if(!user){
            console.log('user not found')
            return res.redirect('/route/errorPage')
        }
        return res.redirect('/route/ViewAllUsers')
    })

}



module.exports= {showApp,addUser,errorPage,viewAllUsers,deleteUser}