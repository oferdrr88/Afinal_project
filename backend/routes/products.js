const express = require('express');

const router = express.Router();

const { getProducts, newProduct, getSingleProduct, updateProduct, deletedOnePProduct } = require('../controllers/productController');

const { isAuthenticatedUser } = require('../middlelwares/auth');

router.route('/products').get(isAuthenticatedUser, getProducts);
router.route('/products/:id').get(getSingleProduct);

router.route('/products/new').post(newProduct);

router.route('/admin/products/:id').put(updateProduct);

router.route('/admin/products/:id').put(updateProduct).delete(deletedOnePProduct);

module.exports = router;
