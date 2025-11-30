const mongoose = require('mongoose');

const spaSchema = new mongoose.Schema({
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
    treatments: [{
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
        },
        description: String
    }],
    images: [{
        type: String
    }],
    description: {
        type: String,
        required: true
    },
    therapists: [{
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

module.exports = mongoose.model('Spa', spaSchema);
