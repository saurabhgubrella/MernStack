const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const { signout, signup , signin , isSignedIn } = require("../controller/auth");

router.post(
  "/signup",
  [
    check("name", "name should be atleast 3 letters").isLength({ min: 3 }),
    check("email", "email should be a valid email").isEmail(),
    check(
      "password",
      "password should be a valid password and minimum length of 10 character"
    )
      .isStrongPassword()
      .isLength(),
  ],
  signup
);

router.post(
    "/signin",
    [
      
      check("email", "email should be a valid email").isEmail(),
      check(
        "password",
        "password is required here"
      )
        .isStrongPassword()
        .isLength(),
    ],
    signin
  );
router.get("/signout", signout);

// router.get("/testroute" , isSignedIn,(req,res)=>{
//   res.json(req.auth);
// });

module.exports = router;
