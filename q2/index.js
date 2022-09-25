const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }

    if (!age) {
        age = "person";
    }

    res.send(`Welcome ${name} , cant believe that you are ${age} years old`);

});