const Restaurant = require('../models/Restaurant');

// @desc    Get all restaurants
// @route   GET /api/restaurants
// @access  Public
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ availability: true });
        res.json({
            success: true,
            count: restaurants.length,
            data: restaurants
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Get single restaurant
// @route   GET /api/restaurants/:id
// @access  Public
exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message: 'Restaurant not found'
            });
        }

        res.json({
            success: true,
            data: restaurant
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// @desc    Book restaurant table
// @route   POST /api/restaurants/:id/book
// @access  Private
exports.bookRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message: 'Restaurant not found'
            });
        }

        const Booking = require('../models/Booking');

        const booking = await Booking.create({
            userId: req.body.userId,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            serviceType: 'restaurant',
            serviceId: restaurant._id,
            serviceName: restaurant.name,
            bookingDate: req.body.bookingDate,
            details: {
                guests: req.body.guests,
                time: req.body.time,
                specialRequests: req.body.specialRequests || 'None'
            },
            totalPrice: req.body.totalPrice || 0
        });

        res.status(201).json({
            success: true,
            message: 'Table booked successfully',
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
