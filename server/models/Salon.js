const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
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
    services: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        duration: {
            type: Number, // in minutes
            required: true
        }
    }],
    images: [{
        type: String
    }],
    description: {
        type: String,
        required: true
    },
    stylists: [{
        name: String,
        specialization: String
    }],
    availability: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Salon', salonSchema);
