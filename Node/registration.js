const express = require('express');
const router=express.Router();
const db=require('./config/db.js');
const {exeCommand} =require('./config/cmdExecution.js')

router.post('/registrationSubmitData',(req,res)=>{
    // console.log('Hello',req.body)
    var {name,email,username,password,age}=req.body;

    const sql=`insert into abhishek (name, email, username, password, age) values('${name}','${email}','${username}','${password}','${age}') `
     exeCommand(sql)
    .then(result=>{req.json('save')})
    .catch(err=>console.log(err));

});


router.get('/getUserData',(req,res)=>{
    // console.log('Hello',req.body)
    var {name,email,username,password,age}=req.body;

    const sql=`select *from abhishek`
     exeCommand(sql)
    .then(result=>res.json(result))
    .catch(err=>console.log(err));

});

router.post('/deleteUser',(req,res)=>{
    console.log('Hello',req.body)
    var id=req.body.id;

    const sql=`delete from abhishek where id='${id}' `
     exeCommand(sql)
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
});


module.exports=router;
