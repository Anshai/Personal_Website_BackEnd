const express = require('express');
const router = express.Router();

const AuthService = require('./auth-service/auth.service');
const Register = require('./development-only/auth-related/register');

router.post('/log-in', (req, res) => AuthService.login(req, res));
router.post('/admin-register', (req, res) => Register.register(req, res));

module.exports = router;