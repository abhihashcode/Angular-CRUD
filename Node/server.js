const express =require('express');
const register=require('./registration.js');
const login=require('./loginUser.js');
var cors = require('cors');
const app=express();
const PORT= 55000;

app.use(express.json())
app.use(express.urlencoded())
app.use(cors());
app.use('/register',register);
app.use('/login',login);

app.listen(PORT,()=>{
    console.log("Server is listening on " , PORT);
});