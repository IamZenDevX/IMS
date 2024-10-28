const express = require("express");
const router = express.Router();

const {addPurchaseDetails, Getpurchase, GetTotalPuchaseAmount} = require("../controller/purchaseController");



router.post("/addPurchaseDetails",  addPurchaseDetails);

router.get("/Getpurchase/id/:id",  Getpurchase);

router.get("/gettotalpuchaseamount/userID/:userID",  GetTotalPuchaseAmount);

module.exports = router;