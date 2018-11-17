const express = require("express")
const app = express();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 7000;
const bodyParser = require("body-parser");
const path = require("path");
const db = require('./models');

app.use(express.static(path.join(__dirname, "../../dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});

app.post("/updateUser", (req, res) => {
  var id = req.body.id;
  var email = req.body.email;
  var name = req.body.name;

  db.Users.create({id: id, name: name, email: email})
  .then(function() {res.sendStatus(200)})
  .catch(function() {res.sendStatus(500)});
});

app.listen(port, () => console.log("Server running on port " + port));
