const express = require('express');
const { body, validationResult } = require('express-validator');
const { createEvent, getEvents, fetchEventbriteEvents, updateEvent, deleteEvent, insertEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post(
  '/',
  authMiddleware,
  body('title').isString().notEmpty(),
  body('date').isISO8601(),
  body('location').isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createEvent
);

router.get('/', authMiddleware, getEvents);
router.get('/eventbrite', authMiddleware, fetchEventbriteEvents);
router.put('/:eventId', authMiddleware, updateEvent);
router.delete('/:eventId', authMiddleware, deleteEvent);
router.post('/bulk-insert', insertEvents); // New endpoint for bulk insertion

module.exports = router;






