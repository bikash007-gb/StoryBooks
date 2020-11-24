const express=require('express')
const dotenv=require('dotenv')
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' })

const app=express()


const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DB_PASSWORD
  );