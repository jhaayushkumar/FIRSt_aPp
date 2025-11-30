const express = require('express');
const router = express.Router();
const {
    getAllHotels,
    getHotelById,
    bookHotel
} = require('../controllers/hotelController');

router.get('/', getAllHotels);
router.get('/:id', getHotelById);
router.post('/:id/book', bookHotel);

module.exports = router;
