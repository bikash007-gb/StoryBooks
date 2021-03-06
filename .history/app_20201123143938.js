const express=require('express')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const exphbs = require('express-handlebars')
const app=express()
app.use(bodyParser.json());

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}
app.engine(
    '.hbs',
    exphbs({
      helpers: {
        formatDate,
        stripTags,
        truncate,
        editIcon,
        select,
      },
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )
  app.set('view engine', '.hbs')

module.exports=app