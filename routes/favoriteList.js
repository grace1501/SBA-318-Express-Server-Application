const express = require('express');
const router = express.Router();

const favoriteList = require('../data/favoriteList');

const error = require('../error');


router
    .route('/')
    // Get all favoriteList
    .get((req, res) => {
    res.json(favoriteList);
})

router
    .route('/:id')
    // Get a favoriteList info by id
    .get((req, res, next) => {
        const favorite = favoriteList.find((f) => f.id == req.params.id);

        if(favorite) {
            res.json(favorite);
        }
        else {
            next(error(400, 'No favorite list with requested id.'));
        }
    })

module.exports = router;