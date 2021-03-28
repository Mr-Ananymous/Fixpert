const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router =express.Router();
const bcrypt = require('bcrypt');
var User=require('../model/user');

router.use(express.static('webcontent'))
router.use('/css',express.static(__dirname + 'webcontent/css'))
router.use('/js',express.static(__dirname + 'webcontent/js'))
router.use('/img',express.static(__dirname + 'webcontent/img'))

app.set('views','')
app.set('view engine','ejs')

var urlarg= bodyParser.urlencoded({extended:false});
router.post('/validate' ,urlarg, (req,res)=>{
  User.findOne({Email: req.body.email })
  .then(user => {
     if(user){ 
        return res.status(400).json({email:'Email already exists'})}
      else
      {
          const newuser=new User({
            Name: req.body.firstname,
            Email: req.body.email,
            Password: req.body.pass1 
          });
       bcrypt.genSalt(10 , (err,salt)=> {
           bcrypt.hash(newuser.Password,salt,(err,hash)=> { 
               if (err) throw err;
               newuser.Password=hash;
               newuser.save()
                 .then(user => res.render("login"))
                 .catch(err=>console.log(err));
           })
       })

      }
  })
})

module.exports = router;