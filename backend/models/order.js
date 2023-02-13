const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        phoneNo: {
            type: String,
            required: true,
        },

        postalCode: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },

        orderItems: [
            {
                name: {
                    type: String,
                    required: true,
                },

                quantity: {
                    type: Number,
                    required: true,
                },

                image: {
                    type: String,
                    required: true,
                },

                price: {
                    type: Number,
                    required: true,
                },

                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                },
            },
        ],

        paymentInfo: {
            id: String,
        },
        status: {
            type: string,
        },

        paidAt: {
            type: Date,
        },

        itemPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },

        textPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },

        shippingPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },

        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
    },

    orderStatus: {
        type: String,
        required: true,
        default: 'Processing',
    },

    deliveretAT: {
        type: Date,
    },

    createAT: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);
