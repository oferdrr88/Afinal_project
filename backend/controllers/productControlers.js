exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        massage: '[View all products]',
    });
};
