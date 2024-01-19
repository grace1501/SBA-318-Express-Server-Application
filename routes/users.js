const express = require('express');
const router = express.Router();

const users = require('../data/users');

const error = require('../error');

router
    .route('/')
    // Get all users
    .get((req, res) => {
    res.json(users);
})
    // Post a user
    .post((req, res, next) => {

    })

router
    .route('/:id')
    // Get a user info by id
    .get((req, res, next) => {
        const user = users.find((u) => u.id == req.params.id);

        if(user) {
            res.json(user);
        }
        else {
            next(error(400, 'No user with requested id.'));
        }
    })


module.exports = router;