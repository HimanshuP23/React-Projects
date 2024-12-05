const express = require("express");
const myroute = express.Router();
const connection = require("../db/dbconnection");

myroute.get("/todos", (req, resp) => {
  connection.query("select * from todolist", function (err, data) {
    if (!err) {
      console.log("data fetched successfully");
      resp.status(200).send(data);
    } else {
      resp.status(500).send("failed to fetch data");
    }
  });
});

myroute.post("/todos", (req, resp) => {
  const { id, title, description, status } = req.body;
  connection.query(
    "insert into todolist value(?,?,?,?)",
    [id, title, description, status],
    function (err, data) {
      if (!err) {
        resp.status(200).send(data);
      } else {
        resp.status(500).send("failed to add the data");
      }
    }
  );
});

myroute.put("/todos/:id",(req,resp)=>{
    const {title,description,status}=req.body;
    connection.query("update todolist set title=?, description=?,status=? where id=?",[title,description,status,req.params.id], (err,data)=>{
        if(!err){
            resp.status(200).send("data updated successfully");
        }else{
            resp.status(500).send("failed to update data");
        }
    })
})


myroute.delete("/todos/:id",(req,resp)=>{
    const id = req.params.id;
    connection.query("delete from todolist where id=?",[id], (err,data)=>{
        if(!err){
            resp.status(200).send("Deleted successfully");
        }else{
            resp.status(500).send("failed to delete the data");
        }
    })
})

module.exports = myroute;
