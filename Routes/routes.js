const express= require('express')
const app = express()
const TaskController= require('../Controllers/controller')

app.get('/',TaskController.showApp)
app.post('/addUser',TaskController.addUser)
//app.post('/uploadImage',TaskController.addUser)
app.get('/errorPage',TaskController.errorPage)
app.get('/ViewAllUsers',TaskController.viewAllUsers)
module.exports= app