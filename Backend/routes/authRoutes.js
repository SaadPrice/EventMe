const express = require('express');
const { registerUser, loginUser, getUserProfile, deleteUser, insertUsers } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getUserProfile);
router.delete('/delete', authMiddleware, deleteUser);
router.post('/bulk-insert', insertUsers); // Example endpoint for bulk user creation

module.exports = router;
