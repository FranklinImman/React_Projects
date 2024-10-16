//imports
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 8001;

//MongoDb
    mongoose.connect(process.env.Db_URI,{useNewUrlParser:true});
    const db= mongoose.connection;
    db.on('error',(error)=>console.log(error));
    db.once('open',()=>console.log("Connected to the databse"))

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
    secret:'my secret key',
    saveUninitialized:true,
    resave:false
}));

//Template Engine
app.set('view engine','ejs');

app.use((req,res,next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})
app.use(express.static("uploads"));
//Route Prefix
app.use("",require("./routes/routes"));

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
})