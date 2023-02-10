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
            public_id: 'https://1drv.ms/u/s!AgQ55SPrzfHXjr8PlZ6Nw9P7VN3AgQ?e=K57uN6',
            url: 'https://dub01pap003files.storage.live.com/y4mAQZjILsAu2KaHeTdJKH13RV4HCisqTjzVeGUDcDROmwSLGh3GdsjhqqoOR6JjgRqmd1vgk8t0aI0M3VbeuPj-QIsl5xjs-mOhRTg3Ab1fTz4anT5nLb_AbqBO2wrALMFnnpgGEwdmK7D_meZK4IgEEayV6FWGT8eQXmnWXa__530Q-zD2DwGicw4RYPMxUFY3UM-VYt_fY0SFSb1WilIKZ5MBR60FY9B7CPY1318-Uw?encodeFailures=1&width=157&height=157',
        },
    });

    const token = user.getJwtToken();

    res.status(201).json({
        success: true,
        token,
    });
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
        return next(new Errorhandler('Invalid Email or Password,401'));
    }

    const token = user.getJwtToken();
    res.status(200).json({
        success: true,
        token,
    });
});
