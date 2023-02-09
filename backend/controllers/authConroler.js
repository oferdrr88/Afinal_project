const User = require('../models/user');
const Errorhandler = require('../utils/errorHandeler');
const catchAsyncError = require('../middlelwares/catchAsyncErrors');

//Register auser => /api/v1/register

exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: result.public_id,
            url: result.secure_url,
        },
    });
});
