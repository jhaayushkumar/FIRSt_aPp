const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        enum: ['hotel', 'salon', 'restaurant', 'spa'],
        required: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'serviceType'
    },
    serviceName: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    details: {
        type: mongoose.Schema.Types.Mixed,
        // For hotel: { checkIn, checkOut, guests, roomType }
        // For salon: { service, time, stylist }
        // For restaurant: { guests, time, specialRequests }
        // For spa: { treatment, time, therapist }
    },
    status: {
        type: String,
        enum: ['confirmed', 'pending', 'cancelled', 'completed'],
        default: 'confirmed'
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);
