const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const objectId = require('mongodb').ObjectId
const con = new MongoClient('mongodb://localhost:27017/')

// khali connection success mate che

// con.connect()
// .then(() => {
//     console.log("Connection success");
// })
// .catch((error) => {
//     console.log(error);
// })


let db = con.db('lecture')
let collection = db.collection('allcomand')

app.get('/', async(req, res) => {

        const data = await collection.find().toArray()
        // console.log(data);
        res.render('mongo.ejs' , {data , editData : null})
})

app.get('/createData', async(req, res) => {

    const data = req.query

    if(data.id != '')
    {
        await collection.updateOne({_id : new objectId(data.id)} , {$set : data})
    }
    else
    {
        await collection.insertOne(data)
    }



    res.redirect('/')
})

app.get('/deleteData/:id' , async(req , res) => {
    const deleteId = req.params.id

    await collection.deleteOne({ _id: new objectId(deleteId)})

    res.redirect('/')


})

app.get('/editData/:id' , async(req , res) => {
    const editId = req.params.id

    const editData = await collection.findOne({_id : new objectId(editId)})

    const data = await collection.find().toArray()

    console.log(editData);

    res.render('mongo.ejs',{editData , data})
    

})

app.listen(3000)






