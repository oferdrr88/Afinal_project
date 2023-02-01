const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Enter a product name'],
        trim: true,
        maxLength: [100, 'A product will not contain more than 100 characters'],
    },

    price: {
        type: number,
        require: [true, 'Enter a price name'],
        maxLength: [5, 'A price will not contain more than 5 characters'],
        default: 0.0,
    },

    description: {
        type: String,
        require: [true, 'Enter a product name'],
    },

    ratings: {
        type: number,
        default: 0,
    },

    images: [
        {
            public_id: {
                type: String,
                required: true,
            },

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
            values: ['dogs', 'cats', 'rodents', 'fish', 'birds', 'Pesticide'],
        },
    },
});

module.exports = mongoose.model('product', productSchema);
