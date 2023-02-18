const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost://localhost:27017/turnerscarsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connected to the database.......`))
  .catch((err) => console.error(`errors occured: ${err.message}`));

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}......`));
