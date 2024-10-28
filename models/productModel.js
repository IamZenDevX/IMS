const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
name: {
type: String, 
required: true, 
},
manufacturer: {
type: String, 
required: true, 
},
stock: {
type: String, 
required: true, 
},
description: {
type: String, 
},
userID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "user",
required: true, 
},
},
);


//Schema methods



module.exports = mongoose.model("product", productSchema);
