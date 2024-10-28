const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
{
ProductID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "product",
required: true, 
},
StoreID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "store",
required: true, 
},
StockSold: {
type: Number, 
required: true, 
},
SaleDate: {
type: String, 
required: true, 
},
userID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "user",
required: true, 
},
TotalSaleAmount: {
type: Number, 
required: true, 
},
},
);


//Schema methods



module.exports = mongoose.model("sales", salesSchema);
