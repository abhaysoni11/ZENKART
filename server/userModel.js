const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
},{collection : "userInfo"});

const userModel = mongoose.model("userInfo",userSchema);
module.exports = userModel;