const mongoose=require('mongoose');
const stack=mongoose.Schema({
    Complaint:{
        type:String},
    Address:
       {type:String},
    Date:
        {type:Date,
        default:Date.now}
})

module.exports= Stack=mongoose.model('stack',stack);