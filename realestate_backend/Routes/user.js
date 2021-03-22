const express = require("express");
const router = express.Router();

const { requireSignIn, isAuth, isAdmin } = require("../Controllers/auth");

const { userById, read, update} = require("../Controllers/user");

router.get("/secret/:userId", requireSignIn, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.get("/user/:userId", requireSignIn, isAuth, read);
router.put("/user/:userId", requireSignIn, isAuth, update);
router.get("/user/list/:userId", requireSignIn, isAuth)
// router.delete("/user/:dUserId/:userId", requireSignin, isAdmin, remove);

router.param("userId", userById);

module.exports = router;

