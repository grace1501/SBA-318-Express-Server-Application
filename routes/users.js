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
    .post((req, res, next) => {

    if (req.body.firstName && req.body.lastName && req.body.email) {
        if (users.find((u) => u.email == req.body.email)) {
            next(error(409, "This email is already registered."));
        }

        const user = {
            id: users[users.length - 1].id + 1,
            "first_name": req.body.firstName,
            "last_name": req.body.lastName,
            email: req.body.email
        };

        console.log(user)
        users.push(user);
        res.json(users[users.length - 1]);

    } else next(error(400, "Insufficient Data"));

    })

/////////////////////////////////
// Add a new user using the form
router
    .route('/new')
    .get((req, res) => {
        res.send(`
        <form action="/users" method="POST">
        <label for="firstName">First name</label>
        <input type="text" name="firstName" id="firstName" value="Amy" required minlength="1" maxlength="100">
        <br>
        <label for="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" value="Smith" required minlength="1" maxlength="100">
        <br>
        <label for="email">Email address</label>
        <input type="email" name="email" id="email" value="address@mail.com">
        <input type="submit"/>
        </form>
        `)
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
    // Change a field of one user
    .patch((req, res, next) => {
        const user = users.find((user, index) => {
            if(user.id = req.params.id) {
                for (let key in req.body) {
                    users[index][key] = req.body[key];
                }
                return true;
            } else {
                next(error(400, 'No user with requested id.'));
            }
        })
        res.json(user); 
    })
    // Delete one user based on id
    .delete((req, res, next) => {
        const user = users.find((u, i) => {
            if (u.id == req.params.id) {
                users.splice(i, 1);
            return true;
            }
        });
    
        if (user) res.json(user);
        else next(error(400, 'No user with requested id.'));
    });



module.exports = router;