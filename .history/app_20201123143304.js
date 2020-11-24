const express=require('express')
const bodyParser=require('body-parser')
const morgan=require

const app=express()
app.use(bodyParser.json());


module.exports=app