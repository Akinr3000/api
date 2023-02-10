const mongoose = require("mongoose");

// this the schema used for my api, it must be removed to add your own schema or the schema created
const productschema = mongoose.Schema({
name:{
    type:String,
    required:true},
price:{
    type:String,
    required:true},
brand:{
    type:String,
    required:true}
});

module.exports = mongoose.model("query", productschema);