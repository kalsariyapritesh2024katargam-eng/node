const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.render('home.ejs')
})
app.get('/about',(req,res) => {
    res.render('about.ejs')
})
app.get('/sport',(req,res) => {
    res.redirect('/')
})
app.get('/blog',(req,res)=>{
    res.render('blog.ejs')
})
app.listen(3000)
