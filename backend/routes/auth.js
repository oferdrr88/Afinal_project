const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    logout,
    forgotePassword,
    resetPassword,
    getUserProfile,
    updatePassword,
    updateProfile,
    allUsers,
    getUsersDetails,
    updateUser,
} = require('../controllers/authConroler');

const { isAuthenticatedUser, authorizeRoles } = require('../middlelwares/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/password/forgot').post(forgotePassword);

router.route('/password/reset/:token').put(resetPassword);
router.route('/me').get(isAuthenticatedUser, getUserProfile);
router.route('/password/update').put(isAuthenticatedUser, updatePassword);
router.route('/me/update').put(isAuthenticatedUser, updateProfile);
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getUsersDetails);

// router.route('/admin/users/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateUser);
module.exports = router;
