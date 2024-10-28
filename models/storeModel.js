const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
{
name: {
type: String, 
required: true, 
},
category: {
type: String, 
required: true, 
},
address: {
type: String, 
required: true, 
},
city: {
type: String, 
required: true, 
},
userID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "user",
required: true, 
},
image: {
type: String, 
required: true, 
},
},
);


//Schema methods



module.exports = mongoose.model("store", storeSchema);
