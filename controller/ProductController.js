const product = require('../models/productModel');


exports.AddProduct = async(req, res, next) => {
const {description, manufacturer, name, stock, userID} = req.body;
let createdproduct;
createdproduct = await product.create({
name, 
manufacturer, 
stock, 
userID, 
description, 
});
res.json(createdproduct);



}

exports.DeleteProduct = async(req, res, next) => {
const {ID} = req.params;
const deletedproduct = await product.findByIdAndDelete(ID);
res.json(deletedproduct);



}

exports.GetProduct = async(req, res, next) => {
const {ID} = req.params;
let var_product_List;
 var_product_List = await product.findById(ID,'manufacturer userID description name stock ');
res.json(var_product_List);



}

exports.SearchProduct = async(req, res, next) => {
const {Searchterm} = req.query;
let var_product_List;
 var_product_List = await product.findOne(
{
name: Searchterm
},'name ');
res.json(var_product_List.name);



}

exports.updateproduct = async(req, res, next) => {
const {description, manufacturer, name, userID, stock} = req.body;
const {ID} = req.params;
const updatedproduct = await product.findByIdAndUpdate(ID,
{
description: description,
name: name,
manufacturer: manufacturer,
stock: stock,
userID: userID
}
, {new: true} );
res.json(updatedproduct);



}




