const express = require('express');
const router = express.Router();
const AuthRouter = require('./admin/auth.routes');

router.use('/auth', AuthRouter);

module.exports = router;