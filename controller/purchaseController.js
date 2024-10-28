const purchase = require('../models/purchaseModel');


exports.addPurchaseDetails = async(req, res, next) => {
const {ProductID, PurchaseDate, QuantityPurchased, TotalPurchaseAmount, userID} = req.body;
let createdpurchase;
createdpurchase = await purchase.create({
PurchaseDate, 
userID, 
TotalPurchaseAmount, 
QuantityPurchased, 
ProductID, 
});
res.json(createdpurchase);
await createdpurchase.save();



}

exports.Getpurchase = async(req, res, next) => {
const {id} = req.params;
let var_purchase_List;
 var_purchase_List = await purchase.findById(id,'userID QuantityPurchased ProductID TotalPurchaseAmount PurchaseDate ');
res.json(var_purchase_List);



}

exports.GetTotalPuchaseAmount = async(req, res, next) => {
const {userID} = req.params;
let totalPurchaseAmount = 0;
let var_purchase_List;
 var_purchase_List = await purchase.findOne(
{
userID
},'userID ');
//		Get total purchase amount
purchaseData.forEach((purchase) => {
    totalPurchaseAmount += purchase.TotalPurchaseAmount;
  });

res.json(totalPurchaseAmount);



}




