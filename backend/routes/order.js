const express = require('express');
const router = express.Router();
const { newOrder, getSingleOrder, myOrders, allOrders, updateOrder } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlelwares/auth');

router.route('/order/neworder').post(isAuthenticatedUser, newOrder);

router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);

router.route('/admin/orders/').get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);
router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder);
module.exports = router;