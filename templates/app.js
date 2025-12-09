const express = require('express')
const app = express()
const fs = require('fs')

let setData = []
const readData = fs.readFileSync('data.json', 'utf-8')

if (readData != '') {
    setData = JSON.parse(readData)
}

app.get('/', (req,res)=>{
    res.render('overview.ejs',{setData})
})
app.get('/detailData/:id',(req,res)=>{
    const id = req.params.id
    const editdata = setData[id]
    res.render('product.ejs',{editdata})
})
app.get('/backData',(req,res)=>{
    res.redirect('/')
})
app.listen(3000)