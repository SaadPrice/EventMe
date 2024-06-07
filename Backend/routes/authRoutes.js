const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, createEvent);
router.get('/', getEvents);

module.exports = router;
