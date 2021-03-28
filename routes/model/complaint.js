const mongoose=require('mongoose');
const complaints=mongoose.Schema({
    Description:{
        type:String},
    Date:
        {type:Date,
        default:Date.now}
})

module.exports= Complaints=mongoose.model('complaints',complaints);