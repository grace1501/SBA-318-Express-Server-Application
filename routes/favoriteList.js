const express = require('express');
const router = express.Router();

const favoriteList = require('../data/favoriteList');


router
    .route('/')
    // Get all favoriteList
    .get((req, res) => {
    res.json(favoriteList);
})


module.exports = router;