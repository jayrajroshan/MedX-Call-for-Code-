var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const blc = require('./js/index');

var app = express();
const router = express.Router();


app.use(express.static(__dirname + '/views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/doc',function(req,res){
  res.sendFile(path.join(__dirname+'/views/doc.html'));
  //__dirname : It will resolve to your project folder.
});


var indexRouter = require('./js/index');
var docRouter = require('./js/doc');


router.post("/submit", function(req,res){
  var data = req.body;
  blc.addRecord(data);
  console.log("data added to blockchain");
});

router.post("/details", function(req,res){
  console.log(req.body.id);
  blc.details();
  console.log("details working");
//   gccg.methods
   //.send({ }) //send records ,str name, int age, str gender, str date,str issuedby, str validity, int recordnum 
});

router.post("/import", function(req,res){
  blc.detail();
  console.log("detail working");

});














app.use('/', router);
//app.use('/doc', app);

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
