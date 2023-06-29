const express = require("express");
const app = express();
const router = require("./route/routes");
const path = require('path');
const ejs = require('ejs');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static("public"));



mongoose.connect("mongodb+srv://harivishnu669:AxVXWG6zmpnzbR7z@cluster0.hhorg1c.mongodb.net/Employee",
{ useNewUrlParser: true, useUnifiedTopology: true },
    console.log("Connected Successfully")
);


app.set("view engine", "ejs")

app.get("/set", (req,res) =>{
    res.render ("index",{name:"Express"})
})


app.use("/",router);

app.listen(3500,() =>{
    console.log(`server Running on 3500` );
})