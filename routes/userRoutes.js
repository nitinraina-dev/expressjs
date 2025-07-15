// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userController');

// Define routes
router.get('/user', getAllUsers);
router.post('/', createUser);



module.exports = router;


