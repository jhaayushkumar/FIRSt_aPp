const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 4.0,
        min: 0,
        max: 5
    },
    price: {
        type: Number,
        required: true
    },
    amenities: [{
        type: String
    }],
    images: [{
        type: String
    }],
    description: {
        type: String,
        required: true
    },
    rooms: {
        type: Number,
        default: 10
    },
    availability: {
        type: Boolean,
        default: true
    },
    roomTypes: [{
        type: {
            type: String,
            enum: ['Standard', 'Deluxe', 'Suite', 'Presidential']
        },
        price: Number,
        available: Boolean
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Hotel', hotelSchema);
