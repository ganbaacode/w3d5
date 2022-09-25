const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/output", (req, res) => {
    res.send(`Welcome ${req.query.name} , cant believe that you are ${req.query.age} years old`);
});


app.post("/", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    if (name != "ganaa") {
        res.render("error");
    }
    res.redirect(`/output?name=${name}&age=${age}`);

});

