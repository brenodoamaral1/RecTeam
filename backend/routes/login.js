const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Endpoint login
router.post('/login', loginController.login);

module.exports = router;
