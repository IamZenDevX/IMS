const store = require('../models/storeModel');


exports.AddStore = async(req, res, next) => {
const {address, category, city, name, userID} = req.body;
let createdstore;
createdstore = await store.create({
userID, 
address, 
category, 
city, 
name, 
});
await createdstore.save();
res.json(createdstore);



}

exports.getallstores = async(req, res, next) => {
const {UserID} = req.params;
let var_store_List;
 var_store_List = await store.findOne(
{
userID: UserID
},'userID ').sort({userID: -1});
res.json(var_store_List.userID);



}




