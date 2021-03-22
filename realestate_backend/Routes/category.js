const express = require("express");
const router = express.Router();

const { create } = require("../Controllers/category");
const { requireSignIn, isAdmin } = require("../Controllers/auth");
const { userById} = require("../Controllers/user");



router.post("/category/create:userId",requireSignIn, isAdmin,create);



//router.get("/user/:userId", requireSignin, isAuth, read);
router.param("userId", userById);

module.exports = router;