const express = require('express');
const { saveEvent, getUserSavedEvents } = require('../controllers/savedEventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/save', authMiddleware, saveEvent);
router.get('/my-saved-events', authMiddleware, getUserSavedEvents);

module.exports = router;
