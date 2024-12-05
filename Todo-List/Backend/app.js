const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const routes = require("./router/myrouter");

// adding middelware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use("/", routes);



app.listen(4002, () => {
  console.log("server started on 4002");
});
module.exports = app;
