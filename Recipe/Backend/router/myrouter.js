const express = require('express');
const myroute = express.Router();
const connection = require('../db/dbconnection')

// get the data
myroute.get("/recipe",(req,resp)=>{
    connection.query("select * from recipes",(err,data)=>{
        if(!err){
            resp.status(200).send(data);
        }else{
            resp.status(500).json(err);
        }        
    })
})

//add the data
myroute.post("/recipe",(req,resp)=>{
    const {title, ingredients,category} =req.body;
    connection.query("insert into recipes values(default,?,?,?)",[title, ingredients,category],(err, data)=>{
        if(!err){
            resp.status(200).send("data added successfully")
        }else{
            resp.status(500).json(err);
        }
    })
})

//update the data
myroute.put("/recipe/:id",(req,resp)=>{
    const {Title, Ingredients, Category}=req.body;
    const id  = req.params.id;
    connection.query("update recipes set title=?, ingredients=?, category=? where id =?",[Title, Ingredients, Category,id],(err,data)=>{
        if(!err){
            resp.status(200).send("data updated successully")
        }else{
            resp.status(500).json(err);
        }
    })
})


            
//delete the data
myroute.delete("/recipe/:id",(req,resp)=>{
    const id = req.params.id;
    connection.query("delete from recipes where id=?",[id], (err,data)=>{
        if(!err){
            resp.status(200).send("data deleted successfully")
        }else{
            resp.status(500).json(err);
        }
    })
})



module.exports=myroute;
