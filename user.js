const express = require("express");
const router = express.Router()


const {isAuthenticated, isSignedIn,isAdmin } = require("../controller/auth");
const { getUserById,getUser, getAllUser , updateUser , userPurchaseList } = require("../controller/user");

router.param("userId",getUserById);

// get routes
router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
// router.get("/users",getAllUser);exercise for finding the all users

//put routes
router.put("/users/:userId",isSignedIn,isAuthenticated,updateUser);
router.put("/orders/users/:userId",isSignedIn,isAuthenticated,userPurchaseList);
module.exports = router;


