const express = require('express');
const { register, login } = require('../controllers/authController');
const { deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/delete', authMiddleware, deleteUser);

module.exports = router;



