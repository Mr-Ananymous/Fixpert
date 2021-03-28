const express = require('express');
const app = express();
const router =express.Router();
const bodyParser = require('body-parser');
const shops = require('../model/shops');
const Complaint = require('../model/complaint');

router.use(express.static('webcontent'))
router.use('/css',express.static(__dirname + 'webcontent/css'))
router.use('/js',express.static(__dirname + 'webcontent/js'))
router.use('/img',express.static(__dirname + 'webcontent/img'))

app.set('views','')
app.set('view engine','ejs')

var urlar= bodyParser.urlencoded({extended:false});

router.post('/request' ,urlar, (req,res)=>{
    const comp=req.body.complaint;
    const Shop=req.body.shop;
    const addr= req.body.address;
    console.log(Shop)
    console.log(addr)
          const newcomplaint=new Complaint({
            Description: req.body.complaint
          });
          newcomplaint.save()
                 .then(complaint => res.render("payment",{service : Shop , Complaint : comp, address : addr}))
                 .catch(err=>console.log(err));
  
    });

module.exports=router;