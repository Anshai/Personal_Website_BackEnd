const express = require('express');
const router = express.Router();
const LoginRouter = require('./login/log-in.router')

router.use('/auth', LoginRouter);

module.exports = router;