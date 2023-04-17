const express = require("express");
const router = express.Router();

const { getCategoryById,getAllCategory,getCategory,createCategory ,updateCategory,removecategory} = require("../controller/category");
const { isAdmin, isSignedIn, isAuthenticated } = require("../controller/auth");
const { getUserById } = require("../controller/user");

//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//actual routes goes here
//create routes
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

//read routes
router.get("/category/:categoryId", getCategory);
router.get("/categories/:categoryId", getAllCategory);

//updateRoutes
router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,updateCategory)

//deleteRoutes
router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,removecategory)

module.exports = router;
