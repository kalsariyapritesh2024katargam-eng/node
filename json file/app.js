const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");

// write
// JSON.stringify => {"name" : "demo"}

// get => print
// JSON.parse => {name : "demo"}

// app.set('view engine', 'ejs')
let setData = [];
let editid = null;

const readData = fs.readFileSync("data.json", "utf-8");

if (readData != "") {
  setData = JSON.parse(readData);
}

app.get("/", (req, res) => {
  res.render("home.ejs", { setData,editData:null });
});

app.get("/createData", (req, res) => {
  const data = req.query;
  if(editid != null){
     setData[editid] = data
  }
  else{
     setData.push(data); 
  }
  fs.writeFileSync("data.json", JSON.stringify(setData));
  res.redirect("/");
});

app.get("/deleteData/:id", (req, res) => {
  const deleteid = req.params.id;
  setData.splice(deleteid, 1);
  fs.writeFileSync("data.json", JSON.stringify(setData));
  res.redirect("/");
});

app.get("/editData/:id", (req, res) => {
   editid = req.params.id;
  // console.log(editid);
  const editData = setData[editid];
  res.render("home.ejs", { editData, setData });
});

app.listen(3000);