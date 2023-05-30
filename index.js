const express = require("express");
const home = require("./routes/home");

const app = express();

//routes
app.use("/", home);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port: ", port));
