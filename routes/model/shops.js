const mongoose=require('mongoose');
const Shops=mongoose.Schema({
    name:{
        type:String},
    address:
       {type:String},
    services:
       {type:String}
})

module.exports= shops=mongoose.model('shops',Shops);