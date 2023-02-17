const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter a product name'],
        trim: true,
        maxLength: [100, 'A product will not contain more than 100 characters'],
    },

    price: {
        type: Number,
        required: [true, 'Enter a price name'],
        maxLength: [5, 'A price will not contain more than 5 characters'],
        default: 0.0,
    },

    description: {
        type: String,
        require: [true, 'Enter a product name'],
    },

    ratings: {
        type: Number,
        default: 0,
    },

    images: [
        {
            public_id: {
                type: String,
                required: true,
            },

            url: {
                type: String,
                required: true,
            },
        },
    ],
    category: {
        type: String,
        required: [true, 'Select category for this product'],
        enum: {
            values: ['dogs', 'cats', 'rodents', 'fish', 'birds', 'Pesticide', 'Training', 'equipment', 'cages', 'special', 'offers'],
            massage: 'Choose a suitable category from the products',
        },
    },

    seller: {
        type: String,
        required: [true, 'Enter product seller'],
    },
    stock: {
        type: Number,
        required: [true, 'Enter product stock'],
        maxLength: [5, ' product name cannot  than 5 characters'],
        default: 0,
    },

    numberOfreviews: {
        type: Number,
        default: 0,
    },

    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },

    createAd: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('products', productSchema);
