const mongoose=require("mongoose")
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://henry:henry@cluster0.gp4r5yg.mongodb.net/henry",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log("db connected")
}).catch((e)=>{
    console.log(e)
})