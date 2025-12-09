const express = require('express')
const app = express()
const fs = require('fs')

let setData = []

app.get('/', (req, res) => {

    res.render('index.ejs',{setData})
})
app.listen(3000)