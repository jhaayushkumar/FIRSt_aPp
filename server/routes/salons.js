const express = require('express');
const router = express.Router();
const {
    getAllSalons,
    getSalonById,
    bookSalon
} = require('../controllers/salonController');

router.get('/', getAllSalons);
router.get('/:id', getSalonById);
router.post('/:id/book', bookSalon);

module.exports = router;
