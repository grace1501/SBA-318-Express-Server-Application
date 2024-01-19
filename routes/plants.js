const express = require('express');
const router = express.Router();

const plants = require('../data/plants');

const error = require('../error')

router
    .route('/')
    // Get all plants
    .get((req, res) => {
    res.json(plants);
})

router
    .route('/:id')
    // Get a plant info by id
    .get((req, res, next) => {
        const plant = plants.find((p) => p.id == req.params.id);

        if(plant) {
            res.json(plant);
        }
        else {
            next(error(400, 'No plant with requested id.'));
        }
    })


module.exports = router;