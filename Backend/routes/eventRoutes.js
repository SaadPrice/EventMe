const express = require('express');
const { createEvent, getEvents, fetchEventbriteEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getEvents);
router.get('/eventbrite', authMiddleware, fetchEventbriteEvents);

module.exports = router;


