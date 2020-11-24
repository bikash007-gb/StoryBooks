const express=require('express')
const bodyParser=require('body-parser')
const morgan=require('morgan')

const app=express()
app.use(bodyParser.json());

if(process.env.NODE_ENV==='development')

module.exports=app