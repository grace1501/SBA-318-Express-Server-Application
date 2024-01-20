const express = require ('express');
const app = express();
const PORT = 8000;

const users = require('./routes/users');
const plants = require('./routes/plants');
const favoriteList = require('./routes/favoriteList');

// middleware for error handling
const error = require('./error')

// Middleware to parse JSON 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for different types of data
app.use('/users', users);
app.use('/plants', plants);
app.use('/favoriteList', favoriteList);

// styling for page: css as static file
app.use(express.static("./styles"));

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './main.html'));
})


// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})