const User = require('../models/user');
const Errorhandler = require('../utils/errorHandeler');
const catchAsyncError = require('../middlelwares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');

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

    // const token = user.getJwtToken();
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
