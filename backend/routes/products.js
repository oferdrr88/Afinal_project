const express = require('express');

const router = express.Router();

const { getProducts, newProduct, getSingleProduct, updateProduct, deletedOnePProduct } = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);

router.route('/admin/products/new').post(newProduct);

router.route('/admin/products/:id').put(updateProduct);

router.route('/admin/products/:id').put(updateProduct).delete(deletedOnePProduct);

module.exports = router;
