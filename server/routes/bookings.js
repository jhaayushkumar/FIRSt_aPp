const express = require('express');
const router = express.Router();
const {
    getUserBookings,
    getBookingById,
    cancelBooking
} = require('../controllers/bookingController');

router.get('/user/:userId', getUserBookings);
router.get('/:id', getBookingById);
router.delete('/:id', cancelBooking);

module.exports = router;
