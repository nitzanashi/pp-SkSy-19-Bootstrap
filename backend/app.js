const createError = require('http-errors');         // handling 404 errors
const express = require('express');                 // Express is our Framework!
const logger = require('morgan');                   // morgan is out Logger (look on the console *_*)
const mongoose = require('mongoose');               // mongoose is Object Data Modeling (ODM) library for MongoDB
const cors = require('cors');                       // cors to enable CORS - Cross-Origin Resource Sharing (CORS) -> https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

// this is our MongoDB database ID
import { DB_ROUTE } from './config/mongodb';

// Routes
const todosRouter = require('./routes/todos');

// THE app
const app = express();


// DB SETUP AND CONNECTION
mongoose.connect(DB_ROUTE, {
  useNewUrlParser: true
})
    .catch((err) => {
      console.log(err);
    });
const db = mongoose.connection;

db.once('open' ,()=> console.log("MongoDB connection established :)"));


// APP config
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// APP Routes
app.use('/todos', todosRouter);                     // main Route
app.all('/*' ,function(req,res){                // Wrong Route
        res.status(404).send(`Invalid Url - Sorry Lover`);
});

module.exports = app;
