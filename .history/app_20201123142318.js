const express=require('express')
const dotenv=require('dotenv')
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' })

const app=express()



const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DB_PW
  );
  
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));


  const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});