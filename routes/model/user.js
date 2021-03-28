const mongoose=require('mongoose');
const user=mongoose.Schema({
    Name:{
        type:String},
    Email:
       {type:String},
    Password:
       {type:String},
    Date:
        {type:Date,
        default:Date.now}
})

module.exports= User=mongoose.model('users',user);