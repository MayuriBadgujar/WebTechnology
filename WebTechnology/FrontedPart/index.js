

var express = require('express');

var mongoose = require("mongoose");

var db = require("./Database/db.js");
var cors = require("cors");

db();

//Defining a Model
// Database Collection:-
//televisions :- id, modelName, brand, price, size

const Schema = mongoose.Schema;
const usersschema = new Schema({
 id:Number,
 modelname:String,
 brand:String,
 price:Number,
 size:String
 
});

// Accessing a Model
const userModel = mongoose.model("televisions", usersschema);
var app = express();
app.use(cors());
app.use(express.json());


//Read the data from database

app.get("/televisions",async function (req, res) {
    try {
        var result = await userModel.find();
        res.send(result);
    }
    catch (err) {
        res.send(err.message);
    }
});

//update the data from database
app.put("/televisions/.id",async function (req, res) {
//  res.send("Data Update Successfully!");
try {
    var record = new userModel(req.body);
    var ans = await record.updateOne({id:req.params.id},{$set:req.body});
    res.send("Data Update Successfully!");
}
catch (err) {
    res.send(err.message);

}
});
//Add data to database
app.post("/televisions",async function (req, res) {
    try {
        var record = new userModel(req.body);
        var ans = await record.save();
        res.send("Data added Successfully!");
    }
    catch (err) {
        res.send(err.message);
    }
});
 app.delete("/televisions/:id", async function (req, res) {
    await userModel.deleteOne({_id:req.params.id})
  res.send("Data Deleted from the database!");

});



app.listen(9065);


