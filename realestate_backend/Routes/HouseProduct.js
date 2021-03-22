const express = require("express");
const router = express.Router();
const { requireSignIn, isAdmin, isAuth } = require("../Controllers/auth");
const { userById} = require("../Controllers/user");
const {create, productById, read, remove, update, newArrivalList, categoryRelatedProducts, listWithFilter, photo} = require("../Controllers/HouseProduct");



router.post("/houseProduct/create/:userId",requireSignIn,isAuth, isAdmin,create);
router.get("/houseProduct/:productId", read);
router.post("/houseProducts/withFilter", listWithFilter);
router.get("/houseProduct/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;