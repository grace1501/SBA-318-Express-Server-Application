const express = require ('express');
const app = express();
const PORT = 8000;

const users = require('./routes/users');
const plants = require('./routes/plants');
const favoriteList = require('./routes/favoriteList');

const error = require('./error')


// Middleware to parse JSON 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', users);
app.use('/plants', plants);
app.use('/favoriteList', favoriteList);


app.get('/', (req, res) => {
    res.send("Home Page")
})


// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})