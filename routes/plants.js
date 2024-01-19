const express = require('express');
const router = express.Router();

const plants = require('../data/plants');


router
    .route('/')
    // Get all plants
    .get((req, res) => {
    res.json(plants);
})


module.exports = router;