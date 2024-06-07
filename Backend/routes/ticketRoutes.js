const express = require('express');
const { buyTicket, getUserTickets } = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/buy', authMiddleware, buyTicket);
router.get('/my-tickets', authMiddleware, getUserTickets);

module.exports = router;
