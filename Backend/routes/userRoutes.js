// routes/userRoutes.js
const express = require('express');
const { deleteUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.delete('/delete', authMiddleware, deleteUser);

module.exports = router;

