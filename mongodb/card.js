const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const app = express();
const MongoClient = require("mongodb").MongoClient;
const connect = new MongoClient("mongodb://localhost:27017/");
connect
  .connect()
  .then(() => {
    console.log("connect success");
  })
  .catch((error) => {
    console.log(error);
  });

let mongodb = connect.db("lecture");
let collection = mongodb.collection("card");

app.get("/", async (req, res) => {
  const data = await collection.find().toArray();
  console.log(data);

  res.render("card.ejs", { data, editdata: null });
});

app.get("/creatdata", async (req, res) => {
  const data = req.query;

  if (data.id != "") {
     await collection.updateOne({_id : new ObjectId(data.id)},{$set: data})
  } 
  else {
    await collection.insertOne(data);
  }

  res.redirect("/");
});

app.get("/deletedata/:id", async (req, res) => {
  const deleteid = req.params.id;
  await collection.deleteOne({ _id: new ObjectId(deleteid) });
  res.redirect("/");
});
app.get("/editdata/:id", async (req, res) => {
  const editid = req.params.id;

  const editdata = await collection.findOne({ _id: new ObjectId(editid) });

  const data = await collection.find().toArray();

  console.log(editdata);

  res.render("card.ejs", { editdata, data });
});

app.listen(3000);
