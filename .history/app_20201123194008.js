const path=require('path')
const express=require('express')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const exphbs = require('express-handlebars')
const passport=require('passport')
const session=require('express-session')

require('./passport')(passport)

const app=express()

app.use(bodyParser.json());

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}
app.engine(
    '.hbs',
    exphbs({
        defaultLayout:'main',
      extname: '.hbs'
    })
  )
  app.set('view engine', '.hbs')
  
  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      //store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

  app.use(passport.initialize)
  app.use(passport.session())

  app.use(express.static(path.join(__dirname,'public')))

app.use('/',require('./routes/index'))

module.exports=app