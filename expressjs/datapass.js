const express = require('express')
const datapass = express()

datapass.get('/',(req,res) => {

    const title = "Student Marksheet"

    const arryobj = [{name:"pritesh",s1:99,s2:98,s3:89},{name:"happy",s1:98,s2:97,s3:85},{name:"hiten",s1:19,s2:38,s3:59},{name:"dayani",s1:19,s2:95,s3:29},{name:"raj",s1:39,s2:92,s3:19},{name:"raj",s1:39,s2:92,s3:19}]

    res.render('datapass.ejs',{title,arryobj})
})
datapass.listen(3001)

