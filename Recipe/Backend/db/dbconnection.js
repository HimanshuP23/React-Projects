const mysql = require('mysql')

var mysqlconnection=mysql.createConnection({

    host:'127.0.0.1',
    user:'root',
    password:'mysql',
    database:'recipe',
    port:'3306'    
})

mysqlconnection.connect((err)=>{
    if(!err){
        console.log("connection established");
    }else{
        console.log("failed to connect database");
    }
})

module.exports =mysqlconnection;