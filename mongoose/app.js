const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hello')
.then(() => {
    console.log("Connection success");
})
.catch((error) => {
    console.log(error);
})


// model.function

var UC = require('./controller/user')

app.get('/', UC.pageView)

app.get('/createData', UC.createData)

app.get('/deletedata/:id',UC.deletedata)

app.get('/updatedata/:id',UC.updatedata)


app.listen(3000)