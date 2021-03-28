const express = require('express');
const app = express();
const router =express.Router();
const bodyParser = require('body-parser');
const shops = require('../model/shops');
const User = require('../model/user');

router.use(express.static('webcontent'))
router.use('/css',express.static(__dirname + 'webcontent/css'))
router.use('/js',express.static(__dirname + 'webcontent/js'))
router.use('/img',express.static(__dirname + 'webcontent/img'))

app.set('views','')
app.set('view engine','ejs')

var urlar= bodyParser.urlencoded({extended:false});

router.post('/req' ,urlar, (req,res)=>{
    const searchkey=req.body.name;
    shops.findOne({ "name" : { $regex: searchkey, $options: 'i' }}, function (err,ser) {
        if(err) return err;
        else{
            var name=ser.name;
            var address=ser.address;
            var services=ser.services;

           res.render('shop',{ mname : searchkey,sname : name ,saddress : address ,sservices : services});
    }});

});

module.exports=router;