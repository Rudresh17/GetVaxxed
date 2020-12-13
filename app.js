const express = require('express')
const dotenv = require('dotenv')
const connectDB= require("./config/db")
const morgan=require('morgan')
const exphbs = require('express-handlebars')
const path=require("path")
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')


// load config
dotenv.config({path: "./config/config.env"})
require('./config/passport')(passport)
connectDB()
const app = express()
//handlebars
app.engine(".hbs",exphbs({defaultlayout:"main",extname:".hbs"}))
app.set("view engine",".hbs")
app.use(express.static(path.join(__dirname,'public')))


//PASSPORT
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)
  
  // Passport middleware
app.use(passport.initialize())
app.use(passport.session())
app.use("/",require("./routes/index"))
app.use('/auth', require('./routes/auth'))
const PORT= process.env.PORT || 4000



app.listen(PORT,console.log("server is running up"))