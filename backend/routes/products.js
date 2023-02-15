const express = require('express');

const router = express.Router();

const { getProducts, newProduct, getSingleProduct, updateProduct, deletedOnePProduct, createProductReview, getProductReviews, deleteReview } = require('../controllers/productController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlelwares/auth');

router.route('/products').get(isAuthenticatedUser, getProducts);
router.route('/products/:id').get(getSingleProduct);

router.route('/products/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

router.route('/admin/products/:id').put(updateProduct);

router.route('/admin/products/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct).delete(isAuthenticatedUser, authorizeRoles('admin'), deletedOnePProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser, deleteReview);

module.exports = router;
