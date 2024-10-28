const express = require("express");
const router = express.Router();

const ProductRoute = require("./ProductRoute");
const purchaseRoute = require("./purchaseRoute");
const soldstockRoute = require("./soldstockRoute");
const storeRoute = require("./storeRoute");
const userRoute = require("./userRoute");

router.use("/product", ProductRoute);
router.use("/purchase", purchaseRoute);
router.use("/soldstock", soldstockRoute);
router.use("/store", storeRoute);
router.use(userRoute);

module.exports = router;
