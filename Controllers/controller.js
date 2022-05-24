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
const deleteUser=async (req,res)=>{
    const {id} = req.query
    await Task.findByIdAndRemove(id)
    const data= await Task.find()
    res.render('ViewAllUsers',{data})
}

const ShowUpdatePage= async(req,res)=>{
    const {id} = req.query
    const data= await Task.findById(id)
    res.render('UpdateUser',{data})
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

const UpdateUser = async (req,res)=>{
    const { name,email,city,state,country,address,postcode,phone} = req.body
    const {id} = req.query
    Task.findByIdAndUpdate(id,{name:name,email:email,city:city,state:state,country:country,address:address,postcode:postcode,phone:phone},(error, doc)=>{
                
        if(!error){
            res.redirect('/route/ViewAllUsers')
        }
        else{
            console.log('error in updating data',error.message)
            res.redirect('/route/errorPage')
        }
    })

}



module.exports= {showApp,addUser,errorPage,viewAllUsers,deleteUser,ShowUpdatePage,UpdateUser}