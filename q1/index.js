const express = require("express");
const app = express();


app.listen(3000);

app.get("/", (req, res) => {
    let name = req.query.name;
    if (!name) {
        name = "person";
    }

    res.send('welcome ${name}');
});

app.get("/", (req, res) => {
    let age = req.query.age;
    res.send("your age is: ${age}");
});