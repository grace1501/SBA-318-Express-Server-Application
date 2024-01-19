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
    .post((req, res) => {
    console.log(req.body);
    if (req.body.name && req.body.username && req.body.email) {
        if (users.find((u) => u.username == req.body.username)) {
          next(error(409, "Username Already Taken"));
        }
  
        const user = {
          id: users[users.length - 1].id + 1,
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
        };
  
        users.push(user);
        res.json(users[users.length - 1]);
      } else next(error(400, "Insufficient Data"));
    users.push(req.body);
    res.redirect('/users');
    })

router
    .route('/new')
    // Add a new user
    .get((req, res) => {
        res.send(`
        <form action="/users" method="POST">
        <label for="first-name">First name</label>
        <input type="text" name="first-name" id="first-name" value="Amy" required minlength="1" maxlength="100">
        <br>
        <label for="last-name">Last name</label>
        <input type="text" name="last-name" id="last-name" value="Smith" required minlength="1" maxlength="100">
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



module.exports = router;