const express = require('express');
const { registerUser, loginUser, getUserProfile, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getUserProfile);
router.delete('/delete', authMiddleware, deleteUser);

module.exports = router;

