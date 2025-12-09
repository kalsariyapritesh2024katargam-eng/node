const express = require('express')
const app = express()
const sql = require('mysql')
const con = sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'pritesh'
})
con.connect((error) => {
    if(error) throw error
    console.log("Connection success");
})



app.get('/', async(req, res) => {

    var qry = `SELECT * FROM user`

    con.query(qry , (error , data) => {
        if(error) throw error
        // console.log(data);
        res.render('home.ejs',{data , editData : null})
        
    })

})

app.get('/createData', async(req, res) => {

    // const data = req.query
    // console.log(data);

    const {id , name , surname} = req.query

    var qry = ''

    if(id != '')
    {
        qry = `UPDATE user SET name='${name}' , surname='${surname}' WHERE id=${id}`
    }
    else
    {
         qry = `INSERT INTO user (name, surname) VALUES ('${name}','${surname}')`
    }
    con.query(qry, (error) => {
        if (error) throw error
        console.log("success");
    })


    

    res.redirect('/')
})



app.get('/deleteData/:id' , (req , res) => {
    const deleteId = req.params.id

    var qry = `DELETE FROM user WHERE id='${deleteId}'`

    con.query(qry , (error) => {
        if(error) throw error
        res.redirect('/')
    })
})


app.get('/editData/:id' , (req , res) => {
    const editId = req.params.id

    var qry = `SELECT * FROM user WHERE id=${editId}`

    var qry1 = `SELECT * FROM user`

    con.query(qry , (error , editData) => {
        con.query(qry1 , (error , data) => {
            if (error) throw error
            // console.log(editData);
            res.render('home.ejs', { editData: editData[0] , data })
        })
    })
})

app.listen(3000)

