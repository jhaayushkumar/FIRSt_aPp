const express = require('express');
const router = express.Router();
const {
    getAllRestaurants,
    getRestaurantById,
    bookRestaurant
} = require('../controllers/restaurantController');

router.get('/', getAllRestaurants);
router.get('/:id', getRestaurantById);
router.post('/:id/book', bookRestaurant);

module.exports = router;
