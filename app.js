const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Car = require('./models/car')

// EXPRESS APP
const app = express();

// CONNECT TO MONGODB
const dbURI = 'mongodb://localhost:27017/cardealership';
mongoose.connect(dbURI)
.then((result) => console.log('Conected to DB'))
.catch((error) => console.log(error));

// REGISTER VIEW ENGINE
app.set('view engine', 'ejs');

// LISTEN FOR REQUEST
app.listen(3000, 'localhost', () => {
    console.log('Server UP')
});

// MIDDLEWARE & STATIC FILES
app.use(express.static('public'))

// MORAGAN LOGGER
app.use(morgan('dev'));

// ROUTES
app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.render('index');
});

app.get('/cars', (req, res) => {
    Car.find().sort({ createdAt: -1 })
        .then((result) => {
    res.render('cars', { title: 'Car Dealership Manager', cars: result })
    }).catch((err) => {
        console.log(err);
    })
});

// REDIRECTS
app.get('/about-us', (req, res) => {
    res.redirect('/index');
})

// 404
app.use((req, res) => {
    res.status(404).render('index');
});