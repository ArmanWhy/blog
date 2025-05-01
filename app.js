require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db')

const app = express();
const PORT =process.env.PORT; 

//connect to DB
connectDB();

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 
app.use('/', require('./server/route/main'));

app.listen(PORT, ()=>{
    console.log(`App listening on port http://localhost:${PORT}`)
})