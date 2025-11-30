const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 4.0,
        min: 0,
        max: 5
    },
    priceRange: {
        type: String,
        enum: ['₹', '₹₹', '₹₹₹', '₹₹₹₹'],
        default: '₹₹'
    },
    images: [{
        type: String
    }],
    description: {
        type: String,
        required: true
    },
    menu: [{
        name: String,
        price: Number,
        category: String
    }],
    tables: {
        type: Number,
        default: 20
    },
    availability: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
