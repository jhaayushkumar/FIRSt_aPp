const Hotel = require('../models/Hotel');

// @desc    Get all hotels
// @route   GET /api/hotels
// @access  Public
exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find({ availability: true });
        res.json({
            success: true,
            count: hotels.length,
            data: hotels
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Get single hotel
// @route   GET /api/hotels/:id
// @access  Public
exports.getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            return res.status(404).json({
                success: false,
                message: 'Hotel not found'
            });
        }

        res.json({
            success: true,
            data: hotel
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Book a hotel
// @route   POST /api/hotels/:id/book
// @access  Private (authenticated users)
exports.bookHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            return res.status(404).json({
                success: false,
                message: 'Hotel not found'
            });
        }

        const Booking = require('../models/Booking');

        const booking = await Booking.create({
            userId: req.body.userId,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            serviceType: 'hotel',
            serviceId: hotel._id,
            serviceName: hotel.name,
            bookingDate: req.body.bookingDate,
            details: {
                checkIn: req.body.checkIn,
                checkOut: req.body.checkOut,
                guests: req.body.guests,
                roomType: req.body.roomType
            },
            totalPrice: req.body.totalPrice || hotel.price
        });

        res.status(201).json({
            success: true,
            message: 'Hotel booked successfully',
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
