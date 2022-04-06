const express = require('express');
const req = require('express/lib/request');

const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/signup', authController.getSignup);

router.get('/login', authController.getLogin);

modulee.exports = router;