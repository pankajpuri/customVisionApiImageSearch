// Step 1 - set up express & mongoose
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var fs = require("fs");
var path = require("path");
require("dotenv/config");

mongoose
  .connect("mongodb://localhost://localhost:27017/turnerscarsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connected to the database.......`))
  .catch((err) => console.error(`errors occured: ${err.message}`));
const schema = mongoose.Schema({
  imagefile: {
    data: Buffer,
    contentTYpe: String,
    required: true,
  },
});

const SearchImage = new mongoose.model("SerachImage", schema);
function createSearchImage() {
  const serachImage = new SearchImage("");
}

module.exports = SearchImage;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
// Set EJS as templating engine
app.set("view engine", "ejs");