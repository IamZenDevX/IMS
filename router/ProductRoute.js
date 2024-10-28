const express = require("express");
const router = express.Router();

const {AddProduct, DeleteProduct, GetProduct, SearchProduct, updateproduct} = require("../controller/ProductController");



router.post("/AddProduct",  AddProduct);

router.delete("/deleteproduct/ID/:ID",  DeleteProduct);

router.get("/GetProduct/ID/:ID",  GetProduct);

router.get("/searchproduct",  SearchProduct);

router.put("/updateproduct/ID/:ID",  updateproduct);

module.exports = router;