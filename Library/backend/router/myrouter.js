const express = require('express');
const myroute = express.Router();
const connection = require('../db/dbconnection');

myroute.get("/books/view",(req,resp)=>{
    connection.query("select * from books",function(err,data){
        if(!err)
            resp.status(200).send(data)
        else
            resp.status(500).send("no data found")
    })
})

myroute.post("/books/add",(req,resp)=>{
    const {title,author,genre,status}=req.body;
    console.log(req.body)
    connection.query("insert into books(title,author,genre,status) values(?,?,?,?)",[title,author,genre,status],function(err,data){
        if(!err)
            resp.status(200).send("New Book Added Successfully")
        else
            resp.status(500).status("Error Occured")
    })
})

myroute.put("/books/update/:id",(req,resp)=>{
    const {id}=req.params;
    const {title,author,genre,status}=req.body;

    connection.query("update books set title=?,author=?,genre=?,status=? where id=?",[title,author,genre,status,id],function(err,data){
        if(!err)
            resp.status(200).send("Book Updated Successfully")
        else
            resp.status(500).send("Book Id not found")
    })
})

myroute.delete("/books/delete/:id",(req,resp)=>{
    const {id} = req.params;

    connection.query("delete from books where id=?",[id],function(err,data){
        if(!err)
            resp.status(200).send("Book Deleted")
        else
            resp.status(500).send("Book Id not found")
    })
})

myroute.patch("/books/:id",(req,resp)=>{
    const {id} = req.params;

    connection.query("update books set status='Borrowed' where id=?",[id],(err,data)=>{
        if(!err){
            resp.status(200).send("successfully udpated the status to borrowed")
        }else{
            resp.status(500).send("failed to update the status")
        }
    })
})

myroute.patch("/books/avail/:id",(req,resp)=>{
    const {id} = req.params;

    connection.query("update books set status='Available'  where id=?",[id],(err,data)=>{
        if(!err){
            resp.status(200).send("successfully udpated the status to available")
        }else{
            resp.status(500).send("failed to update the status")
        }
    })
})

module.exports=myroute;