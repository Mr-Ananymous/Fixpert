const express=require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const user=require('./routes/model/user');
const shops=require('./routes/model/shops');
const register=require('./routes/api/reg');
const login=require('./routes/api/login')
const search=require('./routes/api/search');
const shopage=require('./routes/api/shopage');
const srequest=require('./routes/api/getrequest');
// VIEW ENGINE CONFIG

app.use(express.static('webcontent'))
app.use('/css',express.static(__dirname + 'webcontent/css'))
app.use('/js',express.static(__dirname + 'webcontent/js'))
app.use('/img',express.static(__dirname + 'webcontent/img'))

app.set('views','')
app.set('view engine','ejs')

const url="mongodb+srv://Nithish:Fireme987@cluster0.b4gok.mongodb.net/user?retryWrites=true&w=majority";

// CLOUD DB Connection
mongoose
.connect(url,{
   useNewUrlParser: true,
   useUnifiedTopology: true})
.then(()=> console.log("Mongodb atlas connected"))
.catch(err => console.log(err));

// ROUTES
app.use('/api',register);
app.use('/usr',login);
app.use('/text',search);
app.use('/fet',shopage);
app.use('/place',srequest);

app.get('/',(req,res) => {
   res.render("index")
});
app.get('/index',(req,res)=> {
   res.render("index");
})
app.get('/login',function (req, res) {
   res.render("login");
});

app.get('/registration',function (req, res) {
   res.render("registration");
});


app.listen(3000,() => console.info('Listening'));