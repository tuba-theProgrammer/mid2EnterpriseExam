const express= require('express')
const app = express()
const TaskController= require('../Controllers/controller')

app.get('/',TaskController.showApp)

module.exports= app