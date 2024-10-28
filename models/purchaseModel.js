const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
{
ProductID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "product",
required: true, 
},
QuantityPurchased: {
type: Number, 
required: true, 
},
PurchaseDate: {
type: String, 
required: true, 
},
TotalPurchaseAmount: {
type: Number, 
required: true, 
},
userID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "user",
required: true, 
},
},
);


//Schema methods



module.exports = mongoose.model("purchase", purchaseSchema);
