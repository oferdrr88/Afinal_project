const express = require('express');

const router = express.Router();

const { getProducts, newProduct, getSingleProduct, updateProduct, deletedOnePProduct } = require('../controllers/productController');

const { isAuthenticatedUser } = require('../middlelwares/auth');

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);

router.route('/products/new').post(isAuthenticatedUser, newProduct);

router.route('/admin/products/:id').put(updateProduct);

router.route('/admin/products/:id').put(isAuthenticatedUser, updateProduct).delete(isAuthenticatedUser, deletedOnePProduct);

module.exports = router;
