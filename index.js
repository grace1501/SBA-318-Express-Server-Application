const express = require ('express');
const app = express();
const PORT = 8000;

const users = require('./routes/users');
const plants = require('./routes/plants');
const favoriteList = require('./routes/favoriteList');


app.use('/users', users);
app.use('/plants', plants);
app.use('/favoriteList', favoriteList);


app.get('/', (req, res) => {
    res.send("Home Page")
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})