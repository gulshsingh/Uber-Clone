const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const userController = require("../controllers/user.controllers");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name will be 3 Characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  userController.registerUser
);


router.post('/login', [
  body('email').isEmail().withMessage("Invalid Email"),
  body('password').isLength({ min: 6 }).withMessage("Password must be at 6 characters"),

], 
userController.loginUser
)

module.exports = router;
