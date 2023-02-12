const catchAsyncError = require('../middlelwares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const Errorhandler = require('../utils/errorHandeler');
const User = require('../models/user');

//Register auser => /api/v1/register

exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'https://1drv.ms/u/s!AgQ55SPrzfHXjr8PlZ6Nw9P7VN3AgQ?e=K57uN6',
            url: 'https://dub01pap003files.storage.live.com/y4mAQZjILsAu2KaHeTdJKH13RV4HCisqTjzVeGUDcDROmwSLGh3GdsjhqqoOR6JjgRqmd1vgk8t0aI0M3VbeuPj-QIsl5xjs-mOhRTg3Ab1fTz4anT5nLb_AbqBO2wrALMFnnpgGEwdmK7D_meZK4IgEEayV6FWGT8eQXmnWXa__530Q-zD2DwGicw4RYPMxUFY3UM-VYt_fY0SFSb1WilIKZ5MBR60FY9B7CPY1318-Uw?encodeFailures=1&width=157&height=157',
        },
    });

    //

    //const token = user.getJwtToken();
    // res.status(200).json({
    //     success: true,
    //     token,
    // });
    sendToken(user, 200, res);
});

//login user => /a[i/v1/login]

exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    //checks if email password by user

    if (!email || !password) {
        return next(new Errorhandler('Enter email & password', 400));
    }

    // finding user in Database

    const user = await User.findOne({ email }).select('+password');

    if (!User) {
        return next(new Errorhandler('Invalid Email or Password,401'));
    }

    // chack if password corrct

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new Errorhandler('Invalid Email or Password', 401));
    }

    // const token = user.getJwtToken();
    // res.status(200).json({
    //     success: true,
    //     token,
    // });
    sendToken(user, 200, res);
});

// forgot Password => /api/v1/password/forgot
exports.forgotePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new Errorhandler('The user does not exist this Email', 404));
    }

    //reset Token

    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/password/reset/${resetToken}`;

    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'ShopIT Password Recovery',
            user,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new Errorhandler(error.message, 500));
    }
});

// reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next('password reset invalid or has been expired', 400);
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new Errorhandler('password does not match', 400));
    }

    //Setup new password

    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res);
});

// get logged user details => /api/v1/me

exports.getUserProfile = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user,
    });
});

// update/ change password => /api/v1/password/update

exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');
    const isMatchched = await user.comparePassword(req.body.oldPassword);
    if (!isMatchched) {
        return next('Old password is incorrect', 400);
    }
    user.password = req.body.password;
    await user.save();
    sendToken(user, 300, res);
});

// update user profile => /api/v1/me/apdate
exports.updateProfile = catchAsyncError(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    };

    // avatar todo

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });
});

// Logout

exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        massage: 'LogOut',
    });
});

// Admin rout

// get All users
exports.allUsers = catchAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        cuccsrs: true,
        users,
    });
});

// Get user details   =>   /api/v1/admin/user/:id
exports.getUsersDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new Errorhandler(`User does not found with id: ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user,
    });
});

// update user profile => /api/v1/admin/user:id
exports.updateUser = catchAsyncError(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        tole: req.body.role,
    };

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });
});

// Get deleteuser   =>   /api/v1/admin/user/:id
exports.delteUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new Errorhandler(`User does not found with id: ${req.params.id}`));
    }

    await user.remove();

    res.status(200).json({
        success: true,
    });
});
