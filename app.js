const express = require('express')
const dotenv = require('dotenv')
const connectDB= require("./config/db")
const morgan=require('morgan')
const exphbs = require('express-handlebars')
const path=require("path")


// load config
dotenv.config({path: "./config/config.env"})

connectDB()
const app = express()
//handlebars
app.engine(".hbs",exphbs({defaultlayout:"main",extname:".hbs"}))
app.set("view engine",".hbs")
app.use(express.static(path.join(__dirname,'public')))

app.use("/",require("./routes/index"))
const PORT= process.env.PORT || 4000



app.listen(PORT,console.log("server is running up"))