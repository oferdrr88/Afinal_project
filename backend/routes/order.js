const express = require('express');
const router = express.Router();
const { newOrder } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlelwares/auth');

router.route('/order/neworder').post(isAuthenticatedUser, newOrder);

module.exports = router;
