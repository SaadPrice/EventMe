// backend/routes/tickets.js

const express = require('express');
const { buyTicket, getUserTickets, deleteTicket } = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Routes
router.post('/buy', authMiddleware, buyTicket);
router.get('/my-tickets', authMiddleware, getUserTickets);
router.delete('/delete/:ticketId', authMiddleware, deleteTicket);

module.exports = router;



