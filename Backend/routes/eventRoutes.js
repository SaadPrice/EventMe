const express = require('express');
const { createEvent, getEvents, fetchEventbriteEvents, updateEvent, deleteEvent, insertEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getEvents);
router.get('/eventbrite', authMiddleware, fetchEventbriteEvents);
router.put('/:eventId', authMiddleware, updateEvent);
router.delete('/:eventId', authMiddleware, deleteEvent);
router.post('/bulk-insert', insertEvents); // New endpoint for bulk insertion

module.exports = router;





