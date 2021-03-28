const mongoose=require('mongoose');
const uri = "mongodb+srv://Nithish:<Fireme987>@cluster0.b4gok.mongodb.net/<dbname>?retryWrites=true&w=majority";


module.exports= async() => {
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true})
      return mongoose;
}