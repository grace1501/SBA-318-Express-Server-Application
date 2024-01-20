const express = require('express');
const router = express.Router();

const plants = require('../data/plants');

const error = require('../error')

// file system for views rendering
const fs = require('fs');

// styling for page: css as static file
router.use(express.static('./styles'));

// router.engine('page', (filePath, options, callback) => {
//     fs.readFile(filePath, (err, content) => {
//         if (err) return callback(err);

//         const rendered = content.toString()
//                                 .replaceAll()
//     })
// })


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