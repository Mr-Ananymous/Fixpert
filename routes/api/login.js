const express = require('express');
const app = express();
const router =express.Router();
const bodyParser = require('body-parser');
const bcrypt =require('bcrypt');
const User = require('../model/user');

router.use(express.static('webcontent'))
router.use('/css',express.static(__dirname + 'webcontent/css'))
router.use('/js',express.static(__dirname + 'webcontent/js'))
router.use('/img',express.static(__dirname + 'webcontent/img'))

app.set('views','')
app.set('view engine','ejs')
var urlarg= bodyParser.urlencoded({extended:false});

router.post('/login' ,urlarg, (req,res)=>{
    
    const password=req.body.password;
 
    User.findOne({Email : req.body.email})
    .then(user => {
       if(!user)
        return res.status(404).json({email:'User not found'})
       bcrypt.compare(password,user.Password)
       .then(isMatch => {
          if(isMatch)
          {
             var userN=user.Name;
             res.render('userdashboard' , { username : userN  });
             
          }else
          return res.status(400).json({password:'Password incorrect' })
          
       })
       .catch(err=>console.log(err));
    })
});

module.exports =router;