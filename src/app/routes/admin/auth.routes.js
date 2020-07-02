const express = require('express');
const router = express.Router();

const AuthService = require('./auth-service/auth.service');

router.post('/log-in', (req, res) => AuthService.login(req, res));

module.exports = router;