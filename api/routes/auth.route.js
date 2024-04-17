const express = require("express");
const { login, signup, loginWithGoogle } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/loginWithGoogle", loginWithGoogle);

