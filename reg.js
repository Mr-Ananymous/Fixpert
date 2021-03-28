var http=require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./database');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/myaction',function (req , res, next) {
  var fname=req.body.firstname;
  var pass=req.body.pass1;
  var sql = `INSERT INTO login (user,password ) VALUES ('${fname}', '${pass}' )`;
  db.query(sql,function (err, data) {
     if (err) throw err;
          console.log("record inserted");
      });
  res.redirect('/reg');
  });
 



