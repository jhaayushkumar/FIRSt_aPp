const express = require('express');
const router = express.Router();
const {
    getAllSpas,
    getSpaById,
    bookSpa
} = require('../controllers/spaController');

router.get('/', getAllSpas);
router.get('/:id', getSpaById);
router.post('/:id/book', bookSpa);

module.exports = router;
