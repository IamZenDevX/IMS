const express = require("express");
const router = express.Router();

const {AddStore, getallstores} = require("../controller/storeController");



router.post("/addstore",  AddStore);

router.get("/getallstores/UserID/:UserID",  getallstores);

module.exports = router;