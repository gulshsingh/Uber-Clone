const express = require("express");

const router = express.Router();

const { body } = require("express-validator");

const userController = require('../controllers/user.controllers')

router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname")
    .isLength({min:3})
    .withMessage("First Name will be 3 Character "),
    body("password")
    .isLength({min:6})
    .withMessage("password will be 6 Character "),

],
userController.registerUser

);

module.exports = router;
