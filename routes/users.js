const express = require('express');
const router = express.Router();

const users = require('../data/users');


router
    .route('/')
    // Get all users
    .get((req, res) => {
    res.json(users);
})
    // Post a user
    .post((req, res, next) => {

    })

module.exports = router;