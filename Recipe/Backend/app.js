const express = require('express');
const app=express();
const bodyparser=require('body-parser')
const routes = require('./router/myrouter')

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
      next();
  });
app.use("/",routes);

app.listen(4000,()=>{
    console.log("server up an running on 4000");
})

module.exports=app;