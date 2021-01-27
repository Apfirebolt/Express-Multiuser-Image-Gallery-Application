const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

// Get Single User
router.get('/:id', (req, res) => {
    res.render('users/detail');
});

// Get Multiple Users
router.get('/', (req, res) => {
  res.render('users/list');
});

module.exports = router;