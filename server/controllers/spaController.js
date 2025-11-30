const Spa = require('../models/Spa');

// @desc    Get all spas
// @route   GET /api/spas
// @access  Public
exports.getAllSpas = async (req, res) => {
    try {
        const spas = await Spa.find({ availability: true });
        res.json({
            success: true,
            count: spas.length,
            data: spas
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Get single spa
// @route   GET /api/spas/:id
// @access  Public
exports.getSpaById = async (req, res) => {
    try {
        const spa = await Spa.findById(req.params.id);

        if (!spa) {
            return res.status(404).json({
                success: false,
                message: 'Spa not found'
            });
        }

        res.json({
            success: true,
            data: spa
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Book spa treatment
// @route   POST /api/spas/:id/book
// @access  Private
exports.bookSpa = async (req, res) => {
    try {
        const spa = await Spa.findById(req.params.id);

        if (!spa) {
            return res.status(404).json({
                success: false,
                message: 'Spa not found'
            });
        }

        const Booking = require('../models/Booking');

        const booking = await Booking.create({
            userId: req.body.userId,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            serviceType: 'spa',
            serviceId: spa._id,
            serviceName: spa.name,
            bookingDate: req.body.bookingDate,
            details: {
                treatment: req.body.treatment,
                time: req.body.time,
                therapist: req.body.therapist || 'Any Available'
            },
            totalPrice: req.body.totalPrice
        });

        res.status(201).json({
            success: true,
            message: 'Spa treatment booked successfully',
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
