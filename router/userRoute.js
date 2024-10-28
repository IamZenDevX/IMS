const express = require("express");
const router = express.Router();

const {deleteuser, find, Login, putuser, Register} = require("../controller/userController");



router.delete("/deleteuser/id/:id",  deleteuser);

router.get("/find/id/:id",  find);

router.post("/login",  Login);

router.put("/putuser/ID/:ID",  putuser);

router.post("/register",  Register);

module.exports = router;