var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');

var app = express();

// this is our MongoDB database
// import { DB_ROUTE } from './config/mongodb';
const DB_ROUTE = "mongodb+srv://ADMIN:password12345@todos-cgjjo.mongodb.net/test?retryWrites=true";
// DB SETUP AND CONNECTION
mongoose.connect(DB_ROUTE, {
  useNewUrlParser: true
})
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });

const db = mongoose.connection;

db.once('open' ,()=> console.log("MongoDB connection established :)"));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/todos', todosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
