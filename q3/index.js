const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000);
app.set("view engine", "ejs");

const date_ob = new Date();


app.get("/", (req, res) => {

    const hour = date_ob.getHours();
    var s = (hour > 6 && hour < 18) ? "day" : "night";
    res.render("index", { style: s });
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

app.use('/css', express.static(path.join(__dirname, "css")));
