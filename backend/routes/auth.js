const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logout, forgotePassword, resetPassword } = require('../controllers/authConroler');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/password/forgot').post(forgotePassword);
router.route('/password/reset/:token').put(resetPassword);
module.exports = router;
