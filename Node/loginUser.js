const express = require('express');
const router=express.Router();
const db=require('./config/db.js');
const {exeCommand} =require('./config/cmdExecution.js');

router.post('/loginUser',(req,res)=>{
    // console.log('Hello',req.body)
    
    var email=req.body.email;
    var password=req.body.password;
   console.log(email,password);
    const sql=`select *from abhishek where email='${email}' and password='${password}' `
     exeCommand(sql)
    .then(result=>{res.json(email,password)})
    .catch(err=>console.log(err));
});

module.exports = router;
