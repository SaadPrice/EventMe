const express = require('express');
const { deleteUser, insertUsers } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.delete('/delete', authMiddleware, deleteUser);
router.post('/bulk-insert', insertUsers); // New endpoint for bulk insertion

module.exports = router;


