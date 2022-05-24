const express= require('express')
const app = express()
const TaskController= require('../Controllers/controller')

app.get('/',TaskController.showApp)
app.post('/addUser',TaskController.addUser)
//app.post('/uploadImage',TaskController.addUser)
app.get('/errorPage',TaskController.errorPage)
app.get('/ViewAllUsers',TaskController.viewAllUsers)
app.get('/deleteUser',TaskController.deleteUser)
app.get('/updateUser',TaskController.ShowUpdatePage)
app.post('/updateUser',TaskController.UpdateUser)
module.exports= app