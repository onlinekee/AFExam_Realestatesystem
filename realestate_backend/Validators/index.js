const { check, validationResult } = require("express-validator");

exports.userSignupValidator = [
    check("firstName", "First Name is Required!").notEmpty(),
    check("lastName", "Last Name is Required!").notEmpty(),
    check("gender", "Gender is Required!").notEmpty(),
    check("email", "Email is Required!")
      .isEmail()
      .normalizeEmail()
      .withMessage("Email is not valid!"),
    check("password", "Password is Required!").notEmpty(),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must contain at least 6 characters!")
      .matches(/\d/)
      .withMessage("Passsword must contain a number!"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const firstError = errors.array().map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError });
      }
      next();
    },
  ];