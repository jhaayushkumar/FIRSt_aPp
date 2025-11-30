const Salon = require('../models/Salon');

// @desc    Get all salons
// @route   GET /api/salons
// @access  Public
exports.getAllSalons = async (req, res) => {
    try {
        const salons = await Salon.find({ availability: true });
        res.json({
            success: true,
            count: salons.length,
            data: salons
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Get single salon
// @route   GET /api/salons/:id
// @access  Public
exports.getSalonById = async (req, res) => {
    try {
        const salon = await Salon.findById(req.params.id);

        if (!salon) {
            return res.status(404).json({
                success: false,
                message: 'Salon not found'
            });
        }

        res.json({
            success: true,
            data: salon
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Book salon appointment
// @route   POST /api/salons/:id/book
// @access  Private
exports.bookSalon = async (req, res) => {
    try {
        const salon = await Salon.findById(req.params.id);

        if (!salon) {
            return res.status(404).json({
                success: false,
                message: 'Salon not found'
            });
        }

        const Booking = require('../models/Booking');

        const booking = await Booking.create({
            userId: req.body.userId,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            serviceType: 'salon',
            serviceId: salon._id,
            serviceName: salon.name,
            bookingDate: req.body.bookingDate,
            details: {
                service: req.body.service,
                time: req.body.time,
                stylist: req.body.stylist || 'Any Available'
            },
            totalPrice: req.body.totalPrice
        });

        res.status(201).json({
            success: true,
            message: 'Salon appointment booked successfully',
            data: booking
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Booking failed',
            error: error.message
        });
    }
};
