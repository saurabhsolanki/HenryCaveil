const { mongoose, Schema, model } = require("mongoose")

const UserDataSchema = new Schema({
    name:{type: String, required: true},
    phone:{type: String, required: true},
    city:{type: String, required: true},
    date:{type: String, required: true},
})


const allUser = model("allUser",UserDataSchema)
module.exports=allUser