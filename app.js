//server creation
const express = require("express");
const app = express();
app.listen(8080, () => {
  console.log("Server Running on port 8080");
});
//db connection
const DB = require("./DB/mongoose");
//Json usage
app.use(express.json());
//Router
const router = require("./Routes/emp");
app.use("/emp", router);
