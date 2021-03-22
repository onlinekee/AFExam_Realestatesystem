const express = require("express");
const router = express.Router();
const{read} = require("../Controllers/user")
const { signup,signIn,signOut,isAuth, requireSignIn} = require("../Controllers/auth");
const { userSignupValidator } = require("../Validators");


router.post("/signup",userSignupValidator, signup);
router.post("/signIn", signIn);
router.get("/signOut", signOut);

module.exports = router;